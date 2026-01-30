// lib/content.ts

// ===============================
// 0) Site & Nav (UI will use these directly)
// ===============================

export const siteConfig = {
  name: "小記萬事屋",
  shortName: "小記萬事屋",
  description: "代辦型工作室｜把你的需求做成可用成品（只做數位交付）",
  email: "hello@concierge.studio", // 若你有正式信箱可改
  // 可選：用於 SEO / 社群
  tagline: "你說要什麼，我幫你做出來。",
  positioning: "代辦服務（把需求變成成果）",
  boundaries: {
    do: "只做數位交付（文件、圖片、影片、簡報、表格、內容、企劃、代辦流程）",
    dont: "不做需要你到現場的事（線下跑腿/代排隊/現場協助等）",
  },
} as const;

// 你原本路由不變，只換顯示名稱
export const navigation = [
  { name: "服務項目", href: "/services" },
  { name: "合作流程", href: "/how-it-works" },
  { name: "成果案例", href: "/proof" },
  { name: "金牌團隊", href: "/gold-team" },
  { name: "筆記", href: "/insights" },
] as const;

// ===============================
// 1) Company Profile (Internal package)
// ===============================

export const companyProfile = {
  nameZh: "小記萬事屋",
  positioning: "代辦服務（把需求變成成果）",
  sloganZh: "你說要什麼，我幫你做出來。",
  coreValueProps: ["速度快", "溝通簡單", "交付清楚"],
  serviceBoundary: {
    included: [
      "文件（Word/PDF）",
      "圖片（社群圖/Banner/海報/菜單/DM）",
      "影片（腳本/字幕/文案）",
      "簡報（PPT/Keynote）",
      "表格（Excel/Sheets）",
      "內容企劃與代辦流程（數位化懶人包/教學）",
    ],
    excluded: ["任何需要你到現場的事（線下跑腿、代辦臨櫃、現場協助）"],
  },
} as const;

// ===============================
// 2) ICP & Need Patterns
// ===============================

export const icp = {
  segments: [
    { name: "個人", examples: ["履歷", "報告", "自我介紹", "計畫書", "內容撰寫"] },
    { name: "年輕人", examples: ["社群", "遊戲", "創作", "求職", "課業"] },
    { name: "學生", examples: ["作業輔助", "整理筆記", "簡報", "讀書計畫"] },
    { name: "老人", examples: ["生活文件", "申請表", "說明書", "手機教學文"] },
    { name: "新創/迷你企業", examples: ["宣傳", "產品介紹", "客服話術", "簡單網站/頁面"] },
  ],
  keyTruths: [
    "客戶不熟悉",
    "客戶不需要知道我們做事",
    "他們只想：省麻煩、有人幫我做、結果能用就好",
  ],
  externalStrategy: "對外說「我們有一套快速製作流程」。",
} as const;

// ===============================
// 3) Brand Voice & External Messaging
// ===============================

export const brandMessaging = {
  externalPitch: [
    "我們是代辦型工作室，專門把你的需求做成可用成品。",
    "你只要講重點：用途、對象、風格、期限，我們負責處理細節。",
    "做出來你不滿意，我們再改到可以用。",
  ],
  packaging: {
    external: "小記萬事屋｜金牌團隊（Team-based 呈現）",
    internal: "（接案/控品質） + （大量產出/格式化/模板化/加速）",
  },
  tone: {
    keywords: ["直接", "省事", "可驗收", "不繞彎", "友善"],
    avoid: ["技術術語堆砌", "過度承諾線下事項"],
  },
} as const;

// ===============================
// 4) Service Scope (Expanded, ready for bio/IG/Discord)
// ===============================

