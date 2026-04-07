const GOOGLE_MAPS_EMBED_API_KEY = "__GOOGLE_MAPS_EMBED_API_KEY__";

const APP_DATA = {
  title: "2026 白沙屯媽祖進香任務地圖",
  strategy: {
    headline: "堅定走自己的香路・北港朝天宮",
    summary:
      "不預測媽祖路線，堅定走自己的香路。前三天平均 43K，Day 3 半夜 23:30 從虎尾起步，終點是北港朝天宮，北辰派出所僅為休息點。",
    totalReturnKm: 104,
    milestones: [
      { label: "Day 1", targetKm: 43.5, walkingHours: 11, note: "白沙屯 → 大甲 → 梧棲" },
      { label: "Day 2", targetKm: 42.5, walkingHours: 11, note: "梧棲 → 彰化 → 員林" },
      { label: "Day 3", targetKm: 44,   walkingHours: 11, note: "員林 → 西螺 → 虎尾" },
      { label: "虎尾 → 北港", targetKm: 20.5, walkingHours: 5, note: "虎尾 → 土庫 → 元長 → 北辰 → 朝天宮" }
    ],
    marchRows: [
      { day: "D0-D1", dateMeta: "4/12(日)～4/13(一)", route: "白沙屯 ➔ 大甲 ➔ 梧棲",      km: 43.5, cumKm: 43.5,  tip: "22:00 提前起步，09:00 大甲起步，中午進梧棲" },
      { day: "D2",    dateMeta: "4/14(二)",          route: "梧棲 ➔ 彰化 ➔ 員林",         km: 42.5, cumKm: 86.0,  tip: "00:00 出發，先過大肚溪橋，中午進員林補眠" },
      { day: "D3",    dateMeta: "4/15(三)",          route: "員林 ➔ 西螺 ➔ 虎尾",         km: 44.0, cumKm: 130.0, tip: "01:00 過西螺大橋，12:30 前到虎尾，當晚 19:00 熄燈" },
      { day: "D4",    dateMeta: "4/16(四)",          route: "虎尾 ➔ 北港朝天宮",           km: 20.5, cumKm: 150.5, tip: "⚠️ 23:30 虎尾起步，北辰為休息點，終點是朝天宮" },
      { day: "D5",    dateMeta: "4/17(五)",          route: "北港 ➔ 烏日（赫絲珀）",       km: 33.0, cumKm: 183.5, tip: "刈火後起駕，入住烏日修復體力" },
      { day: "D6",    dateMeta: "4/18(六)",          route: "烏日 ➔ 梧棲（寄居蟹）",       km: 24.0, cumKm: 207.5, tip: "避開雙媽會擁擠段，回棲身處大休" },
      { day: "D7",    dateMeta: "4/19(日)",          route: "梧棲 ➔ 通霄（阿瓜家）",       km: 36.5, cumKm: 244.0, tip: "進入家鄉段，最後體能燃燒" },
      { day: "D8",    dateMeta: "4/20(一)",          route: "通霄 ➔ 白沙屯拱天宮",         km: 10.5, cumKm: 254.5, tip: "陪媽祖走完最後一哩路，回宮安座" }
    ],
    segments: [
      "拱天宮 -> 寄居蟹",
      "寄居蟹 -> 員林火車站",
      "員林火車站 -> 淑美家（暫定，尚未確認）"
    ]
  },
  anchorPoints: [
    {
      id: "gongtian",
      name: "拱天宮",
      type: "起點",
      address: "苗栗縣通霄鎮白東里8號",
      query: "白沙屯拱天宮 苗栗縣通霄鎮白東里8號",
      fallback: [24.4898, 120.6786]
    },
    {
      id: "beichen",
      name: "北辰派出所",
      type: "中途休息點",
      address: "雲林縣北港鎮北辰路1號",
      query: "北辰派出所 雲林縣北港鎮北辰路1號",
      fallback: [23.5712, 120.3044]
    },
    {
      id: "chaotian",
      name: "北港朝天宮",
      type: "終點目標",
      address: "雲林縣北港鎮中山路178號",
      query: "北港朝天宮 雲林縣北港鎮中山路178號",
      fallback: [23.5683, 120.3022]
    }
  ],
  days: [
    {
      id: "day0",
      shortLabel: "Day 0",
      date: "4/12",
      weekday: "日",
      title: "去程啟程",
      focus: "集合、整裝、熱身",
      note: "出發日，為隔天正式推進做準備。",
      strategy: "22:00 提前起步，不理會登轎。明天 09:00 在大甲起跑。",
      coords: [24.493, 120.679],
      cwaLocation: "大甲區",
      lodging: null,
      spots: [
        {
          name: "大甲車站",
          address: "台中市大甲區順天路40號",
          label: "大休點"
        },
        {
          name: "梧棲寄居蟹",
          address: "台中市梧棲區港埠路二段431巷22號",
          label: "今晚目的地"
        }
      ]
    },
    {
      id: "day1",
      shortLabel: "Day 1",
      date: "4/13",
      weekday: "一",
      title: "第一波衝刺",
      focus: "42K 起手式",
      note: "第一晚住宿在梧棲，順手把超商與洗衣點收好。",
      strategy: "09:00 大甲起步，12:00 抵達梧棲。",
      coords: [24.301, 120.518],
      cwaLocation: "梧棲區",
      lodging: {
        name: "梧棲寄居蟹",
        address: "台中市梧棲區港埠路二段431巷22號",
        label: "住宿"
      },
      spots: [
        {
          name: "7-ELEVEN 大仁門市",
          address: "台中市梧棲區大仁路二段71號",
          label: "7-11"
        },
        {
          name: "善美投幣式自助洗衣店",
          address: "台中市梧棲區大仁路二段291巷33號",
          label: "自助洗衣"
        }
      ]
    },
    {
      id: "day2",
      shortLabel: "Day 2",
      date: "4/14",
      weekday: "二",
      title: "續推彰化",
      focus: "第二天 37K",
      note: "第二晚落腳彰化，補給以市區步調為主。",
      strategy: "00:00 準時出發，先過大肚溪橋（彰化瓶頸）。11:30 進駐旅館，下午強制補眠。",
      coords: [24.079, 120.535],
      cwaLocation: "彰化市",
      lodging: {
        name: "華宿行旅",
        address: "彰化縣彰化市南瑤路411號",
        label: "住宿"
      },
      spots: [
        {
          name: "承攜行旅",
          address: "彰化縣彰化市中正路二段668號",
          label: "住宿"
        },
        {
          name: "7-ELEVEN 曉陽門市",
          address: "彰化縣彰化市民族路341號1樓",
          label: "7-11"
        },
        {
          name: "衣必洗（民生店）",
          address: "彰化縣彰化市民生路21-1號",
          label: "自助洗衣"
        }
      ]
    },
    {
      id: "day3",
      shortLabel: "Day 3",
      date: "4/15",
      weekday: "三",
      title: "虎尾關鍵中繼",
      focus: "46K + 虎尾到北港 22K",
      note: "這一晚是進北港前的最後中繼站，可洗澡小休，僅一間房。01:00 過西螺大橋，12:30 前抵達。",
      strategy: "當晚 19:00 必須熄燈。23:30 從虎尾起步，經土庫、元長深夜推進，深夜路段昏暗務必配戴強光燈具。",
      coords: [23.711, 120.430],
      cwaLocation: "虎尾鎮",
      lodging: {
        name: "阿利亞民宿",
        address: "雲林縣虎尾鎮立新街165號",
        label: "住宿"
      },
      spots: [
        {
          name: "7-ELEVEN 虎大門市",
          address: "雲林縣虎尾鎮工專路156號",
          label: "7-11"
        },
        {
          name: "嘉樂福投幣式自助洗衣店-自強店",
          address: "",
          label: "自助洗衣"
        }
      ]
    },
    {
      id: "day4",
      shortLabel: "Day 4",
      date: "4/16",
      weekday: "四",
      title: "北港",
      focus: "北辰派出所達陣",
      note: "住宿暫定在大維哥家或嘉義市，先把北港補給點記住。",
      strategy: "終點是北港朝天宮，北辰派出所只是媽祖入廟前的最後休息點。\n\n⚠️ 45 萬人潮分流：\n・守候北辰組：在北辰等媽祖，之後提早撤退至住宿點。\n・衝刺朝天宮組：清晨 5 點直接前往卡位。\n\n嚴禁猜測媽祖路線，神轎可能在土庫或元長繞很久，你們不要等。",
      coords: [23.571, 120.304],
      cwaLocation: "北港鎮",
      lodging: {
        name: "大維哥家 or 嘉義市",
        address: "",
        label: "住宿"
      },
      spots: [
        {
          name: "7-ELEVEN 北港門市",
          address: "雲林縣北港鎮民主路106號",
          label: "7-11"
        },
        {
          name: "衣博士自助洗衣",
          address: "雲林縣北港鎮文化路37-3號",
          label: "自助洗衣"
        }
      ]
    },
    {
      id: "day5",
      shortLabel: "Day 5",
      date: "4/17",
      weekday: "五",
      title: "刈火 / 回程啟程",
      focus: "半夜自北港出發",
      note: "回程住宿改住烏日高鐵附近，方便調整節奏。",
      coords: [24.002, 120.612],
      cwaLocation: "烏日區",
      lodging: {
        name: "赫絲珀HSR高鐵行旅",
        address: "台中市烏日區新興路255號",
        label: "住宿"
      },
      spots: [
        {
          name: "7-ELEVEN 烏日門市",
          address: "台中市烏日區新興路247號",
          label: "7-11"
        }
      ]
    },
    {
      id: "day6",
      shortLabel: "Day 6",
      date: "4/18",
      weekday: "六",
      title: "回到梧棲",
      focus: "回程補給",
      note: "回程再次住寄居蟹，補洗補休一次完成。",
      coords: [24.301, 120.518],
      cwaLocation: "梧棲區",
      lodging: {
        name: "梧棲寄居蟹",
        address: "台中市梧棲區港埠路二段431巷22號",
        label: "住宿"
      },
      spots: [
        {
          name: "7-ELEVEN 大仁門市",
          address: "台中市梧棲區大仁路二段71號",
          label: "7-11"
        },
        {
          name: "善美投幣式自助洗衣店",
          address: "台中市梧棲區大仁路二段291巷33號",
          label: "自助洗衣"
        }
      ]
    },
    {
      id: "day7",
      shortLabel: "Day 7",
      date: "4/19",
      weekday: "日",
      title: "通霄駐駕",
      focus: "最後整補",
      note: "住宿在阿瓜家，7-11 收件資訊也一併保留。",
      coords: [24.440, 120.667],
      cwaLocation: "苑裡鎮",
      lodging: {
        name: "阿瓜家",
        address: "",
        label: "住宿"
      },
      spots: [
        {
          name: "7-ELEVEN 新和苑門市",
          address: "苗栗縣苑裡鎮為公路16之1號1樓",
          label: "7-11",
          extra: "收件人：何霈瑄 0976832500"
        }
      ]
    },
    {
      id: "day8",
      shortLabel: "Day 8",
      date: "4/20",
      weekday: "一",
      title: "回宮",
      focus: "任務收尾",
      note: "回宮日，住宿預計回家或續住阿瓜家。",
      coords: [24.493, 120.679],
      cwaLocation: "大甲區",
      lodging: {
        name: "溫暖的家 or 阿瓜家",
        address: "",
        label: "住宿"
      },
      spots: []
    }
  ],
  attendanceDays: [
    "4/12-4/13",
    "4/14",
    "4/15",
    "4/16 北港",
    "4/17 半夜北港出發",
    "4/18",
    "4/19 通霄",
    "4/20 回宮",
    "4/21 遊庄"
  ],
  attendance: [
    { name: "佛祖球球", status: ["✅", "✅", "✅", "✅", "✅", "✅", "✅", "✅", ""] },
    { name: "安卓", status: ["✅", "✅", "✅", "✅", "✅", "✅", "✅", "✅", ""] },
    { name: "Tina 媽", status: ["✅", "✅", "✅", "✅", "✅", "✅", "✅", "✅", "✅"] },
    { name: "宇澤", status: ["✅", "✅", "✅", "✅", "✅", "✅", "✅", "✅", ""] },
    { name: "阿瓜", status: ["✅", "✅", "✅", "✅", "", "", "", "", ""] },
    { name: "肯哥", status: ["✅", "✅", "✅", "✅", "✅", "✅", "", "", ""] },
    { name: "Gino", status: ["✅ 4/13 才會出現", "✅", "✅", "✅", "✅", "✅", "✅", "✅", "✅"] },
    { name: "Frances", status: ["✅", "✅", "✅", "✅", "✅", "✅", "✅", "✅", "✅"] },
    { name: "Joy", status: ["✅ 可能4/13 才會出現", "✅", "", "", "", "", "", "", ""] },
    { name: "Sophia", status: ["✅", "✅", "✅", "", "", "", "", "", ""] },
    { name: "凡右", status: ["✅", "✅", "✅", "✅", "✅", "✅", "✅", "✅", ""] },
    { name: "老師", status: ["✅", "✅", "✅", "✅", "", "", "", "", ""] },
    { name: "阿謙", status: ["✅", "✅", "✅", "✅", "", "", "", "", ""] },
    { name: "阿濬", status: ["✅", "", "", "", "", "", "", "", ""] }
  ]
};

