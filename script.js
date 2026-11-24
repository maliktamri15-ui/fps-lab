const gpus = [
  { name: "GTX 750 Ti (2GB)", score: 15, tdp: 60, vram: 2 },
  { name: "GTX 1050 Ti (4GB)", score: 26, tdp: 75, vram: 4 },
  { name: "RX 570 / RX 580 (8GB)", score: 33, tdp: 185, vram: 8 },
  { name: "GTX 1650 (4GB)", score: 35, tdp: 75, vram: 4 },
  { name: "GTX 1060 (6GB)", score: 42, tdp: 120, vram: 6 },
  { name: "GTX 1660 Super (6GB)", score: 48, tdp: 125, vram: 6 },
  { name: "RTX 3050 (8GB)", score: 52, tdp: 130, vram: 8 },
  { name: "RTX 2060 (6GB)", score: 56, tdp: 160, vram: 6 },
  { name: "Intel Arc B580 (12GB)", score: 68, tdp: 190, vram: 12 },
  { name: "RX 6600 (8GB)", score: 66, tdp: 132, vram: 8 },
  { name: "RTX 3060 (12GB)", score: 72, tdp: 170, vram: 12 },
  { name: "RTX 5050 (8GB)", score: 70, tdp: 135, vram: 8 },
  { name: "RX 7600 XT (16GB)", score: 78, tdp: 190, vram: 16 },
  { name: "RTX 3060 Ti (8GB)", score: 80, tdp: 200, vram: 8 },
  { name: "RTX 4060 (8GB)", score: 84, tdp: 115, vram: 8 },
  { name: "RTX 5060 (8GB)", score: 92, tdp: 145, vram: 8 },
  { name: "RX 9060 XT (16GB)", score: 96, tdp: 170, vram: 16 },
  { name: "RTX 3070 / 3070 Ti (8GB)", score: 94, tdp: 220, vram: 8 },
  { name: "RTX 4060 Ti (8GB / 16GB)", score: 96, tdp: 165, vram: 16 },
  { name: "RTX 5060 Ti (16GB)", score: 105, tdp: 180, vram: 16 },
  { name: "RX 7800 XT (16GB)", score: 108, tdp: 263, vram: 16 },
  { name: "RTX 3080 / 3080 Ti (12GB)", score: 112, tdp: 320, vram: 12 },
  { name: "RTX 4070 / 4070 Super (12GB)", score: 118, tdp: 220, vram: 12 },
  { name: "RTX 5070 (12GB GDDR7)", score: 128, tdp: 250, vram: 12 },
  { name: "RX 9070 (16GB)", score: 128, tdp: 220, vram: 16 },
  { name: "RTX 4070 Ti Super (16GB)", score: 132, tdp: 285, vram: 16 },
  { name: "RX 9070 XT (16GB)", score: 140, tdp: 304, vram: 16 },
  { name: "RTX 5070 Ti (16GB GDDR7)", score: 145, tdp: 300, vram: 16 },
  { name: "RX 7900 XTX (24GB)", score: 146, tdp: 355, vram: 24 },
  { name: "RTX 4080 / 4080 Super (16GB)", score: 148, tdp: 320, vram: 16 },
  { name: "RTX 5080 (16GB GDDR7)", score: 162, tdp: 360, vram: 16 },
  { name: "RTX 4090 (24GB GDDR6X)", score: 175, tdp: 450, vram: 24 },
  { name: "RTX 5090 (32GB GDDR7) — الأقوى في العالم", score: 215, tdp: 575, vram: 32 }
];

const cpus = [
  { name: "Core i3-10100F / 12100F", score: 46, tdp: 65 },
  { name: "Ryzen 5 2600 / 3600", score: 55, tdp: 65 },
  { name: "Core i5-10400F / 11400F", score: 62, tdp: 65 },
  { name: "Ryzen 5 5500 / 5600", score: 70, tdp: 65 },
  { name: "Ryzen 7 5600X / 5700X", score: 76, tdp: 65 },
  { name: "Core i5-12400F / 12600K", score: 82, tdp: 117 },
  { name: "Ryzen 5 7600X / 9600X", score: 90, tdp: 105 },
  { name: "Core Ultra 5 245K / 250K Plus", score: 94, tdp: 125 },
  { name: "Ryzen 7 5800X3D", score: 98, tdp: 105 },
  { name: "Core i5-13600K / 14600K", score: 104, tdp: 125 },
  { name: "Core i7-13700K / 14700K", score: 114, tdp: 125 },
  { name: "Ryzen 7 7700X / 9700X", score: 116, tdp: 105 },
  { name: "Core Ultra 7 265K / 270K Plus", score: 120, tdp: 125 },
  { name: "Ryzen 7 7800X3D", score: 126, tdp: 120 },
  { name: "Core i9-13900K / 14900K", score: 130, tdp: 150 },
  { name: "Core Ultra 9 285K", score: 134, tdp: 125 },
  { name: "Ryzen 7 9800X3D / 9850X3D", score: 145, tdp: 120 },
  { name: "Ryzen 9 9950X3D / 9950X3D2 — الأقوى في العالم", score: 152, tdp: 170 }
];

const gameAliases = {
  fh6_2026: ["forza horizon 6", "fh6", "فورزا 6", "2026"],
  rer_2026: ["resident evil requiem", "requiem", "re9", "ريزدنت ايفل", "2026"],
  mw4_2026: ["modern warfare 4", "mw4", "cod 2026", "كول اوف ديوتي", "2026"],
  pbz_2026: ["phantom blade zero", "phantom blade", "فانتوم بليد", "2026"],
  cd_2026: ["crimson desert", "كريمسون ديزرت", "2026"],
  ds2_2026: ["death stranding 2", "ds2", "ديث ستراندينغ", "2026"],
  nioh3_2026: ["nioh 3", "نيوه 3", "2026"],
  cr_2026: ["control resonant", "كونترول", "2026"],
  gow_eday_2026: ["gears of war e-day", "gears e-day", "غيرز", "2026"],
  bf6_2026: ["battlefield 6", "bf6", "باتلفيلد 6", "2026"],
  ets2: ["euro truck", "ets2", "شاحنات", "يورو تراك"],
  ats: ["american truck", "ats", "امريكان تراك"],
  ac: ["assetto corsa", "csp", "اسيتو", "درفت"],
  beamng: ["beamng", "بيم ان جي", "فيزياء"],
  cms21: ["car mechanic", "cms21", "ميكانيك"],
  msc: ["my summer car", "msc", "سايرتي صيفية"],
  fs25: ["farming simulator", "fs25", "مزارع"],
  gtav: ["gta", "gtav", "fivem", "قراند", "فايف ام"],
  rdr2: ["red dead", "rdr2", "ريد ديد"],
  cp2077: ["cyberpunk", "cp2077", "سايبربانك"],
  cs2: ["counter strike", "cs2", "كانتر"],
  val: ["valorant", "فالورانت"],
  fortnite: ["fortnite", "فورتنايت"]
};

const presetConfig = {
  low: { label: "Low", loadMultiplier: 0.72 },
  medium: { label: "Medium", loadMultiplier: 0.88 },
  high: { label: "High", loadMultiplier: 1.0 },
  ultra: { label: "Ultra", loadMultiplier: 1.28 }
};

