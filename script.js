const gpus = [
  { name: "GTX 1050 Ti (4GB)", score: 26, power: 0.36, tdp: 75, vram: 4, rank: 8, src: "Specs + Est." },
  { name: "GTX 1650 (4GB)", score: 35, power: 0.49, tdp: 75, vram: 4, rank: 7, src: "Specs + Est." },
  { name: "GTX 1660 Super (6GB)", score: 48, power: 0.67, tdp: 125, vram: 6, rank: 6, src: "Specs + Est." },
  { name: "RTX 3050 (8GB)", score: 52, power: 0.72, tdp: 130, vram: 8, rank: 6, src: "Specs + Est." },
  { name: "RX 6600 (8GB)", score: 66, power: 0.92, tdp: 132, vram: 8, rank: 5, src: "Specs + Est." },
  { name: "RTX 3060 (12GB)", score: 72, power: 1.00, tdp: 170, vram: 12, rank: 5, src: "Specs + Est." },
  { name: "RTX 4060 (8GB)", score: 84, power: 1.17, tdp: 115, vram: 8, rank: 4, src: "Specs + Est." },
  { name: "RTX 4060 Ti (8GB/16GB)", score: 96, power: 1.33, tdp: 165, vram: 16, rank: 4, src: "Specs + Est." },
  { name: "RX 7800 XT (16GB)", score: 108, power: 1.50, tdp: 263, vram: 16, rank: 3, src: "Specs + Est." },
  { name: "RTX 4070 / 4070 Super (12GB)", score: 118, power: 1.64, tdp: 220, vram: 12, rank: 3, src: "Specs + Est." },
  { name: "RTX 5070 (12GB GDDR7)", score: 128, power: 1.78, tdp: 250, vram: 12, rank: 2, src: "Specs + Est." },
  { name: "RX 9070 XT (16GB)", score: 140, power: 1.94, tdp: 304, vram: 16, rank: 2, src: "Specs + Est." },
  { name: "RTX 4080 Super (16GB)", score: 148, power: 2.06, tdp: 320, vram: 16, rank: 2, src: "Specs + Est." },
  { name: "RTX 5080 (16GB GDDR7)", score: 162, power: 2.25, tdp: 360, vram: 16, rank: 1, src: "Specs + Est." },
  { name: "RTX 4090 (24GB)", score: 175, power: 2.43, tdp: 450, vram: 24, rank: 1, src: "Specs + Est." },
  { name: "RTX 5090 (32GB GDDR7)", score: 215, power: 2.98, tdp: 575, vram: 32, rank: 1, src: "Specs + Est." }
];

const cpus = [
  { name: "Core i3-12100F", score: 48, power: 0.68, tdp: 58, rank: 7, src: "Specs + Est." },
  { name: "Ryzen 5 3600", score: 55, power: 0.76, tdp: 65, rank: 6, src: "Specs + Est." },
  { name: "Ryzen 5 5600", score: 70, power: 0.93, tdp: 65, rank: 5, src: "Specs + Est." },
  { name: "Ryzen 7 5600X / 5700X", score: 76, power: 1.00, tdp: 65, rank: 5, src: "Specs + Est." },
  { name: "Core i5-12400F / 12600K", score: 82, power: 1.07, tdp: 117, rank: 4, src: "Specs + Est." },
  { name: "Ryzen 5 7600X / 9600X", score: 90, power: 1.16, tdp: 105, rank: 4, src: "Specs + Est." },
  { name: "Ryzen 7 5800X3D", score: 98, power: 1.25, tdp: 105, rank: 3, src: "Specs + Est." },
  { name: "Core i5-13600K / 14600K", score: 104, power: 1.31, tdp: 125, rank: 3, src: "Specs + Est." },
  { name: "Ryzen 7 7800X3D", score: 126, power: 1.55, tdp: 120, rank: 2, src: "Specs + Est." },
  { name: "Core i9-14900K", score: 130, power: 1.59, tdp: 150, rank: 2, src: "Specs + Est." },
  { name: "Ryzen 7 9800X3D", score: 145, power: 1.75, tdp: 120, rank: 1, src: "Specs + Est." },
  { name: "Ryzen 9 9950X3D", score: 152, power: 1.83, tdp: 170, rank: 1, src: "Specs + Est." }
];

const presetMults = { low: 0.74, medium: 0.89, high: 1.0, ultra: 1.26 };

const baseGames = [
  { id: "fh6_2026", title: "Forza Horizon 6 (2026)", cat: "sim", year: 2026, refFps: 72, minRam: 8, recRam: 16, minVram: 6, ver: "v1.04", upd: "2026-10-15", src: "Ref + Est." },
  { id: "rer_2026", title: "Resident Evil Requiem (2026)", cat: "action", year: 2026, refFps: 68, minRam: 12, recRam: 16, minVram: 8, ver: "v1.02", upd: "2026-10-20", src: "Ref + Est." },
  { id: "mw4_2026", title: "Call of Duty: Modern Warfare 4 (2026)", cat: "fps", year: 2026, refFps: 88, minRam: 12, recRam: 16, minVram: 6, ver: "S01", upd: "2026-11-02", src: "Ref + Est." },
  { id: "beamng", title: "BeamNG.drive", cat: "sim", year: 2025, refFps: 62, minRam: 16, recRam: 32, minVram: 6, ver: "v0.33", upd: "2026-10-27", src: "Ref + Est." },
  { id: "ets2", title: "Euro Truck Simulator 2", cat: "sim", year: 2024, refFps: 92, minRam: 8, recRam: 16, minVram: 4, ver: "v1.51+", upd: "2026-08-12", src: "Ref + Est." },
  { id: "ac", title: "Assetto Corsa (CSP)", cat: "sim", year: 2024, refFps: 88, minRam: 8, recRam: 16, minVram: 4, ver: "CSP 0.2+", upd: "2026-09-04", src: "Ref + Est." },
  { id: "gtav", title: "Grand Theft Auto V / FiveM", cat: "action", year: 2024, refFps: 98, minRam: 8, recRam: 16, minVram: 4, ver: "b3258", upd: "2026-09-21", src: "Ref + Est." },
  { id: "rdr2", title: "Red Dead Redemption 2", cat: "action", year: 2023, refFps: 64, minRam: 12, recRam: 16, minVram: 6, ver: "v1491", upd: "2026-08-29", src: "Ref + Est." },
  { id: "cp2077", title: "Cyberpunk 2077", cat: "action", year: 2024, refFps: 58, minRam: 16, recRam: 24, minVram: 8, ver: "v2.12+", upd: "2026-09-11", src: "Ref + Est." },
  { id: "cs2", title: "Counter-Strike 2", cat: "fps", year: 2024, refFps: 145, minRam: 8, recRam: 16, minVram: 4, ver: "2026 Patch", upd: "2026-10-12", src: "Ref + Est." },
  { id: "val", title: "Valorant", cat: "fps", year: 2024, refFps: 195, minRam: 8, recRam: 16, minVram: 2, ver: "2026 Patch", upd: "2026-10-12", src: "Ref + Est." },
  { id: "wukong", title: "Black Myth: Wukong", cat: "rpg", year: 2024, refFps: 52, minRam: 16, recRam: 32, minVram: 8, ver: "v1.12", upd: "2026-08-22", src: "Ref + Est." }
];

