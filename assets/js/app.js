/* =====================================================================
   Yurumei Restaurante — page behaviour
   Reads everything from data.js. Pages mark where things go with
   data-render="..." and this file fills them in.
   You should not need to edit this file to change the site's content.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- tiny helpers ---------- */
  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const waLink = (text) =>
    "https://wa.me/" + SITE.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");
  const telLink = () => "tel:" + SITE.phone.replace(/[^\d+]/g, "");

  /* 24h "18:30" -> "6:30 pm" */
  function pretty(t) {
    if (!t) return "";
    const [h, m] = t.split(":").map(Number);
    const ampm = h >= 12 ? "pm" : "am";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + " " + ampm;
  }

  const money = (n) =>
    PRICES_CONFIRMED && typeof n === "number" ? CURRENCY + " " + n : null;

  /* ---------- icons ---------- */
  const ICONS = {
    pot:    '<path d="M4 9h16v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z"/><path d="M2 9h2m16 0h2M8 6V4m4 2V3m4 3V4"/>',
    drum:   '<ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v9c0 1.7 3.1 3 7 3s7-1.3 7-3V7"/><path d="m5 10 4 4m6 0 4-4M5 16l4-4m6 0 4 4"/>',
    beer:   '<path d="M6 8h9v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z"/><path d="M15 11h2.5a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 17.5 17H15"/><path d="M7.5 8a2 2 0 0 1 .6-3.4A2.4 2.4 0 0 1 12 3.6a2.2 2.2 0 0 1 2.9 1.2A1.9 1.9 0 0 1 13.8 8"/>',
    bottle: '<path d="M10 3h4v3.2c0 .8.3 1.5.8 2.1l.9 1a4 4 0 0 1 1 2.6V19a2 2 0 0 1-2 2H9.3a2 2 0 0 1-2-2v-7.1c0-1 .3-1.9 1-2.6l.9-1c.5-.6.8-1.3.8-2.1V3Z"/><path d="M7.3 14h9.4"/>',
    clock:  '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin:    '<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>',
    phone:  '<path d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 13l5 2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2A2 2 0 0 1 5 3Z"/>'
  };
  const icon = (name) =>
    '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.pot) + "</svg>";

  const SOCIAL_PATHS = {
    facebook: "M13.5 21v-7h2.4l.4-2.9h-2.8V9.3c0-.8.2-1.4 1.4-1.4h1.5V5.3A20 20 0 0 0 14.3 5c-2.2 0-3.7 1.3-3.7 3.9v2.2H8.2V14h2.4v7h2.9Z",
    instagram: "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 4.6c2 0 2.2 0 3 .1.8 0 1.3.2 1.7.4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.2.4.3.9.4 1.7 0 .8.1 1 .1 3s0 2.2-.1 3c0 .8-.2 1.3-.4 1.7-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.2-.9.3-1.7.4-.8 0-1 .1-3 .1s-2.2 0-3-.1c-.8 0-1.3-.2-1.7-.4a3.3 3.3 0 0 1-1.2-.8 3.3 3.3 0 0 1-.8-1.2c-.2-.4-.3-.9-.4-1.7 0-.8-.1-1-.1-3s0-2.2.1-3c0-.8.2-1.3.4-1.7.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.2.9-.3 1.7-.4.8 0 1-.1 3-.1Z",
    tripadvisor: "M12 8c-1.9-1.2-4.2-1.9-6.7-1.9L3 8.6A4.6 4.6 0 0 0 6.6 16a4.6 4.6 0 0 0 3.5-1.6l1.9 2.1 1.9-2.1A4.6 4.6 0 0 0 17.4 16 4.6 4.6 0 0 0 21 8.6l-2.3-2.5c-2.5 0-4.8.7-6.7 1.9Zm-5.4 6.4a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm10.8 0a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm-10.8-4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm10.8 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
  };

  /* =====================================================================
     Header and footer, injected on every page
     ===================================================================== */
  const PAGES = [
    { href: "index.html",  label: "Home" },
    { href: "menu.html",   label: "Menu" },
    { href: "about.html",  label: "Our story" },
    { href: "visit.html",  label: "Visit us" },
    { href: "contact.html", label: "Contact" }
  ];

  function currentPage() {
    let f = location.pathname.split("/").pop();
    return !f || f === "" ? "index.html" : f;
  }

  function buildHeader() {
    const host = $('[data-render="header"]');
    if (!host) return;
    const here = currentPage();
    const links = PAGES.map((p) =>
      '<a href="' + p.href + '"' + (p.href === here ? ' aria-current="page"' : "") + ">" +
      esc(p.label) + "</a>"
    ).join("");

    host.innerHTML =
      '<div class="stripe"><i></i><i></i><i></i></div>' +
      '<header class="site-head"><div class="wrap site-head__in">' +
        '<a class="brand" href="index.html">' +
          '<span class="brand__mark" aria-hidden="true">Y</span>' +
          '<span><span class="brand__name">' + esc(SITE.name) + "</span>" +
          '<span class="brand__sub">' + esc(SITE.village) + " &middot; Roat&aacute;n</span></span>" +
        "</a>" +
        '<button class="burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span></button>' +
        '<nav class="nav" id="nav">' + links +
          '<span class="nav__cta"><a class="btn btn--primary" href="' +
            waLink("Hello! I would like to ask about a table at " + SITE.name + ".") +
          '">WhatsApp us</a></span>' +
        "</nav>" +
      "</div></header>";

    // Mobile menu. Hidden below 860px until tapped; always open above it.
    const nav = $("#nav", host);
    const burger = $(".burger", host);
    const mq = window.matchMedia("(max-width:860px)");
    const sync = () => { nav.hidden = mq.matches; burger.setAttribute("aria-expanded", "false"); };
    sync();
    mq.addEventListener("change", sync);
    burger.addEventListener("click", () => {
      const open = nav.hidden;
      nav.hidden = !open;
      burger.setAttribute("aria-expanded", String(open));
    });
  }

  function buildFooter() {
    const host = $('[data-render="footer"]');
    if (!host) return;

    const socials = ["facebook", "instagram", "tripadvisor"]
      .filter((k) => SITE[k])
      .map((k) =>
        '<a href="' + esc(SITE[k]) + '" target="_blank" rel="noopener" aria-label="' + k + '">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + SOCIAL_PATHS[k] + '"/></svg></a>'
      ).join("");

    host.innerHTML =
      '<footer class="site-foot"><div class="wrap">' +
        '<div class="foot-grid">' +
          "<div>" +
            '<p class="site-foot__brand">' + esc(SITE.legal) + "</p>" +
            "<p>" + esc(SITE.tagline) + "</p>" +
            (socials ? '<div class="socials">' + socials + "</div>" : "") +
          "</div>" +
          "<div><h4>Find us</h4><ul>" +
            "<li>" + esc(SITE.address) + "</li>" +
            '<li><a href="' + telLink() + '">' + esc(SITE.phone) + "</a></li>" +
            '<li><a href="' + waLink("Hello! I have a question about " + SITE.name + ".") + '">WhatsApp</a></li>' +
            '<li><a href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + "</a></li>" +
          "</ul></div>" +
          "<div><h4>Pages</h4><ul>" +
            PAGES.map((p) => '<li><a href="' + p.href + '">' + esc(p.label) + "</a></li>").join("") +
          "</ul></div>" +
        "</div>" +
        '<div class="foot-bottom">' +
          "<span>&copy; " + new Date().getFullYear() + " " + esc(SITE.legal) + "</span>" +
          "<span>Punta Gorda, Roat&aacute;n &middot; Garinagu since 1797</span>" +
        "</div>" +
      "</div></footer>";
  }

  /* =====================================================================
     Content blocks
     ===================================================================== */
  function buildPillars() {
    const host = $('[data-render="pillars"]');
    if (!host) return;
    host.innerHTML = PILLARS.map((p) =>
      '<article class="card"><div class="card__icon">' + icon(p.icon) + "</div>" +
      "<h3>" + esc(p.title) + "</h3><p>" + esc(p.body) + "</p></article>"
    ).join("");
  }

  function signatureDishes() {
    const out = [];
    MENU.forEach((sec) => sec.items.forEach((it) => { if (it.signature) out.push(it); }));
    return out;
  }

  function buildSignatures() {
    const host = $('[data-render="signatures"]');
    if (!host) return;
    host.innerHTML = signatureDishes().map((it, i) =>
      '<article class="dish"><div class="dish__num">' + String(i + 1).padStart(2, "0") + "</div>" +
      "<div><h3>" + esc(it.name) + "</h3><p>" + esc(it.note) + "</p></div></article>"
    ).join("");
  }

  function buildMenu() {
    const host = $('[data-render="menu"]');
    if (!host) return;
    host.innerHTML = MENU.map((sec) => {
      const items = sec.items.map((it) => {
        const price = money(it.price);
        const tags = (it.tags || []).map((t) => '<span class="tag">' + esc(t) + "</span>").join("");
        return '<li class="menu-item"><div class="menu-item__body">' +
            '<span class="menu-item__name">' + esc(it.name) + "</span>" + tags +
            (it.note ? '<p class="menu-item__note">' + esc(it.note) + "</p>" : "") +
          "</div>" +
          (price
            ? '<span class="menu-item__price">' + esc(price) + "</span>"
            : '<span class="menu-item__price menu-item__price--ask">Ask for today&rsquo;s price</span>') +
        "</li>";
      }).join("");

      const secId = sec.id || sec.section.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return '<section class="menu-section" id="' + esc(secId) + '">' +
        '<div class="menu-section__head"><h2>' + esc(sec.section) + "</h2></div>" +
        (sec.blurb ? '<p class="menu-section__blurb">' + esc(sec.blurb) + "</p>" : "") +
        '<ul style="list-style:none;margin:0;padding:0">' + items + "</ul>" +
      "</section>";
    }).join("");
  }

  function buildHours() {
    const host = $('[data-render="hours"]');
    if (!host) return;
    const todayIdx = (new Date().getDay() + 6) % 7;   // HOURS starts on Monday
    const rows = HOURS.map((h, i) =>
      "<tr" + (i === todayIdx ? " data-today" : "") + ">" +
        '<td class="hours__day">' + esc(h.day) +
          (h.note ? '<span class="hours__note">' + esc(h.note) + "</span>" : "") + "</td>" +
        '<td class="hours__time">' +
          (h.open && h.close ? esc(pretty(h.open)) + " &ndash; " + esc(pretty(h.close)) : "Closed") +
        "</td>" +
      "</tr>"
    ).join("");
    host.innerHTML =
      '<table class="hours"><thead><tr><th>Day</th><th class="hours__time">Kitchen</th></tr></thead>' +
      "<tbody>" + rows + "</tbody></table>";
  }

  function buildOpenNow() {
    $$('[data-render="open-now"]').forEach((el) => {
      const now = new Date();
      const today = HOURS[(now.getDay() + 6) % 7];
      const mins = now.getHours() * 60 + now.getMinutes();
      const toMin = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };

      let state = "closed", label;
      if (today && today.open && today.close) {
        if (mins < toMin(today.open)) {
          label = "Closed now &middot; opens " + pretty(today.open);
        } else if (mins < toMin(today.close)) {
          state = "open";
          label = "Open now &middot; until " + pretty(today.close);
        } else {
          label = "Closed for today";
        }
      } else {
        label = "Closed today";
      }
      el.className = "open-now";
      el.setAttribute("data-state", state);
      el.innerHTML = label;
    });
  }

  function buildGallery() {
    const host = $('[data-render="gallery"]');
    if (!host) return;
    host.innerHTML = GALLERY.map((g) =>
      "<figure><img src=\"assets/img/" + esc(g.file) + '" alt="' + esc(g.caption) +
      '" loading="lazy"><figcaption>' + esc(g.caption) + "</figcaption></figure>"
    ).join("");
  }

  function buildVideos() {
    const host = $('[data-render="videos"]');
    if (!host) return;
    host.innerHTML = VIDEOS.map((v) =>
      '<figure class="vid"><video controls preload="none" playsinline poster="assets/img/' +
      esc(v.poster) + '"><source src="assets/video/' + esc(v.file) +
      '" type="video/mp4"></video><figcaption>' + esc(v.caption) + "</figcaption></figure>"
    ).join("");
  }

  function buildDirections() {
    const host = $('[data-render="directions"]');
    if (!host) return;
    host.innerHTML = DIRECTIONS.map((d) =>
      '<div class="dir"><div class="dir__time">' + esc(d.time) + "</div>" +
      "<div><h3>From " + esc(d.from) + "</h3><p>" + esc(d.body) + "</p></div></div>"
    ).join("");
  }

  function buildMap() {
    const host = $('[data-render="map"]');
    if (!host) return;
    const d = 0.012;
    const bbox = [MAP.lon - d, MAP.lat - d / 2, MAP.lon + d, MAP.lat + d / 2].join("%2C");
    host.innerHTML =
      '<div class="map-frame"><iframe title="Map of ' + esc(SITE.village) +
      ', Roatán" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=' +
      bbox + "&amp;layer=mapnik&amp;marker=" + MAP.lat + "%2C" + MAP.lon + '"></iframe></div>' +
      '<p class="small" style="margin-top:10px">' +
      '<a href="https://www.google.com/maps/search/?api=1&amp;query=' + MAP.lat + "%2C" + MAP.lon +
      '" target="_blank" rel="noopener">Open in Google Maps</a> &middot; ' +
      '<a href="https://www.openstreetmap.org/?mlat=' + MAP.lat + "&amp;mlon=" + MAP.lon +
      "#map=" + MAP.zoom + "/" + MAP.lat + "/" + MAP.lon +
      '" target="_blank" rel="noopener">Open in OpenStreetMap</a></p>';
  }

  function buildFaq() {
    const host = $('[data-render="faq"]');
    if (!host) return;
    host.innerHTML = FAQ.map((f) =>
      "<details><summary>" + esc(f.q) + "</summary>" +
      '<div class="faq__body"><p>' + esc(f.a) + "</p></div></details>"
    ).join("");
  }

  /* ---------- links and text placeholders ---------- */
  function fillTokens() {
    $$("[data-wa]").forEach((el) => { el.href = waLink(el.getAttribute("data-wa") || ""); });
    $$("[data-tel]").forEach((el) => { el.href = telLink(); el.textContent = SITE.phone; });
    $$("[data-mail]").forEach((el) => { el.href = "mailto:" + SITE.email; el.textContent = SITE.email; });
    $$("[data-site]").forEach((el) => {
      const v = SITE[el.getAttribute("data-site")];
      if (v) el.textContent = v;
    });
    $$("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
    // Tripadvisor links hide themselves if no listing URL is set.
    $$("[data-ta]").forEach((el) => {
      if (SITE.tripadvisor) el.href = SITE.tripadvisor; else el.hidden = true;
    });
  }

  /* =====================================================================
     Table request form -> WhatsApp or email
     ===================================================================== */
  function wireForm() {
    const form = $('[data-render="table-form"]');
    if (!form) return;

    // Can't book a table in the past.
    const dateEl = $("#f-date", form);
    if (dateEl) dateEl.min = new Date().toISOString().slice(0, 10);

    const compose = () => {
      const v = (id) => { const el = $("#" + id, form); return el ? el.value.trim() : ""; };
      const lines = [
        "Hello " + SITE.name + "! I would like to request a table.",
        "",
        "Name: " + (v("f-name") || "—"),
        "People: " + (v("f-people") || "—"),
        "Date: " + (v("f-date") || "—"),
        "Time: " + (v("f-time") || "—"),
        "Phone: " + (v("f-phone") || "—")
      ];
      const dishes = $$('input[name="dish"]:checked', form).map((c) => c.value);
      if (dishes.length) lines.push("Interested in: " + dishes.join(", "));
      if (v("f-notes")) lines.push("", "Notes: " + v("f-notes"));
      return lines.join("\n");
    };

    const go = (how) => {
      if (!form.reportValidity()) return;
      const body = compose();
      if (how === "email") {
        location.href = "mailto:" + SITE.email +
          "?subject=" + encodeURIComponent("Table request — " + SITE.name) +
          "&body=" + encodeURIComponent(body);
      } else {
        window.open(waLink(body), "_blank", "noopener");
      }
    };

    form.addEventListener("submit", (e) => { e.preventDefault(); go("whatsapp"); });
    const mailBtn = $('[data-send="email"]', form);
    if (mailBtn) mailBtn.addEventListener("click", (e) => { e.preventDefault(); go("email"); });

    // Let the form offer today's signature dishes without hard-coding them.
    const dishHost = $('[data-render="dish-checks"]', form);
    if (dishHost) {
      dishHost.innerHTML = signatureDishes().map((it, i) =>
        '<label style="display:flex;gap:9px;align-items:flex-start;font-weight:400;margin-bottom:8px">' +
        '<input type="checkbox" name="dish" value="' + esc(it.name) +
        '" style="width:auto;margin-top:5px" id="dish-' + i + '"><span>' + esc(it.name) + "</span></label>"
      ).join("");
    }
  }

  /* =====================================================================
     Structured data, so Google shows the hours, the address and the rating
     properly. Built from the same data.js the page renders from.
     ===================================================================== */
  function buildSchema() {
    if (!document.body.hasAttribute("data-schema")) return;

    const hours = HOURS.filter((h) => h.open && h.close).map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "https://schema.org/" + h.day,
      opens: h.open,
      closes: h.close
    }));

    const base = location.origin + location.pathname.replace(/[^/]*$/, "");
    const sameAs = [SITE.facebook, SITE.instagram, SITE.tripadvisor].filter(Boolean);

    const data = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: SITE.legal,
      description: SITE.tagline,
      servesCuisine: ["Garifuna", "Caribbean", "Seafood", "Honduran"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle Principal, Barrio La Cola",
        addressLocality: SITE.village,
        addressRegion: "Islas de la Bahía",
        postalCode: "34101",
        addressCountry: "HN"
      },
      geo: { "@type": "GeoCoordinates", latitude: MAP.lat, longitude: MAP.lon },
      telephone: SITE.phone,
      email: SITE.email,
      openingHoursSpecification: hours,
      hasMenu: base + "menu.html",
      image: [base + "assets/img/tapado-lobster.jpg"]
    };
    if (sameAs.length) data.sameAs = sameAs;

    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.textContent = JSON.stringify(data, null, 2);
    document.head.appendChild(tag);
  }

  /* ---------- go ---------- */
  function init() {
    buildHeader();
    buildFooter();
    buildPillars();
    buildSignatures();
    buildMenu();
    buildHours();
    buildOpenNow();
    buildGallery();
    buildVideos();
    buildDirections();
    buildMap();
    buildFaq();
    fillTokens();
    wireForm();
    buildSchema();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