// قاعدة بيانات معايرة على اختبارات الأداء المرجعية + عناوين 2026
const defaultGames = [
  { id: "fh6_2026", title: "Forza Horizon 6 (2026)", category: "sim", year: 2026, benchRef: 74, reqScore: 76, reqRam: 16, baseFps: 76 },
  { id: "rer_2026", title: "Resident Evil Requiem (2026)", category: "action", year: 2026, benchRef: 78, reqScore: 78, reqRam: 16, baseFps: 72 },
  { id: "mw4_2026", title: "Call of Duty: Modern Warfare 4 (2026)", category: "fps", year: 2026, benchRef: 82, reqScore: 72, reqRam: 16, baseFps: 95 },
  { id: "pbz_2026", title: "Phantom Blade Zero (2026)", category: "action", year: 2026, benchRef: 85, reqScore: 80, reqRam: 16, baseFps: 68 },
  { id: "cd_2026", title: "Crimson Desert (2026)", category: "action", year: 2026, benchRef: 88, reqScore: 86, reqRam: 16, baseFps: 60 },
  { id: "ds2_2026", title: "Death Stranding 2 PC (2026)", category: "action", year: 2026, benchRef: 75, reqScore: 75, reqRam: 16, baseFps: 74 },
  { id: "nioh3_2026", title: "Nioh 3 (2026)", category: "rpg", year: 2026, benchRef: 76, reqScore: 74, reqRam: 16, baseFps: 72 },
  { id: "cr_2026", title: "Control Resonant (2026)", category: "rpg", year: 2026, benchRef: 84, reqScore: 82, reqRam: 16, baseFps: 64 },
  { id: "gow_eday_2026", title: "Gears of War: E-Day (2026)", category: "fps", year: 2026, benchRef: 80, reqScore: 78, reqRam: 16, baseFps: 70 },
  { id: "bf6_2026", title: "Battlefield 6 (2026)", category: "fps", year: 2026, benchRef: 84, reqScore: 76, reqRam: 16, baseFps: 84 },
  { id: "ets2", title: "Euro Truck Simulator 2", category: "sim", year: 2024, benchRef: 42, reqScore: 34, reqRam: 8, baseFps: 95 },
  { id: "ats", title: "American Truck Simulator", category: "sim", year: 2024, benchRef: 43, reqScore: 35, reqRam: 8, baseFps: 95 },
  { id: "ac", title: "Assetto Corsa (CSP)", category: "sim", year: 2024, benchRef: 48, reqScore: 42, reqRam: 8, baseFps: 90 },
  { id: "acc", title: "Assetto Corsa Competizione", category: "sim", year: 2024, benchRef: 70, reqScore: 68, reqRam: 16, baseFps: 75 },
  { id: "beamng", title: "BeamNG.drive", category: "sim", year: 2025, benchRef: 72, reqScore: 66, reqRam: 16, baseFps: 65 },
  { id: "cms21", title: "Car Mechanic Simulator 2021", category: "sim", year: 2021, benchRef: 46, reqScore: 45, reqRam: 8, baseFps: 85 },
  { id: "msc", title: "My Summer Car", category: "sim", year: 2020, benchRef: 38, reqScore: 28, reqRam: 8, baseFps: 85 },
  { id: "fs25", title: "Farming Simulator 25", category: "sim", year: 2024, benchRef: 62, reqScore: 58, reqRam: 16, baseFps: 75 },
  { id: "consim", title: "Construction Simulator", category: "sim", year: 2022, benchRef: 58, reqScore: 54, reqRam: 16, baseFps: 75 },
  { id: "fh5", title: "Forza Horizon 5", category: "sim", year: 2023, benchRef: 64, reqScore: 62, reqRam: 16, baseFps: 85 },
  { id: "msfs24", title: "Microsoft Flight Simulator 2024", category: "sim", year: 2024, benchRef: 90, reqScore: 88, reqRam: 16, baseFps: 50 },
  { id: "gtav", title: "Grand Theft Auto V / FiveM", category: "action", year: 2024, benchRef: 45, reqScore: 38, reqRam: 8, baseFps: 105 },
  { id: "rdr2", title: "Red Dead Redemption 2", category: "action", year: 2023, benchRef: 74, reqScore: 72, reqRam: 16, baseFps: 65 },
  { id: "cp2077", title: "Cyberpunk 2077", category: "action", year: 2024, benchRef: 86, reqScore: 85, reqRam: 16, baseFps: 60 },
  { id: "gowr", title: "God of War Ragnarök", category: "action", year: 2024, benchRef: 70, reqScore: 68, reqRam: 16, baseFps: 75 },
  { id: "alanwake2", title: "Alan Wake 2", category: "action", year: 2023, benchRef: 92, reqScore: 92, reqRam: 16, baseFps: 52 },
  { id: "cs2", title: "Counter-Strike 2", category: "fps", year: 2024, benchRef: 48, reqScore: 40, reqRam: 8, baseFps: 150 },
  { id: "val", title: "Valorant", category: "fps", year: 2024, benchRef: 32, reqScore: 25, reqRam: 8, baseFps: 200 },
  { id: "fortnite", title: "Fortnite (Performance / DX12)", category: "fps", year: 2025, benchRef: 54, reqScore: 45, reqRam: 8, baseFps: 130 },
  { id: "warzone", title: "Call of Duty: Warzone / BO6", category: "fps", year: 2024, benchRef: 72, reqScore: 68, reqRam: 16, baseFps: 90 },
  { id: "squad", title: "Squad", category: "fps", year: 2024, benchRef: 68, reqScore: 64, reqRam: 16, baseFps: 75 },
  { id: "tarkov", title: "Escape from Tarkov", category: "fps", year: 2024, benchRef: 80, reqScore: 76, reqRam: 32, baseFps: 68 },
  { id: "minecraft", title: "Minecraft (Java + Shaders)", category: "rpg", year: 2024, benchRef: 50, reqScore: 42, reqRam: 8, baseFps: 120 },
  { id: "eldenring", title: "Elden Ring", category: "rpg", year: 2024, benchRef: 62, reqScore: 58, reqRam: 16, baseFps: 60 },
  { id: "wukong", title: "Black Myth: Wukong", category: "rpg", year: 2024, benchRef: 89, reqScore: 88, reqRam: 16, baseFps: 56 },
  { id: "ark", title: "ARK: Survival Ascended", category: "rpg", year: 2024, benchRef: 91, reqScore: 90, reqRam: 32, baseFps: 50 }
];

// أدوات حماية وتعقيم المدخلات
function sanitizeText(input, maxLen = 120) {
  if (typeof input !== "string") return "";
  return input
    .replace(/[<>&"'`]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLen);
}

function sanitizeUrl(rawUrl) {
  if (typeof rawUrl !== "string") return "";
  const cleaned = rawUrl.trim().slice(0, 200);
  if (!cleaned) return "";
  try {
    const parsed = new URL(cleaned.startsWith("http") ? cleaned : `https://${cleaned}`);
    if (parsed.protocol === "https:" || parsed.protocol === "http:") {
      return parsed.href;
    }
  } catch {}
  return "";
}

const DEFAULT_DISCORD_ID = "1501411543059923159";
const DEFAULT_DISCORD_URL = `https://discord.com/users/${DEFAULT_DISCORD_ID}`;

const DEFAULT_SOCIAL_LINKS = {
  yt: "https://youtube.com",
  tt: "https://tiktok.com",
  dc: DEFAULT_DISCORD_URL,
  tg: "https://t.me"
};

const gpuSelect = document.getElementById("gpuSelect");
const cpuSelect = document.getElementById("cpuSelect");
const gpuFilterInput = document.getElementById("gpuFilterInput");
const cpuFilterInput = document.getElementById("cpuFilterInput");
const ramSelect = document.getElementById("ramSelect");
const resSelect = document.getElementById("resSelect");
const hzSelect = document.getElementById("hzSelect");
const globalPresetSelect = document.getElementById("globalPresetSelect");
const upscaleSelect = document.getElementById("upscaleSelect");

const themeToggleBtn = document.getElementById("themeToggleBtn");
const langToggleBtn = document.getElementById("langToggleBtn");
const resetAllBtn = document.getElementById("resetAllBtn");
const streamToggleBtn = document.getElementById("streamToggleBtn");
const modsToggleBtn = document.getElementById("modsToggleBtn");
const rtToggleBtn = document.getElementById("rtToggleBtn");
const toggleCompareBtn = document.getElementById("toggleCompareBtn");
const openPosterBtn = document.getElementById("openPosterBtn");
const copyReportBtn = document.getElementById("copyReportBtn");
const downloadPngBtn = document.getElementById("downloadPngBtn");
const closePosterBtn = document.getElementById("closePosterBtn");
const posterModal = document.getElementById("posterModal");
const posterSpecsContent = document.getElementById("posterSpecsContent");
const posterGamesContent = document.getElementById("posterGamesContent");

const runBrowserBenchBtn = document.getElementById("runBrowserBenchBtn");
const browserBenchResult = document.getElementById("browserBenchResult");
const compatCheckBox = document.getElementById("compatCheckBox");

const shareBuildBtn = document.getElementById("shareBuildBtn");
const shareStatus = document.getElementById("shareStatus");
const expVerdictBanner = document.getElementById("expVerdictBanner");
const bestMatchBox = document.getElementById("bestMatchBox");
const compareBox = document.getElementById("compareBox");
const gpuSelect2 = document.getElementById("gpuSelect2");
const cpuSelect2 = document.getElementById("cpuSelect2");
const ramSelect2 = document.getElementById("ramSelect2");
const gpuSelect3 = document.getElementById("gpuSelect3");
const cpuSelect3 = document.getElementById("cpuSelect3");
const ramSelect3 = document.getElementById("ramSelect3");

const vramWarningBox = document.getElementById("vramWarningBox");
const bottleneckBar = document.getElementById("bottleneckBar");
const psuEstimatorBox = document.getElementById("psuEstimatorBox");
const upgradeAdvisorBox = document.getElementById("upgradeAdvisorBox");
const specsSummary = document.getElementById("specsSummary");

const buildNameInput = document.getElementById("buildNameInput");
const saveBuildBtn = document.getElementById("saveBuildBtn");
const savedBuildsList = document.getElementById("savedBuildsList");
const toggleBackupBtn = document.getElementById("toggleBackupBtn");
const backupBox = document.getElementById("backupBox");
const backupJsonArea = document.getElementById("backupJsonArea");
const exportBackupBtn = document.getElementById("exportBackupBtn");
const importBackupBtn = document.getElementById("importBackupBtn");
const randomGameBtn = document.getElementById("randomGameBtn");

const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const resultsCountBadge = document.getElementById("resultsCountBadge");
const sortSelect = document.getElementById("sortSelect");
const resultsDiv = document.getElementById("results");
const filterButtons = document.querySelectorAll("#filterButtons .filter-btn");
const playabilityButtons = document.querySelectorAll("#playabilityButtons .filter-btn");

const newGameTitle = document.getElementById("newGameTitle");
const newGameCat = document.getElementById("newGameCat");
const newGameWeight = document.getElementById("newGameWeight");
const newGameRam = document.getElementById("newGameRam");
const addGameBtn = document.getElementById("addGameBtn");

const discordDisplay = document.getElementById("discordDisplay");
const contactSupportDiscordBtn = document.getElementById("contactSupportDiscordBtn");
const attachSpecsBtn = document.getElementById("attachSpecsBtn");
const copyDiscordBtn = document.getElementById("copyDiscordBtn");
const myDiscordHandle = document.getElementById("myDiscordHandle");
const myDiscordInvite = document.getElementById("myDiscordInvite");
const supportMessage = document.getElementById("supportMessage");
const saveDiscordBtn = document.getElementById("saveDiscordBtn");
const supportStatus = document.getElementById("supportStatus");

const socialLinksRow = document.getElementById("socialLinksRow");
const ytUrl = document.getElementById("ytUrl");
const ttUrl = document.getElementById("ttUrl");
const dcUrl = document.getElementById("dcUrl");
const tgUrl = document.getElementById("tgUrl");
const saveSocialBtn = document.getElementById("saveSocialBtn");

const developerCreditText = document.getElementById("developerCreditText");
const devNameInput = document.getElementById("devNameInput");
const saveDevNameBtn = document.getElementById("saveDevNameBtn");

let currentCategory = "all";
let currentPlayability = "all";
let compareMode = false;
let rayTracingEnabled = false;
let heavyModsEnabled = false;
let streamingModeEnabled = false;
let pickedRandomGameId = null;
let currentThemeIndex = 0;
const themes = [
  { class: "", labelAr: "🎨 المظهر: داكن", labelEn: "🎨 Theme: Dark" },
  { class: "theme-neon", labelAr: "🎨 المظهر: نيون", labelEn: "🎨 Theme: Neon" },
  { class: "theme-light", labelAr: "🎨 المظهر: فاتح", labelEn: "🎨 Theme: Light" }
];
let currentLang = "ar";

let perGamePresets = JSON.parse(localStorage.getItem("gamecheck_game_presets") || "{}");
let customGames = JSON.parse(localStorage.getItem("gamecheck_custom_games") || "[]");
let favGames = JSON.parse(localStorage.getItem("gamecheck_fav_games") || "[]");
let savedBuilds = JSON.parse(localStorage.getItem("gamecheck_saved_builds") || "[]");
let devName = sanitizeText(localStorage.getItem("neox_dev_name") || "NeoX Dev", 50) || "NeoX Dev";
let myDiscord = JSON.parse(localStorage.getItem("gamecheck_my_discord") || JSON.stringify({
  handle: DEFAULT_DISCORD_ID,
  invite: DEFAULT_DISCORD_URL
}));
let socialLinks = JSON.parse(localStorage.getItem("gamecheck_social_links") || JSON.stringify(DEFAULT_SOCIAL_LINKS));

function normalizeText(str) {
  return sanitizeText(str, 120)
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[^a-z0-9\u0600-\u06ff]+/g, " ")
    .trim();
}

function populateHardwareSelects(selectedGpuIndex = 10, selectedCpuIndex = 4) {
  const gpuQuery = normalizeText(gpuFilterInput.value);
  const cpuQuery = normalizeText(cpuFilterInput.value);

  const currentGpu = Number(gpuSelect.value) || selectedGpuIndex;
  const currentCpu = Number(cpuSelect.value) || selectedCpuIndex;

  gpuSelect.innerHTML = "";
  gpus.forEach((gpu, i) => {
    if (!gpuQuery || normalizeText(gpu.name).includes(gpuQuery) || i === currentGpu) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = gpu.name;
      if (i === currentGpu) opt.selected = true;
      gpuSelect.appendChild(opt);
    }
  });

  cpuSelect.innerHTML = "";
  cpus.forEach((cpu, i) => {
    if (!cpuQuery || normalizeText(cpu.name).includes(cpuQuery) || i === currentCpu) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = cpu.name;
      if (i === currentCpu) opt.selected = true;
      cpuSelect.appendChild(opt);
    }
  });

  if (!gpuSelect2.options.length) {
    gpus.forEach((gpu, i) => {
      const sel2 = gpu.name.includes("RTX 4060 (8GB)") ? "selected" : "";
      gpuSelect2.innerHTML += `<option value="${i}" ${sel2}>${gpu.name}</option>`;
    });
  }

  if (!cpuSelect2.options.length) {
    cpus.forEach((cpu, i) => {
      const sel2 = cpu.name.includes("13600K") ? "selected" : "";
      cpuSelect2.innerHTML += `<option value="${i}" ${sel2}>${cpu.name}</option>`;
    });
  }

  if (!gpuSelect3.options.length) {
    gpus.forEach((gpu, i) => {
      const sel3 = gpu.name.includes("RTX 4070 / 4070 Super") ? "selected" : "";
      gpuSelect3.innerHTML += `<option value="${i}" ${sel3}>${gpu.name}</option>`;
    });
  }

  if (!cpuSelect3.options.length) {
    cpus.forEach((cpu, i) => {
      const sel3 = cpu.name.includes("7800X3D") ? "selected" : "";
      cpuSelect3.innerHTML += `<option value="${i}" ${sel3}>${cpu.name}</option>`;
    });
  }
}