const aliases = {
  fh6_2026: ["fh6", "forza 6", "فورزا"],
  rer_2026: ["requiem", "re9", "ريزدنت"],
  mw4_2026: ["mw4", "cod", "كول اوف ديوتي"],
  beamng: ["بيم", "فيزياء"],
  ets2: ["شاحنات", "يورو تراك"],
  ac: ["اسيتو", "درفت"],
  gtav: ["gta", "fivem", "قراند", "فايف ام"],
  rdr2: ["red dead", "ريد ديد"],
  cp2077: ["cyberpunk", "سايبربانك"]
};

const i18n = {
  ar: {
    heroTitle: "FPS Lab 3.0 — منصة تحليل أداء الألعاب والعتاد",
    heroSub: "تقدير FPS و 1% Low، عنق الزجاجة، DLSS/FSR/XeSS، الترقية، التوافق، المتطلبات، الأعطال، وحفظ التجميعات",
    disclaimer: "⚠️ تنبيه: جميع أرقام FPS و 1% Low تقديرية وليست قياسات مخبرية مباشرة من اللعبة، وتخضع لهامش خطأ حسب المشاهد والإعدادات والمودات.",
    tabLab: "🎮 الألعاب والمتطلبات",
    tabAnalysis: "🔬 التحليل والترقية والتوافق",
    tabRankings: "🏆 الرسوم والترتيب",
    tabTools: "🛠️ الأعطال والمجتمع والسجل",
    specsTitle: "🖥️ مواصفات الجهاز وإعدادات التشغيل",
    detectBtn: "🔍 اكتشاف عتاد المتصفح",
    lblGpu: "كرت الشاشة (GPU)",
    lblCpu: "المعالج (CPU)",
    lblRam: "الذاكرة العشوائية (RAM)",
    lblRes: "دقة الشاشة",
    lblHz: "تردد الشاشة (Hz)",
    lblPreset: "جودة الرسوم (Preset)",
    lblUpscale: "DLSS / FSR / XeSS / FG",
    gpuPh: "بحث سريع عن كرت...",
    cpuPh: "بحث سريع عن معالج...",
    obsOff: "🎥 OBS: مغلق",
    obsOn: "🎥 OBS: مفعّل",
    modsOff: "🧩 مودات ثقيلة: مغلق",
    modsOn: "🧩 مودات ثقيلة: مفعّل",
    rtOff: "🔆 Ray Tracing: مغلق",
    rtOn: "🔆 Ray Tracing: مفعّل",
    saveSnap: "📌 حفظ لقطة في السجل",
    shareBtn: "🔗 نسخ رابط التجميعة",
    buildPh: "اسم التجميعة...",
    saveBuild: "💾 حفظ التجميعة",
    toggleJson: "📦 JSON",
    copyJson: "📋 نسخ JSON",
    loadJson: "♻️ استرجاع JSON",
    finderTitle: "🎯 مستكشف الألعاب وفاحص المتطلبات",
    lblSearch: "بحث باسم اللعبة",
    lblCat: "التصنيف",
    lblSort: "الترتيب",
    addGameTitle: "➕ إضافة لعبة مخصصة",
    lblNewTitle: "اسم اللعبة",
    lblNewFps: "مرجع 1080p High التقديري",
    lblNewRam: "الرام الموصى به",
    newGamePh: "اسم اللعبة...",
    addGameBtn: "+ إضافة اللعبة",
    diagTitle: "🔬 محلل عنق الزجاجة، التحسين، الرفع، الشاشة، التوافق، والحرارة",
    upgTitle: "⬆️ مستشار الترقية ومقارنة ترقية كرت الشاشة",
    lblTargetGpu: "اختر كرت شاشة للمقارنة والترقية",
    chartTitle: "📊 رسم بياني للأداء التقديري (Avg FPS & 1% Low)",
    lblChartGame: "اللعبة",
    lblChartMode: "نمط الرسم",
    rankTitle: "🏆 ترتيب كروت الشاشة والمعالجات",
    troubleTitle: "🩺 مستكشف أعطال الأداء",
    lblTrouble: "اختر المشكلة",
    commTitle: "👥 معايرات المجتمع (منفصلة عن المرجع)",
    lblCommGame: "اسم اللعبة",
    lblCommAvg: "متوسط FPS",
    lblCommLow: "1% Low",
    addComm: "+ إضافة نتيجة مجتمع",
    histTitle: "🕒 سجل تتبع الأداء (FPS History)",
    clearHist: "حذف السجل",
    reset: "↺ إعادة ضبط",
    footLeft: "FPS Lab 3.0 — نتائج تقديرية لأغراض التحليل والمقارنة",
    footRight: "تطوير: NeoX Dev"
  },
  en: {
    heroTitle: "FPS Lab 3.0 — Game Performance & Hardware Platform",
    heroSub: "Estimated FPS & 1% Low, bottleneck, DLSS/FSR/XeSS, upgrades, compatibility, requirements, troubleshooter & builds",
    disclaimer: "⚠️ Notice: All FPS and 1% Low figures are estimates, not direct lab measurements, and vary by scene, settings, and mods.",
    tabLab: "🎮 Games & Requirements",
    tabAnalysis: "🔬 Analysis & Upgrades",
    tabRankings: "🏆 Charts & Rankings",
    tabTools: "🛠️ Troubleshooter & History",
    specsTitle: "🖥️ Hardware Specs & Session Settings",
    detectBtn: "🔍 Auto Detect Browser PC",
    lblGpu: "Graphics Card (GPU)",
    lblCpu: "Processor (CPU)",
    lblRam: "System Memory (RAM)",
    lblRes: "Resolution",
    lblHz: "Monitor Refresh (Hz)",
    lblPreset: "Graphics Preset",
    lblUpscale: "DLSS / FSR / XeSS / FG",
    gpuPh: "Quick GPU search...",
    cpuPh: "Quick CPU search...",
    obsOff: "🎥 OBS: Off",
    obsOn: "🎥 OBS: On",
    modsOff: "🧩 Heavy Mods: Off",
    modsOn: "🧩 Heavy Mods: On",
    rtOff: "🔆 Ray Tracing: Off",
    rtOn: "🔆 Ray Tracing: On",
    saveSnap: "📌 Save Snapshot",
    shareBtn: "🔗 Copy Share Link",
    buildPh: "Build name...",
    saveBuild: "💾 Save Build",
    toggleJson: "📦 JSON",
    copyJson: "📋 Copy JSON",
    loadJson: "♻️ Load JSON",
    finderTitle: "🎯 Game Finder & Requirements Checker",
    lblSearch: "Search game",
    lblCat: "Category",
    lblSort: "Sort by",
    addGameTitle: "➕ Add Custom Game",
    lblNewTitle: "Game Title",
    lblNewFps: "Estimated 1080p High Ref",
    lblNewRam: "Recommended RAM",
    newGamePh: "Game name...",
    addGameBtn: "+ Add Game",
    diagTitle: "🔬 Bottleneck, Optimizer, Upscaling, Hz, Compatibility & Thermals",
    upgTitle: "⬆️ Upgrade Advisor & GPU Upgrade Comparison",
    lblTargetGpu: "Select target GPU to compare",
    chartTitle: "📊 Estimated Performance Chart (Avg FPS & 1% Low)",
    lblChartGame: "Game",
    lblChartMode: "Chart Mode",
    rankTitle: "🏆 GPU & CPU Rankings",
    troubleTitle: "🩺 PC Performance Troubleshooter",
    lblTrouble: "Select issue",
    commTitle: "👥 Community Benchmarks (Separate from Reference)",
    lblCommGame: "Game Title",
    lblCommAvg: "Reported Avg FPS",
    lblCommLow: "Reported 1% Low",
    addComm: "+ Add Community Result",
    histTitle: "🕒 FPS History Log",
    clearHist: "Clear Log",
    reset: "↺ Reset",
    footLeft: "FPS Lab 3.0 — Estimated figures for analysis & comparison",
    footRight: "Dev: NeoX Dev"
  }
};

