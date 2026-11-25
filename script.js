const gpus = [
  { name: "GTX 1050 Ti (4GB)", score: 26, power: 0.36, tdp: 75, vram: 4, arch: "Pascal", rank: 8, source: "NVIDIA Specs + مرجع تقديري" },
  { name: "GTX 1650 (4GB)", score: 35, power: 0.49, tdp: 75, vram: 4, arch: "Turing", rank: 7, source: "NVIDIA Specs + مرجع تقديري" },
  { name: "GTX 1660 Super (6GB)", score: 48, power: 0.67, tdp: 125, vram: 6, arch: "Turing", rank: 6, source: "NVIDIA Specs + مرجع تقديري" },
  { name: "RTX 3050 (8GB)", score: 52, power: 0.72, tdp: 130, vram: 8, arch: "Ampere", rank: 6, source: "NVIDIA Specs + مرجع تقديري" },
  { name: "RX 6600 (8GB)", score: 66, power: 0.92, tdp: 132, vram: 8, arch: "RDNA 2", rank: 5, source: "AMD Specs + مرجع تقديري" },
  { name: "RTX 3060 (12GB)", score: 72, power: 1.0, tdp: 170, vram: 12, arch: "Ampere", rank: 5, source: "NVIDIA Specs + مرجع تقديري" },
  { name: "RTX 4060 (8GB)", score: 84, power: 1.17, tdp: 115, vram: 8, arch: "Ada Lovelace", rank: 4, source: "NVIDIA Specs + مرجع تقديري" },
  { name: "RTX 4060 Ti (8GB/16GB)", score: 96, power: 1.33, tdp: 165, vram: 16, arch: "Ada Lovelace", rank: 4, source: "NVIDIA Specs + مرجع تقديري" },
  { name: "RX 7800 XT (16GB)", score: 108, power: 1.50, tdp: 263, vram: 16, arch: "RDNA 3", rank: 3, source: "AMD Specs + مرجع تقديري" },
  { name: "RTX 4070 / 4070 Super (12GB)", score: 118, power: 1.64, tdp: 220, vram: 12, arch: "Ada Lovelace", rank: 3, source: "NVIDIA Specs + مرجع تقديري" },
  { name: "RTX 5070 (12GB GDDR7)", score: 128, power: 1.78, tdp: 250, vram: 12, arch: "Blackwell", rank: 2, source: "NVIDIA Specs + مرجع تقديري" },
  { name: "RX 9070 XT (16GB)", score: 140, power: 1.94, tdp: 304, vram: 16, arch: "RDNA 4", rank: 2, source: "AMD Specs + مرجع تقديري" },
  { name: "RTX 4080 Super (16GB)", score: 148, power: 2.06, tdp: 320, vram: 16, arch: "Ada Lovelace", rank: 2, source: "NVIDIA Specs + مرجع تقديري" },
  { name: "RTX 5080 (16GB GDDR7)", score: 162, power: 2.25, tdp: 360, vram: 16, arch: "Blackwell", rank: 1, source: "NVIDIA Specs + مرجع تقديري" },
  { name: "RTX 4090 (24GB)", score: 175, power: 2.43, tdp: 450, vram: 24, arch: "Ada Lovelace", rank: 1, source: "NVIDIA Specs + مرجع تقديري" },
  { name: "RTX 5090 (32GB GDDR7)", score: 215, power: 2.98, tdp: 575, vram: 32, arch: "Blackwell", rank: 1, source: "NVIDIA Specs + مرجع تقديري" }
];

const cpus = [
  { name: "Core i3-12100F", score: 48, power: 0.68, tdp: 58, rank: 7, source: "Intel ARK + مؤشر تقديري" },
  { name: "Ryzen 5 3600", score: 55, power: 0.76, tdp: 65, rank: 6, source: "AMD Specs + مؤشر تقديري" },
  { name: "Ryzen 5 5600", score: 70, power: 0.93, tdp: 65, rank: 5, source: "AMD Specs + مؤشر تقديري" },
  { name: "Ryzen 7 5600X / 5700X", score: 76, power: 1.0, tdp: 65, rank: 5, source: "AMD Specs + مؤشر تقديري" },
  { name: "Core i5-12400F / 12600K", score: 82, power: 1.07, tdp: 117, rank: 4, source: "Intel ARK + مؤشر تقديري" },
  { name: "Ryzen 5 7600X / 9600X", score: 90, power: 1.16, tdp: 105, rank: 4, source: "AMD Specs + مؤشر تقديري" },
  { name: "Ryzen 7 5800X3D", score: 98, power: 1.25, tdp: 105, rank: 3, source: "AMD X3D Specs + مؤشر تقديري" },
  { name: "Core i5-13600K / 14600K", score: 104, power: 1.31, tdp: 125, rank: 3, source: "Intel ARK + مؤشر تقديري" },
  { name: "Ryzen 7 7800X3D", score: 126, power: 1.55, tdp: 120, rank: 2, source: "AMD X3D Specs + مؤشر تقديري" },
  { name: "Core i9-14900K", score: 130, power: 1.59, tdp: 150, rank: 2, source: "Intel ARK + مؤشر تقديري" },
  { name: "Ryzen 7 9800X3D", score: 145, power: 1.75, tdp: 120, rank: 1, source: "AMD X3D Specs + مؤشر تقديري" },
  { name: "Ryzen 9 9950X3D", score: 152, power: 1.83, tdp: 170, rank: 1, source: "AMD X3D Specs + مؤشر تقديري" }
];

const presetFactors = {
  low: 0.74,
  medium: 0.89,
  high: 1.0,
  ultra: 1.26
};