const DARK_MODE_KEY = "mazu-dark-mode-v1";

function getTodayDayId() {
  const now = new Date();
  // 台灣時間 UTC+8
  const tst = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  const month = tst.getUTCMonth() + 1;
  const date = tst.getUTCDate();
  const found = APP_DATA.days.find((d) => {
    const [m, dd] = d.date.split("/").map(Number);
    return m === month && dd === date;
  });
  return found ? found.id : "day0";
}

function initDarkMode() {
  const saved = localStorage.getItem(DARK_MODE_KEY);
  if (saved === "1") document.documentElement.classList.add("dark");

  const btn = document.getElementById("dark-toggle");
  if (!btn) return;
  btn.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";

  btn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem(DARK_MODE_KEY, isDark ? "1" : "0");
    btn.textContent = isDark ? "☀️" : "🌙";
  });
}

const state = {
  activeDayId: getTodayDayId(),
  activeMapFocusId: null
};

const ATTENDANCE_STORAGE_KEY = "mazu-attendance-v1";
const EXTRA_ATTENDANCE_KEY = "mazu-extra-attendance-v1";

const GEAR_ITEMS = [
  "雨衣／雨褲",
  "頭燈 + 備用電池",
  "行動電源",
  "護膝／護踝",
  "防曬乳",
  "止痛藥／痠痛貼布",
  "電解質包",
  "備用鞋墊",
  "透氣膠帶",
  "小剪刀",
  "藥品",
  "現金",
  "信用卡",
  "健保卡"
];

function googleMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function googleMapsWalkingUrl(address) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}&travelmode=walking`;
}

function googleMapsEmbedUrl(query) {
  if (hasGoogleMapsApiKey()) {
    return `https://www.google.com/maps/embed/v1/search?key=${encodeURIComponent(GOOGLE_MAPS_EMBED_API_KEY)}&q=${encodeURIComponent(query)}`;
  }
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

function hasGoogleMapsApiKey() {
  return Boolean(GOOGLE_MAPS_EMBED_API_KEY) && !GOOGLE_MAPS_EMBED_API_KEY.includes("__GOOGLE_MAPS_EMBED_API_KEY__");
}

function createSummaryPill(label, value) {
  return `<div class="summary-pill"><strong>${label}</strong> ${value}</div>`;
}

function renderStrategyBoard() {
  const board = document.getElementById("strategy-board");
  const goingKm = APP_DATA.strategy.milestones.reduce((sum, item) => sum + item.targetKm, 0);
  const totalKm = goingKm + APP_DATA.strategy.totalReturnKm;
  board.innerHTML = `
    <div class="stat-chip">
      <strong>全程 ${totalKm} K</strong>
      <span>去程 ${goingKm}K・回程 ${APP_DATA.strategy.totalReturnKm}K，共 254.5 公里。</span>
    </div>
    <div class="stat-chip">
      <strong>Day 3 當晚 19:00 熄燈・23:30 起步</strong>
      <span>從虎尾出發，終點是北港朝天宮，北辰只是休息點。</span>
    </div>
    <div class="stat-chip">
      <strong>嚴禁猜測媽祖路線</strong>
      <span>堅定走自己的香路，45 萬人潮請衡量體力與安全。</span>
    </div>
  `;
}