const mem = new Map();
function getStore(k, fb = "") {
  try { const v = window.localStorage.getItem(k); return v !== null ? v : fb; }
  catch { return mem.has(k) ? mem.get(k) : fb; }
}
function setStore(k, v) {
  try { window.localStorage.setItem(k, v); }
  catch { mem.set(k, v); }
}
function parseJson(raw, fb) {
  if (!raw) return fb;
  try { return JSON.parse(raw) ?? fb; } catch { return fb; }
}
function clean(s, max = 100) {
  if (typeof s !== "string") return "";
  return s.replace(/[<>&"'`]/g, "").replace(/\s+/g, " ").trim().slice(0, max);
}
function norm(s) {
  return clean(s, 100).toLowerCase().replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي").trim();
}

const el = (id) => document.getElementById(id);

let lang = "ar";
let themeIdx = 0;
const themes = [
  { cls: "", ar: "🎨 داكن", en: "🎨 Dark" },
  { cls: "theme-neon", ar: "🎨 نيون", en: "🎨 Neon" },
  { cls: "theme-light", ar: "🎨 فاتح", en: "🎨 Light" }
];

let obsOn = false;
let modsOn = false;
let rtOn = false;

let customGames = parseJson(getStore("fps3_cg", "[]"), []);
let favIds = parseJson(getStore("fps3_favs", "[]"), []);
let savedBuilds = parseJson(getStore("fps3_builds", "[]"), []);
let histItems = parseJson(getStore("fps3_hist", "[]"), []);
let commItems = parseJson(getStore("fps3_comm", "[]"), [
  { game: "BeamNG.drive", avg: 64, low1: 45, date: "2026-10-28" }
]);

function applyStaticLabels() {
  const t = i18n[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  [
    ["heroTitle", t.heroTitle], ["heroSub", t.heroSub], ["disclaimerBox", t.disclaimer],
    ["tabLab", t.tabLab], ["tabAnalysis", t.tabAnalysis], ["tabRankings", t.tabRankings], ["tabTools", t.tabTools],
    ["specsTitle", t.specsTitle], ["detectBtn", t.detectBtn],
    ["lblGpu", t.lblGpu], ["lblCpu", t.lblCpu], ["lblRam", t.lblRam], ["lblRes", t.lblRes],
    ["lblHz", t.lblHz], ["lblPreset", t.lblPreset], ["lblUpscale", t.lblUpscale],
    ["saveSnapBtn", t.saveSnap], ["shareBtn", t.shareBtn], ["saveBuildBtn", t.saveBuild],
    ["toggleJsonBtn", t.toggleJson], ["copyJsonBtn", t.copyJson], ["loadJsonBtn", t.loadJson],
    ["finderTitle", t.finderTitle], ["lblSearch", t.lblSearch], ["lblCat", t.lblCat], ["lblSort", t.lblSort],
    ["addGameTitle", t.addGameTitle], ["lblNewTitle", t.lblNewTitle], ["lblNewFps", t.lblNewFps], ["lblNewRam", t.lblNewRam],
    ["addGameBtn", t.addGameBtn], ["diagTitle", t.diagTitle], ["upgTitle", t.upgTitle], ["lblTargetGpu", t.lblTargetGpu],
    ["chartTitle", t.chartTitle], ["lblChartGame", t.lblChartGame], ["lblChartMode", t.lblChartMode],
    ["rankTitle", t.rankTitle], ["troubleTitle", t.troubleTitle], ["lblTrouble", t.lblTrouble],
    ["commTitle", t.commTitle], ["lblCommGame", t.lblCommGame], ["lblCommAvg", t.lblCommAvg], ["lblCommLow", t.lblCommLow],
    ["addCommBtn", t.addComm], ["histTitle", t.histTitle], ["clearHistBtn", t.clearHist], ["resetBtn", t.reset],
    ["footLeft", t.footLeft], ["footRight", t.footRight]
  ].forEach(([id, val]) => { if (el(id)) el(id).textContent = val; });

  el("gpuFilter").placeholder = t.gpuPh;
  el("cpuFilter").placeholder = t.cpuPh;
  el("buildName").placeholder = t.buildPh;
  el("newTitle").placeholder = t.newGamePh;
  el("commGame").placeholder = t.lblCommGame;
  el("themeBtn").textContent = themes[themeIdx][lang];
  el("langBtn").textContent = lang === "ar" ? "🌐 English" : "🌐 العربية";

  el("obsBtn").textContent = obsOn ? t.obsOn : t.obsOff;
  el("modsBtn").textContent = modsOn ? t.modsOn : t.modsOff;
  el("rtBtn").textContent = rtOn ? t.rtOn : t.rtOff;

  const prevUp = el("upscaleSelect").value || "1";
  el("upscaleSelect").innerHTML = lang === "ar"
    ? `<option value="1">Native (إيقاف)</option><option value="1.22">DLSS / FSR / XeSS Quality (~+22%)</option><option value="1.38">DLSS / FSR / XeSS Perf (~+38%)</option><option value="1.65">Frame Generation (~+65%)</option>`
    : `<option value="1">Native (Off)</option><option value="1.22">DLSS / FSR / XeSS Quality (~+22%)</option><option value="1.38">DLSS / FSR / XeSS Perf (~+38%)</option><option value="1.65">Frame Generation (~+65%)</option>`;
  el("upscaleSelect").value = prevUp;

  const prevCat = el("catFilter").value || "all";
  el("catFilter").innerHTML = lang === "ar"
    ? `<option value="all">الكل</option><option value="y2026">ألعاب 2026</option><option value="fav">المفضلة</option><option value="sim">محاكاة</option><option value="action">أكشن وعالم مفتوح</option><option value="fps">شوتر</option><option value="rpg">RPG</option>`
    : `<option value="all">All</option><option value="y2026">2026 Games</option><option value="fav">Favorites</option><option value="sim">Simulation</option><option value="action">Action / Open World</option><option value="fps">FPS</option><option value="rpg">RPG</option>`;
  el("catFilter").value = prevCat;

  const prevSort = el("sortFilter").value || "default";
  el("sortFilter").innerHTML = lang === "ar"
    ? `<option value="default">المفضلة والافتراضي</option><option value="fps-desc">الأعلى فريمات تقديرياً</option><option value="fps-asc">الأقل فريمات تقديرياً</option><option value="alpha">الاسم (A-Z)</option>`
    : `<option value="default">Favorites & Default</option><option value="fps-desc">Highest Est. FPS</option><option value="fps-asc">Lowest Est. FPS</option><option value="alpha">Name (A-Z)</option>`;
  el("sortFilter").value = prevSort;

  const prevChartMode = el("chartMode").value || "res";
  el("chartMode").innerHTML = lang === "ar"
    ? `<option value="res">حسب الدقة (1080p / 1440p / 2160p)</option><option value="upscale">Native مقابل DLSS/FSR/XeSS/FG</option>`
    : `<option value="res">By Resolution (1080p / 1440p / 2160p)</option><option value="upscale">Native vs DLSS/FSR/XeSS/FG</option>`;
  el("chartMode").value = prevChartMode;

  const prevTr = el("troubleSelect").value || "stutter";
  el("troubleSelect").innerHTML = lang === "ar"
    ? `<option value="stutter">تقطيع وهبوط في 1% Low</option><option value="lowfps">انخفاض عام في الفريمات</option><option value="vram">امتلاء VRAM</option><option value="temp">حرارة وخفض الأداء (Throttling)</option>`
    : `<option value="stutter">Stutter & 1% Low Drops</option><option value="lowfps">Low Overall FPS</option><option value="vram">VRAM Pressure</option><option value="temp">Thermal Throttling</option>`;
  el("troubleSelect").value = prevTr;
}

function populateLists() {
  const gQ = norm(el("gpuFilter").value);
  const cQ = norm(el("cpuFilter").value);
  const curG = Number(el("gpuSelect").value) || 5;
  const curC = Number(el("cpuSelect").value) || 3;

  el("gpuSelect").innerHTML = "";
  gpus.forEach((g, i) => {
    if (!gQ || norm(g.name).includes(gQ) || i === curG) {
      el("gpuSelect").innerHTML += `<option value="${i}" ${i === curG ? "selected" : ""}>${g.name}</option>`;
    }
  });

  el("cpuSelect").innerHTML = "";
  cpus.forEach((c, i) => {
    if (!cQ || norm(c.name).includes(cQ) || i === curC) {
      el("cpuSelect").innerHTML += `<option value="${i}" ${i === curC ? "selected" : ""}>${c.name}</option>`;
    }
  });

  if (!el("targetGpu").options.length) {
    gpus.forEach((g, i) => {
      el("targetGpu").innerHTML += `<option value="${i}" ${i === 9 ? "selected" : ""}>${g.name}</option>`;
    });
  }

  const all = [...customGames, ...baseGames];
  const prevCg = el("chartGame").value;
  el("chartGame").innerHTML = `<option value="__avg__">${lang === "ar" ? "متوسط الأداء التقديري" : "Average Est. Performance"}</option>`;
  all.forEach((g) => {
    el("chartGame").innerHTML += `<option value="${clean(g.id, 40)}">${clean(g.title, 70)}</option>`;
  });
  if (prevCg && [...el("chartGame").options].some((o) => o.value === prevCg)) el("chartGame").value = prevCg;
}

function runAutoDetect() {
  const cores = navigator.hardwareConcurrency || "N/A";
  const memGb = navigator.deviceMemory ? `~${navigator.deviceMemory} GB` : "N/A";
  const scr = `${window.screen.width}x${window.screen.height}`;
  let glInfo = "N/A";
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl") || c.getContext("experimental-webgl");
    if (gl) {
      const ext = gl.getExtension("WEBGL_debug_renderer_info");
      if (ext) glInfo = clean(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL), 90);
    }
  } catch {}

  el("detectBox").innerHTML = lang === "ar"
    ? `<strong>🔍 Automatic PC Detection (بيانات المتصفح):</strong><br>• الأنوية المتاحة: <strong>${cores}</strong> | ذاكرة المتصفح التقديرية: <strong>${memGb}</strong> | الشاشة: <strong>${scr}</strong><br>• عارض WebGL: <strong>${glInfo}</strong> (اختر كرتك ومعالجك بدقة من القوائم أعلاه).`
    : `<strong>🔍 Automatic PC Detection (Browser Signals):</strong><br>• Cores: <strong>${cores}</strong> | Est. Memory: <strong>${memGb}</strong> | Screen: <strong>${scr}</strong><br>• WebGL Renderer: <strong>${glInfo}</strong> (Select your exact GPU & CPU above).`;
}

function calcEst(game, gpu, cpu, ram, resMult, upMult, preset) {
  const pF = presetMults[preset] || 1.0;
  const modF = (obsOn ? 0.86 : 1.0) * (modsOn ? 0.78 : 1.0) * (rtOn ? 0.72 : 1.0);
  const gW = resMult < 1 ? 0.84 : (game.cat === "fps" || game.cat === "sim" ? 0.68 : 0.78);
  const cW = 1 - gW;

  let avg = (game.refFps * ((gpu.power * resMult * gW) + (cpu.power * cW)) * upMult * modF) / pF;

  let needRam = preset === "ultra" ? game.recRam + 4 : game.recRam;
  if (modsOn) needRam += 4;
  if (obsOn) needRam += 4;

  let ramPen = 1;
  if (ram < needRam) {
    ramPen = Math.max(0.45, ram / needRam);
    avg *= ramPen;
  }

  const cAvg = Math.max(12, Math.min(340, Math.round(avg)));
  const margin = (ramPen < 1 || modsOn || rtOn) ? 18 : 13;
  const d = Math.max(4, Math.round(cAvg * (margin / 100)));
  const minF = Math.max(10, cAvg - d);
  const maxF = Math.min(360, cAvg + d);
  const low1 = Math.max(8, Math.round(cAvg * (ramPen < 1 || modsOn ? 0.66 : 0.74)));

  const natAvg = Math.max(10, Math.min(340, Math.round(avg / Math.max(1, upMult))));
  const natD = Math.max(4, Math.round(natAvg * 0.13));

  const conf = (!modsOn && !rtOn && !obsOn && ram >= needRam)
    ? (lang === "ar" ? "متوسط / تقديري أولي" : "Medium / Baseline Est.")
    : (lang === "ar" ? "تقديري متغير (ضغط/إضافات)" : "Variable Est. (Load/Mods)");

  let req = lang === "ar" ? "✅ يلبي الموصى به" : "✅ Meets Recommended";
  if (ram < game.minRam || gpu.vram < game.minVram) {
    req = lang === "ar" ? "⚠️ أقل من الحد الأدنى" : "⚠️ Below Minimum";
  } else if (ram < needRam || gpu.vram < game.minVram + 2) {
    req = lang === "ar" ? "ℹ️ يلبي الحد الأدنى" : "ℹ️ Meets Minimum";
  }

  return { avg: cAvg, minF, maxF, low1, margin, natRange: `${Math.max(10, natAvg - natD)}-${Math.min(360, natAvg + natD)}`, conf, req };
}

function renderAnalysis(gpu, cpu, ram, resMult, hz, upMult, preset) {
  const ratio = (gpu.power * resMult) / Math.max(0.25, cpu.power);
  const bn = Math.min(48, Math.round(Math.abs(ratio - 1) * 65));

  const bnTxt = lang === "ar"
    ? (ratio > 1.25 ? `عنق زجاجة معالج محتمل (~${bn}%) في الألعاب المعتمدة على المعالج.` : ratio < 0.75 ? `كرت الشاشة أضعف نسبياً من المعالج (~${bn}%).` : `توازن جيد (~${bn}% فارق تقديري).`)
    : (ratio > 1.25 ? `Possible CPU bottleneck (~${bn}%) in CPU-heavy games.` : ratio < 0.75 ? `GPU is weaker than CPU (~${bn}% gap).` : `Balanced pairing (~${bn}% est. gap).`);

  const optTxt = lang === "ar"
    ? "اخفض الظلال والضبابية أولاً، واضبط حد الإطارات بما يلائم شاشتك لاستقرار 1% Low."
    : "Lower shadows/blur first and cap FPS near monitor Hz for steadier 1% Low.";

  const upTxt = lang === "ar"
    ? (upMult > 1 ? `الرفع/توليد الإطارات مفعّل (${el("upscaleSelect").options[el("upscaleSelect").selectedIndex].text})؛ قارن دائماً مع Native.` : "الوضع الأصلي (Native) مفعّل؛ جرّب DLSS/FSR/XeSS لزيادة الفريمات التقديرية.")
    : (upMult > 1 ? `Upscaling/FG active (${el("upscaleSelect").options[el("upscaleSelect").selectedIndex].text}); compare with Native.` : "Native active; enable DLSS/FSR/XeSS for higher estimated FPS.");

  const hzTxt = lang === "ar"
    ? `الشاشة: ${hz}Hz. يُستحسن أن يقترب Avg FPS و 1% Low من ${hz} لتجربة أكثر سلاسة.`
    : `Monitor: ${hz}Hz. Aim for Avg FPS and 1% Low close to ${hz} for smoother motion.`;

  const needVram = (resMult === 0.45 ? 12 : resMult === 0.72 ? 8 : 4) + (rtOn ? 2 : 0);
  const psu = Math.ceil(((gpu.tdp + cpu.tdp + 100) * 1.35) / 50) * 50;
  const compTxt = lang === "ar"
    ? `VRAM: ${gpu.vram}GB (مقترح ~${needVram}GB) | RAM: ${ram}GB | مزود طاقة مقترح: ~${psu}W.`
    : `VRAM: ${gpu.vram}GB (est. ~${needVram}GB) | RAM: ${ram}GB | Est. PSU: ~${psu}W.`;

  const thTxt = lang === "ar"
    ? "ارتفاع حرارة المعالج أو الكرت يسبب Thermal Throttling وهبوط 1% Low؛ راقب الحرارة ونظّف التبريد."
    : "High CPU/GPU temps trigger Thermal Throttling and 1% Low drops; monitor temps and airflow.";

  el("diagGrid").innerHTML = `
    <div class="box"><strong>3. Bottleneck:</strong><br>${bnTxt}</div>
    <div class="box"><strong>4. Settings Optimizer:</strong><br>${optTxt}</div>
    <div class="box"><strong>7. DLSS / FSR / XeSS:</strong><br>${upTxt}</div>
    <div class="box"><strong>9. FPS vs Hz:</strong><br>${hzTxt}</div>
    <div class="box"><strong>10. Compatibility:</strong><br>${compTxt}</div>
    <div class="box"><strong>8. Temperature & Throttling:</strong><br>${thTxt}</div>
  `;

  const tgt = gpus[Number(el("targetGpu").value) || 0];
  const g0 = baseGames[0];
  const eCur = calcEst(g0, gpu, cpu, ram, resMult, upMult, preset);
  const eTgt = calcEst(g0, tgt, cpu, ram, resMult, upMult, preset);
  const pct = Math.round(((tgt.score - gpu.score) / Math.max(1, gpu.score)) * 100);

  const adv = lang === "ar"
    ? (ram < 16 ? "الأولوية: رفع RAM إلى 16GB/32GB." : ratio > 1.25 ? "الأولوية: ترقية المعالج لتحسين 1% Low." : `الأولوية: ترقية كرت الشاشة نحو ${tgt.name}.`)
    : (ram < 16 ? "Priority: Upgrade RAM to 16GB/32GB." : ratio > 1.25 ? "Priority: Upgrade CPU for better 1% Low." : `Priority: Upgrade GPU toward ${tgt.name}.`);

  el("upgGrid").innerHTML = `
    <div class="box"><strong>5. Upgrade Advisor:</strong><br>${adv}</div>
    <div class="box">
      <strong>6. GPU Comparison (${gpu.name} → ${tgt.name}):</strong><br>
      Score: <strong>${gpu.score} → ${tgt.score} (${pct >= 0 ? "+" : ""}${pct}%)</strong><br>
      VRAM: <strong>${gpu.vram}GB → ${tgt.vram}GB</strong> | TDP: <strong>${gpu.tdp}W → ${tgt.tdp}W</strong><br>
      ${g0.title}: <strong>~${eCur.avg} → ~${eTgt.avg} FPS (Est.)</strong>
    </div>
  `;
}

function drawChart(gpu, cpu, ram, resMult, upMult, preset) {
  const cv = el("chartCanvas");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  const w = cv.width;
  const h = cv.height;
  ctx.clearRect(0, 0, w, h);

  const all = [...customGames, ...baseGames];
  const gid = el("chartGame").value;
  const mode = el("chartMode").value;

  const sample = (rM, uM) => {
    if (gid === "__avg__") {
      const arr = all.slice(0, 8).map((g) => calcEst(g, gpu, cpu, ram, rM, uM, preset));
      return {
        avg: Math.round(arr.reduce((s, x) => s + x.avg, 0) / arr.length),
        low1: Math.round(arr.reduce((s, x) => s + x.low1, 0) / arr.length)
      };
    }
    const g = all.find((x) => x.id === gid) || baseGames[0];
    const est = calcEst(g, gpu, cpu, ram, rM, uM, preset);
    return { avg: est.avg, low1: est.low1 };
  };

  const bars = mode === "upscale"
    ? [
        { lbl: "Native", ...sample(resMult, 1.0) },
        { lbl: "Quality", ...sample(resMult, 1.22) },
        { lbl: "Perf / FG", ...sample(resMult, Math.max(1.38, upMult)) }
      ]
    : [
        { lbl: "1080p", ...sample(1.0, upMult) },
        { lbl: "1440p", ...sample(0.72, upMult) },
        { lbl: "2160p", ...sample(0.45, upMult) }
      ];

  const maxV = Math.max(100, ...bars.map((b) => b.avg));
  const baseY = h - 38;
  const topY = 26;
  const plotH = baseY - topY;
  const light = document.body.classList.contains("theme-light");
  const slotW = (w - 70) / bars.length;

  ctx.font = "12px Arial, sans-serif";
  bars.forEach((b, i) => {
    const gx = 50 + i * slotW;
    const bw = Math.min(48, slotW * 0.28);
    const hAvg = Math.max(8, (b.avg / maxV) * plotH);
    const hLow = Math.max(6, (b.low1 / maxV) * plotH);

    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(gx + slotW * 0.2, baseY - hAvg, bw, hAvg);

    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(gx + slotW * 0.2 + bw + 8, baseY - hLow, bw, hLow);

    ctx.fillStyle = light ? "#0f172a" : "#f8fafc";
    ctx.fillText(`~${b.avg}`, gx + slotW * 0.2 - 2, baseY - hAvg - 6);

    ctx.fillStyle = "#fbbf24";
    ctx.fillText(`${b.low1}`, gx + slotW * 0.2 + bw + 8, baseY - hLow - 6);

    ctx.fillStyle = light ? "#1e293b" : "#cbd5e1";
    ctx.fillText(b.lbl, gx + slotW * 0.22, h - 12);
  });
}

function renderRankings() {
  const gRows = [...gpus].sort((a, b) => b.score - a.score).slice(0, 8)
    .map((g, i) => `<tr><td>#${i + 1}</td><td>${g.name}</td><td>T${g.rank}</td><td>${g.score}</td></tr>`).join("");
  const cRows = [...cpus].sort((a, b) => b.score - a.score).slice(0, 8)
    .map((c, i) => `<tr><td>#${i + 1}</td><td>${c.name}</td><td>T${c.rank}</td><td>${c.score}</td></tr>`).join("");

  el("gpuRankBox").innerHTML = `<strong>GPU Rankings (Est.)</strong><table class="tbl"><thead><tr><th>#</th><th>GPU</th><th>Tier</th><th>Score</th></tr></thead><tbody>${gRows}</tbody></table>`;
  el("cpuRankBox").innerHTML = `<strong>CPU Rankings (Est.)</strong><table class="tbl"><thead><tr><th>#</th><th>CPU</th><th>Tier</th><th>Score</th></tr></thead><tbody>${cRows}</tbody></table>`;
}

function renderTroubleshooter() {
  const k = el("troubleSelect").value;
  const mapAr = {
    stutter: "• اضبط حد فريمات قريباً من تردد الشاشة لتثبيت Frame Pacing.<br>• راجع RAM وخاصة عند تفعيل المودات أو البث.",
    lowfps: "• اخفض الظلال والانعكاسات ودقة العرض الداخلية.<br>• جرّب DLSS / FSR / XeSS وراجع توافق الكرت والمعالج.",
    vram: "• اخفض جودة القوام (Textures) أو أوقف Ray Tracing عند امتلاء VRAM.",
    temp: "• نظّف المراوح، حسّن التهوية، وتحقق من المبرد لمنع Thermal Throttling."
  };
  const mapEn = {
    stutter: "• Cap FPS near monitor Hz to stabilize frame pacing.<br>• Check RAM headroom when using mods or streaming.",
    lowfps: "• Lower shadows, reflections, and internal render scale.<br>• Try DLSS / FSR / XeSS and check GPU/CPU pairing.",
    vram: "• Reduce Texture quality or disable Ray Tracing if VRAM is saturated.",
    temp: "• Clean dust, improve case airflow, and check cooler mount to prevent throttling."
  };
  el("troubleBox").innerHTML = (lang === "ar" ? mapAr : mapEn)[k] || (lang === "ar" ? mapAr.stutter : mapEn.stutter);
}

function renderLists() {
  el("commList").innerHTML = commItems.length
    ? commItems.map((c) => `<div class="list-item"><strong>${clean(c.game, 60)}</strong> — Avg: <strong>~${c.avg} FPS</strong> | 1% Low: <strong>~${c.low1} FPS</strong> <span class="pill p-info">${lang === "ar" ? "مجتمع" : "Community"} (${clean(c.date, 10)})</span></div>`).join("")
    : `<div class="muted">${lang === "ar" ? "لا توجد نتائج مجتمع بعد." : "No community entries yet."}</div>`;

  el("histList").innerHTML = histItems.length
    ? histItems.map((h) => `<div class="list-item">🕒 <strong>${clean(h.time, 20)}</strong> — ${clean(h.gpu, 40)} + ${clean(h.cpu, 35)} (${h.ram}GB, ${clean(h.res, 15)}) — Avg Est.: <strong>~${h.avg} FPS</strong></div>`).join("")
    : `<div class="muted">${lang === "ar" ? "السجل فارغ حالياً." : "History log is empty."}</div>`;
}

function renderBuilds() {
  el("buildsList").innerHTML = savedBuilds.map((b, i) => `
    <span class="pill p-info" style="cursor:pointer; margin-inline-end:6px; display:inline-flex; gap:6px; align-items:center;" data-b="${i}">
      <span>🖥️ ${clean(b.name, 40)}</span>
      <span data-del="${i}" style="color:#f87171; font-weight:800;">×</span>
    </span>
  `).join("");

  el("buildsList").querySelectorAll("[data-b]").forEach((node) => {
    node.addEventListener("click", (ev) => {
      if (ev.target.dataset.del !== undefined) return;
      const b = savedBuilds[Number(node.dataset.b)];
      if (!b) return;
      if (gpus[b.gpu]) el("gpuSelect").value = String(b.gpu);
      if (cpus[b.cpu]) el("cpuSelect").value = String(b.cpu);
      el("ramSelect").value = String(b.ram);
      el("resSelect").value = String(b.res);
      if (presetMults[b.preset]) el("presetSelect").value = b.preset;
      renderAll();
    });
  });

  el("buildsList").querySelectorAll("[data-del]").forEach((node) => {
    node.addEventListener("click", (ev) => {
      ev.stopPropagation();
      savedBuilds.splice(Number(node.dataset.del), 1);
      setStore("fps3_builds", JSON.stringify(savedBuilds));
      renderBuilds();
    });
  });
}

function renderGames() {
  const gpu = gpus[Number(el("gpuSelect").value) || 0];
  const cpu = cpus[Number(el("cpuSelect").value) || 0];
  const ram = Number(el("ramSelect").value);
  const resMult = Number(el("resSelect").value);
  const hz = Number(el("hzSelect").value);
  const upMult = Number(el("upscaleSelect").value);
  const preset = el("presetSelect").value;
  const q = norm(el("gameSearch").value);
  const cat = el("catFilter").value;

  el("gpuMeta").textContent = `VRAM: ${gpu.vram}GB | TDP: ${gpu.tdp}W | ${gpu.src}`;
  el("cpuMeta").textContent = `TDP: ${cpu.tdp}W | ${cpu.src}`;

  const all = [...customGames, ...baseGames];
  let list = all
    .filter((g) => {
      const isFav = favIds.includes(g.id);
      const okCat = cat === "all" || (cat === "fav" && isFav) || (cat === "y2026" && g.year === 2026) || g.cat === cat;
      const okQ = !q || norm(g.title).includes(q) || (aliases[g.id] || []).some((a) => norm(a).includes(q));
      return okCat && okQ;
    })
    .map((g) => ({ g, est: calcEst(g, gpu, cpu, ram, resMult, upMult, preset), isFav: favIds.includes(g.id) }));

  if (el("sortFilter").value === "fps-desc") list.sort((a, b) => b.est.avg - a.est.avg);
  else if (el("sortFilter").value === "fps-asc") list.sort((a, b) => a.est.avg - b.est.avg);
  else if (el("sortFilter").value === "alpha") list.sort((a, b) => a.g.title.localeCompare(b.g.title));
  else list.sort((a, b) => Number(b.isFav) - Number(a.isFav));

  el("gamesGrid").innerHTML = "";
  if (!list.length) {
    el("gamesGrid").innerHTML = `<div class="box" style="grid-column:1/-1; text-align:center;">${lang === "ar" ? "لا توجد ألعاب مطابقة." : "No matching games."}</div>`;
    return;
  }

  list.forEach(({ g, est, isFav }) => {
    let pCls = "p-good";
    let pTxt = lang === "ar" ? "سلس تقديرياً" : "Smooth Est.";
    let col = "#4ade80";
    if (est.avg < 35) { pCls = "p-bad"; pTxt = lang === "ar" ? "ثقيل تقديرياً" : "Heavy Est."; col = "#f87171"; }
    else if (est.avg < 60) { pCls = "p-mid"; pTxt = lang === "ar" ? "متوسط تقديرياً" : "Fair Est."; col = "#facc15"; }

    const pct = Math.min(100, Math.round((est.avg / 240) * 100));
    const hzTxt = est.avg >= hz
      ? (lang === "ar" ? `يغطي ${hz}Hz غالباً` : `Covers ${hz}Hz often`)
      : (lang === "ar" ? `أقل من ${hz}Hz` : `Below ${hz}Hz`);

    el("gamesGrid").innerHTML += `
      <article class="game-card ${isFav ? "fav" : ""}">
        <div>
          <div class="card-top">
            <div>
              <div class="game-name">${clean(g.title, 75)}</div>
              <div class="muted">Patch: ${clean(g.ver || "v1.0", 20)} | Updated: ${clean(g.upd || "2026-10-01", 10)} | ${clean(g.src || "Est.", 25)}</div>
            </div>
            <div style="display:flex; gap:5px;">
              <span class="pill ${pCls}">${pTxt}</span>
              <button class="btn btn-outline btn-sm" data-fav="${clean(g.id, 40)}" type="button" style="min-height:28px; padding:2px 7px;">${isFav ? "★" : "☆"}</button>
            </div>
          </div>
        </div>
        <div>
          <div class="fps-big" style="color:${col}">${est.minF}-${est.maxF} <span class="muted">FPS (±${est.margin}%)</span></div>
          <div class="low1">1% Low: ~${est.low1} FPS</div>
          ${upMult > 1 ? `<div class="muted">Native: ${est.natRange} FPS</div>` : ""}
          <div class="muted">${est.req} • ${hzTxt}</div>
          <div class="muted">${lang === "ar" ? "الثقة" : "Confidence"}: ${est.conf}</div>
        </div>
        <div class="track"><div class="fill" style="width:${pct}%; background:${col};"></div></div>
      </article>
    `;
  });

  el("gamesGrid").querySelectorAll("[data-fav]").forEach((b) => {
    b.addEventListener("click", () => {
      const id = b.dataset.fav;
      favIds = favIds.includes(id) ? favIds.filter((x) => x !== id) : [...favIds, id];
      setStore("fps3_favs", JSON.stringify(favIds));
      renderGames();
    });
  });
}

function renderAll() {
  const gpu = gpus[Number(el("gpuSelect").value) || 0];
  const cpu = cpus[Number(el("cpuSelect").value) || 0];
  const ram = Number(el("ramSelect").value);
  const resMult = Number(el("resSelect").value);
  const hz = Number(el("hzSelect").value);
  const upMult = Number(el("upscaleSelect").value);
  const preset = el("presetSelect").value;

  renderGames();
  renderAnalysis(gpu, cpu, ram, resMult, hz, upMult, preset);
  drawChart(gpu, cpu, ram, resMult, upMult, preset);
}

document.querySelectorAll(".tab-btn").forEach((b) => {
  b.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((x) => x.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
    b.classList.add("active");
    el(`panel-${b.dataset.tab}`).classList.add("active");
  });
});

