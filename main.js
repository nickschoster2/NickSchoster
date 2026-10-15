const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ---------- Mobile menu toggle (nav itself lives in each HTML file) ----------
const page = document.body.dataset.page;
const toggle = $(".nav-toggle");
toggle.addEventListener("click", () => {
  const open = $("#nav").classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
$("#nav").addEventListener("click", e => { if (e.target.tagName === "A") $("#nav").classList.remove("open"); });

// ---------- Project cards ----------
function toolIcon(key) {
  const [name, path] = TOOL_ICONS[key] || [key, null];
  if (!path) return `<span class="tool-text">${esc(name)}</span>`;
  return `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}" alt="${esc(name)}" title="${esc(name)}" loading="lazy"
    onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'tool-text',textContent:this.alt}))">`;
}
function cardHTML(p) {
  const art = p.image
    ? `<img class="card-img" src="${esc(p.image)}" alt="">`
    : `<div class="card-img placeholder"><span>${esc(p.title.charAt(0))}</span></div>`;
  return `<a class="card" href="project.html?id=${encodeURIComponent(p.id)}" aria-label="${esc(p.title)}: view project details">
    ${art}
    <div class="card-body"><h3>${esc(p.title)}</h3></div>
    <div class="card-hover"><p>${esc(p.summary)}</p>
      <div class="tools">${p.tools.map(toolIcon).join("")}</div>
      <span class="more">View project</span></div></a>`;
}
function renderGrid(selector, list) {
  const el = $(selector);
  if (!el) return;
  el.innerHTML = list.length ? list.map(cardHTML).join("") : "<p>No projects yet. Add some in js/projects.js.</p>";
}

if (page === "home") renderGrid("#featured-grid", PROJECTS.filter(p => p.featured));
if (page === "games") renderGrid("#games-grid", PROJECTS.filter(p => p.type === "game"));
if (page === "interactive") renderGrid("#interactive-grid", PROJECTS.filter(p => p.type === "interactive"));

// ---------- Project detail page ----------
if (page === "project") {
  const p = PROJECTS.find(x => x.id === new URLSearchParams(location.search).get("id"));
  const root = $("#project");
  if (!p) {
    root.innerHTML = `<h1>Project not found</h1><p>Check the link, or <a href="games.html">browse all games</a>.</p>`;
  } else {
    document.title = `${p.title} | Your Name`;
    const back = p.type === "game" ? ["games.html", "All games"] : ["interactive.html", "All interactive projects"];
    const facts = [["Role", p.role], ["Team", p.team], ["Year", p.year], ["Duration", p.duration]].filter(f => f[1]);
    root.innerHTML = `
      <a class="back" href="${back[0]}">&larr; ${back[1]}</a>
      <h1>${esc(p.title)}</h1><p class="lede">${esc(p.summary)}</p>
      ${p.image ? `<img class="hero-img" src="${esc(p.image)}" alt="${esc(p.title)} screenshot">` : `<div class="hero-img placeholder"><span>${esc(p.title.charAt(0))}</span></div>`}
      <div class="detail-layout">
        <div class="detail-text">${p.description.map(t => `<p>${esc(t)}</p>`).join("")}</div>
        <aside class="facts">
          <dl>${facts.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
          <div class="tools big">${p.tools.map(toolIcon).join("")}</div>
          ${p.links.map(l => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}
        </aside>
      </div>
      ${p.gallery.length ? `<div class="gallery">${p.gallery.map(g => `<img src="${esc(g)}" alt="" loading="lazy">`).join("")}</div>` : ""}`;
  }
}
