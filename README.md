# Yurumei Sport Bar & Restaurant — website

A static website for the family restaurant in **Punta Gorda, Roatán** — the oldest
Garífuna settlement in Honduras.

No build step, no dependencies, no server. Open `index.html` in a browser and it works.

---

## Pages

| File | What it is |
|---|---|
| `index.html`   | Home — the hook, what the place is, signature dishes, the collection, guifiti, cruise-day note |
| `menu.html`    | Full menu, in three sections: from the sea, from the kitchen, from the bar |
| `about.html`   | Our story — Yurumein, 1797, the family, the museum, photos and video |
| `visit.html`   | Hours, address, map, drive times from every port, and the FAQ |
| `contact.html` | Table request form that sends by WhatsApp or email |
| `404.html`     | Not-found page |

---

## ✏️ What still needs you

Everything the site says lives in **one file**: `assets/js/data.js`.
Open it, edit the text, save, refresh the page. You never need to touch the HTML.

These are the items in there that are still guesses or placeholders:

1. **The phone and WhatsApp number.** They are currently Jafeth's number from
   Martinez East End Tours. Put the restaurant's own number in `SITE.whatsapp`
   (digits only, no `+` and no spaces) and `SITE.phone`.
2. **The opening hours.** `HOURS` is a guess — 11am to 9pm, later on weekends.
   Correct every line. For a day you are closed, set `open` and `close` to `""`.
3. **The prices.** Every price in `MENU` is a placeholder. Until you set
   `PRICES_CONFIRMED = true`, the site shows *"Ask for today's price"* instead of a
   number — so no guest is ever quoted a figure you did not set. Go through the
   menu, fix the prices, then flip that one line to `true`.
4. **The menu itself.** The dishes are the Garífuna plates the family is known for,
   led by the ones guests already name in reviews — machuca, machuca with king crab,
   sopa marinera. Delete anything you don't serve and add anything missing.
5. **The map pin.** `MAP` is set to the middle of Punta Gorda. To put it on your
   door: open Google Maps, right-click the restaurant, click the numbers that pop up
   to copy them, and paste them in as `lat` and `lon`.
6. **Two FAQ answers.** Near the bottom of `data.js`, two questions are commented
   out — *do you take cards?* and *do you show the games?* Write the real answers,
   delete the `//` in front of those lines, and they appear on the Visit page.
7. **The Facebook page.** There are two pages under the Yurumei name. The site links
   to `…100042338990474`; if you post to the other one, swap the link.

Details already confirmed from your Tripadvisor listing: the name, the address on
Calle Principal in Barrio La Cola, the cuisine, the 4.6 rating, and the Instagram
account `@yurumei.ysbr`.

---

## Adding a photo

1. Drop the file in `assets/img/`.
2. Add a line to `GALLERY` in `assets/js/data.js`:
   ```js
   { file: "my-new-photo.jpg", caption: "What the photo shows." },
   ```

Photos from the Punta Gorda cultural tour are shared with the
[Martinez East End Tours](https://martinezeastendtours.com) site — same family,
same village.

---

## Putting it online

The site is plain HTML, so almost any host works. The simplest is **GitHub Pages**:

1. In this repository, go to **Settings → Pages**.
2. Under *Build and deployment*, set **Source** to *Deploy from a branch*.
3. Pick the branch and the `/ (root)` folder, then **Save**.
4. A minute later the site is live at
   `https://jafethmartinez.github.io/yurumei-restuarant/`.

To use a custom domain (say `yurumei.com`), add a file called `CNAME` at the top
level containing just the domain, then point the domain's DNS at GitHub Pages.
If you do, also swap the domain inside `sitemap.xml` and `robots.txt` — they name
the github.io address today.

The `.nojekyll` file is already here — it stops GitHub from trying to process the
site as a blog.

---

## How it is built

| Path | What it does |
|---|---|
| `assets/js/data.js` | **All the content.** The only file you need to edit. |
| `assets/js/app.js`  | Renders the header, footer, menu, hours, map, gallery and form from the data. You should not need to change this. |
| `assets/css/site.css` | The look. Palette taken from the Garífuna flag — black, white, yellow — with the sea and the terracotta floor of the dining room. |
| `assets/img/`, `assets/video/` | Photography and video from the village and the restaurant. |

The header and footer are injected by `app.js` on every page, so a change to the
navigation or the footer happens in one place, not six.

The table request form does not need a server: it opens WhatsApp or the visitor's
email app with the message already written, and they press send. Nothing is
submitted anywhere until they do.
