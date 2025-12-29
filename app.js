const killers = [
  {
    name: "The Trapper",
    title: "MacMillan Estate",
    difficulty: "Easy",
    archetypes: ["Setup", "Zone Control"],
    approach: "Sweep lanes, break traps with safe windows, and never heal in grass.",
    counters: [
      { label: "Scout first", detail: "Use Kindred/Windows to mark high-traffic tiles before looping so you don't eat blind traps." },
      { label: "Break momentum", detail: "Disarm while he's resetting or chasing someone else; multitool items speed this up." },
      { label: "Pathing", detail: "Favor long walls and safe pallets over shack early; trapped tiles become midgame death zones." }
    ],
    perks: "Windows of Opportunity + Small Game + Any Means + Sprint Burst",
    soloBoost: "Call out disarm attempts and trapped pallets with quick chat or pings to keep teammates alive.",
    comfortNote: "Carry a yellow toolbox to disarm instantly and keep the chase light." 
  },
  {
    name: "The Huntress",
    title: "Ranged Pressure",
    difficulty: "Medium",
    archetypes: ["Ranged", "Zoning"],
    approach: "Break line of sight, juke her wind-up, and pre-plan vaults so you don't slow down in the open.",
    counters: [
      { label: "Tall cover", detail: "Use mid-height obstacles and killer shack corners to eat her hatchet LOS." },
      { label: "Short loops", detail: "Pre-drop weak pallets; force reloads by staying healthy and wasting her time." },
      { label: "Audio", detail: "Wind-up audio is loud—bait the throw by half-committing to a window then snapping back." }
    ],
    perks: "Lithe + Windows of Opportunity + Iron Will + Distortion",
    soloBoost: "Ping reload lockers and keep pressure on gens farthest from her hurl lanes.",
    comfortNote: "Mouse her movement: if she moonwalks, hold W to the next tile instead of hugging the loop." 
  },
  {
    name: "The Spirit",
    title: "Mindgame Queen",
    difficulty: "Hard",
    archetypes: ["Stealth", "Anti-loop"],
    approach: "Cut noise, track grass, and stand still when she phases through you.",
    counters: [
      { label: "Sound discipline", detail: "Walk before vaults and use Iron Will/Calm Spirit to dull her audio tracking." },
      { label: "Hold fast", detail: "When she's phasing nearby, stand still at pallets; committing to a direction early is death." },
      { label: "Information", detail: "Flashlight tap or boon totem glow lets you confirm her body location before she swings." }
    ],
    perks: "Iron Will + Windows + Off the Record + Lucky Break",
    soloBoost: "Stay split; two injured survivors near each other equals free downs for Spirit.",
    comfortNote: "Noise blockers like med-kit + Calm Spirit make guessing games fair." 
  },
  {
    name: "The Nurse",
    title: "Blink Master",
    difficulty: "Hard",
    archetypes: ["Mobility", "Anti-loop"],
    approach: "Break sight, stagger movements after second blink, and waste her cooldown on vertical terrain.",
    counters: [
      { label: "Terrain", detail: "Use walls with multiple heights; force her to aim up/down to slow blink charge." },
      { label: "Doubles", detail: "After first blink, stutter-step and crouch to make her overcommit on second." },
      { label: "Pressure", detail: "Force heals and boons only when she's on long chase; injured slowdown hurts her less." }
    ],
    perks: "Sprint Burst + Windows + Resilience + Exhaustion perk flex",
    soloBoost: "Announce blink direction via pings; splitting pressure on gens is stronger than body blocking.",
    comfortNote: "Run Calm Spirit to avoid crow info if you hold corners." 
  },
  {
    name: "The Wraith",
    title: "Silent Runner",
    difficulty: "Easy",
    archetypes: ["Stealth"],
    approach: "Hear the bell? Break LOS and force him to re-cloak; he loses speed when uncloaked.",
    counters: [
      { label: "Body block", detail: "Tap him with flashlight or pallet stun while uncloaking to waste his momentum." },
      { label: "Audible", detail: "Clanking bell telegraphs approach—vault early and bait swings through windows." },
      { label: "Tools", detail: "Flashlights and firecrackers crush his ambushes; save charges for rescue plays." }
    ],
    perks: "Bond + Kindred + Vigil + Sprint Burst",
    soloBoost: "Kindred value spikes; pre-rotate to unhook while he's traveling invisible.",
    comfortNote: "Walk more than you run; noise reduction keeps you off his mind games." 
  },
  {
    name: "The Xenomorph",
    title: "Tunnel King",
    difficulty: "Medium",
    archetypes: ["Mobility", "Tracker"],
    approach: "Clear tunnels, deny tail hits with tall cover, and watch for skittering audio queues.",
    counters: [
      { label: "Turrets", detail: "Keep at least two turrets active; reset near choke points and gens under pressure." },
      { label: "Tail denial", detail: "Slide behind rocks and lockers to block tail line; hop vaults late to waste his charge." },
      { label: "Chase swaps", detail: "Trade hits when his tail is disabled; he becomes average M1 speed." }
    ],
    perks: "Made For This + Windows + Wiretap + Quick & Quiet",
    soloBoost: "Call out turret charges; staggering usage stops him from clearing all at once.",
    comfortNote: "Bring a med-kit—tail chip damage stacks fast." 
  },
  {
    name: "The Unknown",
    title: "Hallucinator",
    difficulty: "Medium",
    archetypes: ["Area Denial", "Ranged"],
    approach: "Break hallucinations, cleanse sick tiles, and force him to chase in clean loops.",
    counters: [
      { label: "Clean tiles", detail: "Touch hallucinations between gens so they don't block rescue paths." },
      { label: "Shock timing", detail: "After shock, hold W instead of vaulting; his anti-loop is weaker in long runs." },
      { label: "Line abuse", detail: "Hug corners so his projectile collides; pre-drop unsafe pallets to avoid the scream." }
    ],
    perks: "Windows + Off the Record + Deliverance + Overcome",
    soloBoost: "Ping hallucinations you clean so teammates don't waste time doubling back.",
    comfortNote: "Schedule heals between screams; stay healthy to avoid chain downs." 
  },
  {
    name: "The Singularity",
    title: "Slipstream Menace",
    difficulty: "Hard",
    archetypes: ["Tracker", "Anti-loop"],
    approach: "Break biopods, line-of-sight his beams, and hide your location swaps.",
    counters: [
      { label: "Pod priority", detail: "Destroy pods at key windows; leave weak tiles alone to save time." },
      { label: "Beam dodge", detail: "If you hear the beam, break sight with lockers or tall walls; sprint burst to the next tile." },
      { label: "EMP discipline", detail: "Craft EMPs at 70% gen; save for chase rather than clearing random pods." }
    ],
    perks: "Adrenaline + Windows + Wiretap + Balanced Landing",
    soloBoost: "Stagger EMPs between players to deny global reveals.",
    comfortNote: "Balanced Landing or Sprint Burst helps you leave pods instantly." 
  }
];