el("detectBtn").addEventListener("click", runAutoDetect);

el("obsBtn").addEventListener("click", () => {
  obsOn = !obsOn;
  applyStaticLabels();
  el("obsBtn").classList.toggle("btn-green", obsOn);
  el("obsBtn").classList.toggle("btn-outline", !obsOn);
  renderAll();
});

el("modsBtn").addEventListener("click", () => {
  modsOn = !modsOn;
  applyStaticLabels();
  el("modsBtn").classList.toggle("btn-purple", modsOn);
  el("modsBtn").classList.toggle("btn-outline", !modsOn);
  renderAll();
});

el("rtBtn").addEventListener("click", () => {
  rtOn = !rtOn;
  applyStaticLabels();
  el("rtBtn").classList.toggle("btn-amber", rtOn);
  el("rtBtn").classList.toggle("btn-outline", !rtOn);
  renderAll();
});

el("saveSnapBtn").addEventListener("click", () => {
  const gpu = gpus[Number(el("gpuSelect").value) || 0];
  const cpu = cpus[Number(el("cpuSelect").value) || 0];
  const ram = Number(el("ramSelect").value);
  const resMult = Number(el("resSelect").value);
  const upMult = Number(el("upscaleSelect").value);
  const vals = baseGames.slice(0, 5).map((g) => calcEst(g, gpu, cpu, ram, resMult, upMult, el("presetSelect").value).avg);
  histItems.unshift({
    time: new Date().toISOString().slice(0, 16).replace("T", " "),
    gpu: gpu.name,
    cpu: cpu.name,
    ram,
    res: el("resSelect").options[el("resSelect").selectedIndex].text.split(" ")[0],
    avg: Math.round(vals.reduce((s, x) => s + x, 0) / vals.length)
  });
  histItems = histItems.slice(0, 15);
  setStore("fps3_hist", JSON.stringify(histItems));
  renderLists();
  el("statusBar").textContent = lang === "ar" ? "تم حفظ اللقطة في السجل." : "Snapshot saved to history.";
});

