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
      { day: "D0-D1", route: "白沙屯 ➔ 大甲 ➔ 梧棲",      km: 43.5, cumKm: 43.5,  tip: "22:00 提前起步，09:00 大甲起步，中午進梧棲" },
      { day: "D2",    route: "梧棲 ➔ 彰化 ➔ 員林",         km: 42.5, cumKm: 86.0,  tip: "00:00 出發，先過大肚溪橋，中午進員林補眠" },
      { day: "D3",    route: "員林 ➔ 西螺 ➔ 虎尾",         km: 44.0, cumKm: 130.0, tip: "01:00 過西螺大橋，12:30 前到虎尾，當晚 19:00 熄燈" },
      { day: "D4",    route: "虎尾 ➔ 北港朝天宮",           km: 20.5, cumKm: 150.5, tip: "⚠️ 23:30 虎尾起步，北辰為休息點，終點是朝天宮" },
      { day: "D5",    route: "北港 ➔ 烏日（赫絲珀）",       km: 33.0, cumKm: 183.5, tip: "刈火後起駕，入住烏日修復體力" },
      { day: "D6",    route: "烏日 ➔ 梧棲（寄居蟹）",       km: 24.0, cumKm: 207.5, tip: "避開雙媽會擁擠段，回棲身處大休" },
      { day: "D7",    route: "梧棲 ➔ 通霄（阿瓜家）",       km: 36.5, cumKm: 244.0, tip: "進入家鄉段，最後體能燃燒" },
      { day: "D8",    route: "通霄 ➔ 白沙屯拱天宮",         km: 10.5, cumKm: 254.5, tip: "陪媽祖走完最後一哩路，回宮安座" }
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
      type: "關鍵目標",
      address: "雲林縣北港鎮北辰路1號",
      query: "北辰派出所 雲林縣北港鎮北辰路1號",
      fallback: [23.5712, 120.3044]
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
      strategy: "終點是北港朝天宮，北辰派出所只是媽祖入廟前的最後休息點。⚠️ 45 萬人潮：守候北辰組於北辰等媽祖後提早撤退；衝刺朝天宮組清晨 5 點直接前往卡位。嚴禁猜測媽祖路線，神轎可能在土庫或元長繞很久，你們不要等。",
      coords: [23.571, 120.304],
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

const state = {
  activeDayId: "day0",
  activeMapFocusId: null
};

