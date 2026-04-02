# Claude Code 使用說明

---

## 一、什麼是 Claude Code？

Claude Code 是 Anthropic 官方的 CLI 工具，在終端機裡直接呼叫 Claude AI
幫你寫程式、改 bug、看 code、跑指令，整合在你的工作目錄裡。

---

## 二、已啟用的 Skills（斜線指令）

輸入方式：在對話框輸入 `/指令名稱`

| 指令 | 功能說明 |
|------|----------|
| `/update-config` | 修改 Claude Code 設定（permissions、hooks、env vars） |
| `/keybindings-help` | 自訂鍵盤快捷鍵 |
| `/simplify` | 自動 review 剛改的 code，找重複/低品質處並修正 |
| `/loop [間隔] [指令]` | 定時重複執行指令，例如 `/loop 5m /check` |
| `/schedule` | 建立排程任務（cron job），讓 Claude 定時自動執行 |
| `/claude-api` | 用 Anthropic SDK 建構 AI 應用程式 |

---

## 三、MCP（Model Context Protocol）外接服務

MCP 是讓 Claude Code 連接外部工具的標準協定，安裝後 Claude 就能直接操作那些服務。

### 常見可用的 MCP Server

| 類別 | 服務 |
|------|------|
| 原始碼管理 | GitHub、GitLab |
| 專案管理 | Jira / Confluence、Asana、Linear、Notion |
| 設計 | Figma |
| 基礎建設 | Vercel、Firebase、Supabase |
| 通訊 | Slack、Gmail |
| 監控 | Sentry |
| 資料庫 | PostgreSQL 及其他 |

### 安裝方式

```bash
# 雲端服務（HTTP）
claude mcp add --transport http github https://api.github.com/mcp

# 本地服務（stdio，需本地安裝套件）
claude mcp add --transport stdio airtable \
  --env AIRTABLE_API_KEY=YOUR_KEY \
  -- npx -y airtable-mcp-server
```

### 安裝範圍

| Scope | 說明 |
|-------|------|
| `--scope local`（預設） | 只有你、只在這個專案 |
| `--scope project` | 寫入 `.mcp.json`，整個團隊共用 |
| `--scope user` | 只有你、所有專案都有 |

### 管理指令

```bash
claude mcp list          # 列出所有已設定的 server
claude mcp remove github # 移除指定 server
/mcp                     # 對話框內管理（含 OAuth 驗證）
```

---

## 四、Agent（代理人）

Agent 是 Claude Code 內建的子代理系統，可以把複雜任務拆給專門的代理人處理。

### 內建 Agent 類型

| Agent | 說明 |
|-------|------|
| `general-purpose` | 通用型，研究問題、搜尋 code、執行多步驟任務 |
| `Explore` | 快速探索程式碼庫，找檔案、搜關鍵字、理解架構 |
| `Plan` | 軟體架構設計，產出實作計畫、找關鍵檔案、評估取捨 |
| `claude-code-guide` | 回答 Claude Code 本身的功能問題 |

### 使用方式

你不需要直接呼叫 Agent，Claude 會在需要時自動啟動。你也可以明確說：

```
「用 Explore agent 幫我找所有用到 fetch 的地方」
「先用 Plan agent 規劃一下這個功能再動手」
```

### Agent 的隔離模式

```bash
# 在獨立的 git worktree 執行，不影響主分支
# Claude 自動判斷是否需要，也可請它在 worktree 裡做
「在隔離環境裡試試這個重構，做完再給我看結果」
```

---

## 五、各角色推薦 Plugin 清單

Plugin 安裝方式：在對話框輸入 `/plugin install 套件名@claude-plugins-official`

---

### 前端工程師

| Plugin | 用途 |
|--------|------|
| `typescript-lsp` | TypeScript / JavaScript 型別檢查、自動補全、跳轉定義 |
| `figma` | 直接讀取 Figma 設計稿，轉換成元件或樣式 |
| `vercel` | 查詢部署狀態、觸發部署、檢視 preview URL |
| `github` | PR review、issue 管理、查 CI 狀態 |
| `commit-commands` | 標準化 git commit / push / PR 流程 |
| `pr-review-toolkit` | 自動化 PR review，檢查邏輯、樣式一致性 |