el("clearHistBtn").addEventListener("click", () => {
  histItems = [];
  setStore("fps3_hist", "[]");
  renderLists();
});

el("shareBtn").addEventListener("click", async () => {
  const u = new URL(window.location.href);
  u.searchParams.set("gpu", el("gpuSelect").value);
  u.searchParams.set("cpu", el("cpuSelect").value);
  u.searchParams.set("ram", el("ramSelect").value);
  u.searchParams.set("res", el("resSelect").value);
  try { await navigator.clipboard.writeText(u.toString()); } catch {}
  el("statusBar").textContent = u.toString();
});

el("saveBuildBtn").addEventListener("click", () => {
  const name = clean(el("buildName").value, 40) || `Build #${savedBuilds.length + 1}`;
  savedBuilds.unshift({
    name,
    gpu: Number(el("gpuSelect").value),
    cpu: Number(el("cpuSelect").value),
    ram: Number(el("ramSelect").value),
    res: Number(el("resSelect").value),
    preset: el("presetSelect").value
  });
  savedBuilds = savedBuilds.slice(0, 20);
  setStore("fps3_builds", JSON.stringify(savedBuilds));
  el("buildName").value = "";
  renderBuilds();
});

el("toggleJsonBtn").addEventListener("click", () => {
  const open = el("jsonPanel").style.display === "none";
  el("jsonPanel").style.display = open ? "block" : "none";
  if (open) el("jsonBox").value = JSON.stringify({ savedBuilds, customGames, favIds, histItems, commItems });
});