const defaultGames = [
  { id: "fh6_2026", title: "Forza Horizon 6 (2026)", cat: "sim", year: 2026, refFps: 72, minRam: 8, recRam: 16, minVram: 6, version: "v1.04", updated: "2026-10-15", source: "متطلبات 2026 + مرجع تقديري" },
  { id: "rer_2026", title: "Resident Evil Requiem (2026)", cat: "action", year: 2026, refFps: 68, minRam: 12, recRam: 16, minVram: 8, version: "v1.02", updated: "2026-10-20", source: "متطلبات 2026 + مرجع تقديري" },
  { id: "mw4_2026", title: "Call of Duty: Modern Warfare 4 (2026)", cat: "fps", year: 2026, refFps: 88, minRam: 12, recRam: 16, minVram: 6, version: "S01", updated: "2026-11-02", source: "متطلبات 2026 + مرجع تقديري" },
  { id: "beamng", title: "BeamNG.drive", cat: "sim", year: 2025, refFps: 62, minRam: 16, recRam: 32, minVram: 6, version: "v0.33", updated: "2026-10-27", source: "BeamNG + مرجع تقديري" },
  { id: "ets2", title: "Euro Truck Simulator 2", cat: "sim", year: 2024, refFps: 92, minRam: 8, recRam: 16, minVram: 4, version: "v1.51+", updated: "2026-08-12", source: "SCS + مرجع تقديري" },
  { id: "ac", title: "Assetto Corsa (CSP)", cat: "sim", year: 2024, refFps: 88, minRam: 8, recRam: 16, minVram: 4, version: "CSP 0.2+", updated: "2026-09-04", source: "CSP + مرجع تقديري" },
  { id: "gtav", title: "Grand Theft Auto V / FiveM", cat: "action", year: 2024, refFps: 98, minRam: 8, recRam: 16, minVram: 4, version: "b3258", updated: "2026-09-21", source: "Rockstar + مرجع تقديري" },
  { id: "rdr2", title: "Red Dead Redemption 2", cat: "action", year: 2023, refFps: 64, minRam: 12, recRam: 16, minVram: 6, version: "v1491", updated: "2026-08-29", source: "Rockstar + مرجع تقديري" },
  { id: "cp2077", title: "Cyberpunk 2077", cat: "action", year: 2024, refFps: 58, minRam: 16, recRam: 24, minVram: 8, version: "v2.12+", updated: "2026-09-11", source: "CDPR + مرجع تقديري" },
  { id: "cs2", title: "Counter-Strike 2", cat: "fps", year: 2024, refFps: 145, minRam: 8, recRam: 16, minVram: 4, version: "2026 Update", updated: "2026-10-12", source: "Valve + مرجع تقديري" },
  { id: "val", title: "Valorant", cat: "fps", year: 2024, refFps: 195, minRam: 8, recRam: 16, minVram: 2, version: "2026 Patch", updated: "2026-10-12", source: "Riot + مرجع تقديري" },
  { id: "wukong", title: "Black Myth: Wukong", cat: "rpg", year: 2024, refFps: 52, minRam: 16, recRam: 32, minVram: 8, version: "v1.12", updated: "2026-08-22", source: "Game Science + مرجع تقديري" }
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

const memStore = new Map();
function readStore(key, fallback = "") {
  try {
    const v = window.localStorage.getItem(key);
    return v !== null ? v : fallback;
  } catch {
    return memStore.has(key) ? memStore.get(key) : fallback;
  }
}

function writeStore(key, val) {
  try {
    window.localStorage.setItem(key, val);
  } catch {
    memStore.set(key, val);
  }
}

function parseJsonSafe(raw, fallback) {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) ?? fallback;
  } catch {
    return fallback;
  }
}