function renderMarchTable() {
  const wrap = document.getElementById("march-table");
  if (!wrap) return;
  wrap.innerHTML = `
    <div class="march-table-scroll">
      <table class="march-table">
        <thead>
          <tr>
            <th>日期</th>
            <th>路段</th>
            <th>里程</th>
            <th>累計</th>
            <th>策略重點</th>
          </tr>
        </thead>
        <tbody>
          ${APP_DATA.strategy.marchRows.map((row) => `
            <tr>
              <td><strong>${row.day}</strong><div class="mini-label">${row.dateMeta}</div></td>
              <td>${row.route}</td>
              <td>${row.km} K</td>
              <td>${row.cumKm} K</td>
              <td class="march-tip">${row.tip}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderDistancePlan() {
  const wrap = document.getElementById("distance-plan");
  const rows = APP_DATA.strategy.marchRows;
  const maxKm = Math.max(...rows.map((r) => r.km));
  wrap.innerHTML = rows
    .map(
      (row) => `
        <div class="distance-item">
          <strong>${row.day}</strong>
          <div class="mini-label">${row.dateMeta}</div>
          <div class="mini-label">${row.route}</div>
          <div class="progress-track">
            <div class="progress-value" style="width:${(row.km / maxKm) * 100}%"></div>
          </div>
          <div class="mini-label">${row.km}K・約 ${Math.round(row.km / 3.5)}h</div>
        </div>
      `
    )
    .join("");
}

function renderRouteStrategy() {
  const wrap = document.getElementById("route-strategy");
  wrap.innerHTML = `
    <div class="route-strategy-wrap">
      <div class="route-strategy-heading">行程策略</div>
      <div class="route-strategy-grid">
        <div class="route-phase">
          <div class="route-phase-label outbound">去程｜D0–D4 急行軍</div>
          <ul class="route-phase-list">
            <li>全團統一行動，中午進駐、下午大休</li>
            <li><strong>九點起步律</strong>：D1 早上九點大甲起跑，避開烈日</li>
            <li><strong>D4 北辰分流</strong>：體力足者衝朝天宮入廟，體力透支者先撤退至住宿點</li>
          </ul>
        </div>
        <div class="route-phase">
          <div class="route-phase-label return">回程｜D5–D8 分流自主</div>
          <div class="route-team">
            <div class="route-team-badge team-a">🚩 A組 跟鑾轎</div>
            <p>想拿結緣品、感受回鑾熱鬧氛圍、體力尚可的團員。隨神轎節奏停靠，享受鄉親補給。</p>
          </div>
          <div class="route-team">
            <div class="route-team-badge team-b">🐺 B組 孤狼香擔</div>
            <p>自主配速、避開擁擠或腳步沉重的團員。緊隨香擔（萬年香火）行進，速度規律，清晨趁涼先走，中午前進房補眠。</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSegments() {
  const wrap = document.getElementById("segment-list");
  wrap.innerHTML = APP_DATA.strategy.segments
    .map(
      (segment, index) => `
        <div class="segment-item">
          <strong>策略分段 ${index + 1}</strong>
          <p>${segment}</p>
        </div>
      `
    )
    .join("");
}

function renderTabs() {
  const wrap = document.getElementById("day-tabs");
  wrap.innerHTML = APP_DATA.days
    .map(
      (day) => `
        <button class="tab-button ${day.id === state.activeDayId ? "active" : ""}" data-day-id="${day.id}">
          ${day.shortLabel}
          <small>${day.date} (${day.weekday})</small>
        </button>
      `
    )
    .join("");

  wrap.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeDayId = button.dataset.dayId;
      state.activeMapFocusId = null;
      renderTabs();
      renderDayPanel();
      renderMapFocusList();
      renderMapEmbed();
    });
  });
}

function renderLocationCard(item) {
  const hasAddress = Boolean(item.address && item.address.trim());
  const mapQuery = item.address || item.name;
  return `
    <article class="detail-card">
      <h3>${item.label}｜${item.name}</h3>
      ${hasAddress ? `<p>${item.address}</p>` : ""}
      ${item.extra ? `<p class="muted-text">${item.extra}</p>` : ""}
      <div class="link-row">
        <a class="mini-link" href="${hasAddress ? googleMapsWalkingUrl(mapQuery) : googleMapsUrl(mapQuery)}" target="_blank" rel="noreferrer">步行路線</a>
      </div>
    </article>
  `;
}

function renderDayPanel() {
  const day = APP_DATA.days.find((item) => item.id === state.activeDayId) || APP_DATA.days[0];
  const panel = document.getElementById("day-panel");
  const detailItems = [];

  if (day.lodging) {
    detailItems.push(day.lodging);
  }
  detailItems.push(...day.spots);

  panel.innerHTML = `
    <section>
      <div class="day-summary">
        ${createSummaryPill("日期", `${day.date} (${day.weekday})`)}
        ${createSummaryPill("主題", day.title)}
        ${createSummaryPill("焦點", day.focus)}
        ${day.cwaLocation ? '<div class="summary-pill weather-pill" id="weather-widget"><span class="weather-loading">天氣載入中…</span></div>' : ""}
      </div>
      <div class="info-card">
        <h3>${day.shortLabel}｜${day.title}</h3>
        <p>${day.note}</p>
        ${day.strategy ? `<p class="day-strategy-note">${day.strategy.replace(/\n/g, "<br>")}</p>` : ""}
      </div>
      <div class="detail-grid">
        ${detailItems.length ? detailItems.map(renderLocationCard).join("") : '<article class="detail-card"><h3>當日任務</h3><p>今天以移動與整隊為主，暫無固定補給點。</p></article>'}
      </div>
    </section>
  `;

  if (day.cwaLocation) {
    const [month, d] = day.date.split("/");
    const dateISO = `2026-${month.padStart(2, "0")}-${d.padStart(2, "0")}`;
    fetchDayWeather(day.id, day.cwaLocation, dateISO);
  }
}

function buildDefaultAttendanceState() {
  return APP_DATA.attendance.map((member) =>
    member.status.map((entry) => ({
      checked: Boolean(entry),
      note: entry && entry !== "✅" ? entry.replace(/^✅\s*/, "") : ""
    }))
  );
}

function getAttendanceState() {
  const fallback = buildDefaultAttendanceState();

  try {
    const raw = localStorage.getItem(ATTENDANCE_STORAGE_KEY);
    if (!raw) return fallback;

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length !== APP_DATA.attendance.length) {
      return fallback;
    }

    return parsed.map((row, memberIndex) =>
      APP_DATA.attendanceDays.map((_, dayIndex) => {
        const cell = row?.[dayIndex];
        const defaultCell = fallback[memberIndex][dayIndex];
        return {
          checked: typeof cell?.checked === "boolean" ? cell.checked : defaultCell.checked,
          note: (typeof cell?.note === "string" ? cell.note : defaultCell.note).replace(/佛系進香/g, "")
        };
      })
    );
  } catch (error) {
    return fallback;
  }
}

function saveAttendanceState(attendanceState) {
  localStorage.setItem(ATTENDANCE_STORAGE_KEY, JSON.stringify(attendanceState));
}

function renderGearList() {
  const wrap = document.getElementById("gear-list");
  wrap.innerHTML = GEAR_ITEMS.map((item) => `
    <div class="gear-item">${item}</div>
  `).join("");
}

const weatherCache = {};

function weatherDescToEmoji(desc) {
  if (!desc) return "🌤️";
  if (/雷/.test(desc)) return "⛈️";
  if (/雨/.test(desc)) return "🌧️";
  if (/陰/.test(desc)) return "☁️";
  if (/多雲/.test(desc)) return "⛅";
  if (/霧|煙/.test(desc)) return "🌫️";
  if (/晴/.test(desc)) return "☀️";
  return "🌤️";
}

async function fetchDayWeather(dayId, cwaLocation, dateISO) {
  const widget = document.getElementById("weather-widget");
  if (!widget) return;

  if (weatherCache[dayId]) {
    renderWeatherWidget(widget, weatherCache[dayId]);
    return;
  }

  try {
    const url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-093?Authorization=__CWA_API_KEY__&locationName=${encodeURIComponent(cwaLocation)}&elementName=MinT,MaxT,PoP12h,Wx&format=JSON`;
    const res = await fetch(url);
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (data.success !== "true") throw new Error();

    const locsArr = data.records?.Locations?.[0]?.Location ?? [];
    const loc = locsArr.find((l) => l.LocationName === cwaLocation);
    if (!loc) throw new Error();

    function findEl(name) {
      return (loc.WeatherElement || []).find((e) => e.ElementName === name);
    }
    function firstValueOnDate(el, valueKey) {
      if (!el) return null;
      const t = (el.Time || []).find((t) => t.StartTime?.slice(0, 10) === dateISO);
      return t?.ElementValue?.[0]?.[valueKey] ?? null;
    }

    const minTemp = firstValueOnDate(findEl("MinT"), "Temperature");
    const maxTemp = firstValueOnDate(findEl("MaxT"), "Temperature");
    const precipProb = firstValueOnDate(findEl("PoP12h"), "ProbabilityOfPrecipitation");
    const wxDesc = firstValueOnDate(findEl("Wx"), "Weather");

    if (minTemp == null || maxTemp == null) throw new Error();

    const weather = {
      maxTemp: parseFloat(maxTemp),
      minTemp: parseFloat(minTemp),
      precipProb: precipProb != null ? parseFloat(precipProb) : null,
      wxDesc: wxDesc || ""
    };
    weatherCache[dayId] = weather;
    renderWeatherWidget(widget, weather);
  } catch {
    if (widget) widget.remove();
  }
}