const archetypeList = Array.from(new Set(killers.flatMap(k => k.archetypes)));

const perkIdeas = [
  {
    name: "Anti-tunnel safety net",
    perks: ["Off the Record", "Dead Hard", "We'll Make It", "Kindred"],
    role: "Solo queue survivability",
    detail: "Stack endurance after unhook, heal fast, and keep everyone informed so the killer can't snowball.",
    highlight: "Perfect into tunneling Nurses, Wesker, or aggressive Spirit players."
  },
  {
    name: "Chase gremlin",
    perks: ["Lithe", "Windows of Opportunity", "Resilience", "Overcome"],
    role: "Looping focus",
    detail: "High movement and info for throwing the killer into bad tiles. Windows + Resilience powers vault speed.",
    highlight: "Use on maps with strong window chains like Badham or Midwich."
  },
  {
    name: "Gen bully",
    perks: ["Prove Thyself", "Hyperfocus", "Stake Out", "Wiretap"],
    role: "Objective rush",
    detail: "Stack great skill checks with teammate bonuses and intel to dodge patrols.",
    highlight: "Risky into Doctor/Unknown; fantastic into setup killers like Trapper and Hag."
  },
  {
    name: "Stealth rescuer",
    perks: ["Distortion", "Calm Spirit", "Deliverance", "Quick & Quiet"],
    role: "Undetected unhooks",
    detail: "Avoid aura reads, skip loud noises, and pull off safe Deliverance rescues.",
    highlight: "Great for stealth killers where teammates panic—Wraith, Ghost Face, Pig." 
  }
];

const planNotes = {
  positioning: [
    "Favor long walls and double pallets; pre-drop when anti-loop is strong.",
    "Rotate away from three-gen clusters so you don't gift a late-game lock.",
    "Touch dull totems early if they block safe tiles later."
  ],
  items: [
    "Brown med-kit for quick top-offs and anti-slug.",
    "Flashlight for uncloak/pod denial and hook saves.",
    "Toolbox with sabo for trap removal or pre-hook saves." 
  ],
  communication: [
    "Call out last seen direction and whether power is active.",
    "Mark strong pallets you dropped so teammates don't greed them.",
    "Sync exhaustion perks—stagger Sprint Burst users to keep chase swaps clean." 
  ]
};

