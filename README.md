# Fog Academy: Dead by Daylight Counter Guide

A lightweight, single-page, interactive guide that explains how to counter every Dead by Daylight killer and suggests perk synergies/loadouts for different playstyles.

## Getting started

This project is pure HTML/CSS/JS—no build step. Open `index.html` directly or serve the folder with your preferred static server.

```bash
python -m http.server 8000
# then visit http://localhost:8000
# 1) Create/overwrite index.html
cat <<'EOF' > index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dead by Daylight Counter Guide</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="top-bar">
    <div class="brand">Fog Academy</div>
    <nav class="nav-links">
      <a href="#guide">Killer Guide</a>
      <a href="#perks">Perk Synergies</a>
      <a href="#planner">Counter Plans</a>
    </nav>
    <button class="cta">Build a Plan</button>
  </header>

  <main>
    <section class="hero">
      <div class="hero__copy">
        <p class="eyebrow">Interactive DBD Helper</p>
        <h1>Counter every killer, smarter perks, faster escapes.</h1>
        <p class="lede">
          Browse quick counter tips, map-ready strategies, and perk combos that match how you actually play.
          Everything is filterable and share-ready for your next trials.
        </p>
        <div class="hero__actions">
          <button class="cta">Start building</button>
          <button class="secondary">Explore the guide</button>
        </div>
        <div class="pill">Auto-sync ready with Techial's DBD-Database</div>
      </div>
      <div class="hero__panel">
        <div class="panel-card">
          <p class="panel-title">Matchup snapshot</p>
          <ul class="panel-grid">
            <li><span>Stealth killers</span><strong>Keep heartbeat info</strong></li>
            <li><span>Mobility killers</span><strong>Break line of sight</strong></li>
            <li><span>Zone control</span><strong>Pre-drop pallets</strong></li>
            <li><span>Anti-loop</span><strong>Route to safe tiles</strong></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="live-sync" id="live-data">
      <div class="section-heading">
        <p class="eyebrow">Live wiki sync</p>
        <h2>See the newest killers and survivors</h2>
        <p class="lede">
          Pulls straight from Techial's open-source DBD-Database (auto-updated from the official wiki) so you always know if you're missing someone.
        </p>
      </div>
      <div class="sync-row">
        <button class="cta" id="sync-button">Sync from DBD-Database</button>
        <p class="sync-status" id="sync-status">Idle — using curated local data.</p>
      </div>
      <div class="live-grid">
        <div class="panel-card" id="sync-killers"></div>
        <div class="panel-card" id="sync-survivors"></div>
      </div>
    </section>

    <section class="filters" aria-labelledby="filter-heading" id="guide">
      <div class="filters__header">
        <div>
          <p class="eyebrow">Interactive killer directory</p>
          <h2 id="filter-heading">Find counters tailored to your lobby</h2>
          <p class="lede">Filter by difficulty, search by name, or target specific killer archetypes.</p>
        </div>
        <div class="filters__quick">
          <label class="toggle"><input type="checkbox" id="comfort-mode" /> Comfort builds</label>
          <label class="toggle"><input type="checkbox" id="solo-queue" /> Solo queue tips</label>
        </div>
      </div>
      <div class="filter-row">
        <input type="text" id="search" placeholder="Search killers (Trapper, Huntress, Xenomorph...)" />
        <select id="difficulty">
          <option value="">All difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <div class="pill-group" id="archetypes"></div>
      </div>
    </section>

    <section class="killer-grid" id="killer-grid" aria-live="polite"></section>

    <section class="perks" id="perks">
      <div class="section-heading">
        <p class="eyebrow">Perk synergy lab</p>
        <h2>Pair perks that actually work together</h2>
        <p class="lede">Ready-made combos you can tweak by playstyle. Tap a card to copy the idea.</p>
      </div>
      <div class="perk-grid" id="perk-grid"></div>
    </section>

    <section class="planner" id="planner">
      <div class="section-heading">
        <p class="eyebrow">Counter planner</p>
        <h2>Build a lobby-ready counter plan</h2>
        <p class="lede">Pick a killer and we’ll stack positioning rules, perk swaps, and items that keep you alive.</p>
      </div>
      <div class="planner__controls">
        <select id="planner-killer"></select>
        <button class="secondary" id="randomize">I feel lucky</button>
      </div>
      <div class="plan-card" id="plan-card"></div>
    </section>
  </main>

  <footer class="footer">
    <p>Fog Academy is a fan-made helper. Stay unpredictable, stay kind, and good luck in the fog!</p>
  </footer>

  <script src="app.js"></script>
</body>
</html>
