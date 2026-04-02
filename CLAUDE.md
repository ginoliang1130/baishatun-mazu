# CLAUDE.md — mazu 專案指引

## 專案簡介

2026 白沙屯媽祖進香任務地圖，純靜態網站（HTML + CSS + JS），部署在 GitHub Pages。
線上網址：`https://ginoliang1130.github.io/mazu/`

## 角色定位

精通全端網頁開發與 GIS 地圖應用，擅長使用原生 JavaScript 結合 Google Maps API 打造互動式地圖。

## 產品目標

針對 2026 年白沙屯媽祖進香（4/12 - 4/20）設計的私人任務導航工具，協助團員掌握：

- 每日目標里程與步行時間估計
- 前三天衝刺策略（Day 1–3 各 43K，為了凌晨比媽祖早到北辰派出所）
- 每日住宿、7-11、自助洗衣地址與導航連結
- 團員出席狀態
- 裝備清單確認

## 核心功能

| 功能 | 說明 |
|------|------|
| 互動地圖 | 標註拱天宮、北辰派出所、每日住宿與 7-11，切換日期焦點 |
| 走路策略看板 | 視覺化「前三天 43K/天」進度條與關鍵卡片，含步行時間估計 |
| 行程檢視器 | 依日期 Tab 切換，顯示住宿、超商、洗衣店地址與導航連結 |
| 裝備清單 | 出發前逐項勾選確認，狀態存入 localStorage，可重置 |
| 團員出席表 | 勾選出席狀態，存入 localStorage |

## 設計原則

- **Mobile-First**：進香期間使用者主要用手機，地址點一下就跳 Google Maps 導航
- **資料驅動**：所有行程資料集中在 `app.js` 的 `APP_DATA` 物件，改資料不動 UI 邏輯
- **台灣人情味**：語氣熱血實用，適合走路中快速瀏覽

## 技術棧

- HTML5 / 原生 CSS / 原生 JavaScript（無框架，無 build 步驟）
- Google Maps Embed API（地圖 iframe）
- Google Fonts（Cormorant Garamond + Noto Sans TC）

> **為何不用 Leaflet.js？** 現有架構已用 Google Maps Embed iframe 解決地圖需求，引入 Leaflet 會增加複雜度。若未來需要自訂標記、離線使用或更細緻的 GIS 控制，再評估引入。

## 檔案結構

```
index.html   — 頁面結構，無 build 步驟，直接開瀏覽器可用
styles.css   — 所有樣式
app.js       — 所有邏輯與資料（APP_DATA、render 函式、state）
```

## 部署

推到 `main` branch 自動觸發 GitHub Actions（`.github/workflows/deploy-pages.yml`）：

1. `sed` 將 `app.js` 裡的 `__GOOGLE_MAPS_EMBED_API_KEY__` 替換成 GitHub Secret
2. 產出的 `dist/` 部署到 GitHub Pages

**不要把 API key 直接寫進 source code。** key 只存在 GitHub Secret，由 CI 注入。

## Google Maps Embed

- 有 API key 時：使用正式 Embed API `https://www.google.com/maps/embed/v1/search?key=...`
- 沒有 API key 時（CI 注入失敗或本地開發）：fallback 到 `https://maps.google.com/maps?q=...&output=embed`，地圖仍可正常顯示
- GCP Console 的 API key HTTP referrers 白名單需包含 `https://ginoliang1130.github.io/*`

## 版面設計注意事項

- `<h1>` 使用 Cormorant Garamond，以 `<br />` 固定兩行排版（白沙屯媽祖進香 / 任務地圖），**不要**加 `max-width` 限制
- 字體從 Google Fonts 載入，有改動樣式時注意確認字體有正確套用
- hero-text 有兩段：第一段說明工具用途，第二段說明 Gino 爸今年角色轉變（不再是補師）

## 未來功能評估

- 天氣預報（Open-Meteo，免費無需 key）
- 緊急聯絡 / 醫療站標記
- 快速分享位置給隊友（Line/WhatsApp）

## 開發習慣

- 每次修正完直接 `commit` 並 `push`，不需要等確認
- 版本號在 `index.html` 的 CSS/JS query string（`?v=YYYYMMDD-N`），每次有改動時一起遞增，讓瀏覽器強制重拉新檔案
- 每次修改都要更新專案指引（CLAUDE.md），記錄修正、新增了什麼

## 變更紀錄

### 2026-04-02（續四）
- **修正** 預設 tab 從 Day 1 改為 Day 0

### 2026-04-02（續三）
- **修正** 天氣預報：加入 `data.error` 檢查，超出 16 天預報範圍時靜默隱藏 widget（4/18–4/20 尚無預報）

### 2026-04-02（續二）
- **修正** 天氣 API：移除 `forecast_days` 參數（與 `start_date/end_date` 互斥）
- **修正** Day 2 多餘住宿卡片：main lodging 改名為「華宿行旅」，spots 移除重複的華宿行旅，保留承攜行旅

### 2026-04-02（續）
- **新增** Day 2 住宿點：承攜行旅（彰化縣彰化市中正路二段668號）、華宿行旅（南瑤路411號）
- **修正** 各天實際公里估算：Day1 42K、Day2 37K、Day3 46K、虎尾→北港 22K，去程合計 147K
- **新增** 回程估算 145K，strategy 加 `totalReturnKm` 欄位，stat board 顯示來回總計 292K
- **新增** 天氣預報（Open-Meteo）：每個 day 加 `coords` 座標，切換 Tab 時自動抓氣象，顯示在 day-summary pill 內
- **新增** 天氣相關 CSS（`.weather-card`、`.weather-pill`）

### 2026-04-02
- **修正** 地圖 iframe 看不到：`hasGoogleMapsApiKey()` 無效時加入 keyless URL fallback
- **修正** h1 兩行排版：還原 `<br />`，移除 `max-width: 7ch` 限制
- **移除** `map-mission-overlay` 區塊（HTML、JS、CSS 全部清除）
- **新增** 里程資料加上 `walkingHours` 欄位，顯示步行時間估計（如 43K・約 11 小時）
- **新增** hero-text 第二段：說明 Gino 爸今年角色不再是補師
- **新增** 裝備清單（Gear Check）section，10 項裝備，勾選狀態存 localStorage，含重置按鈕
- **更新** CLAUDE.md 加入變更紀錄機制