```bash
/plugin install typescript-lsp@claude-plugins-official
/plugin install figma@claude-plugins-official
/plugin install vercel@claude-plugins-official
/plugin install github@claude-plugins-official
/plugin install commit-commands@anthropics-claude-code
/plugin install pr-review-toolkit@anthropics-claude-code
```

---

### 後端工程師

| Plugin | 用途 |
|--------|------|
| `pyright-lsp` | Python 型別檢查與智慧提示（Django / FastAPI） |
| `gopls-lsp` | Go 語言支援 |
| `jdtls-lsp` | Java 語言支援 |
| `rust-analyzer-lsp` | Rust 語言支援 |
| `github` | PR / issue / CI 管理 |
| `sentry` | 直接查線上錯誤，讓 Claude 幫你分析並修 |
| `supabase` | 查詢 DB schema、執行 migration、管理 RLS |
| `commit-commands` | 標準化 git 流程 |
| `pr-review-toolkit` | 自動化 PR review |

```bash
# 依使用語言擇一安裝 LSP
/plugin install pyright-lsp@claude-plugins-official
/plugin install gopls-lsp@claude-plugins-official

/plugin install github@claude-plugins-official
/plugin install sentry@claude-plugins-official
/plugin install supabase@claude-plugins-official
/plugin install commit-commands@anthropics-claude-code
/plugin install pr-review-toolkit@anthropics-claude-code
```

---

### SRE / DevOps

| Plugin | 用途 |
|--------|------|
| `github` | 監控 CI/CD pipeline、管理 Actions workflow |
| `gitlab` | 同上（GitLab 環境） |
| `sentry` | 事件告警分析、追蹤 error rate 趨勢 |
| `vercel` | 部署管理與 rollback |
| `slack` | 查頻道訊息、發送告警通知 |
| `linear` | 建立 incident ticket、管理 on-call 任務 |
| `commit-commands` | 標準化 git 流程 |

```bash
/plugin install github@claude-plugins-official
/plugin install sentry@claude-plugins-official
/plugin install vercel@claude-plugins-official
/plugin install slack@claude-plugins-official
/plugin install linear@claude-plugins-official
/plugin install commit-commands@anthropics-claude-code
```

---

### DBA / 資料工程師

| Plugin | 用途 |
|--------|------|
| `supabase` | 管理 PostgreSQL schema、RLS、migration |
| `firebase` | Firestore / Realtime DB 查詢與管理 |
| `github` | 追蹤 migration 版本、審查 schema 變更 PR |
| `sentry` | 分析 DB 相關的 query error |
| `notion` | 記錄資料字典、DB 設計文件 |

```bash
/plugin install supabase@claude-plugins-official
/plugin install firebase@claude-plugins-official
/plugin install github@claude-plugins-official
/plugin install sentry@claude-plugins-official
/plugin install notion@claude-plugins-official
```

> MCP 也支援直接連 PostgreSQL，讓 Claude 執行 SQL 查詢：
> ```bash
> claude mcp add --transport stdio postgres \
>   --env DATABASE_URL=postgres://user:pass@host/db \
>   -- npx -y @modelcontextprotocol/server-postgres
> ```

---

### 資安工程師

| Plugin | 用途 |
|--------|------|
| `github` | 掃描 PR 中的敏感資訊、審查權限設定、追蹤 dependabot |
| `sentry` | 監控可疑錯誤模式、分析 exception stack |
| `pr-review-toolkit` | 自動對 PR 進行安全性 review（SQL injection、XSS、權限洩漏） |
| `gitlab` | 同 GitHub（GitLab 環境） |
| `slack` | 接收資安告警推播 |

```bash
/plugin install github@claude-plugins-official
/plugin install sentry@claude-plugins-official
/plugin install pr-review-toolkit@anthropics-claude-code
/plugin install slack@claude-plugins-official
```