const ATTENDANCE_STORAGE_KEY = "mazu-attendance-v1";
const GEAR_STORAGE_KEY = "mazu-gear-v1";

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
              <td><strong>${row.day}</strong></td>
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
        ${day.coords ? '<div class="summary-pill weather-pill" id="weather-widget"><span class="weather-loading">天氣載入中…</span></div>' : ""}
      </div>
      <div class="info-card">
        <h3>${day.shortLabel}｜${day.title}</h3>
        <p>${day.note}</p>
        ${day.strategy ? `<p class="day-strategy-note">${day.strategy}</p>` : ""}
      </div>
      <div class="detail-grid">
        ${detailItems.length ? detailItems.map(renderLocationCard).join("") : '<article class="detail-card"><h3>當日任務</h3><p>今天以移動與整隊為主，暫無固定補給點。</p></article>'}
      </div>
    </section>
  `;

  if (day.coords) {
    const [month, d] = day.date.split("/");
    const dateISO = `2026-${month.padStart(2, "0")}-${d.padStart(2, "0")}`;
    fetchDayWeather(day.id, day.coords[0], day.coords[1], dateISO);
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
          note: typeof cell?.note === "string" ? cell.note : defaultCell.note
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

function getGearState() {
  try {
    const raw = localStorage.getItem(GEAR_STORAGE_KEY);
    if (!raw) return GEAR_ITEMS.map(() => false);
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return GEAR_ITEMS.map(() => false);
    return GEAR_ITEMS.map((_, i) => typeof parsed[i] === "boolean" ? parsed[i] : false);
  } catch {
    return GEAR_ITEMS.map(() => false);
  }
}

function saveGearState(state) {
  localStorage.setItem(GEAR_STORAGE_KEY, JSON.stringify(state));
}

function renderGearList() {
  const wrap = document.getElementById("gear-list");
  const gearState = getGearState();

  wrap.innerHTML = GEAR_ITEMS.map((item, index) => `
    <label class="gear-item ${gearState[index] ? "checked" : ""}">
      <input type="checkbox" data-gear-index="${index}" ${gearState[index] ? "checked" : ""} />
      <span>${item}</span>
    </label>
  `).join("");

  wrap.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.addEventListener("change", (e) => {
      const gearState = getGearState();
      gearState[Number(e.currentTarget.dataset.gearIndex)] = e.currentTarget.checked;
      saveGearState(gearState);
      renderGearList();
    });
  });

  document.getElementById("gear-reset").addEventListener("click", () => {
    saveGearState(GEAR_ITEMS.map(() => false));
    renderGearList();
  });
}

const weatherCache = {};

function weatherCodeInfo(code) {
  if (code === 0) return { emoji: "☀️", text: "晴天" };
  if (code <= 3) return { emoji: "⛅", text: "多雲" };
  if (code <= 48) return { emoji: "🌫️", text: "有霧" };
  if (code <= 55) return { emoji: "🌦️", text: "毛毛雨" };
  if (code <= 65) return { emoji: "🌧️", text: "有雨" };
  if (code <= 75) return { emoji: "❄️", text: "降雪" };
  if (code <= 82) return { emoji: "🌦️", text: "陣雨" };
  if (code <= 86) return { emoji: "❄️", text: "雪陣" };
  return { emoji: "⛈️", text: "雷雨" };
}

async function fetchDayWeather(dayId, lat, lng, dateISO) {
  const widget = document.getElementById("weather-widget");
  if (!widget) return;

  if (weatherCache[dayId]) {
    renderWeatherWidget(widget, weatherCache[dayId]);
    return;
  }

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_mean,weathercode&timezone=Asia%2FTaipei&start_date=${dateISO}&end_date=${dateISO}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (data.error) throw new Error();
    const daily = data.daily;
    const idx = daily.time.indexOf(dateISO);
    if (idx === -1) throw new Error();
    const weather = {
      maxTemp: daily.temperature_2m_max[idx],
      minTemp: daily.temperature_2m_min[idx],
      precipProb: daily.precipitation_probability_mean[idx],
      code: daily.weathercode[idx]
    };
    weatherCache[dayId] = weather;
    renderWeatherWidget(widget, weather);
  } catch {
    if (widget) widget.remove();
  }
}

function renderWeatherWidget(widget, weather) {
  const info = weatherCodeInfo(weather.code);
  widget.innerHTML = `
    <div class="weather-card">
      <span class="weather-emoji">${info.emoji}</span>
      <span class="weather-desc">${info.text}</span>
      <span class="weather-temp">${Math.round(weather.minTemp)}–${Math.round(weather.maxTemp)}°C</span>
      <span class="weather-precip">降雨 ${Math.round(weather.precipProb)}%</span>
    </div>
  `;
}

function toggleAttendance(memberIndex, dayIndex, checked) {
  const attendanceState = getAttendanceState();
  attendanceState[memberIndex][dayIndex].checked = checked;
  saveAttendanceState(attendanceState);
}

function renderAttendanceCell(member, memberIndex, dayIndex, cellState) {
  const inputId = `attendance-${memberIndex}-${dayIndex}`;
  const note = cellState.note ? `<span class="attendance-note">${cellState.note}</span>` : "";

  return `
    <td>
      <label class="attendance-toggle" for="${inputId}">
        <input id="${inputId}" type="checkbox" data-member-index="${memberIndex}" data-day-index="${dayIndex}" ${cellState.checked ? "checked" : ""} />
      </label>
      ${note}
    </td>
  `;
}

function renderAttendanceTable() {
  const table = document.getElementById("attendance-table");
  const attendanceState = getAttendanceState();
  table.innerHTML = `
    <thead>
      <tr>
        <th>姓名 / Date</th>
        ${APP_DATA.attendanceDays.map((day) => `<th>${day}</th>`).join("")}
      </tr>
    </thead>
    <tbody>
      ${APP_DATA.attendance
        .map(
          (member, memberIndex) => `
            <tr>
              <td><span class="attendance-name">${member.name}</span></td>
              ${attendanceState[memberIndex]
                .map((cellState, dayIndex) => renderAttendanceCell(member, memberIndex, dayIndex, cellState))
                .join("")}
            </tr>
          `
        )
        .join("")}
    </tbody>
  `;

  table.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.addEventListener("change", (event) => {
      const memberIndex = Number(event.currentTarget.dataset.memberIndex);
      const dayIndex = Number(event.currentTarget.dataset.dayIndex);
      toggleAttendance(memberIndex, dayIndex, event.currentTarget.checked);
    });
  });
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

function init() {
  renderStrategyBoard();
  renderDistancePlan();
  renderMarchTable();
  renderSegments();
  renderTabs();
  renderDayPanel();
  renderGearList();
  renderAttendanceTable();
  renderMapFocusList();
  renderMapEmbed();
}

document.addEventListener("DOMContentLoaded", init);