function cleanText(str, max = 100) {
  if (typeof str !== "string") return "";
  return str.replace(/[<>&"'`]/g, "").replace(/\s+/g, " ").trim().slice(0, max);
}

function norm(str) {
  return cleanText(str, 100)
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .trim();
}

const gpuSelect = document.getElementById("gpuSelect");
const cpuSelect = document.getElementById("cpuSelect");
const gpuFilter = document.getElementById("gpuFilter");
const cpuFilter = document.getElementById("cpuFilter");
const gpuMeta = document.getElementById("gpuMeta");
const cpuMeta = document.getElementById("cpuMeta");
const ramSelect = document.getElementById("ramSelect");
const resSelect = document.getElementById("resSelect");
const hzSelect = document.getElementById("hzSelect");
const presetSelect = document.getElementById("presetSelect");
const upscaleSelect = document.getElementById("upscaleSelect");
const targetGpuSelect = document.getElementById("targetGpuSelect");

const obsBtn = document.getElementById("obsBtn");
const modsBtn = document.getElementById("modsBtn");
const rtBtn = document.getElementById("rtBtn");
const detectPcBtn = document.getElementById("detectPcBtn");
const autoDetectBox = document.getElementById("autoDetectBox");
const saveHistoryBtn = document.getElementById("saveHistoryBtn");
const shareUrlBtn = document.getElementById("shareUrlBtn");
const statusMsg = document.getElementById("statusMsg");

const buildNameInput = document.getElementById("buildNameInput");
const saveBuildBtn = document.getElementById("saveBuildBtn");
const savedBuildsContainer = document.getElementById("savedBuildsContainer");
const toggleJsonBtn = document.getElementById("toggleJsonBtn");
const jsonBox = document.getElementById("jsonBox");
const jsonArea = document.getElementById("jsonArea");
const exportJsonBtn = document.getElementById("exportJsonBtn");
const importJsonBtn = document.getElementById("importJsonBtn");

const searchInput = document.getElementById("searchInput");
const catSelect = document.getElementById("catSelect");
const sortSelect = document.getElementById("sortSelect");
const newGameTitle = document.getElementById("newGameTitle");
const newGameFps = document.getElementById("newGameFps");
const newGameRam = document.getElementById("newGameRam");
const addGameBtn = document.getElementById("addGameBtn");
const gamesGrid = document.getElementById("gamesGrid");

const analysisGrid = document.getElementById("analysisGrid");
const upgradeGrid = document.getElementById("upgradeGrid");
const chartGameSelect = document.getElementById("chartGameSelect");
const chartModeSelect = document.getElementById("chartModeSelect");
const chartCanvas = document.getElementById("chartCanvas");
const gpuRankBox = document.getElementById("gpuRankBox");
const cpuRankBox = document.getElementById("cpuRankBox");

const troubleSelect = document.getElementById("troubleSelect");
const troubleBox = document.getElementById("troubleBox");
const commGameTitle = document.getElementById("commGameTitle");
const commAvgFps = document.getElementById("commAvgFps");
const commLow1 = document.getElementById("commLow1");
const addCommBtn = document.getElementById("addCommBtn");
const commList = document.getElementById("commList");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

let obsOn = false;
let modsOn = false;
let rtOn = false;
let themeIdx = 0;
const themes = [
  { cls: "", ar: "🎨 داكن", en: "🎨 Dark" },
  { cls: "theme-neon", ar: "🎨 نيون", en: "🎨 Neon" },
  { cls: "theme-light", ar: "🎨 فاتح", en: "🎨 Light" }
];
let lang = "ar";

let customGames = parseJsonSafe(readStore("fps3_custom_games", "[]"), []);
let favIds = parseJsonSafe(readStore("fps3_favs", "[]"), []);
let savedBuilds = parseJsonSafe(readStore("fps3_builds", "[]"), []);
let historyItems = parseJsonSafe(readStore("fps3_history", "[]"), []);
let commItems = parseJsonSafe(readStore("fps3_comm", "[]"), [
  { game: "BeamNG.drive", avg: 64, low1: 45, date: "2026-10-28" }
]);

function populateSelects() {
  const gQ = norm(gpuFilter.value);
  const cQ = norm(cpuFilter.value);
  const prevG = Number(gpuSelect.value) || 5;
  const prevC = Number(cpuSelect.value) || 3;

  gpuSelect.innerHTML = "";
  gpus.forEach((g, i) => {
    if (!gQ || norm(g.name).includes(gQ) || i === prevG) {
      gpuSelect.innerHTML += `<option value="${i}" ${i === prevG ? "selected" : ""}>${g.name}</option>`;
    }
  });

  cpuSelect.innerHTML = "";
  cpus.forEach((c, i) => {
    if (!cQ || norm(c.name).includes(cQ) || i === prevC) {
      cpuSelect.innerHTML += `<option value="${i}" ${i === prevC ? "selected" : ""}>${c.name}</option>`;
    }
  });

  if (!targetGpuSelect.options.length) {
    gpus.forEach((g, i) => {
      targetGpuSelect.innerHTML += `<option value="${i}" ${i === 9 ? "selected" : ""}>${g.name}</option>`;
    });
  }

  const allGames = [...customGames, ...defaultGames];
  const prevChart = chartGameSelect.value;
  chartGameSelect.innerHTML = `<option value="__avg__">متوسط الأداء التقديري</option>`;
  allGames.forEach((g) => {
    chartGameSelect.innerHTML += `<option value="${cleanText(g.id, 40)}">${cleanText(g.title, 70)}</option>`;
  });
  if (prevChart && [...chartGameSelect.options].some((o) => o.value === prevChart)) {
    chartGameSelect.value = prevChart;
  }
}

function detectBrowserPc() {
  const cores = navigator.hardwareConcurrency || "غير متاح";
  const mem = navigator.deviceMemory ? `~${navigator.deviceMemory} GB (تقريبي)` : "غير متاح";
  const screenInfo = `${window.screen.width}x${window.screen.height}`;
  let webglRenderer = "غير متاح";
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl") || c.getContext("experimental-webgl");
    if (gl) {
      const dbg = gl.getExtension("WEBGL_debug_renderer_info");
      if (dbg) webglRenderer = cleanText(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL), 90);
    }
  } catch {}

  autoDetectBox.innerHTML = `
    <strong>🔍 اكتشاف عتاد المتصفح (Browser Detection):</strong><br>
    • أنوية المعالج المتاحة للمتصفح: <strong>${cores}</strong> | ذاكرة المتصفح التقديرية: <strong>${mem}</strong><br>
    • دقة الشاشة: <strong>${screenInfo}</strong> | عارض WebGL: <strong>${webglRenderer}</strong><br>
    <span style="color:var(--text-muted); font-size:11.5px;">ملاحظة: المتصفح لا يقرأ اسم المعالج أو كرت الشاشة الكامل دائماً لأسباب الخصوصية، لذا اختر قطعتك بدقة من القوائم أعلاه.</span>
  `;
}

function estimateGame(game, gpu, cpu, ram, resMult, upMult, presetKey) {
  const pFactor = presetFactors[presetKey] || 1.0;
  const modMult = (obsOn ? 0.86 : 1.0) * (modsOn ? 0.78 : 1.0) * (rtOn ? 0.72 : 1.0);
  const gpuW = resMult < 1 ? 0.84 : (game.cat === "fps" || game.cat === "sim" ? 0.68 : 0.78);
  const cpuW = 1 - gpuW;

  const combo = (gpu.power * resMult * gpuW) + (cpu.power * cpuW);
  let avg = (game.refFps * combo * upMult * modMult) / pFactor;

  let reqRam = presetKey === "ultra" ? game.recRam + 4 : game.recRam;
  if (modsOn) reqRam += 4;
  if (obsOn) reqRam += 4;

  let ramPenalty = 1;
  if (ram < reqRam) {
    ramPenalty = Math.max(0.45, ram / reqRam);
    avg *= ramPenalty;
  }

  const clampedAvg = Math.max(12, Math.min(340, Math.round(avg)));
  const margin = (ramPenalty < 1 || modsOn || rtOn) ? 18 : 13;
  const spread = Math.max(4, Math.round(clampedAvg * (margin / 100)));
  const minFps = Math.max(10, clampedAvg - spread);
  const maxFps = Math.min(360, clampedAvg + spread);
  const low1 = Math.max(8, Math.round(clampedAvg * (ramPenalty < 1 || modsOn ? 0.66 : 0.74)));

  const nativeAvg = Math.max(10, Math.min(340, Math.round((avg / Math.max(1, upMult)))));
  const nativeSpread = Math.max(4, Math.round(nativeAvg * 0.13));

  // تقييم موثوقية النتيجة
  let confidence = "تقديري متوسط (Estimated)";
  if (!modsOn && !rtOn && !obsOn && ram >= reqRam) {
    confidence = "مرجعي تقديري أعلى (Baseline Est.)";
  } else if (modsOn || ram < reqRam) {
    confidence = "تقديري متغير (High Variance)";
  }

  // فحص المتطلبات
  let reqStatus = "✅ متوافق مع الموصى به";
  if (ram < game.minRam || gpu.vram < game.minVram) {
    reqStatus = "⚠️ أقل من الحد الأدنى الموصى به";
  } else if (ram < reqRam || gpu.vram < game.minVram + 2) {
    reqStatus = "ℹ️ يلبي الحد الأدنى وقد يحتاج خفض إعدادات";
  }

  return {
    avg: clampedAvg,
    minFps,
    maxFps,
    low1,
    margin,
    nativeRange: `${Math.max(10, nativeAvg - nativeSpread)}-${Math.min(360, nativeAvg + nativeSpread)}`,
    confidence,
    reqStatus,
    reqRam
  };
}

