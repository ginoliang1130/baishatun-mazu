const GOOGLE_MAPS_EMBED_API_KEY = "__GOOGLE_MAPS_EMBED_API_KEY__";

const APP_DATA = {
  title: "2026 白沙屯媽祖進香任務地圖",
  strategy: {
    headline: "凌晨比媽祖早到北辰派出所",
    summary:
      "因為 Day 3 在虎尾有最後一個可洗澡小休的中繼站，前三天都要多推一些，一天至少 43K，從虎尾再往北港抓 22K 會比較貼近實際。",
    milestones: [
      { label: "Day 1", targetKm: 43, walkingHours: 11, note: "拱天宮 -> 梧棲寄居蟹" },
      { label: "Day 2", targetKm: 43, walkingHours: 11, note: "寄居蟹 -> 員林火車站 / 彰化華宿行館" },
      { label: "Day 3", targetKm: 43, walkingHours: 11, note: "員林火車站 -> 虎尾阿利亞民宿" },
      { label: "虎尾 -> 北港", targetKm: 22, walkingHours: 6, note: "從虎尾中繼站一路推進北港" }
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
      lodging: null,
      spots: []
    },
    {
      id: "day1",
      shortLabel: "Day 1",
      date: "4/13",
      weekday: "一",
      title: "第一波衝刺",
      focus: "43K 起手式",
      note: "第一晚住宿在梧棲，順手把超商與洗衣點收好。",
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
      focus: "第二天 43K",
      note: "第二晚落腳彰化，補給以市區步調為主。",
      lodging: {
        name: "彰化華宿行館",
        address: "彰化縣彰化市南瑤路411號",
        label: "住宿"
      },
      spots: [
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
      focus: "43K + 虎尾到北港 22K",
      note: "這一晚是進北港前的最後中繼站，可洗澡小休，僅一間房。從虎尾再往北港推進，抓 22K 比較接近實際任務感。",
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
    { name: "Gino", status: ["✅ 4/13 才會出現", "✅", "✅", "✅", "佛系進香", "佛系進香", "佛系進香", "✅", "✅"] },
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
  activeDayId: "day1",
  activeMapFocusId: null
};

const ATTENDANCE_STORAGE_KEY = "mazu-attendance-v1";

function googleMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
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
  const totalKm = APP_DATA.strategy.milestones.reduce((sum, item) => sum + item.targetKm, 0);
  board.innerHTML = `
    <div class="stat-chip">
      <strong>前 3 天 43K / 天</strong>
      <span>把里程推滿，才能把凌晨進北港的節奏抓在手上。</span>
    </div>
    <div class="stat-chip">
      <strong>Day 3 虎尾中繼</strong>
      <span>阿利亞民宿是進北港前最後能洗澡小休的關鍵節點。</span>
    </div>
    <div class="stat-chip">
      <strong>累計 ${totalKm}K 任務線</strong>
      <span>43 + 43 + 43 + 22，目標是比媽祖更早到北辰派出所。</span>
    </div>
  `;
}

function renderDistancePlan() {
  const wrap = document.getElementById("distance-plan");
  const maxKm = Math.max(...APP_DATA.strategy.milestones.map((item) => item.targetKm));
  wrap.innerHTML = APP_DATA.strategy.milestones
    .map(
      (item) => `
        <div class="distance-item">
          <strong>${item.label}</strong>
          <div class="mini-label">${item.note}</div>
          <div class="progress-track">
            <div class="progress-value" style="width:${(item.targetKm / maxKm) * 100}%"></div>
          </div>
          <div class="mini-label">${item.targetKm}K${item.walkingHours ? `・約 ${item.walkingHours} 小時` : ""}</div>
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
        <a class="mini-link" href="${googleMapsUrl(mapQuery)}" target="_blank" rel="noreferrer">Google 導航</a>
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
      </div>
      <div class="info-card">
        <h3>${day.shortLabel}｜${day.title}</h3>
        <p>${day.note}</p>
      </div>
      <div class="detail-grid">
        ${detailItems.length ? detailItems.map(renderLocationCard).join("") : '<article class="detail-card"><h3>當日任務</h3><p>今天以移動與整隊為主，暫無固定補給點。</p></article>'}
      </div>
    </section>
  `;
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
  renderSegments();
  renderTabs();
  renderDayPanel();
  renderAttendanceTable();
  renderMapFocusList();
  renderMapEmbed();
}

document.addEventListener("DOMContentLoaded", init);
