const gpus = [
  { name: "GTX 750 Ti (2GB)", score: 15 },
  { name: "GTX 1050 Ti (4GB)", score: 26 },
  { name: "RX 570 / RX 580 (8GB)", score: 33 },
  { name: "GTX 1650 (4GB)", score: 35 },
  { name: "GTX 1060 (6GB)", score: 42 },
  { name: "GTX 1660 Super (6GB)", score: 48 },
  { name: "RTX 3050 (8GB)", score: 52 },
  { name: "RTX 2060 (6GB)", score: 56 },
  { name: "Intel Arc B580 (12GB)", score: 68 },
  { name: "RX 6600 (8GB)", score: 66 },
  { name: "RTX 3060 (12GB)", score: 72 },
  { name: "RTX 5050 (8GB)", score: 70 },
  { name: "RX 7600 XT (16GB)", score: 78 },
  { name: "RTX 3060 Ti (8GB)", score: 80 },
  { name: "RTX 4060 (8GB)", score: 84 },
  { name: "RTX 5060 (8GB)", score: 92 },
  { name: "RX 9060 XT (16GB)", score: 96 },
  { name: "RTX 3070 / 3070 Ti (8GB)", score: 94 },
  { name: "RTX 4060 Ti (8GB / 16GB)", score: 96 },
  { name: "RTX 5060 Ti (16GB)", score: 105 },
  { name: "RX 7800 XT (16GB)", score: 108 },
  { name: "RTX 3080 / 3080 Ti (12GB)", score: 112 },
  { name: "RTX 4070 / 4070 Super (12GB)", score: 118 },
  { name: "RTX 5070 (12GB GDDR7)", score: 128 },
  { name: "RX 9070 (16GB)", score: 128 },
  { name: "RTX 4070 Ti Super (16GB)", score: 132 },
  { name: "RX 9070 XT (16GB)", score: 140 },
  { name: "RTX 5070 Ti (16GB GDDR7)", score: 145 },
  { name: "RX 7900 XTX (24GB)", score: 146 },
  { name: "RTX 4080 / 4080 Super (16GB)", score: 148 },
  { name: "RTX 5080 (16GB GDDR7)", score: 162 },
  { name: "RTX 4090 (24GB GDDR6X)", score: 175 },
  { name: "RTX 5090 (32GB GDDR7) — الأقوى في العالم", score: 215 }
];

const cpus = [
  { name: "Core i3-10100F / 12100F", score: 46 },
  { name: "Ryzen 5 2600 / 3600", score: 55 },
  { name: "Core i5-10400F / 11400F", score: 62 },
  { name: "Ryzen 5 5500 / 5600", score: 70 },
  { name: "Ryzen 7 5600X / 5700X", score: 76 },
  { name: "Core i5-12400F / 12600K", score: 82 },
  { name: "Ryzen 5 7600X / 9600X", score: 90 },
  { name: "Core Ultra 5 245K / 250K Plus", score: 94 },
  { name: "Ryzen 7 5800X3D", score: 98 },
  { name: "Core i5-13600K / 14600K", score: 104 },
  { name: "Core i7-13700K / 14700K", score: 114 },
  { name: "Ryzen 7 7700X / 9700X", score: 116 },
  { name: "Core Ultra 7 265K / 270K Plus", score: 120 },
  { name: "Ryzen 7 7800X3D", score: 126 },
  { name: "Core i9-13900K / 14900K", score: 130 },
  { name: "Core Ultra 9 285K", score: 134 },
  { name: "Ryzen 7 9800X3D / 9850X3D", score: 145 },
  { name: "Ryzen 9 9950X3D / 9950X3D2 — الأقوى في العالم", score: 152 }
];

const presetConfig = {
  low: { label: "Low", loadMultiplier: 0.72 },
  medium: { label: "Medium", loadMultiplier: 0.88 },
  high: { label: "High", loadMultiplier: 1.0 },
  ultra: { label: "Ultra", loadMultiplier: 1.28 }
};