function renderAnalysis(gpu, cpu, ram, resMult, hz, upMult, presetKey) {
  const effGpu = gpu.power * resMult;
  const ratio = effGpu / Math.max(0.25, cpu.power);
  const bnPct = Math.min(48, Math.round(Math.abs(ratio - 1) * 65));

  let bnText = `توازن جيد (~${bnPct}% فارق تقديري).`;
  if (ratio > 1.25) bnText = `عنق زجاجة معالج محتمل (~${bnPct}%) في الألعاب المعتمدة على المعالج.`;
  else if (ratio < 0.75) bnText = `كرت الشاشة أضعف نسبياً من المعالج (~${bnPct}%)، وهو المحدّد الأساسي.`;

  const optText = presetKey === "ultra" || presetKey === "high"
    ? "اخفض الظلال والضبابية أولاً، وفعّل DLSS/FSR/XeSS Quality عند 1440p/4K لاستقرار 1% Low."
    : "استخدم إعدادات متوازنة مع إيقاف الإضافات الثقيلة غير الضرورية ورفع حد الإطارات المناسب للشاشة.";

  const upSimText = upMult > 1
    ? `تقنية الرفع/توليد الإطارات مفعّلة (${upscaleSelect.options[upscaleSelect.selectedIndex].text}). قارن دائماً مع الأداء الأصلي (Native) وراقب زمن الاستجابة.`
    : "الوضع الأصلي (Native) مفعّل؛ تفعيل DLSS/FSR/XeSS يرفع الفريمات التقديرية خاصة في الدقات العالية.";

  const hzText = `تردد الشاشة المحدد: ${hz}Hz. لتجربة متناغمة، يُفضّل أن يقارب متوسط الفريمات و 1% Low تردد الشاشة قدر الإمكان.`;

  const neededVram = resMult === 0.45 ? 12 : (resMult === 0.72 ? 8 : 4) + (rtOn ? 2 : 0);
  const psuWatts = Math.ceil(((gpu.tdp + cpu.tdp + 100) * 1.35) / 50) * 50;
  const compatText = `VRAM: ${gpu.vram}GB (مطلوب ~${neededVram}GB) | RAM: ${ram}GB | PSU مقترح: ~${psuWatts}W.`;

  const thermText = "ارتفاع حرارة المعالج أو الكرت فوق الحدود الآمنة يسبب Thermal Throttling وهبوطاً مفاجئاً في 1% Low؛ نظّف المراوح وراقب التهوية.";

  analysisGrid.innerHTML = `
    <div class="inner-box"><strong>⚖️ محلل عنق الزجاجة:</strong><br>${bnText}</div>
    <div class="inner-box"><strong>🎛️ محسّن الإعدادات:</strong><br>${optText}</div>
    <div class="inner-box"><strong>⚡ محاكي DLSS / FSR / XeSS:</strong><br>${upSimText}</div>
    <div class="inner-box"><strong>🖥️ الفريمات مقابل Hz:</strong><br>${hzText}</div>
    <div class="inner-box"><strong>🧩 التوافق والطاقة:</strong><br>${compatText}</div>
    <div class="inner-box"><strong>🌡️ الحرارة و Throttling:</strong><br>${thermText}</div>
  `;

  // مقارنة ترقية كرت الشاشة ومستشار الترقية
  const targetGpu = gpus[Number(targetGpuSelect.value) || 0];
  const sampleGame = defaultGames[0];
  const curEst = estimateGame(sampleGame, gpu, cpu, ram, resMult, upMult, presetKey);
  const newEst = estimateGame(sampleGame, targetGpu, cpu, ram, resMult, upMult, presetKey);
  const diffPct = Math.round(((targetGpu.score - gpu.score) / Math.max(1, gpu.score)) * 100);

  let advisorRec = ram < 16
    ? "الترقية الأولى الموصى بها: رفع الذاكرة العشوائية (RAM) إلى 16GB أو 32GB لتقليل التقطيع."
    : (ratio > 1.25
      ? "الترقية الأولى الموصى بها: ترقية المعالج لتحسين استقرار 1% Low."
      : `الترقية الأولى الموصى بها: كرت شاشة أعلى مثل ${targetGpu.name}.`);

  upgradeGrid.innerHTML = `
    <div class="inner-box">
      <strong>💡 مستشار الترقية (Upgrade Advisor):</strong><br>${advisorRec}
    </div>
    <div class="inner-box">
      <strong>🔄 مقارنة كرت الشاشة (${gpu.name} ← ${targetGpu.name}):</strong><br>
      • فارق المؤشر التقديري: <strong>${diffPct >= 0 ? "+" : ""}${diffPct}%</strong><br>
      • VRAM: <strong>${gpu.vram}GB → ${targetGpu.vram}GB</strong> | TDP: <strong>${gpu.tdp}W → ${targetGpu.tdp}W</strong><br>
      • مثال (${sampleGame.title}): <strong>~${curEst.avg} FPS → ~${newEst.avg} FPS</strong> (تقديري)
    </div>
  `;
}