function renderWeatherWidget(widget, weather) {
  const emoji = weatherDescToEmoji(weather.wxDesc);
  const precipStr = weather.precipProb != null ? `<span class="weather-precip">降雨 ${Math.round(weather.precipProb)}%</span>` : "";
  widget.innerHTML = `
    <div class="weather-card">
      <span class="weather-emoji">${emoji}</span>
      <span class="weather-desc">${weather.wxDesc || "天氣預報"}</span>
      <span class="weather-temp">${Math.round(weather.minTemp)}–${Math.round(weather.maxTemp)}°C</span>
      ${precipStr}
    </div>
  `;
}


const WEEKDAYS = ["日", "一", "二", "三", "四", "五", "六"];

function attendanceDayMeta(label) {
  const m = label.match(/(\d+)\/(\d+)/);
  if (!m) return { date: label, wd: "" };
  const month = parseInt(m[1]);
  const date = parseInt(m[2]);
  return { date: `${month}/${date}`, wd: WEEKDAYS[new Date(2026, month - 1, date).getDay()] };
}

function renderAttendanceChart() {
  const wrap = document.getElementById("attendance-chart");
  if (!wrap) return;

  const attendanceState = getAttendanceState();
  const extraState = getExtraAttendanceState();
  const cols = APP_DATA.attendanceDays.length;

  const coreRows = APP_DATA.attendance.map((member, mi) => ({
    name: member.name, isExtra: false, mi,
    cells: attendanceState[mi]
  }));

  const extraRows = extraMembers.map((m) => ({
    name: m.name, isExtra: true, extraId: m.id,
    cells: APP_DATA.attendanceDays.map((_, di) => ({
      checked: (extraState[m.name] || [])[di] || false, note: ""
    }))
  }));

  const allRows = [...coreRows, ...extraRows];

  wrap.innerHTML = `
    <div class="ac-grid" style="--ac-cols:${cols}">
      <div class="ac-header-row">
        <div class="ac-name-col"></div>
        ${APP_DATA.attendanceDays.map((label) => {
          const { date, wd } = attendanceDayMeta(label);
          return `<div class="ac-day-label"><span class="ac-date">${date}</span><span class="ac-wd">${wd}</span></div>`;
        }).join("")}
      </div>
      ${allRows.map((row) => `
        <div class="ac-row">
          <div class="ac-name-col">
            <span>${row.name}</span>
            ${row.isExtra ? `<button class="ac-remove-btn" data-extra-id="${row.extraId}" data-name="${row.name}" title="移除">×</button>` : ""}
          </div>
          ${row.cells.map((cell, di) => `
            <div class="ac-cell ${cell.checked ? "on" : "off"}"
              data-is-extra="${row.isExtra}"
              data-mi="${row.isExtra ? "" : row.mi}"
              data-name="${row.name}"
              data-di="${di}"
              title="${cell.note || ""}"></div>
          `).join("")}
        </div>
      `).join("")}
    </div>
    <div class="ac-footer">
      <div class="ac-add-form">
        <input class="ac-add-input" id="ac-add-input" type="text" placeholder="輸入新團員名字" maxlength="10" />
        <button class="ac-add-submit" id="ac-add-submit" ${db ? "" : "disabled title='Firebase 未連線'"}>＋ 新增</button>
      </div>
    </div>
  `;

  wrap.querySelector(".ac-grid").addEventListener("click", (e) => {
    const cell = e.target.closest(".ac-cell");
    if (cell) {
      const di = Number(cell.dataset.di);
      if (cell.dataset.isExtra === "true") {
        const name = cell.dataset.name;
        const st = getExtraAttendanceState();
        if (!st[name]) st[name] = APP_DATA.attendanceDays.map(() => false);
        st[name][di] = !st[name][di];
        saveExtraAttendanceState(st);
        cell.className = `ac-cell ${st[name][di] ? "on" : "off"}`;
      } else {
        const mi = Number(cell.dataset.mi);
        const st = getAttendanceState();
        st[mi][di].checked = !st[mi][di].checked;
        saveAttendanceState(st);
        cell.className = `ac-cell ${st[mi][di].checked ? "on" : "off"}`;
      }
      return;
    }
    const removeBtn = e.target.closest(".ac-remove-btn");
    if (removeBtn) removeExtraMember(removeBtn.dataset.extraId, removeBtn.dataset.name);
  });

  const addInput = document.getElementById("ac-add-input");
  const addSubmit = document.getElementById("ac-add-submit");
  if (addSubmit && addInput) {
    addSubmit.addEventListener("click", () => {
      const name = addInput.value.trim();
      if (!name) return;
      addExtraMember(name);
      addInput.value = "";
    });
    addInput.addEventListener("keydown", (e) => { if (e.key === "Enter") addSubmit.click(); });
  }
}