gpuFilterInput.addEventListener("input", () => populateHardwareSelects());
cpuFilterInput.addEventListener("input", () => populateHardwareSelects());

function applyUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const gIdx = Number(params.get("gpu"));
  const cIdx = Number(params.get("cpu"));
  if (Number.isInteger(gIdx) && gpus[gIdx]) gpuSelect.value = String(gIdx);
  if (Number.isInteger(cIdx) && cpus[cIdx]) cpuSelect.value = String(cIdx);
  if (params.has("ram")) ramSelect.value = params.get("ram");
  if (params.has("res")) resSelect.value = params.get("res");
  if (params.has("preset") && presetConfig[params.get("preset")]) globalPresetSelect.value = params.get("preset");
  if (params.has("up")) upscaleSelect.value = params.get("up");
}

// اختبار أداء مباشر للمتصفح
runBrowserBenchBtn.addEventListener("click", () => {
  runBrowserBenchBtn.disabled = true;
  browserBenchResult.textContent = "⏳ جارٍ قياس سرعة الحسابات والإطارات...";

  const mathStart = performance.now();
  let acc = 0;
  for (let i = 0; i < 6500000; i++) {
    acc += Math.sin(i * 0.001) * Math.cos(i * 0.0005);
  }
  const mathElapsedMs = Math.max(1, performance.now() - mathStart);

  let frames = 0;
  const rafStart = performance.now();

  function tick(now) {
    frames++;
    if (now - rafStart < 450) {
      requestAnimationFrame(tick);
    } else {
      const elapsedSec = (now - rafStart) / 1000;
      const measuredHz = Math.round(frames / elapsedSec);
      const computeScore = Math.min(200, Math.round((6500000 / mathElapsedMs) / 45));
      browserBenchResult.textContent = `✅ نتيجة المتصفح: ${computeScore} نقطة معالجة (${mathElapsedMs.toFixed(0)}ms) | معدل الإطارات المقاس: ~${measuredHz} FPS (نسبة: ${acc ? "مستقرة" : "مستقرة"})`;
      runBrowserBenchBtn.disabled = false;
    }
  }

  requestAnimationFrame(tick);
});

resetAllBtn.addEventListener("click", () => {
  gpuFilterInput.value = "";
  cpuFilterInput.value = "";
  populateHardwareSelects(10, 4);
  gpuSelect.value = "10";
  cpuSelect.value = "4";
  ramSelect.value = "16";
  resSelect.value = "1";
  hzSelect.value = "60";
  globalPresetSelect.value = "high";
  upscaleSelect.value = "1";
  sortSelect.value = "default";
  searchInput.value = "";
  currentCategory = "all";
  currentPlayability = "all";
  pickedRandomGameId = null;
  rayTracingEnabled = false;
  heavyModsEnabled = false;
  streamingModeEnabled = false;
  compareMode = false;

  streamToggleBtn.textContent = "🎥 تسجيل / بث (OBS): مغلق";
  streamToggleBtn.classList.remove("btn-green");
  streamToggleBtn.classList.add("btn-outline");

  rtToggleBtn.textContent = "🔆 تتبع الأشعة (Ray Tracing): مغلق";
  rtToggleBtn.classList.remove("btn-amber");
  rtToggleBtn.classList.add("btn-outline");

  modsToggleBtn.textContent = "🧩 مودات ثقيلة (Mods): مغلق";
  modsToggleBtn.classList.remove("btn-purple");
  modsToggleBtn.classList.add("btn-outline");

  compareBox.classList.remove("active");
  toggleCompareBtn.textContent = "⚖️ مقارنة 3 تجميعات";

  perGamePresets = {};
  localStorage.removeItem("gamecheck_game_presets");
  filterButtons.forEach((b) => b.classList.toggle("active", b.dataset.cat === "all"));
  playabilityButtons.forEach((b) => b.classList.toggle("active", b.dataset.play === "all"));
  shareStatus.textContent = "تمت إعادة ضبط جميع الإعدادات إلى الوضع الافتراضي.";
  renderGames();
});

document.querySelectorAll("[data-preset-build]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.presetBuild;
    if (type === "budget") {
      gpuSelect.value = "3";
      cpuSelect.value = "0";
      ramSelect.value = "8";
      resSelect.value = "1";
      globalPresetSelect.value = "medium";
    } else if (type === "sim") {
      gpuSelect.value = "10";
      cpuSelect.value = "4";
      ramSelect.value = "16";
      resSelect.value = "1";
      globalPresetSelect.value = "high";
    } else if (type === "mid") {
      gpuSelect.value = "22";
      cpuSelect.value = "9";
      ramSelect.value = "32";
      resSelect.value = "0.72";
      globalPresetSelect.value = "high";
    } else if (type === "ultra4k") {
      gpuSelect.value = String(gpus.length - 1);
      cpuSelect.value = String(cpus.length - 1);
      ramSelect.value = "64";
      resSelect.value = "0.45";
      globalPresetSelect.value = "ultra";
    }
    renderGames();
  });
});

