"use strict";
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const root = document.documentElement;
const NS = "http://www.w3.org/2000/svg";
const money = n => n.toLocaleString("ro-RO") + " lei";



const DATA = {
  dark: {
    h1: "Noaptea e cel mai bun moment să vezi cerul.",
    lead: "Telescoape mari, ghizi răbdători și o cupolă de unde se văd Saturn și inelele lui. Vino în orice seară senină.",
    cta: "Vezi programul serilor",
    dtitle: "Seri de observare",
    dsub: "Fiecare grup are cel mult 12 persoane la telescop. Prețul e pe persoană și include ghidul și un ceai cald.",
    marquee: ["Saturn", "Jupiter", "Luna", "Orion", "Pleiadele", "Andromeda", "Nebuloasa Orion"],
    tabs: [
      ["Planete", [
        ["Saturn și inelele lui", "Pentru toate vârstele", "90 min", 45, "🪐", 4.9, "Favorit"],
        ["Jupiter și lunile lui", "Pentru toate vârstele", "75 min", 45, "🌕", 4.8],
        ["Luna de aproape", "Pentru toate vârstele", "60 min", 35, "🌙", 4.8, "Ofertă", 40],
        ["Marte, planeta roșie", "De la 10 ani", "70 min", 45, "🔴", 4.7, "Nou"]
      ]],
      ["Stele și nebuloase", [
        ["Orion și nebuloasa", "De la 8 ani", "60 min", 39, "⭐", 4.9],
        ["Pleiadele", "Pentru toate vârstele", "50 min", 39, "✨", 4.8],
        ["Galaxia Andromeda", "De la 12 ani", "80 min", 55, "🌌", 4.9, "Nou"],
        ["Roiuri de stele", "De la 10 ani", "70 min", 49, "💫", 4.7]
      ]],
      ["Speciale", [
        ["Ploaia de meteori", "Noapte întreagă, cu picnic", "4 ore", 70, "☄️", 5.0, "Favorit"],
        ["Maraton Messier", "Pentru pasionați", "5 ore", 120, "🔭", 4.8],
        ["Cină sub cupolă", "Masă în doi, cu vedere", "3 ore", 180, "🍽️", 4.9, "Nou"],
        ["Fotografie astro", "Atelier practic", "150 min", 150, "📷", 4.8, "Ofertă", 180]
      ]]
    ],
    ititle: "Ghidul cerului: Triunghiul de vară",
    isub: "Trei stele strălucitoare și Steaua Polară ca punct fix. Derulează ca să le unești, apoi vino să le vedem împreună. Schemă orientativă.",
    stops: [["Vega", "Constelația Lira", "Cea mai strălucitoare stea din Lira."], ["Deneb", "Constelația Lebăda", "Coada Lebedei, în mijlocul Căii Lactee."], ["Altair", "Constelația Vulturul", "A treia stea a triunghiului."], ["Steaua Polară", "Ursa Mică", "Rămâne aproape fixă, spre nord."]],
    total: "Seara cu ghidul cerului: 39 lei / persoană"
  },
  light: {
    h1: "Și ziua, cerul are ce să-ți arate.",
    lead: "Soarele privit în siguranță, planetariu sub cupolă și ateliere pentru toate vârstele. Fără întuneric, doar curiozitate.",
    cta: "Vezi programul zilei",
    chip: "Planetariu de la 35 lei",
    dtitle: "Programul zilei",
    dsub: "Soarele se privește doar cu filtre speciale, pe care le montăm noi pe telescoape. Prețul e pe persoană.",
    marquee: ["Soarele", "Venus", "Luna de zi", "Planetariu", "Meteoriți", "Rachete cu apă", "Cupola"],
    tabs: [
      ["Soarele", [
        ["Soarele în siguranță", "Cu filtre speciale", "30 min", 25, "☀️", 4.9, "Favorit"],
        ["Pete solare", "De la 8 ani", "40 min", 28, "🌞", 4.7],
        ["Venus ziua", "Pentru curioși", "30 min", 30, "🌟", 4.6, "Nou"],
        ["Luna de zi", "Pentru toate vârstele", "25 min", 25, "🌙", 4.8, "Ofertă", 30]
      ]],
      ["Planetariu și ateliere", [
        ["Planetariu: sistemul solar", "Pentru toate vârstele", "45 min", 35, "🌍", 4.9, "Favorit"],
        ["Construiește un telescop", "Atelier, de la 12 ani", "2 ore", 90, "🔧", 4.8],
        ["Rachete cu apă", "Atelier, de la 8 ani", "90 min", 55, "🚀", 4.9, "Nou"],
        ["Mineralele din meteoriți", "De la 10 ani", "60 min", 40, "🪨", 4.6]
      ]],
      ["Pentru copii", [
        ["Micul astronom", "5–8 ani", "60 min", 30, "🧑‍🚀", 4.9, "Favorit"],
        ["Povești sub cupolă", "4–7 ani", "45 min", 28, "📖", 4.8],
        ["Zi de naștere la observator", "Grup de 10 copii", "2 ore", 350, "🎂", 5.0, "Nou"],
        ["Tabăra de vară", "Cinci zile", "5 zile", 650, "🏕️", 4.8]
      ]]
    ],
    ititle: "Traseul unei vizite de zi",
    isub: "Patru opriri, fiecare cu ghidul ei. Derulează ca să vezi drumul.",
    stops: [["Cupola", "10:00", "Intrare, bilete și prima poveste."], ["Planetariu", "11:00", "45 de minute printre planete."], ["Terasa solară", "12:30", "Soarele prin telescop, cu filtre."], ["Atelierul", "14:00", "Construim ceva cu mâinile noastre."]],
    total: "Bilet complet de zi: 79 lei / persoană"
  }
};