const defaultGames = [
  { id: "ets2", title: "Euro Truck Simulator 2", category: "sim", reqScore: 34, reqRam: 8, baseFps: 95 },
  { id: "ats", title: "American Truck Simulator", category: "sim", reqScore: 35, reqRam: 8, baseFps: 95 },
  { id: "ac", title: "Assetto Corsa (CSP)", category: "sim", reqScore: 42, reqRam: 8, baseFps: 90 },
  { id: "acc", title: "Assetto Corsa Competizione", category: "sim", reqScore: 68, reqRam: 16, baseFps: 75 },
  { id: "beamng", title: "BeamNG.drive", category: "sim", reqScore: 66, reqRam: 16, baseFps: 65 },
  { id: "cms21", title: "Car Mechanic Simulator 2021", category: "sim", reqScore: 45, reqRam: 8, baseFps: 85 },
  { id: "msc", title: "My Summer Car", category: "sim", reqScore: 28, reqRam: 8, baseFps: 85 },
  { id: "monbazou", title: "Mon Bazou", category: "sim", reqScore: 30, reqRam: 8, baseFps: 90 },
  { id: "fs25", title: "Farming Simulator 25", category: "sim", reqScore: 58, reqRam: 16, baseFps: 75 },
  { id: "consim", title: "Construction Simulator", category: "sim", reqScore: 54, reqRam: 16, baseFps: 75 },
  { id: "ranch", title: "Ranch Simulator", category: "sim", reqScore: 48, reqRam: 8, baseFps: 80 },
  { id: "fh5", title: "Forza Horizon 5", category: "sim", reqScore: 62, reqRam: 16, baseFps: 85 },
  { id: "crewmf", title: "The Crew Motorfest", category: "sim", reqScore: 65, reqRam: 16, baseFps: 75 },
  { id: "msfs24", title: "Microsoft Flight Simulator 2024", category: "sim", reqScore: 88, reqRam: 16, baseFps: 50 },
  { id: "snowrunner", title: "SnowRunner", category: "sim", reqScore: 46, reqRam: 8, baseFps: 85 },
  { id: "cities2", title: "Cities: Skylines II", category: "sim", reqScore: 85, reqRam: 16, baseFps: 50 },
  { id: "gtav", title: "Grand Theft Auto V / FiveM", category: "action", reqScore: 38, reqRam: 8, baseFps: 105 },
  { id: "rdr2", title: "Red Dead Redemption 2", category: "action", reqScore: 72, reqRam: 16, baseFps: 65 },
  { id: "cp2077", title: "Cyberpunk 2077", category: "action", reqScore: 85, reqRam: 16, baseFps: 60 },
  { id: "ghost", title: "Ghost of Tsushima", category: "action", reqScore: 66, reqRam: 16, baseFps: 75 },
  { id: "gowr", title: "God of War Ragnarök", category: "action", reqScore: 68, reqRam: 16, baseFps: 75 },
  { id: "spiderman", title: "Marvel's Spider-Man Remastered", category: "action", reqScore: 64, reqRam: 16, baseFps: 80 },
  { id: "tlou1", title: "The Last of Us Part I", category: "action", reqScore: 78, reqRam: 16, baseFps: 62 },
  { id: "hogwarts", title: "Hogwarts Legacy", category: "action", reqScore: 74, reqRam: 16, baseFps: 68 },
  { id: "acmirage", title: "Assassin's Creed Mirage", category: "action", reqScore: 60, reqRam: 16, baseFps: 80 },
  { id: "mafia", title: "Mafia: Definitive Edition", category: "action", reqScore: 52, reqRam: 8, baseFps: 85 },
  { id: "alanwake2", title: "Alan Wake 2", category: "action", reqScore: 92, reqRam: 16, baseFps: 52 },
  { id: "re4", title: "Resident Evil 4 Remake", category: "action", reqScore: 62, reqRam: 16, baseFps: 85 },
  { id: "fc25", title: "EA SPORTS FC 25", category: "action", reqScore: 44, reqRam: 8, baseFps: 110 },
  { id: "cs2", title: "Counter-Strike 2", category: "fps", reqScore: 40, reqRam: 8, baseFps: 150 },
  { id: "val", title: "Valorant", category: "fps", reqScore: 25, reqRam: 8, baseFps: 200 },
  { id: "fortnite", title: "Fortnite (Performance / DX12)", category: "fps", reqScore: 45, reqRam: 8, baseFps: 130 },
  { id: "warzone", title: "Call of Duty: Warzone / BO6", category: "fps", reqScore: 68, reqRam: 16, baseFps: 90 },
  { id: "bf2042", title: "Battlefield 2042 / REDSEC", category: "fps", reqScore: 70, reqRam: 16, baseFps: 80 },
  { id: "squad", title: "Squad", category: "fps", reqScore: 64, reqRam: 16, baseFps: 75 },
  { id: "apex", title: "Apex Legends", category: "fps", reqScore: 42, reqRam: 8, baseFps: 140 },
  { id: "r6", title: "Rainbow Six Siege", category: "fps", reqScore: 36, reqRam: 8, baseFps: 165 },
  { id: "pubg", title: "PUBG: Battlegrounds", category: "fps", reqScore: 48, reqRam: 16, baseFps: 110 },
  { id: "tarkov", title: "Escape from Tarkov", category: "fps", reqScore: 76, reqRam: 32, baseFps: 68 },
  { id: "readyornot", title: "Ready or Not", category: "fps", reqScore: 62, reqRam: 16, baseFps: 80 },
  { id: "helldivers2", title: "Helldivers 2", category: "fps", reqScore: 70, reqRam: 16, baseFps: 72 },
  { id: "minecraft", title: "Minecraft (Java + Shaders)", category: "rpg", reqScore: 42, reqRam: 8, baseFps: 120 },
  { id: "eldenring", title: "Elden Ring", category: "rpg", reqScore: 58, reqRam: 16, baseFps: 60 },
  { id: "wukong", title: "Black Myth: Wukong", category: "rpg", reqScore: 88, reqRam: 16, baseFps: 56 },
  { id: "witcher3", title: "The Witcher 3 Next-Gen", category: "rpg", reqScore: 64, reqRam: 16, baseFps: 75 },
  { id: "rust", title: "Rust", category: "rpg", reqScore: 62, reqRam: 16, baseFps: 80 },
  { id: "ark", title: "ARK: Survival Ascended", category: "rpg", reqScore: 90, reqRam: 32, baseFps: 50 },
  { id: "palworld", title: "Palworld", category: "rpg", reqScore: 54, reqRam: 16, baseFps: 80 },
  { id: "bg3", title: "Baldur's Gate 3", category: "rpg", reqScore: 60, reqRam: 16, baseFps: 80 },
  { id: "starfield", title: "Starfield", category: "rpg", reqScore: 78, reqRam: 16, baseFps: 60 },
  { id: "dayz", title: "DayZ", category: "rpg", reqScore: 44, reqRam: 8, baseFps: 95 }
];

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
const ramSelect = document.getElementById("ramSelect");
const resSelect = document.getElementById("resSelect");
const globalPresetSelect = document.getElementById("globalPresetSelect");
const upscaleSelect = document.getElementById("upscaleSelect");

