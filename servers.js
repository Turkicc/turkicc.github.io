// ─────────────────────────────────────────────────────────────
//  Turkicc's server list. Edit this file to update the website.
//
//  name     the server name as it should appear
//  type     "ss"   = screenshare community (shown in the big cards)
//           "tier" = tierlist
//           "com"  = server / SMP / FFA
//  role     "Screensharer", "Staff", "SS Manager", ...
//  members  Discord member count as a number (1.4k = 1400)
//  status   "active" or "resigned"
//
//  Every line ends with a comma. Save, commit and push: the site
//  updates itself within a minute or two.
// ─────────────────────────────────────────────────────────────
const SERVERS = [
  { name: "Minecraft Screensharing Community", type: "ss", role: "Staff", members: 1300, status: "active" },
  { name: "Vigil", type: "ss", role: "Screensharer", members: 500, status: "active" },
  { name: "Ocean", type: "ss", role: "Screensharer", members: 40000, status: "active" },
  { name: "PvPHQ", type: "ss", role: "Screensharer", members: 106800, status: "active" },
  { name: "NL Testing Community", type: "com", role: "Screensharer", members: 1400, status: "active" },
  { name: "PigFFA", type: "com", role: "Screensharer", members: 8000, status: "active" },
  { name: "Oceana Sword Community", type: "com", role: "Screensharer", members: 300, status: "active" },
  { name: "LT3 Diamond SMP Community", type: "com", role: "Screensharer", members: 300, status: "active" },
  { name: "Xylon", type: "com", role: "Screensharer", members: 640, status: "active" },
  { name: "Central Tierlist", type: "tier", role: "Screensharer", members: 21000, status: "active" },
  { name: "Solatiry", type: "tier", role: "Screensharer", members: 19000, status: "active" },
  { name: "Lucnoxicity", type: "tier", role: "Screensharer", members: 11700, status: "active" },
  { name: "Solace Tierlist", type: "tier", role: "Screensharer", members: 5500, status: "active" },
  { name: "OCE Tiers", type: "tier", role: "Screensharer", members: 5400, status: "active" },
  { name: "MetaTiers", type: "tier", role: "Screensharer", members: 5500, status: "active" },
  { name: "Matrix Tierlist", type: "tier", role: "Screensharer", members: 3300, status: "active" },
  { name: "MCFFA Tierlist", type: "tier", role: "Screensharer", members: 1000, status: "active" },
  { name: "SubFranceTiers", type: "tier", role: "Screensharer", members: 315, status: "active" },
  { name: "FranceTiers", type: "tier", role: "Screensharer", members: 3300, status: "active" },
  { name: "IndianTiers", type: "tier", role: "Screensharer", members: 13000, status: "active" },
  { name: "Stat Tierlist", type: "tier", role: "Screensharer", members: 2800, status: "active" },
  { name: "Solace Subtiers", type: "tier", role: "Screensharer", members: 2900, status: "active" },
  { name: "Global Tierlist", type: "tier", role: "Screensharer", members: 400, status: "active" },
  { name: "FFA Tiers Sword", type: "tier", role: "Screensharer", members: 5200, status: "active" },
  { name: "KairoTiers", type: "tier", role: "Screensharer", members: 450, status: "active" },
  { name: "CZ/SK PvP Komunita", type: "tier", role: "Screensharer", members: 3500, status: "active" },
  { name: "Midnight SMP", type: "com", role: "Screensharer", members: 300, status: "resigned" },
  { name: "TXN SMP", type: "com", role: "Screensharer", members: 300, status: "resigned" },
  { name: "Lance SMP", type: "com", role: "Screensharer", members: 600, status: "resigned" },
  { name: "spearmace.fun", type: "com", role: "Screensharer", members: 1000, status: "resigned" },
  { name: "ReputationFFA", type: "com", role: "Screensharer", members: 400, status: "resigned" },
  { name: "OceanSMP", type: "com", role: "Screensharer", members: 1500, status: "resigned" },
  { name: "Breeze FFA", type: "com", role: "Screensharer", members: 800, status: "resigned" },
  { name: "Flame FFA", type: "com", role: "Screensharer", members: 400, status: "resigned" },
  { name: "Spearmace Network", type: "com", role: "SS Manager", members: 7000, status: "resigned" },
  { name: "Strength FFA", type: "com", role: "Screensharer", members: 2000, status: "resigned" },
  { name: "Night Royale", type: "com", role: "Screensharer", members: 550, status: "resigned" },
  { name: "spear-mace.vip", type: "com", role: "Screensharer", members: 500, status: "resigned" },
  { name: "TitanFFA", type: "com", role: "Screensharer", members: 1700, status: "resigned" },
  { name: "BlissFFA", type: "com", role: "Screensharer", members: 1000, status: "resigned" },
  { name: "AlterFFA", type: "com", role: "Screensharer", members: 4400, status: "resigned" },
  { name: "RankedFFA", type: "com", role: "Screensharer", members: 1400, status: "resigned" },
  { name: "IR Ranked Bedwars", type: "com", role: "Screensharer", members: 600, status: "resigned" },
];