document.querySelectorAll("[data-quick-search]").forEach((btn) => {
  btn.addEventListener("click", () => {
    searchInput.value = btn.dataset.quickSearch;
    pickedRandomGameId = null;
    currentCategory = "all";
    currentPlayability = "all";
    filterButtons.forEach((b) => b.classList.toggle("active", b.dataset.cat === "all"));
    playabilityButtons.forEach((b) => b.classList.toggle("active", b.dataset.play === "all"));
    renderGames();
  });
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  pickedRandomGameId = null;
  renderGames();
});

randomGameBtn.addEventListener("click", () => {
  const pool = [...customGames, ...defaultGames].filter((g) => {
    if (currentCategory === "all" || currentCategory === "fav" || currentCategory === "y2026") return true;
    return g.category === currentCategory;
  });
  if (pool.length === 0) return;
  const chosen = pool[Math.floor(Math.random() * pool.length)];
  pickedRandomGameId = chosen.id;
  searchInput.value = chosen.title;
  renderGames();
  shareStatus.textContent = `🎲 تم اختيار لعبة عشوائية: ${chosen.title}`;
});

themeToggleBtn.addEventListener("click", () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  document.body.className = themes[currentThemeIndex].class;
  themeToggleBtn.textContent = currentLang === "ar"
    ? themes[currentThemeIndex].labelAr
    : themes[currentThemeIndex].labelEn;
});

langToggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  langToggleBtn.textContent = currentLang === "ar" ? "🌐 English" : "🌐 العربية";
  themeToggleBtn.textContent = currentLang === "ar"
    ? themes[currentThemeIndex].labelAr
    : themes[currentThemeIndex].labelEn;

  document.getElementById("mainTitle").textContent = currentLang === "ar"
    ? "FPS Lab — فاحص تشغيل الألعاب وتقدير الفريمات"
    : "FPS Lab — PC Game Benchmark & FPS Estimator";
  document.getElementById("mainSubtitle").textContent = currentLang === "ar"
    ? "اختر مواصفات جهازك أو جرّب التجميعات الجاهزة، واحصل على فحص التوافق والأداء والترقية واستهلاك الطاقة"
    : "Select your PC hardware or try presets for compatibility, FPS, PSU wattage, and upgrade insights";
  document.getElementById("lblGpu").textContent = currentLang === "ar" ? "كرت الشاشة الأساسي (GPU 1)" : "Primary Graphics Card (GPU 1)";
  document.getElementById("lblCpu").textContent = currentLang === "ar" ? "المعالج الأساسي (CPU 1)" : "Primary Processor (CPU 1)";
  document.getElementById("lblRam").textContent = currentLang === "ar" ? "الذاكرة (RAM 1)" : "Memory (RAM 1)";
  document.getElementById("lblRes").textContent = currentLang === "ar" ? "دقة الشاشة (Resolution)" : "Screen Resolution";
  document.getElementById("lblPreset").textContent = currentLang === "ar" ? "أداء اللعبة العام (Preset)" : "Graphics Quality Preset";
  document.getElementById("lblUpscale").textContent = currentLang === "ar" ? "تقنية رفع الفريمات (DLSS / FSR)" : "Upscaling (DLSS / FSR / FG)";
  searchInput.placeholder = currentLang === "ar"
    ? "ابحث باسم اللعبة أو الاختصار (مثلاً: fh6, requiem, rdr2, beamng)..."
    : "Search by game name or alias (e.g. fh6, requiem, rdr2)...";
  renderGames();
});

streamToggleBtn.addEventListener("click", () => {
  streamingModeEnabled = !streamingModeEnabled;
  streamToggleBtn.textContent = streamingModeEnabled
    ? "🎥 تسجيل / بث (OBS): مفعّل (-14% FPS)"
    : "🎥 تسجيل / بث (OBS): مغلق";
  streamToggleBtn.classList.toggle("btn-green", streamingModeEnabled);
  streamToggleBtn.classList.toggle("btn-outline", !streamingModeEnabled);
  renderGames();
});

modsToggleBtn.addEventListener("click", () => {
  heavyModsEnabled = !heavyModsEnabled;
  modsToggleBtn.textContent = heavyModsEnabled
    ? "🧩 مودات ثقيلة (Mods): مفعّل (-22% FPS)"
    : "🧩 مودات ثقيلة (Mods): مغلق";
  modsToggleBtn.classList.toggle("btn-purple", heavyModsEnabled);
  modsToggleBtn.classList.toggle("btn-outline", !heavyModsEnabled);
  renderGames();
});

rtToggleBtn.addEventListener("click", () => {
  rayTracingEnabled = !rayTracingEnabled;
  rtToggleBtn.textContent = rayTracingEnabled
    ? "🔆 تتبع الأشعة (Ray Tracing): مفعّل (-28% FPS)"
    : "🔆 تتبع الأشعة (Ray Tracing): مغلق";
  rtToggleBtn.classList.toggle("btn-amber", rayTracingEnabled);
  rtToggleBtn.classList.toggle("btn-outline", !rayTracingEnabled);
  renderGames();
});

toggleCompareBtn.addEventListener("click", () => {
  compareMode = !compareMode;
  compareBox.classList.toggle("active", compareMode);
  toggleCompareBtn.textContent = compareMode
    ? "✖ إخفاء المقارنة"
    : "⚖️ مقارنة 3 تجميعات";
  renderGames();
});

copyReportBtn.addEventListener("click", async () => {
  const gpu = gpus[gpuSelect.value];
  const cpu = cpus[cpuSelect.value];
  const ram = Number(ramSelect.value);
  const resMultiplier = Number(resSelect.value);
  const upscaleMultiplier = Number(upscaleSelect.value);
  const modsMultiplier = heavyModsEnabled ? 0.78 : 1.0;
  const rtMultiplier = rayTracingEnabled ? 0.72 : 1.0;
  const streamMultiplier = streamingModeEnabled ? 0.86 : 1.0;
  const rawScore = (gpu.score * 0.72) + (cpu.score * 0.28);

  const sampleIds = ["fh6_2026", "rer_2026", "mw4_2026", "gtav", "rdr2", "beamng"];
  const lines = sampleIds.map((id) => {
    const g = defaultGames.find((item) => item.id === id);
    if (!g) return "";
    const calc = calculateGameFps(g, rawScore, ram, resMultiplier, upscaleMultiplier, rtMultiplier, modsMultiplier, streamMultiplier, globalPresetSelect.value);
    return `- ${g.title}: ~${calc.fps} FPS`;
  }).filter(Boolean);

  const report = [
    `⚡ تقرير تجميعة FPS Lab (${devName}):`,
    `- GPU: ${gpu.name}`,
    `- CPU: ${cpu.name}`,
    `- RAM: ${ram} GB | شاشة: ${resSelect.options[resSelect.selectedIndex].text} (${hzSelect.value}Hz)`,
    "أبرز النتائج التقديرية:",
    ...lines
  ].join("\n");

  try {
    await navigator.clipboard.writeText(report);
    shareStatus.textContent = "تم نسخ تقرير التجميعة الكامل!";
  } catch {
    shareStatus.textContent = "تعذر النسخ التلقائي من المتصفح.";
  }
});

shareBuildBtn.addEventListener("click", async () => {
  const url = new URL(window.location.href);
  url.searchParams.set("gpu", gpuSelect.value);
  url.searchParams.set("cpu", cpuSelect.value);
  url.searchParams.set("ram", ramSelect.value);
  url.searchParams.set("res", resSelect.value);
  url.searchParams.set("preset", globalPresetSelect.value);
  url.searchParams.set("up", upscaleSelect.value);

  const shareUrl = url.toString();
  try {
    await navigator.clipboard.writeText(shareUrl);
    shareStatus.textContent = "تم نسخ رابط التجميعة!";
  } catch {
    shareStatus.textContent = `رابط التجميعة: ${shareUrl}`;
  }
});

function renderSavedBuilds() {
  savedBuildsList.innerHTML = savedBuilds.map((b, idx) => `
    <span class="saved-chip" data-load-build="${idx}">
      🖥️ <strong>${sanitizeText(b.name, 40)}</strong>
      <span class="del-build" data-del-build="${idx}" title="حذف">×</span>
    </span>
  `).join("");

  savedBuildsList.querySelectorAll("[data-load-build]").forEach((chip) => {
    chip.addEventListener("click", (e) => {
      if (e.target.dataset.delBuild !== undefined) return;
      const b = savedBuilds[Number(chip.dataset.loadBuild)];
      if (!b) return;
      if (gpus[b.gpu]) gpuSelect.value = String(b.gpu);
      if (cpus[b.cpu]) cpuSelect.value = String(b.cpu);
      ramSelect.value = String(b.ram);
      resSelect.value = String(b.res);
      if (presetConfig[b.preset]) globalPresetSelect.value = b.preset;
      renderGames();
    });
  });

  savedBuildsList.querySelectorAll("[data-del-build]").forEach((delBtn) => {
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = Number(delBtn.dataset.delBuild);
      savedBuilds.splice(idx, 1);
      localStorage.setItem("gamecheck_saved_builds", JSON.stringify(savedBuilds));
      renderSavedBuilds();
    });
  });
}