function drawChart(gpu, cpu, ram, resMult, upMult, presetKey) {
  if (!chartCanvas) return;
  const ctx = chartCanvas.getContext("2d");
  const w = chartCanvas.width;
  const h = chartCanvas.height;
  ctx.clearRect(0, 0, w, h);

  const allGames = [...customGames, ...defaultGames];
  const chosenId = chartGameSelect.value;
  const mode = chartModeSelect.value;

  const getVals = (rM, uM) => {
    if (chosenId === "__avg__") {
      const list = allGames.slice(0, 8).map((g) => estimateGame(g, gpu, cpu, ram, rM, uM, presetKey));
      return {
        avg: Math.round(list.reduce((s, x) => s + x.avg, 0) / list.length),
        low1: Math.round(list.reduce((s, x) => s + x.low1, 0) / list.length)
      };
    }
    const g = allGames.find((item) => item.id === chosenId) || defaultGames[0];
    const est = estimateGame(g, gpu, cpu, ram, rM, uM, presetKey);
    return { avg: est.avg, low1: est.low1 };
  };

  const bars = mode === "upscale"
    ? [
        { label: "Native", ...getVals(resMult, 1.0) },
        { label: "Quality", ...getVals(resMult, 1.22) },
        { label: "Perf / FG", ...getVals(resMult, Math.max(1.38, upMult)) }
      ]
    : [
        { label: "1080p", ...getVals(1.0, upMult) },
        { label: "1440p", ...getVals(0.72, upMult) },
        { label: "2160p", ...getVals(0.45, upMult) }
      ];

  const maxV = Math.max(100, ...bars.map((b) => b.avg));
  const bottom = h - 38;
  const top = 26;
  const height = bottom - top;
  const isLight = document.body.classList.contains("theme-light");

  ctx.font = "12px Arial, sans-serif";
  const slotW = (w - 70) / bars.length;

  bars.forEach((b, i) => {
    const gx = 50 + i * slotW;
    const bw = Math.min(48, slotW * 0.28);
    const avgH = Math.max(8, (b.avg / maxV) * height);
    const lowH = Math.max(6, (b.low1 / maxV) * height);

    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(gx + slotW * 0.2, bottom - avgH, bw, avgH);

    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(gx + slotW * 0.2 + bw + 8, bottom - lowH, bw, lowH);

    ctx.fillStyle = isLight ? "#0f172a" : "#f8fafc";
    ctx.fillText(`~${b.avg}`, gx + slotW * 0.2 - 2, bottom - avgH - 6);

    ctx.fillStyle = "#fbbf24";
    ctx.fillText(`${b.low1}`, gx + slotW * 0.2 + bw + 8, bottom - lowH - 6);

    ctx.fillStyle = isLight ? "#1e293b" : "#cbd5e1";
    ctx.fillText(b.label, gx + slotW * 0.22, h - 12);
  });
}

function renderRankings() {
  const gpuRows = [...gpus].sort((a, b) => b.score - a.score).slice(0, 8)
    .map((g, i) => `<tr><td>#${i + 1}</td><td>${g.name}</td><td>Tier ${g.rank}</td><td>${g.score}</td></tr>`).join("");

  const cpuRows = [...cpus].sort((a, b) => b.score - a.score).slice(0, 8)
    .map((c, i) => `<tr><td>#${i + 1}</td><td>${c.name}</td><td>Tier ${c.rank}</td><td>${c.score}</td></tr>`).join("");

  gpuRankBox.innerHTML = `<strong>🎮 ترتيب كروت الشاشة (تقديري)</strong><table class="rank-table"><thead><tr><th>#</th><th>الكرت</th><th>الفئة</th><th>النقاط</th></tr></thead><tbody>${gpuRows}</tbody></table>`;
  cpuRankBox.innerHTML = `<strong>🧠 ترتيب المعالجات (تقديري)</strong><table class="rank-table"><thead><tr><th>#</th><th>المعالج</th><th>الفئة</th><th>النقاط</th></tr></thead><tbody>${cpuRows}</tbody></table>`;
}

function renderTroubleshooter() {
  const map = {
    stutter: "• فعّل حد الإطارات (FPS Cap) أو V-Sync/G-Sync/FreeSync.<br>• راجع سعة الرام (16GB+) وتجنّب امتلاء الذاكرة أثناء اللعب أو المودات.",
    lowfps: "• اخفض جودة الظلال والانعكاسات وحجم الدقة الداخلية.<br>• جرّب DLSS / FSR / XeSS وتأكد من عدم تفعيل إضافات ثقيلة بلا حاجة.",
    vram: "• اخفض جودة القوام (Textures) ودقة الشاشة أو أوقف Ray Tracing إذا كانت VRAM قريبة من الحد.",
    temp: "• نظّف الغبار، حسّن تدفق الهواء داخل الصندوق، وتأكد من ثبات المبرد لتجنب Thermal Throttling."
  };
  troubleBox.innerHTML = map[troubleSelect.value] || map.stutter;
}

function r3t24NpUrJMNunMMASmhAM953bFGeLXzN7() {
  commList.innerHTML = commItems.length
    ? commItems.map((c) => `<div class="comm-item"><strong>${cleanText(c.game, 60)}</strong> — Avg: <strong>~${c.avg} FPS</strong> | 1% Low: <strong>~${c.low1} FPS</strong> <span class="pill pill-info">نتيجة مجتمع (${cleanText(c.date, 10)})</span></div>`).join("")
    : `<div class="sub-stat">لا توجد نتائج مجتمع محفوظة بعد.</div>`;

  historyList.innerHTML = historyItems.length
    ? historyItems.map((h) => `<div class="history-item">🕒 <strong>${cleanText(h.time, 20)}</strong> — ${cleanText(h.gpu, 45)} + ${cleanText(h.cpu, 40)} (${h.ram}GB | ${cleanText(h.res, 15)}) — متوسط تقديري: <strong>~${h.avgSample} FPS</strong></div>`).join("")
    : `<div class="sub-stat">السجل فارغ حالياً. اضغط «حفظ لقطة في السجل» لحفظ حالة التجميعة.</div>`;
}

