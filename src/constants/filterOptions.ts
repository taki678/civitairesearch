export const timePeriodOptions = [
  { value: 'day', label: '24時間 / Day' },
  { value: 'week', label: '1週間 / Week' },
  { value: 'month', label: '1ヶ月 / Month' },
  { value: 'year', label: '1年 / Year' },
  { value: 'allTime', label: '全期間 / All Time' },
];

export const modelStatusOptions = [
  { value: 'earlyAccess', label: '早期アクセス / Early Access' },
  { value: 'onSiteGeneration', label: 'オンサイト生成 / On-Site Generation' },
  { value: 'madeOnSite', label: 'オンサイト作成 / Made On-Site' },
];

export const modelTypesOptions = [
  { value: 'checkpoint', label: 'Checkpoint / チェックポイント' },
  { value: 'embedding', label: 'Embedding / 埋め込み' },
  { value: 'hypernetwork', label: 'Hypernetwork / ハイパーネットワーク' },
  { value: 'aestheticGradient', label: 'Aesthetic Gradient / 審美的勾配' },
  { value: 'lora', label: 'LoRA' },
  { value: 'lycoris', label: 'LyCORIS' },
  { value: 'dora', label: 'DoRA' },
  { value: 'controlnet', label: 'ControlNet' },
  { value: 'upscaler', label: 'Upscaler / アップスケーラー' },
  { value: 'motion', label: 'Motion / モーション' },
  { value: 'vae', label: 'VAE' },
  { value: 'poses', label: 'Poses / ポーズ' },
  { value: 'wildcards', label: 'Wildcards / ワイルドカード' },
  { value: 'workflows', label: 'Workflows / ワークフロー' },
  { value: 'other', label: 'Other / その他' },
];

export const baseModelOptions = [
  { value: 'sd14', label: 'SD 1.4' },
  { value: 'sd15', label: 'SD 1.5' },
  { value: 'sd15lcm', label: 'SD 1.5 LCM' },
  { value: 'sd15hyper', label: 'SD 1.5 Hyper' },
  { value: 'sd20', label: 'SD 2.0' },
  { value: 'sd21', label: 'SD 2.1' },
  { value: 'sdxl10', label: 'SDXL 1.0' },
  { value: 'sd3', label: 'SD 3' },
  { value: 'sd35', label: 'SD 3.5' },
  { value: 'pony', label: 'Pony' },
  { value: 'flux1s', label: 'Flux .1 S' },
  { value: 'flux1d', label: 'Flux .1 D' },
  { value: 'auraFlow', label: 'Aura Flow' },
  { value: 'sdxl10lcm', label: 'SDXL 1.0 LCM' },
  { value: 'sdxlTurbo', label: 'SDXL Turbo' },
  { value: 'sdxlLightning', label: 'SDXL Lightning' },
  { value: 'sdxlHyper', label: 'SDXL Hyper' },
  { value: 'stableCascade', label: 'Stable Cascade' },
  { value: 'svd', label: 'SVD' },
  { value: 'svdxt', label: 'SVD XT' },
  { value: 'playgroundv2', label: 'Playground V2' },
  { value: 'pixarta', label: 'PixArt A' },
  { value: 'pixarts', label: 'PixArt Σ' },
  { value: 'hunyuan1', label: 'Hunyuan 1' },
  { value: 'lumina', label: 'Lumina' },
  { value: 'kolors', label: 'Kolors' },
  { value: 'illustrious', label: 'Illustrious' },
  { value: 'other', label: 'Other / その他' },
];

export const permissionsOptions = [
  { value: 'noCredit', label: 'クレジット表記不要 / Use without crediting creator' },
  { value: 'noSellImages', label: '画像販売不可 / Cannot sell generated images' },
  { value: 'allowCommercial', label: '商用利用可能 / Commercial use allowed' },
  { value: 'allowCivitai', label: 'Civitaiでの利用可能 / Can run on Civitai' },
  { value: 'allowMerge', label: 'マージ共有可能 / Can share merges' },
  { value: 'noModelSale', label: 'モデル販売不可 / Cannot sell model or merges' },
  { value: 'mergeDifferentPerms', label: 'マージの権限が異なる可能性あり / Different permissions for merges' },
];

export const licenseOptions = [
  { value: 'creativeml', label: 'CreativeML Open RAIL++-M / CreativeML Open RAIL++-M' },
];