async function fetchFromDatabase(path) {
  let lastError = new Error("No sources reached");
  for (const base of dbdDatabaseSources) {
    try {
      const res = await fetch(`${base}${path}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError;
}

function normalizeName(entry) {
  if (!entry) return "";
  return (
    entry.name ||
    entry.displayName ||
    entry.full_name ||
    entry.fullName ||
    entry.id ||
    ""
  );
}

function renderSyncSummary(killerData = [], survivorData = []) {
  const killerList = Array.isArray(killerData) ? killerData : killerData?.killers || [];
  const survivorList = Array.isArray(survivorData) ? survivorData : survivorData?.survivors || [];

  const killerNames = killerList.map(normalizeName).filter(Boolean);
  const survivorNames = survivorList.map(normalizeName).filter(Boolean);
  const missingKillers = killerNames.filter(name => !curatedKillerNames.has(name));

  syncKillers.innerHTML = `
    <p class="panel-title">Killers (DBD-Database)</p>
    <p class="card-body">${killerNames.length || "No"} killers detected from the live dataset.</p>
    <p class="card-body">${missingKillers.length
      ? `Not in curated list: ${missingKillers.slice(0, 8).join(", ")}${missingKillers.length > 8 ? "…" : ""}`
      : "Your curated set already includes every name we detected."}</p>
  `;

  syncSurvivors.innerHTML = `
    <p class="panel-title">Survivors (DBD-Database)</p>
    <p class="card-body">${survivorNames.length || "No"} survivors detected.</p>
    <p class="card-body">Latest survivors: ${survivorNames.slice(-6).join(", ") || "Unknown"}</p>
  `;
}

function renderSyncPlaceholder() {
  syncKillers.innerHTML = `
    <p class="panel-title">Killers (curated)</p>
    <p class="card-body">${curatedKillerNames.size} killers with in-depth counter notes in this guide.</p>
    <p class="card-body">Sync to compare with the live wiki-powered list.</p>
  `;
  syncSurvivors.innerHTML = `
    <p class="panel-title">Survivors (live data)</p>
    <p class="card-body">Sync to see the full survivor roster from Techial's DBD-Database.</p>
  `;
}

async function syncFromDatabase() {
  syncStatus.textContent = "Syncing from Techial's DBD-Database…";
  try {
    const [killerData, survivorData] = await Promise.all([
      fetchFromDatabase("killers.json"),
      fetchFromDatabase("survivors.json")
    ]);
    renderSyncSummary(killerData, survivorData);
    syncStatus.textContent = "Synced live from Techial's DBD-Database (wiki-updated).";
  } catch (error) {
    syncStatus.textContent = `Sync failed — still showing curated data. (${error.message})`;
  }
}

const state = {
  search: "",
  difficulty: "",
  archetypes: new Set(),
  comfort: false,
  solo: false
};

const grid = document.getElementById("killer-grid");
const archetypeWrap = document.getElementById("archetypes");
const searchInput = document.getElementById("search");
const difficultySelect = document.getElementById("difficulty");
const comfortToggle = document.getElementById("comfort-mode");
const soloToggle = document.getElementById("solo-queue");
const perkGrid = document.getElementById("perk-grid");
const plannerSelect = document.getElementById("planner-killer");
const planCard = document.getElementById("plan-card");
const syncButton = document.getElementById("sync-button");
const syncStatus = document.getElementById("sync-status");
const syncKillers = document.getElementById("sync-killers");
const syncSurvivors = document.getElementById("sync-survivors");

const curatedKillerNames = new Set(killers.map(k => k.name));
const dbdDatabaseSources = [
  "https://raw.githubusercontent.com/Techial/DBD-Database/main/data/",
  "https://raw.githubusercontent.com/Techial/DBD-Database/master/data/"
];

function buildArchetypeFilters() {
  archetypeList.forEach(type => {
    const btn = document.createElement("button");
    btn.textContent = type;
    btn.className = "pill-button";
    btn.onclick = () => {
      if (state.archetypes.has(type)) state.archetypes.delete(type); else state.archetypes.add(type);
      btn.classList.toggle("active");
      renderKillers();
    };
    archetypeWrap.appendChild(btn);
  });
}

function createCounterList(counters) {
  const list = document.createElement("ul");
  list.className = "card-list";
  counters.forEach(item => {
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = item.label;
    const span = document.createElement("span");
    span.textContent = item.detail;
    li.appendChild(strong);
    li.appendChild(span);
    list.appendChild(li);
  });
  return list;
}

function filteredKillers() {
  return killers.filter(k => {
    const matchesSearch = k.name.toLowerCase().includes(state.search) || k.title.toLowerCase().includes(state.search);
    const matchesDifficulty = !state.difficulty || k.difficulty === state.difficulty;
    const matchesArchetypes = state.archetypes.size === 0 || k.archetypes.some(a => state.archetypes.has(a));
    return matchesSearch && matchesDifficulty && matchesArchetypes;
  });
}

function renderKillers() {
  grid.innerHTML = "";
  const results = filteredKillers();
  if (!results.length) {
    grid.innerHTML = `<p>No killers match that filter. Try removing an archetype.</p>`;
    return;
  }

  results.forEach(killer => {
    const card = document.createElement("article");
    card.className = "killer-card";

    const header = document.createElement("header");
    const title = document.createElement("div");
    title.innerHTML = `<p class="eyebrow">${killer.title}</p><h3 class="card-title">${killer.name}</h3>`;
    const meta = document.createElement("div");
    meta.className = "meta";
    const diff = document.createElement("span");
    diff.className = "tag difficulty";
    diff.textContent = killer.difficulty;
    meta.appendChild(diff);
    killer.archetypes.forEach(type => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = type;
      meta.appendChild(span);
    });
    header.append(title, meta);

    const approach = document.createElement("p");
    approach.className = "card-body";
    const comfortText = state.comfort ? ` ${killer.comfortNote}` : "";
    const soloText = state.solo ? ` Solo queue: ${killer.soloBoost}` : "";
    approach.textContent = `${killer.approach}${comfortText}${soloText}`;

    const counters = createCounterList(killer.counters);

    const perks = document.createElement("p");
    perks.className = "card-body";
    perks.innerHTML = `<strong>Recommended perks:</strong> ${killer.perks}`;

    card.append(header, approach, counters, perks);
    grid.appendChild(card);
  });
}

function renderPerkIdeas() {
  perkIdeas.forEach(idea => {
    const card = document.createElement("div");
    card.className = "perk-card";
    card.onclick = () => navigator.clipboard?.writeText(`${idea.name}: ${idea.perks.join(", ")}`);

    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = idea.role;
    const title = document.createElement("h3");
    title.textContent = idea.name;
    const perks = document.createElement("p");
    perks.innerHTML = `<strong>Perks:</strong> ${idea.perks.join(" · ")}`;
    const detail = document.createElement("p");
    detail.className = "card-body";
    detail.textContent = idea.detail;
    const highlight = document.createElement("p");
    highlight.className = "card-body";
    highlight.innerHTML = `<strong>Use when:</strong> ${idea.highlight}`;

    card.append(badge, title, perks, detail, highlight);
    perkGrid.appendChild(card);
  });
}

function renderPlannerOptions() {
  killers.forEach(k => {
    const opt = document.createElement("option");
    opt.value = k.name;
    opt.textContent = k.name;
    plannerSelect.appendChild(opt);
  });
}

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function buildPlan(killerName) {
  const killer = killers.find(k => k.name === killerName) || killers[0];
  const highlights = [
    randomItem(planNotes.positioning),
    randomItem(planNotes.items),
    randomItem(planNotes.communication)
  ];

  const plan = document.createElement("div");
  plan.innerHTML = `
    <h3>${killer.name} counter plan</h3>
    <p class="card-body">${killer.approach}</p>
    <div class="plan-highlights">
      ${highlights.map(text => `<div class="plan-pill">${text}</div>`).join("")}
    </div>
    <ul>
      ${killer.counters.map(c => `<li><strong>${c.label}:</strong> ${c.detail}</li>`).join("")}
    </ul>
    <p><strong>Perk swap:</strong> ${killer.perks}</p>
  `;

  planCard.innerHTML = "";
  planCard.appendChild(plan);
}

function initPlanner() {
  renderPlannerOptions();
  plannerSelect.addEventListener("change", () => buildPlan(plannerSelect.value));
  document.getElementById("randomize").addEventListener("click", () => {
    const choice = randomItem(killers);
    plannerSelect.value = choice.name;
    buildPlan(choice.name);
  });
  buildPlan(killers[0].name);
}

function attachListeners() {
  searchInput.addEventListener("input", e => {
    state.search = e.target.value.toLowerCase();
    renderKillers();
  });
  difficultySelect.addEventListener("change", e => {
    state.difficulty = e.target.value;
    renderKillers();
  });
  comfortToggle.addEventListener("change", e => {
    state.comfort = e.target.checked;
    renderKillers();
  });
  soloToggle.addEventListener("change", e => {
    state.solo = e.target.checked;
    renderKillers();
  });
}

function initLiveSync() {
  renderSyncPlaceholder();
  if (syncButton) {
    syncButton.addEventListener("click", () => {
      syncFromDatabase();
    });
  }
}

function init() {
  buildArchetypeFilters();
  renderPerkIdeas();
  attachListeners();
  renderKillers();
  initPlanner();
  initLiveSync();
}

init();