function renderSavedBuilds() {
  savedBuildsContainer.innerHTML = savedBuilds.map((b, idx) => `
    <span class="pill pill-info" style="cursor:pointer; margin-inline-end:6px; display:inline-flex; gap:6px; align-items:center;" data-load="${idx}">
      <span>🖥️ ${cleanText(b.name, 40)}</span>
      <span data-del="${idx}" style="color:#f87171; font-weight:800;">×</span>
    </span>
  `).join("");

  savedBuildsContainer.querySelectorAll("[data-load]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.dataset.del !== undefined) return;
      const b = savedBuilds[Number(el.dataset.load)];
      if (!b) return;
      if (gpus[b.gpu]) gpuSelect.value = String(b.gpu);
      if (cpus[b.cpu]) cpuSelect.value = String(b.cpu);
      ramSelect.value = String(b.ram);
      resSelect.value = String(b.res);
      if (presetFactors[b.preset]) presetSelect.value = b.preset;
      statusMsg.textContent = `تم تحميل التجميعة: ${b.name}`;
      renderAll();
    });
  });

  savedBuildsContainer.querySelectorAll("[data-del]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      savedBuilds.splice(Number(el.dataset.del), 1);
      writeStore("fps3_builds", JSON.stringify(savedBuilds));
      renderSavedBuilds();
    });
  });
}

function renderGames() {
  const gpu = gpus[Number(gpuSelect.value) || 0];
  const cpu = cpus[Number(cpuSelect.value) || 0];
  const ram = Number(ramSelect.value);
  const resMult = Number(resSelect.value);
  const hz = Number(hzSelect.value);
  const upMult = Number(upscaleSelect.value);
  const presetKey = presetSelect.value;
  const q = norm(searchInput.value);
  const cat = catSelect.value;

  gpuMeta.textContent = `VRAM: ${gpu.vram}GB | TDP: ${gpu.tdp}W | المصدر: ${gpu.source}`;
  cpuMeta.textContent = `TDP: ${cpu.tdp}W | المصدر: ${cpu.source}`;

  const allGames = [...customGames, ...defaultGames];
  let list = allGames
    .filter((g) => {
      const isFav = favIds.includes(g.id);
      const matchCat = cat === "all" || (cat === "fav" && isFav) || (cat === "y2026" && g.year === 2026) || g.cat === cat;
      const matchQ = !q || norm(g.title).includes(q) || (aliases[g.id] || []).some((a) => norm(a).includes(q));
      return matchCat && matchQ;
    })
    .map((g) => ({ g, est: estimateGame(g, gpu, cpu, ram, resMult, upMult, presetKey), isFav: favIds.includes(g.id) }));

  if (sortSelect.value === "fps-desc") list.sort((a, b) => b.est.avg - a.est.avg);
  else if (sortSelect.value === "fps-asc") list.sort((a, b) => a.est.avg - b.est.avg);
  else if (sortSelect.value === "alpha") list.sort((a, b) => a.g.title.localeCompare(b.g.title));
  else list.sort((a, b) => Number(b.isFav) - Number(a.isFav));

  gamesGrid.innerHTML = "";
  if (!list.length) {
    gamesGrid.innerHTML = `<div class="inner-box" style="grid-column:1/-1; text-align:center;">لا توجد ألعاب مطابقة.</div>`;
    return;
  }

  list.forEach(({ g, est, isFav }) => {
    let pillCls = "pill-high";
    let pillTxt = "سلس تقديرياً";
    let color = "#4ade80";
    if (est.avg < 35) { pillCls = "pill-low"; pillTxt = "ثقيل تقديرياً"; color = "#f87171"; }
    else if (est.avg < 60) { pillCls = "pill-mid"; pillTxt = "مقبول تقديرياً"; color = "#facc15"; }

    const pct = Math.min(100, Math.round((est.avg / 240) * 100));
    const hzNote = est.avg >= hz ? `يغطي ${hz}Hz غالباً` : `أقل من ${hz}Hz (~${hz - est.avg} فارق)`;
    const upNote = upMult > 1 ? `<div class="sub-stat">Native تقديري: ${est.nativeRange} FPS</div>` : "";

    gamesGrid.innerHTML += `
      <article class="game-card ${isFav ? "is-fav" : ""}">
        <div>
          <div class="card-head">
            <div>
              <div class="game-title">${cleanText(g.title, 75)}</div>
              <div class="sub-stat">إصدار: ${cleanText(g.version || "v1.0", 20)} | تحديث: ${cleanText(g.updated || "2026-10-01", 10)}</div>
              <div class="sub-stat">المصدر: ${cleanText(g.source || "مرجع تقديري", 55)}</div>
            </div>
            <div style="display:flex; gap:5px; align-items:center;">
              <span class="pill ${pillCls}">${pillTxt}</span>
              <button class="btn btn-outline btn-sm" data-fav="${cleanText(g.id, 40)}" type="button" style="min-height:28px; padding:2px 7px;">${isFav ? "★" : "☆"}</button>
            </div>
          </div>
        </div>

        <div>
          <div class="fps-main" style="color:${color}">${est.minFps}-${est.maxFps} <span class="sub-stat">FPS تقديري (±${est.margin}%)</span></div>
          <div class="low1-stat">1% Low تقديري: ~${est.low1} FPS</div>
          ${upNote}
          <div class="sub-stat">${est.reqStatus} • ${hzNote}</div>
          <div class="sub-stat">الثقة: ${est.confidence}</div>
        </div>

        <div class="bar-track"><div class="bar-fill" style="width:${pct}%; background:${color};"></div></div>
      </article>
    `;
  });

  gamesGrid.querySelectorAll("[data-fav]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.fav;
      favIds = favIds.includes(id) ? favIds.filter((x) => x !== id) : [...favIds, id];
      writeStore("fps3_favs", JSON.stringify(favIds));
      renderGames();
    });
  });
}

function renderAll() {
  const gpu = gpus[Number(gpuSelect.value) || 0];
  const cpu = cpus[Number(cpuSelect.value) || 0];
  const ram = Number(ramSelect.value);
  const resMult = Number(resSelect.value);
  const hz = Number(hzSelect.value);
  const upMult = Number(upscaleSelect.value);
  const presetKey = presetSelect.value;

  renderGames();
  renderAnalysis(gpu, cpu, ram, resMult, hz, upMult, presetKey);
  drawChart(gpu, cpu, ram, resMult, upMult, presetKey);
}