function moonChip() {
  const syn = 29.530588853, base = Date.UTC(2000, 0, 6, 18, 14);
  const age = (((Date.now() - base) / 86400000) % syn + syn) % syn;
  const ill = Math.round((1 - Math.cos(2 * Math.PI * age / syn)) / 2 * 100);
  if (ill < 4) return "Luna azi: lună nouă";
  if (ill > 96) return "Luna azi: lună plină";
  return `Luna azi: ${ill}%, ${age < syn / 2 ? "în creștere" : "în descreștere"}`;
}


let seed = 21;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const mk = (tag, attrs, parent) => {
  const el = document.createElementNS(NS, tag);
  for (const k in attrs) el.setAttribute(k, attrs[k]);
  parent.appendChild(el);
  return el;
};

function buildScene() {
  for (let i = 0; i < 46; i++) {
    const c = mk("circle", { cx: rnd() * 480, cy: rnd() * 390, r: 0.6 + rnd() * 1.7 }, $("#stars"));
    c.style.setProperty("--d", (rnd() * 3).toFixed(1) + "s");
  }
  [[70, 40, 60], [150, 52, 120], [110, 46, 30]].forEach(([y, dur, delay], i) => {
    const g = mk("g", { class: "cloud" }, $("#clouds"));
    g.style.cssText = `--y:${y + i * 30}px;animation-duration:${dur}s;animation-delay:-${delay / 3 + i * 9}s`;
    mk("ellipse", { cx: 0, cy: 0, rx: 34, ry: 12 }, g);
    mk("ellipse", { cx: 22, cy: -8, rx: 22, ry: 12 }, g);
    mk("ellipse", { cx: -20, cy: -6, rx: 18, ry: 10 }, g);
  });
}
buildScene();


let tabIndex = 0;

function renderDests(mode) {
  const d = DATA[mode];
  $("#tabs").innerHTML = d.tabs.map(([n], i) =>
    `<button role="tab" class="chip" aria-selected="${i === tabIndex}" data-i="${i}">${n}</button>`).join("");
  $("#dests").innerHTML = d.tabs[tabIndex][1].map(([n, who, dur, p, em, r, tag, old], i) => `
    <article class="dest pop" style="--i:${i}">
      <div class="cover"><span aria-hidden="true">${em}</span>${tag ? `<em class="tagc">${tag}</em>` : ""}</div>
      <div class="dbody">
        <h3>${n}</h3>
        <div class="meta"><span>${who}</span><span>${dur}</span><span>${r.toFixed(1)} din 5</span></div>
        <div class="dfoot">
          <p class="price">${old ? `<s>${money(old)}</s>` : ""}${money(p)}</p>
          <button class="btn" data-n="${n}">Rezervă</button>
        </div>
      </div>
    </article>`).join("");
}

function fillSelect() {
  const names = [...DATA.dark.tabs, ...DATA.light.tabs].flatMap(([, l]) => l.map(x => x[0]));
  $("#dsel").innerHTML = names.map(n => `<option>${n}</option>`).join("");
}
fillSelect();

$("#tabs").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  tabIndex = +b.dataset.i;
  renderDests(root.dataset.theme);
});