function getMapFocusOptions() {
  const activeDay = APP_DATA.days.find((item) => item.id === state.activeDayId) || APP_DATA.days[0];
  const anchorFocuses = APP_DATA.anchorPoints.map((point) => ({
    id: point.id,
    label: point.name,
    meta: point.type,
    query: point.query || point.address || point.name
  }));

  const dayFocuses = [];

  if (activeDay.lodging) {
    dayFocuses.push({
      id: `${activeDay.id}-lodging`,
      label: activeDay.lodging.name,
      meta: `${activeDay.shortLabel} 住宿`,
      query: activeDay.lodging.address || activeDay.lodging.name,
      hasAddress: Boolean(activeDay.lodging.address)
    });
  }

  activeDay.spots.forEach((spot, index) => {
    dayFocuses.push({
      id: `${activeDay.id}-spot-${index}`,
      label: spot.name,
      meta: `${activeDay.shortLabel} ${spot.label}`,
      query: spot.address || spot.name,
      hasAddress: Boolean(spot.address)
    });
  });

  return [...anchorFocuses, ...dayFocuses].filter((item) => item.query);
}

function ensureActiveMapFocus() {
  const focusOptions = getMapFocusOptions();
  const matched = focusOptions.find((item) => item.id === state.activeMapFocusId);
  if (matched) return matched;

  const preferredDayFocus = focusOptions.find((item) => item.id === `${state.activeDayId}-lodging`) ||
    focusOptions.find((item) => item.id.startsWith(`${state.activeDayId}-`));
  const nextFocus = preferredDayFocus || focusOptions[0] || null;
  state.activeMapFocusId = nextFocus ? nextFocus.id : null;
  return nextFocus;
}