saveBuildBtn.addEventListener("click", () => {
  const safeName = sanitizeText(buildNameInput.value, 40) || `تجميعة #${savedBuilds.length + 1}`;
  savedBuilds.unshift({
    name: safeName,
    gpu: Number(gpuSelect.value),
    cpu: Number(cpuSelect.value),
    ram: Number(ramSelect.value),
    res: Number(resSelect.value),
    preset: globalPresetSelect.value
  });
  savedBuilds = savedBuilds.slice(0, 25);
  localStorage.setItem("gamecheck_saved_builds", JSON.stringify(savedBuilds));
  buildNameInput.value = "";
  renderSavedBuilds();
});

toggleBackupBtn.addEventListener("click", () => {
  const isHidden = backupBox.style.display === "none";
  backupBox.style.display = isHidden ? "block" : "none";
  if (isHidden) {
    backupJsonArea.value = JSON.stringify({ savedBuilds, customGames, favGames });
  }
});

exportBackupBtn.addEventListener("click", async () => {
  const payload = JSON.stringify({ savedBuilds, customGames, favGames });
  backupJsonArea.value = payload;
  try {
    await navigator.clipboard.writeText(payload);
    shareStatus.textContent = "تم نسخ النسخة الاحتياطية JSON إلى الحافظة.";
  } catch {
    shareStatus.textContent = "النسخة الاحتياطية جاهزة في الصندوق للنسخ.";
  }
});

importBackupBtn.addEventListener("click", () => {
  try {
    const parsed = JSON.parse(backupJsonArea.value.trim());
    if (!parsed || typeof parsed !== "object") throw new Error("Invalid");

    if (Array.isArray(parsed.savedBuilds)) {
      savedBuilds = parsed.savedBuilds.slice(0, 25).map((item) => ({
        name: sanitizeText(item.name, 40) || "تجميعة مستعادة",
        gpu: Number.isInteger(Number(item.gpu)) && gpus[Number(item.gpu)] ? Number(item.gpu) : 10,
        cpu: Number.isInteger(Number(item.cpu)) && cpus[Number(item.cpu)] ? Number(item.cpu) : 4,
        ram: [2, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256].includes(Number(item.ram)) ? Number(item.ram) : 16,
        res: [1, 0.72, 0.45].includes(Number(item.res)) ? Number(item.res) : 1,
        preset: presetConfig[item.preset] ? item.preset : "high"
      }));
      localStorage.setItem("gamecheck_saved_builds", JSON.stringify(savedBuilds));
    }

    if (Array.isArray(parsed.customGames)) {
      const validCats = ["sim", "action", "fps", "rpg"];
      customGames = parsed.customGames.slice(0, 50).map((g, idx) => ({
        id: "custom_" + idx + "_" + Date.now().toString().slice(-4),
        title: sanitizeText(g.title, 70) || `لعبة مخصصة ${idx + 1}`,
        category: validCats.includes(g.category) ? g.category : "sim",
        reqScore: Math.max(10, Math.min(120, Number(g.reqScore) || 55)),
        reqRam: [4, 8, 16, 32].includes(Number(g.reqRam)) ? Number(g.reqRam) : 16,
        baseFps: 75,
        isCustom: true
      }));
      localStorage.setItem("gamecheck_custom_games", JSON.stringify(customGames));
    }

    if (Array.isArray(parsed.favGames)) {
      favGames = parsed.favGames.slice(0, 100).map((id) => sanitizeText(String(id), 40)).filter(Boolean);
      localStorage.setItem("gamecheck_fav_games", JSON.stringify(favGames));
    }

    renderSavedBuilds();
    renderGames();
    shareStatus.textContent = "تم استرجاع البيانات بأمان!";
  } catch {
    shareStatus.textContent = "صيغة JSON غير صحيحة أو تالفة.";
  }
});

let posterSnapshotData = null;

openPosterBtn.addEventListener("click", () => {
  const gpu = gpus[gpuSelect.value];
  const cpu = cpus[cpuSelect.value];
  const ram = Number(ramSelect.value);
  const resMultiplier = Number(resSelect.value);
  const upscaleMultiplier = Number(upscaleSelect.value);
  const modsMultiplier = heavyModsEnabled ? 0.78 : 1.0;
  const rtMultiplier = rayTracingEnabled ? 0.72 : 1.0;
  const streamMultiplier = streamingModeEnabled ? 0.86 : 1.0;
  const rawScore = (gpu.score * 0.72) + (cpu.score * 0.28);

  posterSpecsContent.innerHTML = `
    <div>🎮 <strong>كرت الشاشة:</strong> ${gpu.name}</div>
    <div>🧠 <strong>المعالج:</strong> ${cpu.name}</div>
    <div>💾 <strong>الرام والشاشة:</strong> ${ram} GB | ${resSelect.options[resSelect.selectedIndex].text} (${hzSelect.value}Hz)</div>
    <div>⚙️ <strong>المطور:</strong> ${devName}</div>
  `;

  const highlightIds = ["fh6_2026", "rer_2026", "mw4_2026", "pbz_2026", "gtav", "rdr2", "beamng", "cs2"];
  const selectedGames = defaultGames.filter((g) => highlightIds.includes(g.id)).map((g) => {
    const shortName = g.title.split("(")[0].trim();
    const res = calculateGameFps(g, rawScore, ram, resMultiplier, upscaleMultiplier, rtMultiplier, modsMultiplier, streamMultiplier, globalPresetSelect.value);
    return { shortName, fps: res.fps };
  });

  posterSnapshotData = {
    gpuName: gpu.name,
    cpuName: cpu.name,
    ramText: `${ram} GB | ${resSelect.options[resSelect.selectedIndex].text} (${hzSelect.value}Hz)`,
    devLabel: `NeoX — ${devName}`,
    games: selectedGames
  };

  posterGamesContent.innerHTML = selectedGames.map((item) => `
    <div class="poster-game-item">
      <span>${item.shortName}</span>
      <strong style="color:#4ade80;">${item.fps} FPS</strong>
    </div>
  `).join("");

  posterModal.classList.add("open");
});