const toggleCompareBtn = document.getElementById("toggleCompareBtn");
const shareBuildBtn = document.getElementById("shareBuildBtn");
const shareStatus = document.getElementById("shareStatus");
const compareBox = document.getElementById("compareBox");
const gpuSelect2 = document.getElementById("gpuSelect2");
const cpuSelect2 = document.getElementById("cpuSelect2");
const ramSelect2 = document.getElementById("ramSelect2");

const bottleneckBar = document.getElementById("bottleneckBar");
const specsSummary = document.getElementById("specsSummary");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const resultsDiv = document.getElementById("results");
const filterButtons = document.querySelectorAll(".filter-btn");

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

let currentCategory = "all";
let compareMode = false;
let perGamePresets = JSON.parse(localStorage.getItem("gamecheck_game_presets") || "{}");
let customGames = JSON.parse(localStorage.getItem("gamecheck_custom_games") || "[]");
let myDiscord = JSON.parse(localStorage.getItem("gamecheck_my_discord") || JSON.stringify({
  handle: DEFAULT_DISCORD_ID,
  invite: DEFAULT_DISCORD_URL
}));
let socialLinks = JSON.parse(localStorage.getItem("gamecheck_social_links") || JSON.stringify(DEFAULT_SOCIAL_LINKS));

function populateHardwareSelects() {
  gpuSelect.innerHTML = "";
  gpuSelect2.innerHTML = "";
  gpus.forEach((gpu, i) => {
    const sel1 = gpu.name.includes("RTX 3060 (12GB)") ? "selected" : "";
    const sel2 = gpu.name.includes("RTX 4060 (8GB)") ? "selected" : "";
    gpuSelect.innerHTML += `<option value="${i}" ${sel1}>${gpu.name}</option>`;
    gpuSelect2.innerHTML += `<option value="${i}" ${sel2}>${gpu.name}</option>`;
  });

  cpuSelect.innerHTML = "";
  cpuSelect2.innerHTML = "";
  cpus.forEach((cpu, i) => {
    const sel1 = cpu.name.includes("5600X") ? "selected" : "";
    const sel2 = cpu.name.includes("13600K") ? "selected" : "";
    cpuSelect.innerHTML += `<option value="${i}" ${sel1}>${cpu.name}</option>`;
    cpuSelect2.innerHTML += `<option value="${i}" ${sel2}>${cpu.name}</option>`;
  });
}