function renderMapFocusList() {
  const wrap = document.getElementById("map-focus-list");
  const focusOptions = getMapFocusOptions();
  const activeFocus = ensureActiveMapFocus();

  wrap.innerHTML = focusOptions
    .map(
      (item) => `
        <button class="focus-chip ${activeFocus && item.id === activeFocus.id ? "active" : ""}" data-focus-id="${item.id}">
          ${item.label}｜${item.meta}
        </button>
      `
    )
    .join("");

  wrap.querySelectorAll(".focus-chip").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeMapFocusId = button.dataset.focusId;
      renderMapFocusList();
      renderMapEmbed();
    });
  });
}

function renderMapEmbed() {
  const iframe = document.getElementById("map-embed");
  const activeFocus = ensureActiveMapFocus();

  if (!activeFocus) {
    iframe.hidden = true;
    return;
  }

  iframe.hidden = false;
  iframe.src = googleMapsEmbedUrl(activeFocus.query);
}

// ── Firebase real-time location tracking ─────────────────────────────────────

const FIREBASE_CONFIG_STR = `__FIREBASE_CONFIG__`;
const MEMBER_IDENTITY_KEY = "mazu-member-identity-v1";

let db = null;
let trackerWatchId = null;
let isSharing = false;
const teamLocations = {};
let extraMembers = []; // [{ id, name }] from Firebase

function getMemberIdentity() {
  return localStorage.getItem(MEMBER_IDENTITY_KEY) || null;
}

function setMemberIdentity(name) {
  localStorage.setItem(MEMBER_IDENTITY_KEY, name);
}

function memberIdFromName(name) {
  return name.replace(/\s+/g, "_");
}

function initFirebase() {
  if (!FIREBASE_CONFIG_STR) return;
  try {
    const config = JSON.parse(FIREBASE_CONFIG_STR);
    firebase.initializeApp(config);
    db = firebase.database();
    watchTeamLocations();
    watchExtraMembers();
  } catch (e) {
    console.warn("Firebase init failed", e);
  }
}

function getExtraAttendanceState() {
  try {
    return JSON.parse(localStorage.getItem(EXTRA_ATTENDANCE_KEY) || "{}");
  } catch { return {}; }
}

function saveExtraAttendanceState(st) {
  localStorage.setItem(EXTRA_ATTENDANCE_KEY, JSON.stringify(st));
}

function addExtraMember(name) {
  if (!db || !name.trim()) return;
  const id = memberIdFromName(name.trim()) + "_" + Date.now();
  db.ref(`members/${id}`).set({ name: name.trim() });
}

function removeExtraMember(id, name) {
  if (!db) return;
  db.ref(`members/${id}`).remove();
  const st = getExtraAttendanceState();
  delete st[name];
  saveExtraAttendanceState(st);
}

function watchExtraMembers() {
  if (!db) return;
  db.ref("members").on("value", (snap) => {
    const data = snap.val() || {};
    extraMembers = Object.entries(data).map(([id, v]) => ({ id, name: v.name }));
    renderAttendanceChart();
    renderTrackerChips();
  });
}

function writeLocation(name, lat, lng) {
  if (!db) return;
  const id = memberIdFromName(name);
  db.ref(`locations/${id}`).set({ name, lat, lng, last_updated: Date.now() });
}

function startSharing(name) {
  if (trackerWatchId !== null) navigator.geolocation.clearWatch(trackerWatchId);
  isSharing = true;
  trackerWatchId = navigator.geolocation.watchPosition(
    (pos) => writeLocation(name, pos.coords.latitude, pos.coords.longitude),
    () => {},
    { enableHighAccuracy: true, maximumAge: 30000 }
  );
  renderTrackerIdentity();
}

function stopSharing() {
  if (trackerWatchId !== null) {
    navigator.geolocation.clearWatch(trackerWatchId);
    trackerWatchId = null;
  }
  isSharing = false;
  renderTrackerIdentity();
}

function watchTeamLocations() {
  if (!db) return;
  db.ref("locations").on("value", (snapshot) => {
    const data = snapshot.val() || {};
    Object.keys(teamLocations).forEach((k) => delete teamLocations[k]);
    Object.assign(teamLocations, data);
    renderTrackerChips();
  });
}

function jumpToCoords(lat, lng) {
  const iframe = document.getElementById("map-embed");
  if (!iframe) return;
  const query = `${lat},${lng}`;
  if (hasGoogleMapsApiKey()) {
    iframe.src = `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(GOOGLE_MAPS_EMBED_API_KEY)}&q=${query}&zoom=16`;
  } else {
    iframe.src = `https://maps.google.com/maps?q=${query}&output=embed&z=16`;
  }
}