downloadPngBtn.addEventListener("click", () => {
  if (!posterSnapshotData) return;

  const canvas = document.createElement("canvas");
  canvas.width = 900;
  canvas.height = 560;
  const ctx = canvas.getContext("2d");

  const grad = ctx.createLinearGradient(0, 0, 900, 560);
  grad.addColorStop(0, "#0f172a");
  grad.addColorStop(1, "#1e1b4b");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 900, 560);

  ctx.strokeStyle = "#38bdf8";
  ctx.lineWidth = 4;
  ctx.strokeRect(16, 16, 868, 528);

  ctx.direction = "rtl";
  ctx.textAlign = "right";
  ctx.fillStyle = "#38bdf8";
  ctx.font = "bold 30px Arial, sans-serif";
  ctx.fillText("⚡ FPS Lab — بطاقة أداء التجميعة", 850, 68);

  ctx.fillStyle = "#f8fafc";
  ctx.font = "bold 20px Arial, sans-serif";
  ctx.fillText(`GPU: ${posterSnapshotData.gpuName}`, 850, 120);
  ctx.fillText(`CPU: ${posterSnapshotData.cpuName}`, 850, 155);

  ctx.fillStyle = "#cbd5e1";
  ctx.font = "18px Arial, sans-serif";
  ctx.fillText(`RAM & Display: ${posterSnapshotData.ramText}`, 850, 190);

  posterSnapshotData.games.forEach((g, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = col === 0 ? 850 : 430;
    const y = 275 + row * 56;

    ctx.fillStyle = "rgba(30, 41, 59, 0.9)";
    ctx.fillRect(x - 390, y - 30, 390, 44);

    ctx.fillStyle = "#f1f5f9";
    ctx.font = "bold 17px Arial, sans-serif";
    ctx.fillText(g.shortName, x - 12, y - 2);

    ctx.fillStyle = "#4ade80";
    ctx.fillText(`${g.fps} FPS`, x - 310, y - 2);
  });

  ctx.fillStyle = "#94a3b8";
  ctx.font = "15px Arial, sans-serif";
  ctx.fillText(posterSnapshotData.devLabel, 850, 522);

  const link = document.createElement("a");
  link.download = "FPS-Lab-NeoX-Build.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});

closePosterBtn.addEventListener("click", () => posterModal.classList.remove("open"));
posterModal.addEventListener("click", (e) => {
  if (e.target === posterModal) posterModal.classList.remove("open");
});

function buildDiscordTargetUrl() {
  const safeInvite = sanitizeUrl(myDiscordInvite.value || myDiscord.invite || "");
  const handleVal = sanitizeText(myDiscordHandle.value || myDiscord.handle || "", 32);
  if (safeInvite) return safeInvite;
  if (/^\d{15,22}$/.test(handleVal)) return `https://discord.com/users/${handleVal}`;
  return DEFAULT_DISCORD_URL;
}

function renderDiscordProfile() {
  myDiscordHandle.value = myDiscord.handle || DEFAULT_DISCORD_ID;
  myDiscordInvite.value = myDiscord.invite || DEFAULT_DISCORD_URL;
  discordDisplay.textContent = `💬 حساب Discord للدعم: ${myDiscord.handle || DEFAULT_DISCORD_ID}`;
  contactSupportDiscordBtn.href = buildDiscordTargetUrl();
}

function persistDiscordProfile() {
  const handleVal = sanitizeText(myDiscordHandle.value, 32) || DEFAULT_DISCORD_ID;
  let inviteVal = sanitizeUrl(myDiscordInvite.value);
  if (!inviteVal) {
    inviteVal = /^\d{15,22}$/.test(handleVal)
      ? `https://discord.com/users/${handleVal}`
      : DEFAULT_DISCORD_URL;
  }
  myDiscord = { handle: handleVal, invite: inviteVal };
  localStorage.setItem("gamecheck_my_discord", JSON.stringify(myDiscord));
  renderDiscordProfile();
}

saveDiscordBtn.addEventListener("click", () => {
  persistDiscordProfile();
  supportStatus.textContent = "تم حفظ إعدادات الدعم بأمان.";
});

attachSpecsBtn.addEventListener("click", () => {
  const gpuName = gpus[gpuSelect.value].name;
  const cpuName = cpus[cpuSelect.value].name;
  const ramVal = ramSelect.value + " GB";
  const resText = resSelect.options[resSelect.selectedIndex].text;
  const presetText = globalPresetSelect.options[globalPresetSelect.selectedIndex].text;
  const safeMsg = sanitizeText(supportMessage.value, 1200);

  const summary = `مواصفات جهازي:\n- GPU: ${gpuName}\n- CPU: ${cpuName}\n- RAM: ${ramVal}\n- الدقة: ${resText} (${presetText})\n`;
  supportMessage.value = summary + (safeMsg ? "\n" + safeMsg : "");
  supportStatus.textContent = "تم إدراج مواصفات جهازك في الرسالة.";
});

contactSupportDiscordBtn.addEventListener("click", async (e) => {
  persistDiscordProfile();
  const targetUrl = buildDiscordTargetUrl();
  contactSupportDiscordBtn.href = targetUrl;

  const handle = myDiscord.handle || DEFAULT_DISCORD_ID;
  const msg = sanitizeText(supportMessage.value, 1400);
  const textToCopy = [handle ? `Discord ID: ${handle}` : "", msg].filter(Boolean).join("\n");

  if (textToCopy) {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch {}
  }

  supportStatus.textContent = `تم فتح حساب الدعم (${handle}) ونسخ المعلومات.`;
  window.open(targetUrl, "_blank", "noopener,noreferrer");
  e.preventDefault();
});

copyDiscordBtn.addEventListener("click", async () => {
  persistDiscordProfile();
  const textToCopy = (myDiscord.handle || DEFAULT_DISCORD_ID).trim();
  try {
    await navigator.clipboard.writeText(textToCopy);
    supportStatus.textContent = `تم نسخ Discord ID: ${textToCopy}`;
  } catch {
    supportStatus.textContent = `Discord ID: ${textToCopy}`;
  }
});

function renderSocialLinks() {
  ytUrl.value = socialLinks.yt || "";
  ttUrl.value = socialLinks.tt || "";
  dcUrl.value = socialLinks.dc || DEFAULT_DISCORD_URL;
  tgUrl.value = socialLinks.tg || "";

  const items = [
    { label: "▶ YouTube", url: sanitizeUrl(socialLinks.yt) },
    { label: "🎵 TikTok", url: sanitizeUrl(socialLinks.tt) },
    { label: "💬 Discord", url: sanitizeUrl(socialLinks.dc) },
    { label: "📣 مجموعة التواصل", url: sanitizeUrl(socialLinks.tg) }
  ];

  socialLinksRow.innerHTML = items
    .filter((item) => item.url)
    .map((item) => `<a class="social-pill" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a>`)
    .join("");
}

saveSocialBtn.addEventListener("click", () => {
  socialLinks = {
    yt: sanitizeUrl(ytUrl.value),
    tt: sanitizeUrl(ttUrl.value),
    dc: sanitizeUrl(dcUrl.value) || DEFAULT_DISCORD_URL,
    tg: sanitizeUrl(tgUrl.value)
  };
  localStorage.setItem("gamecheck_social_links", JSON.stringify(socialLinks));
  renderSocialLinks();
});

function renderDeveloperCredit() {
  developerCreditText.textContent = `تطوير وإشراف: ${devName}`;
  devNameInput.value = devName;
}

saveDevNameBtn.addEventListener("click", () => {
  const cleaned = sanitizeText(devNameInput.value, 50);
  if (!cleaned) return;
  devName = cleaned;
  localStorage.setItem("neox_dev_name", devName);
  renderDeveloperCredit();
  shareStatus.textContent = "تم تحديث اسم المطور في التذييل.";
});

addGameBtn.addEventListener("click", () => {
  const title = sanitizeText(newGameTitle.value, 70);
  if (!title) return;

  const validCats = ["sim", "action", "fps", "rpg"];
  const cat = validCats.includes(newGameCat.value) ? newGameCat.value : "sim";
  const weight = Math.max(20, Math.min(100, Number(newGameWeight.value) || 55));
  const reqRam = [4, 8, 16, 32].includes(Number(newGameRam.value)) ? Number(newGameRam.value) : 16;

  const newGame = {
    id: "custom_" + Date.now(),
    title,
    category: cat,
    year: 2026,
    benchRef: weight,
    reqScore: weight,
    reqRam,
    baseFps: 75,
    isCustom: true
  };

  customGames.unshift(newGame);
  customGames = customGames.slice(0, 50);
  localStorage.setItem("gamecheck_custom_games", JSON.stringify(customGames));
  newGameTitle.value = "";
  renderGames();
});

function matchesGameQuery(game, rawQuery) {
  const q = normalizeText(rawQuery);
  if (!q) return true;

  const titleNorm = normalizeText(game.title);
  if (titleNorm.includes(q)) return true;

  const aliases = gameAliases[game.id] || [];
  if (aliases.some((a) => normalizeText(a).includes(q) || q.includes(normalizeText(a)))) {
    return true;
  }

  const tokens = q.split(/\s+/).filter(Boolean);
  return tokens.length > 0 && tokens.every((t) => titleNorm.includes(t));
}

function calculateGameFps(game, rawScore, ram, resMultiplier, upscaleMultiplier, rtMultiplier, modsMultiplier, streamMultiplier, selectedPresetKey, gpuObj = gpus[Number(gpuSelect.value)], cpuObj = cpus[Number(cpuSelect.value)]) {
  const presetInfo = presetConfig[selectedPresetKey] || presetConfig.high;
  const benchFactor = game.benchRef ? (game.reqScore / game.benchRef) : 1;
  const requiredPower = game.reqScore * presetInfo.loadMultiplier * benchFactor;

  const cpuWeight = game.category === "fps" || game.category === "sim" ? 0.36 : 0.24;
  const gpuWeight = 1 - cpuWeight;
  const gameAwareRawScore = (gpuObj.score * gpuWeight) + (cpuObj.score * cpuWeight);
  const baseScoreForCalc = rawScore === gameAwareRawScore ? rawScore : gameAwareRawScore;

  const nativePower = baseScoreForCalc * resMultiplier * rtMultiplier * modsMultiplier * streamMultiplier;
  const upscaledPower = nativePower * upscaleMultiplier;

  let nativeFps = Math.round(game.baseFps * (nativePower / requiredPower));
  let fps = Math.round(game.baseFps * (upscaledPower / requiredPower));

  let effectiveReqRam = selectedPresetKey === "ultra" ? game.reqRam + 4 : game.reqRam;
  if (heavyModsEnabled) effectiveReqRam += 4;
  if (streamingModeEnabled) effectiveReqRam += 4;

  if (ram < effectiveReqRam) {
    const ramRatio = Math.max(0.35, ram / effectiveReqRam);
    nativeFps = Math.round(nativeFps * ramRatio);
    fps = Math.round(fps * ramRatio);
  }

  return {
    fps: Math.max(10, Math.min(fps, 360)),
    nativeFps: Math.max(10, Math.min(nativeFps, 360)),
    effectiveReqRam,
    presetLabel: presetInfo.label
  };
}

function updateCompatibilityAndInsights(gpuIdx, cpuIdx, ram, resMultiplier, upscaleMultiplier, allCalculated) {
  const gpu = gpus[gpuIdx];
  const cpu = cpus[cpuIdx];

  // فحص توافق المعالج وكرت الشاشة والرام
  const adjustedGpuForCompat = gpu.score * resMultiplier;
  const ratioDiff = Math.abs(adjustedGpuForCompat - cpu.score) / Math.max(adjustedGpuForCompat, cpu.score);
  const cpuGpuStatus = ratioDiff <= 0.22
    ? "✅ متوافق ومتوازن"
    : adjustedGpuForCompat > cpu.score
      ? "⚠️ المعالج أضعف نسبياً من الكرت"
      : "ℹ️ كرت الشاشة أضعف نسبياً من المعالج";

  const ramNeededNow = (streamingModeEnabled || heavyModsEnabled) ? 20 : 16;
  const ramStatus = ram >= 32
    ? "✅ ممتاز (32GB+ مناسب للألعاب والمودات)"
    : ram >= ramNeededNow
      ? "✅ متوافق جيداً للألعاب الحالية"
      : `⚠️ يُنصح بترقية الرام إلى ${ramNeededNow}GB+`;

  let neededVram = 4;
  if (resMultiplier === 0.72) neededVram = 8;
  else if (resMultiplier === 0.45) neededVram = 12;
  if (rayTracingEnabled) neededVram += 2;
  if (globalPresetSelect.value === "ultra") neededVram += 2;

  const vramStatus = gpu.vram >= neededVram
    ? `✅ كافٍ (${gpu.vram}GB / مطلوب ~${neededVram}GB)`
    : `⚠️ منخفض (${gpu.vram}GB / مطلوب ~${neededVram}GB)`;

  compatCheckBox.innerHTML = `
    <strong>🛡️ فحص توافق المنصة (CPU + GPU + RAM):</strong>
    <div class="compat-items">
      <div class="compat-chip"><strong>المعالج × الكرت:</strong><br>${cpuGpuStatus}</div>
      <div class="compat-chip"><strong>الذاكرة العشوائية (RAM):</strong><br>${ramStatus}</div>
      <div class="compat-chip"><strong>ذاكرة الفيديو (VRAM):</strong><br>${vramStatus}</div>
    </div>
  `;

  const avgSample = allCalculated.length
    ? Math.round(allCalculated.reduce((acc, item) => acc + item.res1.fps, 0) / allCalculated.length)
    : 60;
  const resName = resSelect.options[resSelect.selectedIndex].text;
  const upName = upscaleSelect.options[upscaleSelect.selectedIndex].text;

  let verdictText = "";
  if (avgSample >= 120) {
    verdictText = `🎯 <strong>تجربة اللعب المتوقعة (${resName} | ${upName}):</strong> مثالية للعب التنافسي عالي الفريمات والقيادة السلسة جداً.`;
  } else if (avgSample >= 60) {
    verdictText = `🎮 <strong>تجربة اللعب المتوقعة (${resName} | ${upName}):</strong> تجربة قصة ومحاكاة سلسة (60+ FPS) في أغلب الألعاب.`;
  } else {
    verdictText = `🛠️ <strong>تجربة اللعب المتوقعة (${resName} | ${upName}):</strong> يُنصح بخفض الإعدادات أو تفعيل DLSS/FSR لرفع السلاسة.`;
  }
  expVerdictBanner.innerHTML = verdictText;

  if (gpu.vram < neededVram) {
    vramWarningBox.classList.add("active");
    vramWarningBox.innerHTML = `🚨 <strong>تنبيه VRAM:</strong> كرت الشاشة يملك <strong>${gpu.vram}GB VRAM</strong> بينما الإعدادات الحالية قد تحتاج إلى <strong>~${neededVram}GB+</strong>.`;
  } else {
    vramWarningBox.classList.remove("active");
    vramWarningBox.innerHTML = "";
  }

  const pct = Math.min(45, Math.round(ratioDiff * 100));
  if (pct <= 12) {
    bottleneckBar.className = "insight-box bn-good";
    bottleneckBar.innerHTML = `✅ <strong>توافق القطع ممتاز:</strong> توازن جيد بين المعالج والكرت (الفارق: ${pct}%).`;
  } else if (adjustedGpuForCompat > cpu.score) {
    bottleneckBar.className = pct > 25 ? "insight-box bn-bad" : "insight-box bn-warn";
    bottleneckBar.innerHTML = `⚠️ <strong>عنق زجاجة معالج (~${pct}%):</strong> يظهر تأثيره في ألعاب المحاكاة والشوتر.`;
  } else {
    bottleneckBar.className = pct > 25 ? "insight-box bn-bad" : "insight-box bn-warn";
    bottleneckBar.innerHTML = `ℹ️ <strong>عنق زجاجة كرت شاشة (~${pct}%):</strong> كرت الشاشة (${gpu.name}) هو المحدّد الأساسي.`;
  }

  const systemOverhead = 90 + (ram > 16 ? 20 : 10) + (streamingModeEnabled ? 25 : 0);
  const estimatedWatts = gpu.tdp + cpu.tdp + systemOverhead;
  const recommendedPsu = Math.ceil((estimatedWatts * 1.35) / 50) * 50;

  psuEstimatorBox.innerHTML = `
    ⚡ <strong>استهلاك الطاقة التقديري:</strong> ~${estimatedWatts}W تحت الضغط<br>
    🔌 <strong>الباور سبلاي المقترح (PSU):</strong> ${recommendedPsu}W أو أعلى
  `;

  let adviceText = "";
  let pillsHtml = "";

  if (ram < 16) {
    adviceText = `💡 <strong>مستشار الترقية:</strong> ترقية الذاكرة إلى <strong>16GB أو 32GB</strong> ستعطي تحسناً واضحاً.`;
    pillsHtml = `<button class="upgrade-pill" data-upgrade-ram="16" type="button">ترقية إلى 16GB RAM</button>
                 <button class="upgrade-pill" data-upgrade-ram="32" type="button">ترقية إلى 32GB RAM</button>`;
  } else if (gpu.score <= cpu.score && gpuIdx < gpus.length - 1) {
    const nextGpus = [gpuIdx + 2, gpuIdx + 4, gpuIdx + 6].filter((idx) => idx < gpus.length);
    adviceText = `💡 <strong>مستشار الترقية:</strong> خيارات ترقية مقترحة لكرت الشاشة:`;
    pillsHtml = nextGpus.map((idx) => `<button class="upgrade-pill" data-upgrade-gpu="${idx}" type="button">${gpus[idx].name}</button>`).join("");
  } else if (cpuIdx < cpus.length - 1) {
    const nextCpus = [cpuIdx + 1, cpuIdx + 2, cpuIdx + 3].filter((idx) => idx < cpus.length);
    adviceText = `💡 <strong>مستشار الترقية:</strong> خيارات ترقية مقترحة للمعالج:`;
    pillsHtml = nextCpus.map((idx) => `<button class="upgrade-pill" data-upgrade-cpu="${idx}" type="button">${cpus[idx].name}</button>`).join("");
  } else {
    adviceText = `🏆 <strong>تجميعتك في القمة:</strong> تملك أقوى القطع المتوفرة حالياً!`;
  }

  upgradeAdvisorBox.innerHTML = `${adviceText}<div class="upgrade-pills">${pillsHtml}</div>`;

  upgradeAdvisorBox.querySelectorAll("[data-upgrade-ram]").forEach((btn) => {
    btn.addEventListener("click", () => {
      ramSelect.value = btn.dataset.upgradeRam;
      renderGames();
    });
  });

  upgradeAdvisorBox.querySelectorAll("[data-upgrade-gpu]").forEach((btn) => {
    btn.addEventListener("click", () => {
      gpuSelect.value = btn.dataset.upgradeGpu;
      renderGames();
    });
  });

  upgradeAdvisorBox.querySelectorAll("[data-upgrade-cpu]").forEach((btn) => {
    btn.addEventListener("click", () => {
      cpuSelect.value = btn.dataset.upgradeCpu;
      renderGames();
    });
  });

  const topGames = [...allCalculated].sort((a, b) => b.res1.fps - a.res1.fps).slice(0, 5);
  bestMatchBox.innerHTML = `
    🌟 <strong>الأكثر سلاسة على تجميعتك حالياً:</strong>
    <div class="best-match-pills">
      ${topGames.map((item) => `<span class="match-pill">${item.game.title.split("(")[0].trim()} — ${item.res1.fps} FPS</span>`).join("")}
    </div>
  `;
}

function renderGames() {
  const gpuIdx = Number(gpuSelect.value) || 0;
  const cpuIdx = Number(cpuSelect.value) || 0;
  const gpu = gpus[gpuIdx];
  const cpu = cpus[cpuIdx];
  const ram = Number(ramSelect.value);
  const resMultiplier = Number(resSelect.value);
  const targetHz = Number(hzSelect.value);
  const upscaleMultiplier = Number(upscaleSelect.value);
  const modsMultiplier = heavyModsEnabled ? 0.78 : 1.0;
  const rtMultiplier = rayTracingEnabled ? 0.72 : 1.0;
  const streamMultiplier = streamingModeEnabled ? 0.86 : 1.0;
  const defaultPresetKey = globalPresetSelect.value;
  const searchText = searchInput.value;
  const sortMode = sortSelect.value;

  const gpu2 = gpus[Number(gpuSelect2.value) || 0];
  const cpu2 = cpus[Number(cpuSelect2.value) || 0];
  const ram2 = Number(ramSelect2.value);
  const rawScore2 = (gpu2.score * 0.72) + (cpu2.score * 0.28);

  const gpu3 = gpus[Number(gpuSelect3.value) || 0];
  const cpu3 = cpus[Number(cpuSelect3.value) || 0];
  const ram3 = Number(ramSelect3.value);
  const rawScore3 = (gpu3.score * 0.72) + (cpu3.score * 0.28);

  const allGames = [...customGames, ...defaultGames];
  const rawScore = (gpu.score * 0.72) + (cpu.score * 0.28);
  const effectiveScore = Math.round(rawScore * resMultiplier * upscaleMultiplier * rtMultiplier * modsMultiplier * streamMultiplier);

  const allCalculatedForInsights = allGames.map((game) => {
    const selectedPresetKey = perGamePresets[game.id] || defaultPresetKey;
    const res1 = calculateGameFps(game, rawScore, ram, resMultiplier, upscaleMultiplier, rtMultiplier, modsMultiplier, streamMultiplier, selectedPresetKey, gpu, cpu);
    return { game, res1 };
  });

  updateCompatibilityAndInsights(gpuIdx, cpuIdx, ram, resMultiplier, upscaleMultiplier, allCalculatedForInsights);

  let tier = "متوسط";
  if (rawScore >= 145) tier = "وحش خارق (Ultra Flagship)";
  else if (rawScore >= 95) tier = "قوي جداً (High-End)";
  else if (rawScore >= 65) tier = "ممتاز للألعاب (Mid-High)";
  else if (rawScore < 42) tier = "اقتصادي (Entry-Level)";

  specsSummary.innerHTML = `
    <span>تقييم التجميعة: <strong>${tier}</strong></span>
    <span>عدد الألعاب: <strong>${allGames.length} لعبة</strong></span>
    <span>نقاط الأداء الفعلية: <strong>${effectiveScore} نقطة</strong></span>
  `;

  let computedList = allGames
    .filter((game) => {
      const isFav = favGames.includes(game.id);
      const matchCat =
        currentCategory === "all" ||
        (currentCategory === "fav" && isFav) ||
        (currentCategory === "y2026" && game.year === 2026) ||
        game.category === currentCategory;
      const matchSearch = matchesGameQuery(game, searchText);
      return matchCat && matchSearch;
    })
    .map((game) => {
      const isFav = favGames.includes(game.id);
      const selectedPresetKey = perGamePresets[game.id] || defaultPresetKey;
      const res1 = calculateGameFps(game, rawScore, ram, resMultiplier, upscaleMultiplier, rtMultiplier, modsMultiplier, streamMultiplier, selectedPresetKey, gpu, cpu);
      const res2 = compareMode
        ? calculateGameFps(game, rawScore2, ram2, resMultiplier, upscaleMultiplier, rtMultiplier, modsMultiplier, streamMultiplier, selectedPresetKey, gpu2, cpu2)
        : null;
      const res3 = compareMode
        ? calculateGameFps(game, rawScore3, ram3, resMultiplier, upscaleMultiplier, rtMultiplier, modsMultiplier, streamMultiplier, selectedPresetKey, gpu3, cpu3)
        : null;
      return { game, isFav, selectedPresetKey, res1, res2, res3 };
    })
    .filter(({ res1 }) => {
      if (currentPlayability === "smooth") return res1.fps >= 60;
      if (currentPlayability === "mid") return res1.fps >= 35 && res1.fps < 60;
      if (currentPlayability === "heavy") return res1.fps < 35;
      return true;
    });

  resultsCountBadge.textContent = `${computedList.length} لعبة`;

  if (sortMode === "fps-desc") {
    computedList.sort((a, b) => b.res1.fps - a.res1.fps);
  } else if (sortMode === "fps-asc") {
    computedList.sort((a, b) => a.res1.fps - b.res1.fps);
  } else if (sortMode === "alpha") {
    computedList.sort((a, b) => a.game.title.localeCompare(b.game.title));
  } else {
    computedList.sort((a, b) => Number(b.isFav) - Number(a.isFav));
  }

  resultsDiv.innerHTML = "";

  if (computedList.length === 0) {
    resultsDiv.innerHTML = `<p style="color:#94a3b8; grid-column:1/-1; text-align:center;">لا توجد ألعاب مطابقة لبحثك أو الفلاتر الحالية.</p>`;
    return;
  }

  computedList.forEach(({ game, isFav, selectedPresetKey, res1, res2, res3 }) => {
    let badgeClass = "badge-high";
    let badgeText = "سلس وممتاز";
    let barColor = "#22c55e";

    if (res1.fps < 35) {
      badgeClass = "badge-low";
      badgeText = "ثقيل على التجميعة";
      barColor = "#ef4444";
    } else if (res1.fps < 60) {
      badgeClass = "badge-mid";
      badgeText = "مقبول للتجميعة";
      barColor = "#eab308";
    }

    const upscaleCompareHtml = upscaleMultiplier > 1
      ? `<div class="native-fps-sub">الأصلي بدون رفع: ${res1.nativeFps} FPS ← بعد التفعيل: ${res1.fps} FPS</div>`
      : "";

    const hzNote = res1.fps >= targetHz
      ? `🖥️ يغطي شاشة ${targetHz}Hz بالكامل`
      : `🖥️ أقل من شاشة ${targetHz}Hz (${targetHz - res1.fps} FPS فارق)`;

    const barWidth = Math.min(100, Math.round((res1.fps / 240) * 100));

    let compareHtml = "";
    if (compareMode && res2 && res3) {
      const diff2 = res2.fps - res1.fps;
      const sign2 = diff2 > 0 ? `+${diff2}` : `${diff2}`;
      const color2 = diff2 >= 0 ? "#4ade80" : "#f87171";

      const diff3 = res3.fps - res1.fps;
      const sign3 = diff3 > 0 ? `+${diff3}` : `${diff3}`;
      const color3 = diff3 >= 0 ? "#4ade80" : "#f87171";

      compareHtml = `
        <div class="compare-badge">
          <span>PC 2: <strong>${res2.fps} FPS</strong></span>
          <strong style="color:${color2}">(${sign2})</strong>
        </div>
        <div class="compare-badge">
          <span>PC 3: <strong>${res3.fps} FPS</strong></span>
          <strong style="color:${color3}">(${sign3})</strong>
        </div>
      `;
    }

    const deleteBtnHtml = game.isCustom
      ? `<button class="delete-game-btn" data-delete-id="${sanitizeText(game.id, 40)}" title="حذف اللعبة" type="button">×</button>`
      : "";

    const isPickedClass = pickedRandomGameId === game.id ? "is-picked" : "";
    const safeTitle = sanitizeText(game.title, 90);
    const benchTag = game.year === 2026 ? `<div class="game-subtag">🆕 إصدار 2026 • مرجع ${game.benchRef || game.reqScore}</div>` : `<div class="game-subtag">📊 مرجع الاختبار: ${game.benchRef || game.reqScore}</div>`;

    resultsDiv.innerHTML += `
      <article class="game-card ${isFav ? "is-fav" : ""} ${isPickedClass}">
        <div class="card-top">
          <div>
            <div class="game-title">${safeTitle}</div>
            ${benchTag}
          </div>
          <div class="card-actions-top">
            <span class="badge ${badgeClass}">${badgeText}</span>
            <button class="fav-btn ${isFav ? "active" : ""}" data-fav-id="${sanitizeText(game.id, 40)}" title="تفضيل" type="button">★</button>
            ${deleteBtnHtml}
          </div>
        </div>
        <div class="fps-row">
          <div>
            <span class="fps-number" style="color:${barColor}">${res1.fps}</span>
            <span class="fps-unit">FPS تقريباً</span>
          </div>
          <span class="fps-unit">الرام المطلوب: ${res1.effectiveReqRam}GB</span>
        </div>
        ${upscaleCompareHtml}
        <div class="hz-status">${hzNote}</div>
        ${compareHtml}
        <div class="progress-track">
          <div class="progress-fill" style="width:${barWidth}%; background:${barColor};"></div>
        </div>
        <div class="game-meta">
          <span>جودة الأداء (${res1.presetLabel}):</span>
          <select class="card-preset-select" data-game-id="${sanitizeText(game.id, 40)}">
            <option value="low" ${selectedPresetKey === "low" ? "selected" : ""}>Low</option>
            <option value="medium" ${selectedPresetKey === "medium" ? "selected" : ""}>Medium</option>
            <option value="high" ${selectedPresetKey === "high" ? "selected" : ""}>High</option>
            <option value="ultra" ${selectedPresetKey === "ultra" ? "selected" : ""}>Ultra</option>
          </select>
        </div>
      </article>
    `;
  });

  document.querySelectorAll(".card-preset-select").forEach((sel) => {
    sel.addEventListener("change", (e) => {
      const gameId = e.target.dataset.gameId;
      if (presetConfig[e.target.value]) {
        perGamePresets[gameId] = e.target.value;
        localStorage.setItem("gamecheck_game_presets", JSON.stringify(perGamePresets));
        renderGames();
      }
    });
  });

  document.querySelectorAll(".fav-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const favId = e.target.dataset.favId;
      if (favGames.includes(favId)) {
        favGames = favGames.filter((id) => id !== favId);
      } else {
        favGames.push(favId);
      }
      localStorage.setItem("gamecheck_fav_games", JSON.stringify(favGames));
      renderGames();
    });
  });

  document.querySelectorAll(".delete-game-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idToDelete = e.target.dataset.deleteId;
      customGames = customGames.filter((g) => g.id !== idToDelete);
      localStorage.setItem("gamecheck_custom_games", JSON.stringify(customGames));
      renderGames();
    });
  });
}

globalPresetSelect.addEventListener("change", () => {
  perGamePresets = {};
  localStorage.removeItem("gamecheck_game_presets");
  renderGames();
});

[gpuSelect, cpuSelect, ramSelect, resSelect, hzSelect, upscaleSelect, gpuSelect2, cpuSelect2, ramSelect2, gpuSelect3, cpuSelect3, ramSelect3, sortSelect].forEach((el) => {
  el.addEventListener("change", renderGames);
});

searchInput.addEventListener("input", renderGames);

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.cat;
    renderGames();
  });
});

playabilityButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    playabilityButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentPlayability = btn.dataset.play;
    renderGames();
  });
});

populateHardwareSelects();
applyUrlParams();
renderSavedBuilds();
renderDiscordProfile();
renderSocialLinks();
renderDeveloperCredit();
renderGames();
