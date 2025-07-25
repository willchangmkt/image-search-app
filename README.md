# Image Search Website — 圖片搜尋網站 Side Project

# 作品說明
這是一個圖片搜尋網站，簡潔的使用介面提供使用者搜尋與下載免費授權的照片。
* 使用者可在搜尋欄位輸入關鍵字，即可查詢相關圖片。
* 點選 Download Picture，將在新分頁開啟圖片，並可按右鍵下載。
* 點選 Show More，可載入更多相關圖片內容。

## 功能
* 導覽列（Nav Bar）：位於頁面上方，方便導覽網站內容。
* 關於此網站：說明本網站使用的開發工具與相關技術。
* 圖片搜尋：可透過首頁的搜尋欄輸入關鍵字，搜尋免費授權圖片。
* 載入更多圖片：點擊首頁下方的「Show More」，可顯示更多相關圖片。
* 下載圖片：點選「Download Picture」會在新分頁開啟大圖，使用者可右鍵另存圖片。

## 畫面
![ImageSearch1](https://meee.com.tw/hHxhvKy.jpg)
![ImageSearch2](https://meee.com.tw/kMXR5fA.jpg)

## 操作功能影片
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/zols9pIgf8U/maxresdefault.jpg)](https://www.youtube.com/watch?v=zols9pIgf8U)

## 安裝
- Node.js 版本建議為: v20.12.0 以上
- React.js 版本建議為: v18.3.1 以上

### 安裝套件
npm install
- react-router-dom@6.24.0
- axios@1.7.2
- dotenv@16.4.5

### 環境變數設定
請在終端機輸入 `cp .env.example .env` 來複製 .env.example 檔案，並依據 `.env` 內容調整相關欄位。

### 運行專案
1. 確保您已安裝 Node.js
2. 在終端機中導航到專案目錄:
3. 運行以下命令啟動應用程序: node index.js
4. 應用程序正在運行。

### 開啟專案
專案運行後，在瀏覽器輸入以下網址，即可看到畫面。
http://localhost:3000/

### 環境變數說明

```env
REACT_APP_PEXELS_API_KEY= #Pexels給予的用戶端密鑰
```

### 資料夾說明
- modules - 模組放置處
- public - 靜態資源(Bootstrap)連結放置處
- src - source放置處
  - component - 註腳、搜尋的圖片、搜尋欄、Layout
  - img - 圖片放置處
  - pages - React渲染頁面放置處
  - styles - css樣式放置處

### 專案技術
- Node.js v20.12.0
- Bootstrap v5.3.3

### 第三方服務
 - Pexels

## 聯絡作者
您可以透過以下的方式與我聯繫
我的Gmail信箱: yuan625@gmail.com