// الأحداث
document.querySelectorAll(".nav-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".nav-tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(`panel-${tab.dataset.tab}`).classList.add("active");
  });
});

detectPcBtn.addEventListener("click", detectBrowserPc);

obsBtn.addEventListener("click", () => {
  obsOn = !obsOn;
  obsBtn.textContent = obsOn ? "🎥 بث/تسجيل OBS: مفعّل" : "🎥 بث/تسجيل OBS: مغلق";
  obsBtn.classList.toggle("btn-green", obsOn);
  obsBtn.classList.toggle("btn-outline", !obsOn);
  renderAll();
});

modsBtn.addEventListener("click", () => {
  modsOn = !modsOn;
  modsBtn.textContent = modsOn ? "🧩 مودات ثقيلة: مفعّل" : "🧩 مودات ثقيلة: مغلق";
  modsBtn.classList.toggle("btn-purple", modsOn);
  modsBtn.classList.toggle("btn-outline", !modsOn);
  renderAll();
});

rtBtn.addEventListener("click", () => {
  rtOn = !rtOn;
  rtBtn.textContent = rtOn ? "🔆 Ray Tracing: مفعّل" : "🔆 Ray Tracing: مغلق";
  rtBtn.classList.toggle("btn-amber", rtOn);
  rtBtn.classList.toggle("btn-outline", !rtOn);
  renderAll();
});

saveHistoryBtn.addEventListener("click", () => {
  const gpu = gpus[Number(gpuSelect.value) || 0];
  const cpu = cpus[Number(cpuSelect.value) || 0];
  const ram = Number(ramSelect.value);
  const resMult = Number(resSelect.value);
  const upMult = Number(upscaleSelect.value);
  const sample = defaultGames.slice(0, 5).map((g) => estimateGame(g, gpu, cpu, ram, resMult, upMult, presetSelect.value).avg);
  const avgSample = Math.round(sample.reduce((s, x) => s + x, 0) / sample.length);

  historyItems.unshift({
    time: new Date().toISOString().slice(0, 16).replace("T", " "),
    gpu: gpu.name,
    cpu: cpu.name,
    ram,
    res: resSelect.options[resSelect.selectedIndex].text.split(" ")[0],
    avgSample
  });
  historyItems = historyItems.slice(0, 15);
  writeStore("fps3_history", JSON.stringify(historyItems));
  r3t24NpUrJMNunMMASmhAM953bFGeLXzN7();
  statusMsg.textContent = "تم حفظ لقطة الأداء في السجل.";
});

clearHistoryBtn.addEventListener("click", () => {
  historyItems = [];
  writeStore("fps3_history", "[]");
  r3t24NpUrJMNunMMASmhAM953bFGeLXzN7();
  statusMsg.textContent = "تم مسح سجل الأداء.";
});

shareUrlBtn.addEventListener("click", async () => {
  const url = new URL(window.location.href);
  url.searchParams.set("gpu", gpuSelect.value);
  url.searchParams.set("cpu", cpuSelect.value);
  url.searchParams.set("ram", ramSelect.value);
  url.searchParams.set("res", resSelect.value);
  try {
    await navigator.clipboard.writeText(url.toString());
    statusMsg.textContent = "تم نسخ رابط التجميعة.";
  } catch {
    statusMsg.textContent = url.toString();
  }
});

saveBuildBtn.addEventListener("click", () => {
  const name = cleanText(buildNameInput.value, 40) || `تجميعة #${savedBuilds.length + 1}`;
  savedBuilds.unshift({
    name,
    gpu: Number(gpuSelect.value),
    cpu: Number(cpuSelect.value),
    ram: Number(ramSelect.value),
    res: Number(resSelect.value),
    preset: presetSelect.value
  });
  savedBuilds = savedBuilds.slice(0, 20);
  writeStore("fps3_builds", JSON.stringify(savedBuilds));
  buildNameInput.value = "";
  renderSavedBuilds();
  statusMsg.textContent = `تم حفظ "${name}".`;
});

toggleJsonBtn.addEventListener("click", () => {
  const show = jsonBox.style.display === "none";
  jsonBox.style.display = show ? "block" : "none";
  if (show) jsonArea.value = JSON.stringify({ savedBuilds, customGames, favIds, historyItems, commItems });
});

exportJsonBtn.addEventListener("click", async () => {
  const txt = JSON.stringify({ savedBuilds, customGames, favIds, historyItems, commItems });
  jsonArea.value = txt;
  try {
    await navigator.clipboard.writeText(txt);
    statusMsg.textContent = "تم نسخ JSON.";
  } catch {
    statusMsg.textContent = "JSON جاهز في الصندوق.";
  }
});

importJsonBtn.addEventListener("click", () => {
  const raw = jsonArea.value.trim();
  if (!raw || raw.length > 35000) {
    statusMsg.textContent = "بيانات JSON غير صالحة أو فارغة.";
    return;
  }
  let parsed = null;
  try { parsed = JSON.parse(raw); } catch { statusMsg.textContent = "صيغة JSON غير صحيحة."; return; }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    statusMsg.textContent = "بنية JSON غير متوافقة.";
    return;
  }
  if (Array.isArray(parsed.savedBuilds)) {
    savedBuilds = parsed.savedBuilds.slice(0, 20).map((b) => ({
      name: cleanText(b?.name, 40) || "تجميعة",
      gpu: Number.isInteger(Number(b?.gpu)) && gpus[Number(b?.gpu)] ? Number(b?.gpu) : 5,
      cpu: Number.isInteger(Number(b?.cpu)) && cpus[Number(b?.cpu)] ? Number(b?.cpu) : 3,
      ram: [4, 8, 16, 24, 32, 64].includes(Number(b?.ram)) ? Number(b?.ram) : 16,
      res: [1, 0.72, 0.45].includes(Number(b?.res)) ? Number(b?.res) : 1,
      preset: presetFactors[b?.preset] ? b.preset : "high"
    }));
    writeStore("fps3_builds", JSON.stringify(savedBuilds));
  }
  if (Array.isArray(parsed.customGames)) {
    customGames = parsed.customGames.slice(0, 30).map((g, i) => ({
      id: `c_${i}_${Date.now().toString().slice(-4)}`,
      title: cleanText(g?.title, 70) || `لعبة ${i + 1}`,
      cat: ["sim", "action", "fps", "rpg"].includes(g?.cat) ? g.cat : "sim",
      year: 2026,
      refFps: Math.max(30, Math.min(180, Number(g?.refFps) || 72)),
      minRam: 8,
      recRam: [8, 16, 32].includes(Number(g?.recRam)) ? Number(g?.recRam) : 16,
      minVram: 4,
      version: "Custom",
      updated: new Date().toISOString().slice(0, 10),
      source: "استيراد مستخدم + تقديري"
    }));
    writeStore("fps3_custom_games", JSON.stringify(customGames));
  }
  if (Array.isArray(parsed.favIds)) {
    favIds = parsed.favIds.slice(0, 80).map((x) => cleanText(String(x), 40)).filter(Boolean);
    writeStore("fps3_favs", JSON.stringify(favIds));
  }
  populateSelects();
  renderSavedBuilds();
  renderAll();
  statusMsg.textContent = "تم استرجاع البيانات بنجاح.";
});