el("copyJsonBtn").addEventListener("click", async () => {
  const txt = JSON.stringify({ savedBuilds, customGames, favIds, histItems, commItems });
  el("jsonBox").value = txt;
  try { await navigator.clipboard.writeText(txt); } catch {}
  el("statusBar").textContent = lang === "ar" ? "تم نسخ JSON." : "JSON copied.";
});

el("loadJsonBtn").addEventListener("click", () => {
  const raw = el("jsonBox").value.trim();
  if (!raw || raw.length > 35000) return;
  let obj = null;
  try { obj = JSON.parse(raw); } catch { return; }
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return;
  if (Array.isArray(obj.savedBuilds)) {
    savedBuilds = obj.savedBuilds.slice(0, 20).map((b) => ({
      name: clean(b?.name, 40) || "Build",
      gpu: gpus[Number(b?.gpu)] ? Number(b.gpu) : 5,
      cpu: cpus[Number(b?.cpu)] ? Number(b.cpu) : 3,
      ram: [4, 8, 16, 24, 32, 64].includes(Number(b?.ram)) ? Number(b.ram) : 16,
      res: [1, 0.72, 0.45].includes(Number(b?.res)) ? Number(b.res) : 1,
      preset: presetMults[b?.preset] ? b.preset : "high"
    }));
    setStore("fps3_builds", JSON.stringify(savedBuilds));
  }
  if (Array.isArray(obj.customGames)) {
    customGames = obj.customGames.slice(0, 30).map((g, i) => ({
      id: `c_${i}_${Date.now().toString().slice(-4)}`,
      title: clean(g?.title, 70) || `Game ${i + 1}`,
      cat: ["sim", "action", "fps", "rpg"].includes(g?.cat) ? g.cat : "sim",
      year: 2026,
      refFps: Math.max(30, Math.min(180, Number(g?.refFps) || 72)),
      minRam: 8,
      recRam: [8, 16, 32].includes(Number(g?.recRam)) ? Number(g.recRam) : 16,
      minVram: 4,
      ver: "Custom",
      upd: new Date().toISOString().slice(0, 10),
      src: "Import + Est."
    }));
    setStore("fps3_cg", JSON.stringify(customGames));
  }
  if (Array.isArray(obj.favIds)) {
    favIds = obj.favIds.slice(0, 80).map((x) => clean(String(x), 40)).filter(Boolean);
    setStore("fps3_favs", JSON.stringify(favIds));
  }
  populateLists();
  renderBuilds();
  renderAll();
});