export const serviceScope = {
  A_text: {
    title: "文字類（寫、改、翻、整理）",
    items: [
      "文案：社群貼文、廣告文、商品介紹、標語、腳本、口播稿",
      "寫作：自我介紹、履歷、求職信、讀書計畫、報告大綱、心得",
      "改寫：口語→正式、正式→簡單、長文→短文、語氣統一",
      "翻譯：中英日韓等（保留語氣、版本多種）",
      "整理：會議紀要、聊天紀錄整理、重點條列、FAQ 生成",
    ],
  },
  B_visual: {
    title: "圖像類（做圖/排版/視覺）",
    items: [
      "社群圖（IG貼文/限動/封面）",
      "Banner、海報、菜單、價目表、DM、名片",
      "影片縮圖、YouTube 封面",
      "角色/插畫風格圖（視需求）",
      "圖片修復、去背、畫質提升（可行範圍內）",
    ],
  },
  C_docs: {
    title: "簡報/文件類（最適合賣）",
    items: [
      "PPT/Keynote：報告、提案、讀書報告、比賽簡報",
      "Word：企劃書、活動流程、申請文件草稿、說明書",
      "PDF：排版、轉換、整理成模板",
    ],
  },
  D_videoAudio: {
    title: "影片/音訊類（短影音友善）",
    items: [
      "短影片腳本（3秒抓人、分鏡、B-roll 建議）",
      "字幕：逐字稿、字幕檔（SRT）、字幕潤色",
      "旁白稿：語速、停頓、情緒提示",
      "影片文案：標題、描述、Hashtag、置頂留言",
    ],
  },
  E_sheets: {
    title: "表格/資料類（超實用）",
    items: [
      "Excel/Google Sheet：記帳表、課表、打卡表、庫存表、名單整理",
      "自動計算：花費統計、成績統計、每日追蹤（睡眠、運動）",
      "資料清洗：去重、格式統一、欄位補全（在可行範圍）",
    ],
  },
  F_life: {
    title: "生活代辦（數位化處理）",
    items: [
      "寫「申請步驟教學」（老人/家長很需要）",
      "幫你把複雜流程做成一頁懶人包",
      "幫你把表單要填的內容整理成可貼上版本",
    ],
  },
  G_startup: {
    title: "新創/迷你商家常用",
    items: [
      "品牌介紹、公司簡介、服務頁文字",
      "客服話術、退換貨規則、常見問題",
      "簡單落地頁文案結構（可交付文本+版面草圖）",
      "社群內容月計畫（30天貼文題庫）",
    ],
  },
} as const;

// ===============================
// 5) Deliverable Packs (Productized)
// ===============================

export const deliverablePacks = {
  coreIdea: "把「你想要什麼」變成「可驗收的成品」。",
  packs: [
    {
      id: "PK_TEXT",
      name: "文字交付包",
      deliver: ["2–5 個版本（不同語氣/長度）", "最終版"],
      addOns: ["關鍵句/標題/CTA 選項", "常見問題回覆"],
    },
    {
      id: "PK_VISUAL",
      name: "圖像交付包",
      deliver: ["主圖", "不同尺寸（IG/限動/封面）", "可編輯檔（可選）"],
      addOns: ["配色/字體建議（簡單易懂）"],
    },
    {
      id: "PK_SLIDES",
      name: "簡報交付包",
      deliver: ["PPT 10–20 頁（依需求）", "發表講稿", "Q&A 預演題庫"],
      addOns: ["1頁摘要", "演講時間控制建議"],
    },
    {
      id: "PK_SCRIPT",
      name: "影片腳本交付包",
      deliver: ["腳本（分鏡/台詞/畫面）", "3 種開頭", "標題 10 個"],
      addOns: ["短影音節奏表（3/5/8/15 秒版本）"],
    },
    {
      id: "PK_SHEETS",
      name: "表格/工具交付包",
      deliver: ["可用表格（含公式）", "使用教學（1頁）", "範例填寫"],
      addOns: ["手機版使用指南（老人友善）"],
    },
    {
      id: "PK_OPEN",
      name: "商家「開張包」",
      deliver: ["品牌一句話", "服務介紹", "價目表文案", "IG 首批 9 貼文題材"],
      addOns: ["客服話術（詢價/催款/退換/客訴）"],
    },
  ],
} as const;

