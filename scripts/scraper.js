import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

async function scrapeCivitai() {
  let driver;

  try {
    // Chromeドライバーの設定
    const options = new chrome.Options();
    options.addArguments('--headless'); // ヘッドレスモードで実行

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    // Civitaiにアクセス
    await driver.get('https://civitai.com/');

    // ページが完全に読み込まれるまで待機
    await driver.wait(until.elementLocated(By.css('body')), 10000);

    // スクレイピングロジックをここに実装
    // 例: モデル情報の取得
    const models = await driver.findElements(By.css('.model-card'));
    const modelData = [];

    for (const model of models) {
      const title = await model.findElement(By.css('.title')).getText();
      const description = await model.findElement(By.css('.description')).getText();
      modelData.push({ title, description });
    }

    console.log('Scraped data:', modelData);
    return modelData;

  } catch (error) {
    console.error('Scraping error:', error);
    throw error;
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
}

// スクレイピングの実行
scrapeCivitai();