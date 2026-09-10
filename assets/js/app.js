/* =====================================================================
   Yurumei Sport Bar & Restaurant — comportamiento del sitio
   =====================================================================
   Lee todo de data.js. Las páginas marcan dónde va cada cosa con
   data-render="..." y este archivo lo llena, en el idioma elegido.

   No deberías necesitar editar este archivo para cambiar el contenido.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- ayudas ---------- */
  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- idioma ---------- */
  const STORE_KEY = "yurumei-lang";
  const LANGS = ["es", "en"];

  function initialLang() {
    const fallback = typeof DEFAULT_LANG !== "undefined" && LANGS.includes(DEFAULT_LANG)
      ? DEFAULT_LANG : "es";

    // Lo que el visitante eligió antes manda siempre.
    try {
      const saved = localStorage.getItem(STORE_KEY);
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* navegador sin almacenamiento */ }

    // Si AUTO_DETECT_LANG está encendido, abrimos en el idioma del navegador
    // del visitante. Apagado, todos entran en el idioma por defecto.
    if (typeof AUTO_DETECT_LANG !== "undefined" && AUTO_DETECT_LANG) {
      const nav = (navigator.language || "").slice(0, 2).toLowerCase();
      if (LANGS.includes(nav)) return nav;
    }
    return fallback;
  }

  let LANG = initialLang();

  // Saca el texto en el idioma actual. Acepta {es,en} o un texto simple.
  function t(v) {
    if (v == null) return "";
    if (typeof v === "object" && !Array.isArray(v)) return v[LANG] || v.es || v.en || "";
    return v;
  }
  const ui = (key) => t(UI[key]);

  const waLink = (text) =>
    "https://wa.me/" + SITE.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");
  const telLink = () => "tel:" + SITE.phone.replace(/[^\d+]/g, "");

  /* Hora: "18:30" -> "6:30 pm" en inglés, "18:30" en español. */
  function pretty(time) {
    if (!time) return "";
    if (LANG === "es") return time;
    const [h, m] = time.split(":").map(Number);
    const ampm = h >= 12 ? "pm" : "am";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + " " + ampm;
  }

  const money = (n) =>
    PRICES_CONFIRMED && typeof n === "number" ? CURRENCY + " " + n : null;

  /* ---------- iconos ---------- */
  const ICONS = {
    pot:    '<path d="M4 9h16v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z"/><path d="M2 9h2m16 0h2M8 6V4m4 2V3m4 3V4"/>',
    beer:   '<path d="M6 8h9v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z"/><path d="M15 11h2.5a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 17.5 17H15"/><path d="M7.5 8a2 2 0 0 1 .6-3.4A2.4 2.4 0 0 1 12 3.6a2.2 2.2 0 0 1 2.9 1.2A1.9 1.9 0 0 1 13.8 8"/>',
    bottle: '<path d="M10 3h4v3.2c0 .8.3 1.5.8 2.1l.9 1a4 4 0 0 1 1 2.6V19a2 2 0 0 1-2 2H9.3a2 2 0 0 1-2-2v-7.1c0-1 .3-1.9 1-2.6l.9-1c.5-.6.8-1.3.8-2.1V3Z"/><path d="M7.3 14h9.4"/>',
    drum:   '<ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v9c0 1.7 3.1 3 7 3s7-1.3 7-3V7"/><path d="m5 10 4 4m6 0 4-4M5 16l4-4m6 0 4 4"/>'
  };
  const icon = (name) =>
    '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || ICONS.pot) + "</svg>";

  const SOCIAL_PATHS = {
    facebook: "M13.5 21v-7h2.4l.4-2.9h-2.8V9.3c0-.8.2-1.4 1.4-1.4h1.5V5.3A20 20 0 0 0 14.3 5c-2.2 0-3.7 1.3-3.7 3.9v2.2H8.2V14h2.4v7h2.9Z",
    instagram: "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 4.6c2 0 2.2 0 3 .1.8 0 1.3.2 1.7.4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.2.4.3.9.4 1.7 0 .8.1 1 .1 3s0 2.2-.1 3c0 .8-.2 1.3-.4 1.7-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.2-.9.3-1.7.4-.8 0-1 .1-3 .1s-2.2 0-3-.1c-.8 0-1.3-.2-1.7-.4a3.3 3.3 0 0 1-1.2-.8 3.3 3.3 0 0 1-.8-1.2c-.2-.4-.3-.9-.4-1.7 0-.8-.1-1-.1-3s0-2.2.1-3c0-.8.2-1.3.4-1.7.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.2.9-.3 1.7-.4.8 0 1-.1 3-.1Z",
    tripadvisor: "M12 8c-1.9-1.2-4.2-1.9-6.7-1.9L3 8.6A4.6 4.6 0 0 0 6.6 16a4.6 4.6 0 0 0 3.5-1.6l1.9 2.1 1.9-2.1A4.6 4.6 0 0 0 17.4 16 4.6 4.6 0 0 0 21 8.6l-2.3-2.5c-2.5 0-4.8.7-6.7 1.9Zm-5.4 6.4a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm10.8 0a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm-10.8-4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm10.8 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
  };

  /* =====================================================================
     Encabezado y pie de página, en todas las páginas
     ===================================================================== */
  const PAGES = [
    { href: "index.html",   key: "nav_home" },
    { href: "menu.html",    key: "nav_menu" },
    { href: "about.html",   key: "nav_about" },
    { href: "visit.html",   key: "nav_visit" },
    { href: "contact.html", key: "nav_contact" }
  ];

  function currentPage() {
    const f = location.pathname.split("/").pop();
    return !f ? "index.html" : f;
  }

  function buildHeader() {
    const host = $('[data-render="header"]');
    if (!host) return;
    const here = currentPage();
    const links = PAGES.map((p) =>
      '<a href="' + p.href + '"' + (p.href === here ? ' aria-current="page"' : "") + ">" +
      esc(ui(p.key)) + "</a>"
    ).join("");

    const other = LANG === "es" ? "en" : "es";
    const otherLabel = other === "en" ? ui("lang_switch_to_en") : ui("lang_switch_to_es");

    host.innerHTML =
      '<div class="stripe"><i></i><i></i><i></i></div>' +
      '<header class="site-head"><div class="wrap site-head__in">' +
        '<a class="brand" href="index.html">' +
          '<span class="brand__mark" aria-hidden="true">Y</span>' +
          '<span><span class="brand__name">' + esc(SITE.name) + "</span>" +
          '<span class="brand__sub">' + esc(SITE.village) + " &middot; Roat&aacute;n</span></span>" +
        "</a>" +
        '<button class="lang" type="button" data-set-lang="' + other + '" ' +
          'aria-label="' + esc(ui("lang_label")) + '" title="' + esc(ui("lang_label")) + '">' +
          '<span aria-hidden="true">' + (other === "en" ? "EN" : "ES") + "</span>" +
          '<span class="lang__full">' + esc(otherLabel) + "</span>" +
        "</button>" +
        '<button class="burger" type="button" aria-label="' + (LANG === "es" ? "Menú" : "Menu") +
          '" aria-expanded="false" aria-controls="nav"><span></span></button>' +
        '<nav class="nav" id="nav">' + links +
          '<span class="nav__cta"><a class="btn btn--primary" href="' +
            waLink(ui("wa_hello")) + '">' + esc(ui("wa_button")) + "</a></span>" +
        "</nav>" +
      "</div></header>";

    const nav = $("#nav", host);
    const burger = $(".burger", host);
    const mq = window.matchMedia("(max-width:980px)");
    const sync = () => { nav.hidden = mq.matches; burger.setAttribute("aria-expanded", "false"); };
    sync();
    mq.addEventListener("change", sync);
    burger.addEventListener("click", () => {
      const open = nav.hidden;
      nav.hidden = !open;
      burger.setAttribute("aria-expanded", String(open));
    });
    $(".lang", host).addEventListener("click", (e) => setLang(e.currentTarget.dataset.setLang));
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
            "<p>" + esc(t(SITE.tagline)) + "</p>" +
            (socials ? '<div class="socials">' + socials + "</div>" : "") +
          "</div>" +
          "<div><h4>" + esc(ui("foot_find")) + "</h4><ul>" +
            "<li>" + esc(t(SITE.address)) + "</li>" +
            '<li><a href="' + telLink() + '">' + esc(SITE.phone) + "</a></li>" +
            '<li><a href="' + waLink(ui("wa_hello")) + '">WhatsApp</a></li>' +
            '<li><a href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + "</a></li>" +
          "</ul></div>" +
          "<div><h4>" + esc(ui("foot_pages")) + "</h4><ul>" +
            PAGES.map((p) => '<li><a href="' + p.href + '">' + esc(ui(p.key)) + "</a></li>").join("") +
          "</ul></div>" +
        "</div>" +
        '<div class="foot-bottom">' +
          "<span>&copy; " + new Date().getFullYear() + " " + esc(SITE.legal) + "</span>" +
          "<span>" + esc(ui("foot_since")) + "</span>" +
        "</div>" +
      "</div></footer>";
  }

  /* =====================================================================
     Bloques de contenido
     ===================================================================== */
  function buildPillars() {
    const host = $('[data-render="pillars"]');
    if (!host) return;
    host.innerHTML = PILLARS.map((p) =>
      '<article class="card"><div class="card__icon">' + icon(p.icon) + "</div>" +
      "<h3>" + esc(t(p.title)) + "</h3><p>" + esc(t(p.body)) + "</p></article>"
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
      "<div><h3>" + esc(t(it.name)) + "</h3><p>" + esc(t(it.note)) + "</p></div></article>"
    ).join("");
  }

  function buildMenu() {
    const host = $('[data-render="menu"]');
    if (!host) return;
    host.innerHTML = MENU.map((sec) => {
      const items = sec.items.map((it) => {
        const price = money(it.price);
        const tags = (it.tags || []).map((tag) => '<span class="tag">' + esc(t(tag)) + "</span>").join("");
        const note = t(it.note);
        return '<li class="menu-item"><div class="menu-item__body">' +
            '<span class="menu-item__name">' + esc(t(it.name)) + "</span>" + tags +
            (note ? '<p class="menu-item__note">' + esc(note) + "</p>" : "") +
          "</div>" +
          (price
            ? '<span class="menu-item__price">' + esc(price) + "</span>"
            : '<span class="menu-item__price menu-item__price--ask">' + esc(ui("ask_price")) + "</span>") +
        "</li>";
      }).join("");

      const secId = sec.id || String(sec.section.en || "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const blurb = t(sec.blurb);
      return '<section class="menu-section" id="' + esc(secId) + '">' +
        '<div class="menu-section__head"><h2>' + esc(t(sec.section)) + "</h2></div>" +
        (blurb ? '<p class="menu-section__blurb">' + esc(blurb) + "</p>" : "") +
        '<ul class="menu-list">' + items + "</ul>" +
      "</section>";
    }).join("");
  }

  function buildHours() {
    const host = $('[data-render="hours"]');
    if (!host) return;
    const todayIdx = (new Date().getDay() + 6) % 7;   // HOURS empieza en lunes
    const rows = HOURS.map((h, i) => {
      const note = t(h.note);
      return "<tr" + (i === todayIdx ? " data-today" : "") + ">" +
        '<td class="hours__day">' + esc(t(h.day)) +
          (note ? '<span class="hours__note">' + esc(note) + "</span>" : "") + "</td>" +
        '<td class="hours__time">' +
          (h.open && h.close
            ? esc(pretty(h.open)) + " &ndash; " + esc(pretty(h.close))
            : esc(ui("closed"))) +
        "</td></tr>";
    }).join("");
    host.innerHTML =
      '<table class="hours"><thead><tr><th>' + esc(ui("hours_day")) +
      '</th><th class="hours__time">' + esc(ui("hours_kitchen")) + "</th></tr></thead>" +
      "<tbody>" + rows + "</tbody></table>";
  }

  function buildOpenNow() {
    $$('[data-render="open-now"]').forEach((el) => {
      const now = new Date();
      const today = HOURS[(now.getDay() + 6) % 7];
      const mins = now.getHours() * 60 + now.getMinutes();
      const toMin = (time) => { const [h, m] = time.split(":").map(Number); return h * 60 + m; };

      let state = "closed", label;
      if (today && today.open && today.close) {
        if (mins < toMin(today.open)) {
          label = ui("opens_at") + " " + pretty(today.open);
        } else if (mins < toMin(today.close)) {
          state = "open";
          label = ui("open_now") + " " + pretty(today.close);
        } else {
          label = ui("closed_today");
        }
      } else {
        label = ui("closed_day");
      }
      el.className = "open-now";
      el.setAttribute("data-state", state);
      el.textContent = label;
    });
  }

  function buildGallery() {
    const host = $('[data-render="gallery"]');
    if (!host) return;
    host.innerHTML = GALLERY.map((g) => {
      const cap = esc(t(g.caption));
      return '<figure><img src="assets/img/' + esc(g.file) + '" alt="' + cap +
        '" loading="lazy"><figcaption>' + cap + "</figcaption></figure>";
    }).join("");
  }

  function buildVideos() {
    const host = $('[data-render="videos"]');
    if (!host) return;
    host.innerHTML = VIDEOS.map((v) =>
      '<figure class="vid"><video controls preload="none" playsinline poster="assets/img/' +
      esc(v.poster) + '"><source src="assets/video/' + esc(v.file) +
      '" type="video/mp4"></video><figcaption>' + esc(t(v.caption)) + "</figcaption></figure>"
    ).join("");
  }

  function buildDirections() {
    const host = $('[data-render="directions"]');
    if (!host) return;
    host.innerHTML = DIRECTIONS.map((d) =>
      '<div class="dir"><div class="dir__time">' + esc(t(d.time)) + "</div>" +
      "<div><h3>" + esc(t(d.from)) + "</h3><p>" + esc(t(d.body)) + "</p></div></div>"
    ).join("");
  }

  function buildMap() {
    const host = $('[data-render="map"]');
    if (!host) return;
    const d = 0.012;
    const bbox = [MAP.lon - d, MAP.lat - d / 2, MAP.lon + d, MAP.lat + d / 2].join("%2C");
    const mapTitle = LANG === "es" ? "Mapa de " + SITE.village : "Map of " + SITE.village;
    host.innerHTML =
      '<div class="map-frame"><iframe title="' + esc(mapTitle) +
      '" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=' +
      bbox + "&amp;layer=mapnik&amp;marker=" + MAP.lat + "%2C" + MAP.lon + '"></iframe></div>' +
      '<p class="small" style="margin-top:10px">' +
      '<a href="https://www.google.com/maps/search/?api=1&amp;query=' + MAP.lat + "%2C" + MAP.lon +
      '" target="_blank" rel="noopener">' + esc(ui("map_google")) + "</a> &middot; " +
      '<a href="https://www.openstreetmap.org/?mlat=' + MAP.lat + "&amp;mlon=" + MAP.lon +
      "#map=" + MAP.zoom + "/" + MAP.lat + "/" + MAP.lon +
      '" target="_blank" rel="noopener">' + esc(ui("map_osm")) + "</a></p>";
  }

  function buildFaq() {
    const host = $('[data-render="faq"]');
    if (!host) return;
    host.innerHTML = FAQ.map((f) =>
      "<details><summary>" + esc(t(f.q)) + "</summary>" +
      '<div class="faq__body"><p>' + esc(t(f.a)) + "</p></div></details>"
    ).join("");
  }

  /* ---------- enlaces y textos sueltos ---------- */
  function fillTokens() {
    $$("[data-wa]").forEach((el) => {
      const key = el.getAttribute("data-wa");
      el.href = waLink(UI[key] ? ui(key) : key);
    });
    $$("[data-tel]").forEach((el) => { el.href = telLink(); el.textContent = SITE.phone; });
    $$("[data-mail]").forEach((el) => { el.href = "mailto:" + SITE.email; el.textContent = SITE.email; });
    $$("[data-site]").forEach((el) => {
      const v = SITE[el.getAttribute("data-site")];
      if (v) el.textContent = t(v);
    });
    $$("[data-ui]").forEach((el) => {
      const v = UI[el.getAttribute("data-ui")];
      if (v) el.textContent = t(v);
    });
    $$("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
    $$("[data-ta]").forEach((el) => {
      if (SITE.tripadvisor) el.href = SITE.tripadvisor; else el.hidden = true;
    });
  }

  /* =====================================================================
     Texto fijo de las páginas
     Cada trozo traducible lleva data-en="..." con la versión en inglés.
     El español es el que está escrito en el HTML.
     ===================================================================== */
  function applyStaticLang() {
    $$("[data-en]").forEach((el) => {
      // La primera vez guardamos el español tal como venía en el HTML.
      if (!el.dataset.es) el.dataset.es = el.innerHTML.trim();
      el.innerHTML = LANG === "en" ? el.dataset.en : el.dataset.es;
    });

    const body = document.body;
    if (body.dataset.titleEn) {
      if (!body.dataset.titleEs) body.dataset.titleEs = document.title;
      document.title = LANG === "en" ? body.dataset.titleEn : body.dataset.titleEs;
    }
    const desc = $('meta[name="description"]');
    if (desc && desc.dataset.en) {
      if (!desc.dataset.es) desc.dataset.es = desc.getAttribute("content");
      desc.setAttribute("content", LANG === "en" ? desc.dataset.en : desc.dataset.es);
    }
    document.documentElement.lang = LANG;
  }

  /* =====================================================================
     Formulario de mesas -> WhatsApp o correo
     ===================================================================== */
  function wireForm() {
    const form = $('[data-render="table-form"]');
    if (!form) return;

    const dateEl = $("#f-date", form);
    if (dateEl) dateEl.min = new Date().toISOString().slice(0, 10);

    const compose = () => {
      const v = (id) => { const el = $("#" + id, form); return el ? el.value.trim() : ""; };
      const lines = [
        ui("form_greeting"), "",
        ui("form_name")   + ": " + (v("f-name")   || "—"),
        ui("form_people") + ": " + (v("f-people") || "—"),
        ui("form_date")   + ": " + (v("f-date")   || "—"),
        ui("form_time")   + ": " + (v("f-time")   || "—"),
        ui("form_phone")  + ": " + (v("f-phone")  || "—")
      ];
      const dishes = $$('input[name="dish"]:checked', form).map((c) => c.value);
      if (dishes.length) lines.push(ui("form_wants") + ": " + dishes.join(", "));
      if (v("f-notes")) lines.push("", ui("form_notes") + ": " + v("f-notes"));
      return lines.join("\n");
    };

    const go = (how) => {
      if (!form.reportValidity()) return;
      const body = compose();
      if (how === "email") {
        location.href = "mailto:" + SITE.email +
          "?subject=" + encodeURIComponent(ui("form_subject") + " — " + SITE.name) +
          "&body=" + encodeURIComponent(body);
      } else {
        window.open(waLink(body), "_blank", "noopener");
      }
    };

    if (!form.dataset.wired) {
      form.addEventListener("submit", (e) => { e.preventDefault(); go("whatsapp"); });
      const mailBtn = $('[data-send="email"]', form);
      if (mailBtn) mailBtn.addEventListener("click", (e) => { e.preventDefault(); go("email"); });
      form.dataset.wired = "1";
    }

    // Los platos de la casa salen del menú, no escritos a mano.
    const dishHost = $('[data-render="dish-checks"]', form);
    if (dishHost) {
      const checked = $$('input[name="dish"]:checked', form).map((c) => c.dataset.idx);
      dishHost.innerHTML = signatureDishes().map((it, i) =>
        '<label class="check"><input type="checkbox" name="dish" data-idx="' + i +
        '" value="' + esc(t(it.name)) + '" id="dish-' + i + '"' +
        (checked.includes(String(i)) ? " checked" : "") +
        "><span>" + esc(t(it.name)) + "</span></label>"
      ).join("");
    }
  }

  /* =====================================================================
     Datos estructurados, para que Google muestre bien el horario, la
     dirección y la cocina. Se arma con el mismo data.js que ve la página.
     ===================================================================== */
  function buildSchema() {
    if (!document.body.hasAttribute("data-schema")) return;
    $$('script[type="application/ld+json"][data-generated]').forEach((el) => el.remove());

    const hours = HOURS.filter((h) => h.open && h.close).map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "https://schema.org/" + h.day.en,
      opens: h.open,
      closes: h.close
    }));

    const base = location.origin + location.pathname.replace(/[^/]*$/, "");
    const sameAs = [SITE.facebook, SITE.instagram, SITE.tripadvisor].filter(Boolean);

    const data = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: SITE.legal,
      description: t(SITE.tagline),
      inLanguage: LANG,
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
    tag.setAttribute("data-generated", "");
    tag.textContent = JSON.stringify(data, null, 2);
    document.head.appendChild(tag);
  }

  /* =====================================================================
     Cambiar de idioma: guarda la elección y vuelve a dibujar todo.
     ===================================================================== */
  function setLang(lang) {
    if (!LANGS.includes(lang) || lang === LANG) return;
    LANG = lang;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* sin almacenamiento */ }
    render();
  }

  function render() {
    buildHeader();
    buildFooter();
    applyStaticLang();
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
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