// ===============================
// 6) Internal Pricing Formula (No-AI wording externally)
// ===============================

export const pricingSystem = {
  inputFields: [
    "類型：文字/圖/簡報/表格/影片腳本/混合",
    "用途：作業/求職/商用/社群/生活文件",
    "長度：字數、頁數、張數、分鐘數",
    "急迫度：正常/急件/超急",
    "參考：有無範例、素材是否齊",
    "修改次數：1次/2次/3次以上",
  ],
  outputFields: ["建議價格區間", "交付清單", "可選加購", "交期"],
  logic: [
    "基礎價（依類型）",
    "內容量加成（越多越貴）",
    "急件加成（越急越貴）",
    "不清楚加成（需求越模糊越貴，因為來回成本高）",
    "超過約定修改 → 加購「修改包」",
  ],
  externalOneLiner:
    "我們會先看你要做什麼、要多大份量、多久要，然後給你一個最划算的方案。",
} as const;

// ===============================
// 7) Org Structure (Internal vs External)
// ===============================

export const orgStructure = {
  internalReality: [
    "你：接洽、範圍控管、確認客戶需求、最後把關、交付",
    "AI：產出草稿、多版本生成、格式化、模板化、加速",
  ],
  externalPresentation: {
    name: "小記萬事屋金牌團隊",
    roles: ["企劃", "文案", "設計", "排版", "資料整理"],
    note: "不需要說人數。",
  },
} as const;

// ===============================
// 8) SOP (Lightweight, one-person friendly)
// ===============================

export const sop = {
  intake: {
    customer: "客戶用一句話講需求",
    youAsk4: ["用途", "風格", "交期", "素材"],
  },
  scopeConfirm: [
    "我會交付：A + B + C",
    "不包含：X、Y",
    "可修改：1–2 次",
    "交付時間：____",
  ],
  deliveryRhythm: [
    "第1版：讓客戶選方向",
    "收斂版：變成可用成品",
    "整理版：排版、命名、打包",
  ],
  acceptance: ["客戶回「OK」或「要改哪裡」", "超出範圍 → 直接丟加購"],
} as const;

// ===============================
// 9) Internal File System (Folder + Naming)
// ===============================

export const internalDocSystem = {
  folders: [
    "01_客戶資料（每個客戶一個資料夾）",
    "02_交付成品（按日期/專案）",
    "03_模板庫（簡報模板/表格模板/文案模板/話術模板）",
    "04_報價與收款（報價單/收據/紀錄）",
    "05_素材庫（字體/圖/常用元素）",
  ],
  namingRules: ["[客戶名]_[需求]_[日期]_v1", "[客戶名]_[需求]_[日期]_final"],
} as const;

// ===============================
// 10) Services Cards (UI uses this on Home & /services)
// Keep it concise for the site, but aligned with your full scope.
// ===============================

export const services = [
  {
    title: "文字代辦",
    desc: "寫、改、翻、整理，一次給你可用版本。",
    deliverables: "2–5 版本 + 最終版 + 標題/CTA 選項",
    category: "文字",
  },
  {
    title: "圖像與排版",
    desc: "社群圖、Banner、海報、菜單、DM、封面一次到位。",
    deliverables: "主圖 + 多尺寸輸出（可選可編輯檔）",
    category: "圖像",
  },
  {
    title: "簡報與文件",
    desc: "報告/提案/比賽簡報，整套排版與講稿一起交付。",
    deliverables: "10–20頁 PPT + 講稿 + Q&A 題庫",
    category: "簡報",
  },
  {
    title: "短影音腳本/字幕",
    desc: "3秒抓人開頭、分鏡、旁白稿、字幕一條龍。",
    deliverables: "腳本 + 3開頭 + 標題10 +（可選SRT）",
    category: "影片",
  },
  {
    title: "表格與工具",
    desc: "記帳/課表/庫存/追蹤表，含公式與教學。",
    deliverables: "可用表格 + 1頁教學 + 範例填寫",
    category: "表格",
  },
  {
    title: "商家開張包",
    desc: "一句話品牌定位 + 服務頁文案 + 價目 + 首批社群題材。",
    deliverables: "品牌一句話 + 價目表文案 + 9貼文題材",
    category: "商家",
  },
] as const;