$("#dests").addEventListener("click", e => {
  const b = e.target.closest("button[data-n]");
  if (!b) return;
  $("#dsel").value = b.dataset.n;
  $("#contact").scrollIntoView({ behavior: "smooth" });
});


const route = $("#route");
const L = route.getTotalLength();
route.style.strokeDasharray = L;
let stopEls = [];

function renderItin(mode) {
  const d = DATA[mode];
  $("#ititle").textContent = d.ititle;
  $("#isub").textContent = d.isub;
  $("#itotal").textContent = d.total;
  $("#stops").innerHTML = d.stops.map(([n, z, t]) =>
    `<li><b>${n}</b><time>${z}</time><span>${t}</span></li>`).join("");
  $("#stopsg").innerHTML = "";
  stopEls = d.stops.map(([n], i) => {
    const p = route.getPointAtLength(L * i / 3);
    const g = mk("g", { class: "stop" }, $("#stopsg"));
    mk("circle", { cx: p.x, cy: p.y, r: 9 }, g);
    const t = mk("text", { x: Math.min(Math.max(p.x, 50), 430), y: p.y - 18, "text-anchor": "middle" }, g);
    t.textContent = n;
    return g;
  });
  onScroll();
}


function render(mode) {
  const d = DATA[mode];
  root.dataset.theme = mode;
  $("#mode").setAttribute("aria-checked", mode === "dark");
  $("#h1").textContent = d.h1;
  $("#lead").textContent = d.lead;
  $("#cta1").textContent = d.cta;
  $("#chip").textContent = mode === "dark" ? moonChip() : d.chip;
  $("#dtitle").textContent = d.dtitle;
  $("#dsub").textContent = d.dsub;
  tabIndex = 0;
  renderDests(mode);
  const words = d.marquee.map(w => `<span>${w}</span><i></i>`).join("");
  $("#marquee").innerHTML = words + words;
  renderItin(mode);
}

function save(m) { try { localStorage.setItem("luneta-mode", m); } catch (e) {} }
function saved() { try { return localStorage.getItem("luneta-mode"); } catch (e) { return null; } }


$$(".reveal").forEach(el => {
  const sibs = [...el.parentElement.children].filter(c => c.classList.contains("reveal"));
  el.style.setProperty("--i", sibs.indexOf(el));
});

function count(el) {
  const to = +el.dataset.to, dec = +el.dataset.dec || 0, t0 = performance.now();
  (function step(t) {
    const k = Math.min((t - t0) / 1400, 1), v = to * (1 - Math.pow(1 - k, 3));
    el.textContent = dec ? (v / 10).toFixed(1) : Math.round(v);
    if (k < 1) requestAnimationFrame(step);
  })(t0);
}

const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  const n = e.target.querySelector(".num");
  if (n) count(n);
  io.unobserve(e.target);
}), { threshold: 0.15 });
$$(".reveal").forEach(el => io.observe(el));

const clamp = v => Math.min(Math.max(v, 0), 1);
let busy = false;

function onScroll() {
  if (busy) return;
  busy = true;
  requestAnimationFrame(() => {
    const y = scrollY, max = root.scrollHeight - innerHeight;
    root.style.setProperty("--sy", y);
    root.style.setProperty("--p", max > 0 ? y / max : 0);

    const tl = $("#timeline").getBoundingClientRect();
    $("#timeline").style.setProperty("--tl", clamp((innerHeight * 0.7 - tl.top) / tl.height));

    const r = $("#ghid").getBoundingClientRect();
    const k = clamp((innerHeight * 0.85 - r.top) / (r.height * 0.85));
    route.style.strokeDashoffset = L * (1 - k);
    const pt = route.getPointAtLength(L * k);
    $("#jet").setAttribute("transform", `translate(${pt.x - 12} ${pt.y + 8})`);
    stopEls.forEach((g, i) => g.classList.toggle("on", k >= i / 3 - 0.01));
    $$("#stops li").forEach((li, i) => li.classList.toggle("on", k >= i / 3 - 0.01));
    busy = false;
  });
}
addEventListener("scroll", onScroll, { passive: true });


render(saved() || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));

$("#mode").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  render(next);
  save(next);
});

$("#rez").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  $("#rmsg").textContent = `Mulțumim, ${f.get("n")}! Am notat rezervarea pentru „${f.get("dest")}”, ${f.get("p")} persoane, pe ${f.get("d")}. (Demo: rezervarea nu e reală.)`;
  e.target.reset();
});