el("addGameBtn").addEventListener("click", () => {
  const title = clean(el("newTitle").value, 70);
  if (!title) return;
  const recRam = [8, 16, 32].includes(Number(el("newRam").value)) ? Number(el("newRam").value) : 16;
  customGames.unshift({
    id: `c_${Date.now()}`,
    title,
    cat: "sim",
    year: 2026,
    refFps: Math.max(30, Math.min(180, Number(el("newFps").value) || 72)),
    minRam: Math.max(4, recRam / 2),
    recRam,
    minVram: 4,
    ver: "v1.0",
    upd: new Date().toISOString().slice(0, 10),
    src: "User + Est."
  });
  customGames = customGames.slice(0, 30);
  setStore("fps3_cg", JSON.stringify(customGames));
  el("newTitle").value = "";
  populateLists();
  renderAll();
});

el("addCommBtn").addEventListener("click", () => {
  const game = clean(el("commGame").value, 60);
  if (!game) return;
  const avg = Math.max(10, Math.min(400, Number(el("commAvg").value) || 60));
  const low1 = Math.max(5, Math.min(350, Number(el("commLow").value) || 40));
  commItems.unshift({ game, avg, low1, date: new Date().toISOString().slice(0, 10) });
  commItems = commItems.slice(0, 20);
  setStore("fps3_comm", JSON.stringify(commItems));
  el("commGame").value = "";
  renderLists();
});