function applyUrlParams() {
  const params = new URLSearchParams(window.location.search);
  if (params.has("gpu") && gpus[params.get("gpu")]) gpuSelect.value = params.get("gpu");
  if (params.has("cpu") && cpus[params.get("cpu")]) cpuSelect.value = params.get("cpu");
  if (params.has("ram")) ramSelect.value = params.get("ram");
  if (params.has("res")) resSelect.value = params.get("res");
  if (params.has("preset") && presetConfig[params.get("preset")]) globalPresetSelect.value = params.get("preset");
  if (params.has("up")) upscaleSelect.value = params.get("up");
}

toggleCompareBtn.addEventListener("click", () => {
  compareMode = !compareMode;
  compareBox.classList.toggle("active", compareMode);
  toggleCompareBtn.textContent = compareMode
    ? "✖ إخفاء مقارنة التجميعة الثانية"
    : "⚖️ تفعيل مقارنة تجميعة ثانية";
  renderGames();
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
    shareStatus.textContent = "تم نسخ رابط التجميعة! أرسله لأي شخص ليفتح الموقع بنفس مواصفاتك.";
  } catch {
    shareStatus.textContent = `رابط التجميعة: ${shareUrl}`;
  }
});

function buildDiscordTargetUrl() {
  const rawInvite = (myDiscordInvite.value || myDiscord.invite || "").trim();
  const handleVal = (myDiscordHandle.value || myDiscord.handle || "").trim();

  if (/^https?:\/\//i.test(rawInvite)) return rawInvite;
  if (/^(discord\.gg|discord\.com)\//i.test(rawInvite)) return "https://" + rawInvite;
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
  const handleVal = (myDiscordHandle.value || DEFAULT_DISCORD_ID).trim();
  let inviteVal = (myDiscordInvite.value || "").trim();
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
  supportStatus.style.color = "#4ade80";
  supportStatus.textContent = "تم حفظ إعدادات الدعم بنجاح.";
});

attachSpecsBtn.addEventListener("click", () => {
  const gpuName = gpus[gpuSelect.value].name;
  const cpuName = cpus[cpuSelect.value].name;
  const ramVal = ramSelect.value + " GB";
  const resText = resSelect.options[resSelect.selectedIndex].text;
  const presetText = globalPresetSelect.options[globalPresetSelect.selectedIndex].text;

  const summary = `مواصفات جهازي:\n- GPU: ${gpuName}\n- CPU: ${cpuName}\n- RAM: ${ramVal}\n- الدقة: ${resText} (${presetText})\n`;
  supportMessage.value = summary + (supportMessage.value ? "\n" + supportMessage.value : "");
  supportStatus.style.color = "#38bdf8";
  supportStatus.textContent = "تم إدراج مواصفات جهازك في الرسالة.";
});

contactSupportDiscordBtn.addEventListener("click", async (e) => {
  persistDiscordProfile();
  const targetUrl = buildDiscordTargetUrl();
  contactSupportDiscordBtn.href = targetUrl;

  const handle = myDiscord.handle || DEFAULT_DISCORD_ID;
  const msg = supportMessage.value.trim();
  const textToCopy = [handle ? `Discord ID: ${handle}` : "", msg].filter(Boolean).join("\n");

  if (textToCopy) {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch {}
  }

  supportStatus.style.color = "#4ade80";
  supportStatus.textContent = `تم فتح حساب الدعم (${handle}) ونسخ المعلومات للصقها في الدردشة.`;
  window.open(targetUrl, "_blank", "noopener,noreferrer");
  e.preventDefault();
});

copyDiscordBtn.addEventListener("click", async () => {
  persistDiscordProfile();
  const textToCopy = (myDiscord.handle || DEFAULT_DISCORD_ID).trim();
  try {
    await navigator.clipboard.writeText(textToCopy);
    supportStatus.style.color = "#4ade80";
    supportStatus.textContent = `تم نسخ Discord ID: ${textToCopy}`;
  } catch {
    supportStatus.style.color = "#38bdf8";
    supportStatus.textContent = `Discord ID: ${textToCopy}`;
  }
});

function renderSocialLinks() {
  ytUrl.value = socialLinks.yt || "";
  ttUrl.value = socialLinks.tt || "";
  dcUrl.value = socialLinks.dc || DEFAULT_DISCORD_URL;
  tgUrl.value = socialLinks.tg || "";

  const items = [
    { label: "▶ YouTube", url: socialLinks.yt },
    { label: "🎵 TikTok", url: socialLinks.tt },
    { label: "💬 Discord", url: socialLinks.dc },
    { label: "📣 مجموعة التواصل", url: socialLinks.tg }
  ];

  socialLinksRow.innerHTML = items
    .filter((item) => item.url && item.url.trim() !== "")
    .map((item) => `<a class="social-pill" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a>`)
    .join("");
}

saveSocialBtn.addEventListener("click", () => {
  socialLinks = {
    yt: ytUrl.value.trim(),
    tt: ttUrl.value.trim(),
    dc: dcUrl.value.trim() || DEFAULT_DISCORD_URL,
    tg: tgUrl.value.trim()
  };
  localStorage.setItem("gamecheck_social_links", JSON.stringify(socialLinks));
  renderSocialLinks();
});

addGameBtn.addEventListener("click", () => {
  const title = newGameTitle.value.trim();
  if (!title) return;

  const newGame = {
    id: "custom_" + Date.now(),
    title,
    category: newGameCat.value,
    reqScore: Number(newGameWeight.value),
    reqRam: Number(newGameRam.value),
    baseFps: 75,
    isCustom: true
  };

  customGames.unshift(newGame);
  localStorage.setItem("gamecheck_custom_games", JSON.stringify(customGames));
  newGameTitle.value = "";
  renderGames();
});

function calculateGameFps(game, rawScore, ram, resMultiplier, upscaleMultiplier, selectedPresetKey) {
  const presetInfo = presetConfig[selectedPresetKey] || presetConfig.high;
  const requiredPower = game.reqScore * presetInfo.loadMultiplier;
  const buildPower = rawScore * resMultiplier * upscaleMultiplier;
  const performanceRatio = buildPower / requiredPower;

  let fps = Math.round(game.baseFps * performanceRatio);
  const effectiveReqRam = selectedPresetKey === "ultra" ? game.reqRam + 4 : game.reqRam;

  if (ram < effectiveReqRam) {
    const ramRatio = Math.max(0.35, ram / effectiveReqRam);
    fps = Math.round(fps * ramRatio);
  }

  return {
    fps: Math.max(10, Math.min(fps, 360)),
    effectiveReqRam,
    presetLabel: presetInfo.label
  };
}

function updateBottleneckIndicator(gpu, cpu, resMultiplier) {
  const adjustedGpu = gpu.score * resMultiplier;
  const diffRatio = Math.abs(adjustedGpu - cpu.score) / Math.max(adjustedGpu, cpu.score);
  const pct = Math.min(45, Math.round(diffRatio * 100));

  if (pct <= 12) {
    bottleneckBar.className = "bottleneck-bar bn-good";
    bottleneckBar.innerHTML = `
      <span>✅ توافق القطع ممتاز (توازن مثالي بين المعالج وكرت الشاشة)</span>
      <span>نسبة عنق الزجاجة: ${pct}%</span>
    `;
  } else if (adjustedGpu > cpu.score) {
    bottleneckBar.className = pct > 25 ? "bottleneck-bar bn-bad" : "bottleneck-bar bn-warn";
    bottleneckBar.innerHTML = `
      <span>⚠️ المعالج (${cpu.name}) أضعف من كرت الشاشة على هذه الدقة</span>
      <span>عنق زجاجة معالج: ~${pct}%</span>
    `;
  } else {
    bottleneckBar.className = pct > 25 ? "bottleneck-bar bn-bad" : "bottleneck-bar bn-warn";
    bottleneckBar.innerHTML = `
      <span>ℹ️ كرت الشاشة (${gpu.name}) هو المحدّد الأساسي للأداء</span>
      <span>عنق زجاجة كرت شاشة: ~${pct}%</span>
    `;
  }
}

function renderGames() {
  const gpu = gpus[gpuSelect.value];
  const cpu = cpus[cpuSelect.value];
  const ram = Number(ramSelect.value);
  const resMultiplier = Number(resSelect.value);
  const upscaleMultiplier = Number(upscaleSelect.value);
  const defaultPresetKey = globalPresetSelect.value;
  const searchText = searchInput.value.trim().toLowerCase();
  const sortMode = sortSelect.value;

  const gpu2 = gpus[gpuSelect2.value];
  const cpu2 = cpus[cpuSelect2.value];
  const ram2 = Number(ramSelect2.value);
  const rawScore2 = (gpu2.score * 0.72) + (cpu2.score * 0.28);

  const allGames = [...customGames, ...defaultGames];
  const rawScore = (gpu.score * 0.72) + (cpu.score * 0.28);
  const effectiveScore = Math.round(rawScore * resMultiplier * upscaleMultiplier);

  updateBottleneckIndicator(gpu, cpu, resMultiplier);

  let tier = "متوسط";
  if (rawScore >= 145) tier = "وحش خارق (Ultra Flagship)";
  else if (rawScore >= 95) tier = "قوي جداً (High-End)";
  else if (rawScore >= 65) tier = "ممتاز للألعاب (Mid-High)";
  else if (rawScore < 42) tier = "اقتصادي (Entry-Level)";

  specsSummary.innerHTML = `
    <span>تقييم التجميعة: <strong>${tier}</strong></span>
    <span>عدد الألعاب: <strong>${allGames.length} لعبة</strong></span>
    <span>نقاط الأداء: <strong>${effectiveScore} نقطة</strong></span>
  `;

  let computedList = allGames
    .filter((game) => {
      const matchCat = currentCategory === "all" || game.category === currentCategory;
      const matchSearch = game.title.toLowerCase().includes(searchText);
      return matchCat && matchSearch;
    })
    .map((game) => {
      const selectedPresetKey = perGamePresets[game.id] || defaultPresetKey;
      const res1 = calculateGameFps(game, rawScore, ram, resMultiplier, upscaleMultiplier, selectedPresetKey);
      const res2 = compareMode
        ? calculateGameFps(game, rawScore2, ram2, resMultiplier, upscaleMultiplier, selectedPresetKey)
        : null;
      return { game, selectedPresetKey, res1, res2 };
    });

  if (sortMode === "fps-desc") {
    computedList.sort((a, b) => b.res1.fps - a.res1.fps);
  } else if (sortMode === "fps-asc") {
    computedList.sort((a, b) => a.res1.fps - b.res1.fps);
  } else if (sortMode === "alpha") {
    computedList.sort((a, b) => a.game.title.localeCompare(b.game.title));
  }

  resultsDiv.innerHTML = "";

  if (computedList.length === 0) {
    resultsDiv.innerHTML = `<p style="color:#94a3b8; grid-column:1/-1; text-align:center;">لا توجد ألعاب مطابقة لبحثك.</p>`;
    return;
  }

  computedList.forEach(({ game, selectedPresetKey, res1, res2 }) => {
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

    const barWidth = Math.min(100, Math.round((res1.fps / 240) * 100));

    let compareHtml = "";
    if (compareMode && res2) {
      const diff = res2.fps - res1.fps;
      const diffSign = diff > 0 ? `+${diff}` : `${diff}`;
      const diffColor = diff >= 0 ? "#4ade80" : "#f87171";
      compareHtml = `
        <div class="compare-badge">
          <span>التجميعة الثانية: <strong>${res2.fps} FPS</strong></span>
          <strong style="color:${diffColor}">(${diffSign} FPS)</strong>
        </div>
      `;
    }

    const deleteBtnHtml = game.isCustom
      ? `<button class="delete-game-btn" data-delete-id="${game.id}" title="حذف اللعبة" type="button">×</button>`
      : "";

    resultsDiv.innerHTML += `
      <article class="game-card">
        <div class="card-top">
          <div class="game-title">${game.title}</div>
          <div class="card-actions-top">
            <span class="badge ${badgeClass}">${badgeText}</span>
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
        ${compareHtml}
        <div class="progress-track">
          <div class="progress-fill" style="width:${barWidth}%; background:${barColor};"></div>
        </div>
        <div class="game-meta">
          <span>جودة الأداء (${res1.presetLabel}):</span>
          <select class="card-preset-select" data-game-id="${game.id}">
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
      perGamePresets[gameId] = e.target.value;
      localStorage.setItem("gamecheck_game_presets", JSON.stringify(perGamePresets));
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

[gpuSelect, cpuSelect, ramSelect, resSelect, upscaleSelect, gpuSelect2, cpuSelect2, ramSelect2, sortSelect].forEach((el) => {
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

populateHardwareSelects();
applyUrlParams();
renderDiscordProfile();
renderSocialLinks();
renderGames();