function timeSince(ts) {
  if (!ts) return "";
  const diffMin = Math.floor((Date.now() - ts) / 60000);
  if (diffMin < 1) return "剛剛";
  if (diffMin < 60) return `${diffMin} 分鐘前`;
  return `${Math.floor(diffMin / 60)} 小時前`;
}

function renderTrackerIdentity() {
  const wrap = document.getElementById("tracker-identity");
  if (!wrap) return;
  const identity = getMemberIdentity();
  const hasGeo = "geolocation" in navigator;
  const firebaseReady = Boolean(db);

  wrap.innerHTML = `
    <div class="tracker-identity-row">
      <span class="tracker-who">
        ${identity ? `你是：<strong>${identity}</strong>` : "尚未選擇身分"}
      </span>
      <button class="tracker-switch-btn" id="tracker-switch-identity">切換身分</button>
      ${identity && hasGeo && firebaseReady ? `
        <button class="tracker-share-btn ${isSharing ? "sharing" : ""}" id="tracker-share-toggle">
          ${isSharing ? "🔴 停止分享" : "📍 分享位置"}
        </button>
      ` : ""}
      ${hasGeo ? `<button class="tracker-locate-btn" id="tracker-locate-me">定位我</button>` : ""}
    </div>
  `;

  document.getElementById("tracker-switch-identity")?.addEventListener("click", showMemberOverlay);

  document.getElementById("tracker-share-toggle")?.addEventListener("click", () => {
    if (isSharing) stopSharing();
    else startSharing(identity);
  });

  document.getElementById("tracker-locate-me")?.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => jumpToCoords(pos.coords.latitude, pos.coords.longitude),
      () => alert("無法取得位置，請確認已開啟定位權限。")
    );
  });
}

function renderTrackerChips() {
  const wrap = document.getElementById("tracker-chips");
  if (!wrap) return;
  const STALE_MS = 30 * 60 * 1000;
  const now = Date.now();

  const allNames = [
    ...APP_DATA.attendance.map((m) => m.name),
    ...extraMembers.map((m) => m.name),
  ];
  wrap.innerHTML = allNames.map((name) => {
    const id = memberIdFromName(name);
    const loc = teamLocations[id] || null;
    const hasLoc = loc && loc.lat && loc.lng;
    const stale = hasLoc && (now - loc.last_updated > STALE_MS);
    return `
      <button
        class="tracker-chip ${hasLoc ? (stale ? "stale" : "online") : "offline"}"
        ${hasLoc ? `data-lat="${loc.lat}" data-lng="${loc.lng}"` : "disabled"}
      >
        <span class="tracker-chip-name">${name}</span>
        <span class="tracker-chip-time">${hasLoc ? timeSince(loc.last_updated) : "未分享"}</span>
      </button>
    `;
  }).join("");

  wrap.querySelectorAll(".tracker-chip[data-lat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      jumpToCoords(parseFloat(btn.dataset.lat), parseFloat(btn.dataset.lng));
      document.getElementById("route-map-section")?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function showMemberOverlay() {
  const overlay = document.getElementById("member-overlay");
  const grid = document.getElementById("member-grid");
  if (!overlay || !grid) return;
  grid.innerHTML = APP_DATA.attendance.map((m) => `
    <button class="member-pick-btn" data-name="${m.name}">${m.name}</button>
  `).join("");
  grid.querySelectorAll(".member-pick-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setMemberIdentity(btn.dataset.name);
      overlay.hidden = true;
      renderTrackerIdentity();
    });
  });
  overlay.hidden = false;
}

function isTrackerEnabled() {
  return new Date() >= new Date("2026-04-12T20:00:00+08:00");
}

function initTrackerCard() {
  if (!isTrackerEnabled()) {
    const wrap = document.getElementById("tracker-identity");
    if (wrap) wrap.innerHTML = '<p class="muted-text tracker-disabled-note">📅 定位追蹤功能將於 4/12 晚上 8 點開放。</p>';
    return;
  }
  const identity = getMemberIdentity();
  if (!identity) showMemberOverlay();
  renderTrackerIdentity();
  renderTrackerChips();
}

// ─────────────────────────────────────────────────────────────────────────────

function initAutoReload() {
  const RELOAD_MS = 15 * 60 * 1000;
  const reloadAt = Date.now() + RELOAD_MS;
  const chip = document.getElementById("reload-chip");
  const countdownEl = document.getElementById("reload-countdown");
  if (!chip || !countdownEl) return;

  const tick = setInterval(() => {
    const remaining = Math.ceil((reloadAt - Date.now()) / 1000);
    if (remaining <= 0) {
      clearInterval(tick);
      location.reload();
      return;
    }
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    countdownEl.textContent = `${m}:${String(s).padStart(2, "0")}`;
    chip.classList.toggle("reload-chip--urgent", remaining <= 60);
  }, 1000);
}

function init() {
  initDarkMode();
  renderStrategyBoard();
  renderDistancePlan();
  renderMarchTable();
  renderSegments();
  renderRouteStrategy();
  renderTabs();
  renderDayPanel();
  initFirebase();
  initTrackerCard();
  renderGearList();
  renderAttendanceChart();
  renderMapFocusList();
  renderMapEmbed();
  initAutoReload();
}

document.addEventListener("DOMContentLoaded", init);
