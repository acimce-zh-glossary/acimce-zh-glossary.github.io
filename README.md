# 《完整加註版奇蹟課程》術語詞彙表知識庫

**ACIM CE Phase A Demo v1.2.0 · GitHub Pages/PWA 發布包**

> 這是候選研究展示版本，不代表經人工審核或核准的 CE 正式知識。Robert Perry 與慧軍的詞彙表資料仍須確認公開傳輸與使用授權。此套件本身不會自動上傳。

## 官方品牌名稱

| 用途 | 顯示名稱 |
|---|---|
| 網站全名及 PWA manifest.name | 《完整加註版奇蹟課程》術語詞彙表知識庫 |
| 主畫面捷徑、安裝短名稱及 manifest.short_name | ACIM CE 詞彙庫 |
| 版本識別 | Phase A Demo v1.2.0 |
| 預計網站 | https://acimce-zh-glossary.github.io/ |
| 主色 | #29224a |
| 品牌圖 | 使用者提供的深紫底金色百合標誌 |

## GitHub Pages 專用根目錄

```text
acimce-zh-glossary.github.io/
├── .nojekyll
├── index.html                # 首頁及雙語術語知識庫，含嵌入的候選資料
├── 404.html
├── favicon.ico
├── manifest.webmanifest      # PWA 名稱、首頁、安裝圖示
├── sw.js                     # PWA 快取與離線操作
├── release.json              # 版本、資料狀態
├── robots.txt                # Demo 暫不編入搜尋引擎
├── assets/
│   ├── brand/
│   │   ├── golden-lily-original.png
│   │   ├── golden-lily-1254.png
│   │   └── share-card-1200x630.png
│   └── icons/
│       ├── favicon-16x16.png / favicon-32x32.png
│       ├── apple-touch-icon.png
│       ├── icon-192.png / icon-512.png
│       ├── icon-192-maskable.png / icon-512-maskable.png
│       └── 其他相容尺寸
└── README.md
```

## 建立 Github repo 的正確步驟

必須先確認 GitHub 使用者或組織 **acimce-zh-glossary** 已建立且您有管理權。若尚無此帳號，須先建立帳號或組織；將儲存庫建立在別的 GitHub 使用者底下，**不會**產生 `https://acimce-zh-glossary.github.io/`。

1. 使用 `acimce-zh-glossary` 帳號登入 GitHub。
2. 建立 repository，名稱必須是 `acimce-zh-glossary.github.io`。若從 Git 指令上傳，建立 repo 時建議不要先初始化 README，以避免首次推送衝突。
3. 將本 ZIP 的全部內容解壓至同一層，確認 `index.html` 在儲存庫根目錄。
4. 在此目錄執行：

```bash
git init -b main
git add .
git commit -m "Publish ACIM CE Glossary Phase A Demo v1.2.0"
git remote add origin https://github.com/acimce-zh-glossary/acimce-zh-glossary.github.io.git
git push -u origin main
```

若遠端儲存庫已存在或已被初始化，請先 `git clone` 後再複製檔案，避免覆蓋他人更動。使用目前對應的 GitHub 帳號授權推送。

5. 在儲存庫 **Settings → Pages → Build and deployment**，選 `Deploy from a branch`，Branch 選 `main`，Folder 選 `/(root)`，按 **Save**。
6. 前往 https://acimce-zh-glossary.github.io/ 檢視網站首頁，並於瀏覽器開發者工具確認 manifest、Service Worker 安裝、網頁離線載入。

GitHub 官方說明：https://docs.github.com/en/pages/quickstart

## 安裝與離線

Chrome / Edge 可在網址列或選單選擇安裝應用程式；手機 Chrome 可選加入主畫面，iOS Safari 也可從分享選單加入主畫面。瀏覽器顯示位置會因版本而異。首次必須連線讓 Service Worker 安裝並完成資源快取；之後知識庫文字與關聯介面可離線使用。

**注意**：前往 `https://acimce-zh.github.io/#SentenceID` 的 CE 閱讀器連結屬跨網站開啟，不受本站 Service Worker 快取保護，通常仍需網路。

## 發布前檢查

- [ ] 已取得詞彙表英文與中文譯文的必要公開傳輸授權
- [ ] Google/社群展示內容未含不應公開的資料
- [ ] `https://acimce-zh-glossary.github.io/` 可正常載入
- [ ] `manifest.webmanifest` 名稱與圖示正確
- [ ] 安裝後主畫面名稱顯示 `ACIM CE 詞彙庫`
- [ ] 重新載入後離線可讀
- [ ] 所有 CE 引用連結保留完整 `#SentenceID`
- [ ] 站點已完成後續資料與概念審查

## 原文與資料處理

目前 191 條術語，82 條有中文全文，21 張候選概念卡與 22 條候選關係。內容仍是 Phase A Demo 的研究候選，尚未執行逐句原文參照完整性審核，也沒有正式批准紀錄。`robots.txt` 用於降低搜尋引擎索引，但不限制其他人讀取網頁；任何人只要知道網址仍可能存取全文。
