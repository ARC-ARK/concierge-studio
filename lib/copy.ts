// lib/copy.ts

export const copy = {
  common: {
    startRequest: "開始委託",
    bookCall: "預約通話",
    viewAll: "查看全部",
    readCaseStudy: "查看案例",
    featuredCase: "精選案例",
    impact: "成果重點",
    clientPreview: "【客戶專案預覽】",
    loadingCases: "案例載入中…",
  },
  nav: {
    startRequestBtn: "開始委託",
  },
  footer: {
    privacy: "隱私政策",
    terms: "服務條款",
    security: "保密與 NDA",
    rights: "保留一切權利。",
  },
  home: {
    hero: {
      badge: "目前可接新案（2026 年 2 月檔期）",
      titleStart: "任何數位需求—",
      titleEnd: "交給我們。",
      sub: "你只要講重點：用途、對象/風格、期限、素材。我們負責把它做成可用成品。",
      trust: ["24 小時內回覆", "範圍與交期清楚", "可提供 NDA", "交付可驗收"],
    },
    servicesTitle: "服務項目",
    howTitle: "合作流程",
    proofTitle: "成果案例",
    team: {
      title: "金牌團隊",
      sub: "以團隊制呈現，把需求變成可用成品。流程清楚、交付乾淨。",
      btn: "查看團隊",
    },
    faqTitle: "常見問題",
    finalCtaTitle: "準備開始了嗎？",
  },
  contact: {
    title: "開始委託",
    sub: "把你的需求丟給我們。我們會把細節補齊，做出可用成品。",
    loadingFallback: "表單載入中…",
    success: {
      title: "已收到委託",
      sub: "我們已收到你的需求，將在 24 小時內回覆範圍與交期。",
      btn: "再送一筆",
    },
    form: {
      category: "需求類型",
      goal: "主要目的",
      timeline: "希望時程",
      budget: "預算區間",
      details: "需求描述",
      contact: "聯絡方式（Email / Telegram）",
      specialist: "偏好協作角色（可選）",
      submitBtn: "送出委託",
      sendingBtn: "送出中…",
      ndaPrefix: "可提供 NDA（可簽你的版本）。",
      confidential: "全程保密。",

      ui: {
        select: "請選擇…",
        noPreference: "不指定",
      },

      placeholders: {
        goal: "例如：交作業、求職投遞、商用宣傳、社群內容…",
        details: "請描述用途、對象/風格、限制條件與你已經有的素材…",
        contact: "例如：name@email.com 或 @telegram_id",
      },

      options: {
        category: [
          { value: "Web", label: "網頁/頁面" },
          { value: "Design", label: "視覺/排版" },
          { value: "Copy", label: "文字/內容" },
          { value: "Mixed", label: "混合/其他代辦" },
        ],
        timeline: [
          { value: "ASAP", label: "越快越好（急件）" },
          { value: "1-2 weeks", label: "1–2 週" },
          { value: "1 month", label: "1 個月內" },
          { value: "Flexible", label: "可彈性討論" },
        ],
        budget: [
          { value: "<2k", label: "低於 $2k" },
          { value: "2k-5k", label: "$2k – $5k" },
          { value: "5k-10k", label: "$5k – $10k" },
          { value: "10k+", label: "$10k 以上" },
        ],
      },

      validation: {
        category: "請選擇需求類型",
        goal: "請填寫主要目的",
        timeline: "請選擇希望時程",
        budget: "請選擇預算區間",
        emailInvalid: "Email 格式不正確",
        contactRequired: "請填寫聯絡方式（至少 2 個字）",
        detailsMin: "請再多描述一點（至少 10 個字）",
      },

      errors: {
        generic: "送出失敗，請稍後再試。",
        network: "網路連線異常，請檢查你的網路。",
      },
    },
    book: {
      title: "想用說的？",
      sub: "可預約 15 分鐘快速釐清。",
      btnLoading: "預約系統載入中…",
    },
  },
  servicesPage: {
    title: "服務項目",
    sub: "只做數位交付：文件、圖片、影片腳本、簡報、表格、內容企劃與流程懶人包。",
    youGet: "你會拿到：",
    ctaDisclaimer: "交付內容與價格會依你的需求確認後提供。",
    ctaBtn: "委託這項服務",
  },
  proofPage: {
    title: "成果案例",
    sub: "用成果說話。以下為匿名化精選案例。",
    labels: {
      client: "客戶",
      challenge: "需求/情境",
      approach: "處理方式",
      delivery: "交付內容",
    },
  },
  teamPage: {
    title: "金牌團隊",
    sub: "以團隊制呈現，不談人數，只談交付。把需求做成可用成品。",
    requestBtnPrefix: "委託",
  },
  insightsPage: {
    title: "筆記",
    sub: "關於交付、排版、內容與效率的小筆記。",
    backLink: "返回筆記列表",
    readTimeLabel: "約 5 分鐘",
    ctaTitle: "想把它做成可用成品？",
    ctaBtn: "開始委託",
  },
  howPage: {
    title: "合作流程",
    sub: "先把範圍講清楚，再用三段交付節奏把成果做乾淨。",
    pricingTitle: "合作與計價方式",
    pricing: {
      fixed: {
        title: "單次專案",
        desc: "範圍清楚、價格清楚。適合文件/簡報/單頁型交付。",
      },
      sprint: {
        title: "衝刺週",
        desc: "5 天集中處理，適合多項交付一起收斂（內容+視覺+排版）。",
      },
      retainer: {
        title: "月度協作",
        desc: "每月保留時數，適合持續型內容與營運支援。",
      },
    },
    ctaBtn: "開始委託",
  },
  policies: {
    termsTitle: "服務條款",
    privacyTitle: "隱私政策",
    securityTitle: "保密與 NDA",
    securityCta: {
      title: "需要先簽 NDA？",
      sub: "你可以傳你的版本，或向我們索取。我們會優先處理。",
      btn: "前往聯絡表單索取",
    },
  },
} as const;