el("themeBtn").addEventListener("click", () => {
  themeIdx = (themeIdx + 1) % themes.length;
  document.body.className = themes[themeIdx].cls;
  applyStaticLabels();
  renderAll();
});

el("langBtn").addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  applyStaticLabels();
  runAutoDetect();
  renderTroubleshooter();
  renderLists();
  renderAll();
});

el("resetBtn").addEventListener("click", () => {
  el("gpuFilter").value = "";
  el("cpuFilter").value = "";
  populateLists();
  el("gpuSelect").value = "5";
  el("cpuSelect").value = "3";
  el("ramSelect").value = "16";
  el("resSelect").value = "1";
  el("hzSelect").value = "60";
  el("presetSelect").value = "high";
  el("upscaleSelect").value = "1";
  el("gameSearch").value = "";
  el("catFilter").value = "all";
  el("sortFilter").value = "default";
  obsOn = false; modsOn = false; rtOn = false;
  el("obsBtn").classList.remove("btn-green");
  el("modsBtn").classList.remove("btn-purple");
  el("rtBtn").classList.remove("btn-amber");
  applyStaticLabels();
  renderAll();
});

[
  "gpuSelect", "cpuSelect", "ramSelect", "resSelect", "hzSelect", "presetSelect", "upscaleSelect",
  "targetGpu", "gameSearch", "catFilter", "sortFilter", "chartGame", "chartMode"
].forEach((id) => el(id).addEventListener("input", renderAll));

el("gpuFilter").addEventListener("input", () => { populateLists(); renderAll(); });
el("cpuFilter").addEventListener("input", () => { populateLists(); renderAll(); });
el("troubleSelect").addEventListener("change", renderTroubleshooter);

const qp = new URLSearchParams(window.location.search);
if (qp.has("gpu") && gpus[Number(qp.get("gpu"))]) el("gpuSelect").value = qp.get("gpu");
if (qp.has("cpu") && cpus[Number(qp.get("cpu"))]) el("cpuSelect").value = qp.get("cpu");
if (qp.has("ram") && ["4", "8", "16", "24", "32", "64"].includes(qp.get("ram"))) el("ramSelect").value = qp.get("ram");
if (qp.has("res") && ["1", "0.72", "0.45"].includes(qp.get("res"))) el("resSelect").value = qp.get("res");

applyStaticLabels();
populateLists();
runAutoDetect();
renderRankings();
renderTroubleshooter();
renderLists();
renderBuilds();
renderAll();