// ===============================
// 11) Steps (UI uses this on Home & /how-it-works)
// Align with your SOP
// ===============================

export const steps = [
  {
    num: "01",
    title: "一句話接單",
    desc: "你先用一句話講需求；我們只問 4 題：用途 / 風格 / 交期 / 素材。",
  },
  {
    num: "02",
    title: "範圍確認",
    desc: "我們會明確寫：交付 A+B+C，不包含 X、Y；可修改 1–2 次；交付時間給你。",
  },
  {
    num: "03",
    title: "三段交付節奏",
    desc: "第1版選方向 → 收斂成可用成品 → 整理排版命名打包，讓你直接交差/上線。",
  },
] as const;

// ===============================
// 12) Proof / Cases (UI uses on /proof)
// Keep as “selected anonymized” style
// ===============================

export const cases = [
  {
    id: 1,
    client: "學生｜讀書報告",
    challenge: "需要在短時間內把資料整理成清楚可講的簡報。",
    approach: "先給 1 版架構與講稿方向 → 收斂 → 統一排版與重點。",
    delivery: "簡報 + 講稿 + Q&A 題庫",
    impact: "交付後可直接上台使用，講述更順、重點更清楚。",
  },
  {
    id: 2,
    client: "個人｜求職履歷",
    challenge: "履歷內容零散，想要更專業、更能被看見。",
    approach: "先做定位與重點整理 → 產出多版本語氣 → 最終版統一格式。",
    delivery: "履歷（2–5版本）+ 最終版 + 自我介紹文案",
    impact: "投遞效率提升，面試邀請率上升（依個案而定）。",
  },
  {
    id: 3,
    client: "迷你商家｜開張素材",
    challenge: "沒有時間做品牌介紹、價目、客服話術與首批貼文題材。",
    approach: "先確認定位與客群 → 做一套可直接貼用的內容包。",
    delivery: "品牌一句話 + 價目表文案 + 客服話術 + 9貼文題材",
    impact: "上線速度更快，溝通成本大幅下降。",
  },
] as const;

// ===============================
// 13) Team (UI uses on /gold-team & teaser)
// External: Team-based, no headcount.
// ===============================

export const team = [
  {
    name: "企劃統籌",
    role: "需求釐清 & 範圍控管",
    tags: ["用途拆解", "交付定義", "節奏控場"],
    style: "用最少的問題，把需求變成可交付清單。",
    specs: "中文為主 · GMT+8",
  },
  {
    name: "文案策略",
    role: "文案/改寫/話術",
    tags: ["多版本", "語氣統一", "可直接貼用"],
    style: "不寫漂亮空話，只交付能用的版本。",
    specs: "中文/英文 · GMT+8",
  },
  {
    name: "視覺設計",
    role: "社群圖 & 視覺排版",
    tags: ["IG", "Banner", "封面"],
    style: "乾淨、清楚、好讀，尺寸一次到位。",
    specs: "視需求 · GMT+8",
  },
  {
    name: "排版校對",
    role: "簡報/文件整理",
    tags: ["PPT/Keynote", "Word/PDF", "模板化"],
    style: "把東西整理到「你打開就能用」。",
    specs: "中文 · GMT+8",
  },
  {
    name: "資料整理",
    role: "表格/清洗/統計",
    tags: ["Excel/Sheets", "公式", "教學"],
    style: "讓表格自己算、自己追蹤，你只要填資料。",
    specs: "中文 · GMT+8",
  },
  {
    name: "交付品管",
    role: "檢查 & 打包交付",
    tags: ["命名規則", "交付清單", "可驗收"],
    style: "最後一關：格式、錯字、完整度，全部過一遍。",
    specs: "中文 · GMT+8",
  },
] as const;