> 資安重點提醒：
> - MCP server 的 credentials 務必用 `--env` 傳入，禁止硬寫在設定檔
> - 使用 `--scope local` 避免 token 被 commit 進 repo

---

### 軟體開發協助（PM / Tech Lead / 全端）

| Plugin | 用途 |
|--------|------|
| `github` | 管理 issue、PR、milestone、查 CI 狀態 |
| `atlassian` | 讀寫 Jira ticket、Confluence 文件 |
| `linear` | 建立/更新任務、管理 sprint |
| `notion` | 維護技術文件、ADR、設計文件 |
| `figma` | 讀取設計規格，協助前後端對齊 |
| `slack` | 查頻道討論、發摘要、追蹤決議 |
| `commit-commands` | 標準化 git 流程 |
| `pr-review-toolkit` | 協助 code review |
| `agent-sdk-dev` | 自己打造 AI 工具流程 |

```bash
/plugin install github@claude-plugins-official
/plugin install atlassian@claude-plugins-official
/plugin install linear@claude-plugins-official
/plugin install notion@claude-plugins-official
/plugin install figma@claude-plugins-official
/plugin install slack@claude-plugins-official
/plugin install commit-commands@anthropics-claude-code
/plugin install pr-review-toolkit@anthropics-claude-code
/plugin install agent-sdk-dev@anthropics-claude-code
```

---

## 六、記憶系統（Memory）

Claude Code 有跨對話的記憶功能，會記住你的偏好和專案背景。

### 記憶類型

| 類型 | 說明 | 範例 |
|------|------|------|
| `user` | 你的角色、偏好、習慣 | 語言偏好、專業背景 |
| `feedback` | 你給 Claude 的行為指導 | 「commit 後等我確認再 push」 |
| `project` | 專案背景與決策脈絡 | CI/CD 流程、DB 設定 |
| `reference` | 外部資源位置 | Linear 看板、Grafana 網址 |

### 如何操作記憶

```
# 讓 Claude 記住某件事
「記住：我們的 staging 環境 URL 是 xxx」

# 讓 Claude 忘掉某件事
「忘掉你記的 staging URL」

# 查看現有記憶
「列出你現在有的記憶」
```

---

## 七、可用工具（Tools）

### 檔案操作
| 工具 | 說明 |
|------|------|
| `Read` | 讀取檔案內容 |
| `Write` | 建立/覆寫檔案 |
| `Edit` | 精確修改檔案特定段落 |
| `Glob` | 用 pattern 搜尋檔案（如 `**/*.ts`） |
| `Grep` | 搜尋檔案內容（支援 regex） |

### 執行與互動
| 工具 | 說明 |
|------|------|
| `Bash` | 執行終端機指令 |
| `WebFetch` | 抓取網頁內容 |
| `WebSearch` | 網路搜尋 |
| `TodoWrite` | 管理任務清單、追蹤進度 |

### 進階功能
| 工具 | 說明 |
|------|------|
| `Agent` | 啟動子代理人處理複雜任務 |
| `CronCreate/Delete/List` | 管理定時任務 |
| `RemoteTrigger` | 觸發遠端排程代理 |
| `NotebookEdit` | 編輯 Jupyter Notebook |

---

## 八、使用技巧

### 基本互動
```
「幫我看看 src/api/auth.ts 有沒有問題」
「在 xxx 函式加上 input validation，只驗證 email 格式」
「把 UserService 的 getUser 方法從 any 改成有型別」
```

### 安全操作原則
- 破壞性操作（刪分支、force push）Claude 會**先問你**再動
- Push 到遠端前 Claude 也會確認（除非你授權過）
- 可以說「直接做不用問我」讓它自動執行

---

## 九、注意事項

1. **不要讓 Claude 猜 URL** — 要給它明確的網址，它不會亂編
2. **記憶是個人的** — 每個人的 Claude Code 記憶各自獨立
3. **記憶不是程式碼** — 架構、檔案路徑這種東西不需要存記憶，Claude 會直接讀 code
4. **記憶有時效** — 記憶是某時間點的快照，Claude 會優先相信眼前的 code
