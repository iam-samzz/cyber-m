/* =========================================================
   CYBERM — About page
   Same pattern as profile.js: content lives in one object so
   the real copy/team/backend data can drop in later without
   touching the markup.
   ========================================================= */

const MOCK_ABOUT = {
  lead:
    "CyberM is one workspace for cybersecurity research, tools, structured learning and AI-assisted practice — built so the people who use it stop juggling a dozen open tabs for roadmaps, references and challenges.",
  stats: [
    { label: "Core Workspaces", value: "06" },
    { label: "Unified Platform", value: "01" },
    { label: "Security Learning", value: "24/7" },
    { label: "Front-end First", value: "100%" },
  ],
  features: [
    {
      index: "01",
      name: "Roadmaps",
      desc: "Structured career paths",
    },
    {
      index: "02",
      name: "Security Tools",
      desc: "Curated security essentials",
    },
    {
      index: "03",
      name: "Utilities",
      desc: "Interactive utilities",
    },
    {
      index: "04",
      name: "Curated Guides",
      desc: "Practical references",
    },
  ],
  audience: [
    { name: "Builders", earned: true },
    { name: "Breakers", earned: true },
    { name: "Defenders", earned: true },
    { name: "Analysts", earned: true },
  ],
  // Replace with the real team roster before shipping.
  team: [
    { name: "Iftesam Parvin", role: "Frontend · Profile & About", initials: "IP" },
    { name: "Team member", role: "Frontend · Profile & About", initials: "IP" },
    { name: "Team member", role: "Role", initials: "TM" },
    { name: "Team member", role: "Role", initials: "TM" },
    { name: "Team member", role: "Role", initials: "TM" },
  ],
};

function audienceIconSvg() {
  return (
    '<svg class="badge-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="12" cy="8" r="3.2" stroke="currentColor" stroke-width="1.5"/>' +
    '<path d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
    "</svg>"
  );
}

function renderAbout(about) {
  document.getElementById("about-lead").textContent = about.lead;

  const statGrid = document.getElementById("about-stat-grid");
  statGrid.innerHTML = about.stats
    .map(
      (stat) => `
      <div class="card stat-card">
        <p class="stat-label">${stat.label}</p>
        <p class="stat-value">${stat.value}</p>
      </div>`
    )
    .join("");

  const featureGrid = document.getElementById("feature-grid");
  featureGrid.innerHTML = about.features
    .map(
      (f) => `
      <div class="card feature-card">
        <span class="feature-index">${f.index}</span>
        <h3 class="feature-name">${f.name}</h3>
        <p class="feature-desc">${f.desc}</p>
      </div>`
    )
    .join("");

  const audienceGrid = document.getElementById("audience-grid");
  audienceGrid.innerHTML = about.audience
    .map(
      (a) => `
      <div class="badge">
        ${audienceIconSvg()}
        <span>${a.name}</span>
      </div>`
    )
    .join("");

  const teamList = document.getElementById("team-list");
  teamList.innerHTML = about.team
    .map(
      (member) => `
      <div class="team-member">
        <div class="team-avatar" aria-hidden="true">${member.initials}</div>
        <div>
          <p class="team-name">${member.name}</p>
          <p class="team-role">${member.role}</p>
        </div>
      </div>`
    )
    .join("");
}

async function loadAbout() {
  // Swap MOCK_ABOUT for a real endpoint once the backend exists:
  // const about = await CyberM.loadData("/api/about", MOCK_ABOUT);
  const about = MOCK_ABOUT;
  renderAbout(about);
}

document.addEventListener("DOMContentLoaded", loadAbout);

/* ---------------------------------------------------------
   Theme toggle (light / dark)
   --------------------------------------------------------- */

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("cyberm-theme", theme);
  } catch (e) {}

  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    btn.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
  }
}

function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  applyTheme(document.documentElement.getAttribute("data-theme") || "light");

  btn.addEventListener("click", () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    btn.classList.add("is-animating");
    setTimeout(() => btn.classList.remove("is-animating"), 500);
  });
}

document.addEventListener("DOMContentLoaded", initThemeToggle);
