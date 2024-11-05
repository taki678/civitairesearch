import express from 'express';
import cors from 'cors';
import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let driver: WebDriver | null = null;

async function initializeDriver() {
  if (!driver) {
    const options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');
    
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  }
  return driver;
}

app.get('/search', async (req, res) => {
  try {
    const localDriver = await initializeDriver();
    const { query, timePeriod, modelStatus, modelTypes, baseModel, permissions, license } = req.query;

    // CivitAIの検索ページにアクセス
    await localDriver.get(`https://civitai.com/models?${timePeriod ? `period=${timePeriod}` : ''}`);
    
    // ページが完全に読み込まれるまで待機
    await localDriver.wait(until.elementLocated(By.css('.mantine-Grid-root')), 10000);

    // 検索クエリがある場合は検索を実行
    if (query) {
      const searchInput = await localDriver.findElement(By.css('input[type="search"]'));
      await searchInput.clear();
      await searchInput.sendKeys(query as string);
      await localDriver.sleep(2000);
    }

    // フィルターの適用
    if (modelTypes || baseModel || license) {
      const filterButton = await localDriver.findElement(By.css('button[aria-label="Filter"]'));
      await filterButton.click();
      await localDriver.sleep(1000);

      // フィルターの適用処理
      // 実際のサイトのフィルター要素に合わせて実装
    }

    // 結果の取得
    await localDriver.wait(until.elementsLocated(By.css('.mantine-Card-root')), 10000);
    await localDriver.sleep(1000);

    const elements = await localDriver.findElements(By.css('.mantine-Card-root'));
    const results = await Promise.all(
      elements.slice(0, 12).map(async (element) => {
        try {
          const name = await element.findElement(By.css('h3')).getText();
          const description = await element.findElement(By.css('p')).getText().catch(() => '');
          const modelType = await element.findElement(By.css('.mantine-Badge-root')).getText().catch(() => 'Unknown');
          const imageUrl = await element.findElement(By.css('img')).getAttribute('src').catch(() => '');

          return {
            id: Math.random().toString(36).substr(2, 9),
            name,
            description,
            modelType,
            imageUrl,
            baseModel: 'Unknown',
            downloadCount: 0,
            rating: 0,
            creator: 'Unknown',
            license: 'CreativeML Open RAIL++-M'
          };
        } catch (error) {
          console.error('Error extracting model data:', error);
          return null;
        }
      })
    );

    const filteredResults = results.filter((result): result is NonNullable<typeof result> => result !== null);
    
    res.json(filteredResults);

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      message: '検索中にエラーが発生しました / Error occurred during search',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

process.on('SIGINT', async () => {
  if (driver) {
    await driver.quit();
  }
  process.exit();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});