addGameBtn.addEventListener("click", () => {
  const title = cleanText(newGameTitle.value, 70);
  if (!title) return;
  const recRam = [8, 16, 32].includes(Number(newGameRam.value)) ? Number(newGameRam.value) : 16;
  customGames.unshift({
    id: `c_${Date.now()}`,
    title,
    cat: "sim",
    year: 2026,
    refFps: Math.max(30, Math.min(180, Number(newGameFps.value) || 72)),
    minRam: Math.max(4, recRam / 2),
    recRam,
    minVram: 4,
    version: "v1.0",
    updated: new Date().toISOString().slice(0, 10),
    source: "إضافة مستخدم + تقديري"
  });
  customGames = customGames.slice(0, 30);
  writeStore("fps3_custom_games", JSON.stringify(customGames));
  newGameTitle.value = "";
  populateSelects();
  renderAll();
  statusMsg.textContent = `تمت إضافة "${title}".`;
});

addCommBtn.addEventListener("click", () => {
  const game = cleanText(commGameTitle.value, 60);
  const avg = Math.max(10, Math.min(400, Number(commAvgFps.value) || 60));
  const low1 = Math.max(5, Math.min(350, Number(commLow1.value) || 40));
  if (!game) return;
  commItems.unshift({ game, avg, low1, date: new Date().toISOString().slice(0, 10) });
  commItems = commItems.slice(0, 20);
  writeStore("fps3_comm", JSON.stringify(commItems));
  commGameTitle.value = "";
  r3t24NpUrJMNunMMASmhAM953bFGeLXzN7();
  statusMsg.textContent = "تمت إضافة نتيجة المجتمع.";
});

themeBtn.addEventListener("click", () => {
  themeIdx = (themeIdx + 1) % themes.length;
  document.body.className = themes[themeIdx].cls;
  themeBtn.textContent = lang === "ar" ? themes[themeIdx].ar : themes[themeIdx].en;
  renderAll();
});

langBtn.addEventListener("click", () => {
  lang = lang === "ar" ? "en" : "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  langBtn.textContent = lang === "ar" ? "🌐 English" : "🌐 العربية";
  themeBtn.textContent = lang === "ar" ? themes[themeIdx].ar : themes[themeIdx].en;
  document.getElementById("heroTitle").textContent = lang === "ar"
    ? "FPS Lab 3.0 — منصة تحليل أداء الألعاب والعتاد"
    : "FPS Lab 3.0 — Game Performance & Hardware Platform";
  document.getElementById("heroSub").textContent = lang === "ar"
    ? "تقدير FPS و 1% Low، عنق الزجاجة، DLSS/FSR/XeSS، الترقية، التوافق، المتطلبات، الأعطال، وحفظ التجميعات"
    : "Estimated FPS & 1% Low, bottleneck, DLSS/FSR/XeSS, upgrades, compatibility, requirements, troubleshooter & saves";
  renderAll();
});

resetBtn.addEventListener("click", () => {
  gpuFilter.value = "";
  cpuFilter.value = "";
  populateSelects();
  gpuSelect.value = "5";
  cpuSelect.value = "3";
  ramSelect.value = "16";
  resSelect.value = "1";
  hzSelect.value = "60";
  presetSelect.value = "high";
  upscaleSelect.value = "1";
  searchInput.value = "";
  catSelect.value = "all";
  sortSelect.value = "default";
  obsOn = false; modsOn = false; rtOn = false;
  obsBtn.textContent = "🎥 بث/تسجيل OBS: مغلق";
  modsBtn.textContent = "🧩 مودات ثقيلة: مغلق";
  rtBtn.textContent = "🔆 Ray Tracing: مغلق";
  renderAll();
  statusMsg.textContent = "تمت إعادة الضبط.";
});

[
  gpuSelect, cpuSelect, ramSelect, resSelect, hzSelect, presetSelect, upscaleSelect,
  targetGpuSelect, searchInput, catSelect, sortSelect, chartGameSelect, chartModeSelect
].forEach((el) => el.addEventListener("input", renderAll));

gpuFilter.addEventListener("input", () => { populateSelects(); renderAll(); });
cpuFilter.addEventListener("input", () => { populateSelects(); renderAll(); });
troubleSelect.addEventListener("change", renderTroubleshooter);

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("gpu") && gpus[Number(urlParams.get("gpu"))]) gpuSelect.value = urlParams.get("gpu");
if (urlParams.has("cpu") && cpus[Number(urlParams.get("cpu"))]) cpuSelect.value = urlParams.get("cpu");
if (urlParams.has("ram") && ["4", "8", "16", "24", "32", "64"].includes(urlParams.get("ram"))) ramSelect.value = urlParams.get("ram");
if (urlParams.has("res") && ["1", "0.72", "0.45"].includes(urlParams.get("res"))) resSelect.value = urlParams.get("res");

populateSelects();
detectBrowserPc();
renderRankings();
renderTroubleshooter();
r3t24NpUrJMNunMMASmhAM953bFGeLXzN7();
renderSavedBuilds();
renderAll();