// ===============================
// 14) FAQ (UI uses on Home)
// ===============================

export const faqs = [
  {
    q: "你們到底是做什麼的？",
    a: "我們是代辦型工作室，專門把你的需求做成可用成品（文件/圖片/影片腳本/簡報/表格/企劃）。",
  },
  {
    q: "我需要很懂才可以委託嗎？",
    a: "不用。你只要講重點：用途、對象/風格、期限、素材。我們會把細節補齊。",
  },
  {
    q: "你們能做線下跑腿或到現場嗎？",
    a: "不做。服務邊界只做數位交付，確保交付速度與品質一致。",
  },
  {
    q: "交付流程是怎樣？",
    a: "第1版先讓你選方向 → 收斂成可用版本 → 整理排版命名打包，最後你只要回覆 OK 或改哪裡。",
  },
  {
    q: "可以改到我滿意嗎？",
    a: "我們會在約定的修改次數內把成果改到可用；超出範圍會用加購修改包處理（先說清楚再做）。",
  },
  {
    q: "怎麼報價？",
    a: "我們會先看你要做什麼、要多大份量、多久要，然後給你一個最划算的方案與交付清單。",
  },
  {
    q: "我素材很少也可以嗎？",
    a: "可以，但需求越模糊來回越多，會有相應的『需求不清楚加成』，我們會在報價前先講明。",
  },
  {
    q: "你們有 NDA 或保密嗎？",
    a: "可提供 NDA，也能簽你的版本。資料只用於完成交付，不會外流。",
  },
] as const;

// ===============================
// 15) Insights (Keep CMS-lite blocks, no-AI tone)
// ===============================

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] };

export const insights = [
  {
    slug: "fast-delivery-workflow",
    title: "快速製作流程：為什麼我們能交付得更快",
    summary: "把需求拆成可驗收清單，才是真正省時間的做法。",
    date: "Jan 2026",
    tags: ["流程", "交付"],
    blocks: [
      { type: "p", text: "很多人以為慢，是因為做不到；其實多數時候慢，是因為需求不清楚、範圍不明確。" },
      { type: "h3", text: "先確認範圍，才有速度" },
      { type: "p", text: "我們會把交付寫成 A+B+C，不包含 X、Y，修改次數與交期先講清楚，後面才不會一直來回。" },
      { type: "quote", text: "把事情講清楚，是最快的捷徑。" },
      { type: "h3", text: "三段交付節奏" },
      { type: "ul", items: ["第1版選方向", "收斂成可用成品", "整理排版命名打包"] },
    ],
  },
  {
    slug: "copy-that-works",
    title: "可直接貼用的文案，跟漂亮文案差在哪？",
    summary: "重點不是寫得華麗，而是能讓對方看懂、照做、願意下一步。",
    date: "Dec 2025",
    tags: ["文案", "實用"],
    blocks: [
      { type: "p", text: "文案最怕的是看起來很厲害，但客戶不知道要做什麼。" },
      { type: "h3", text: "交付要能驗收" },
      { type: "ul", items: ["給多版本", "給 CTA 選項", "給可直接貼上的最終版"] },
    ],
  },
  {
    slug: "sheets-that-save-time",
    title: "表格工具化：讓表格自己算，你只要填資料",
    summary: "把追蹤/統計做成可用工具，是最划算的省時投資。",
    date: "Feb 2026",
    tags: ["表格", "效率"],
    blocks: [
      { type: "p", text: "可用的表格不是長得漂亮，是你每天用起來省事。" },
      { type: "ul", items: ["公式自動算", "範例填寫", "1頁教學（手機也看得懂）"] },
    ],
  },
] satisfies ReadonlyArray<{
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: readonly string[];
  blocks: readonly ContentBlock[];
}>;
