# Yurumei Sport Bar & Restaurant — sitio web

Sitio web del restaurante de la familia en **Punta Gorda, Roatán** — el pueblo
garífuna más antiguo de Honduras.

Sin compilar, sin dependencias, sin servidor. Abre `index.html` en un navegador
y funciona.

**El sitio abre en español.** Cada visitante puede cambiar a inglés con el botón
del encabezado, y su elección se recuerda mientras navega.

---

## Las páginas

| Archivo | Qué es |
|---|---|
| `index.html`   | Inicio — el gancho, qué es el lugar, los platos de la casa, la colección, el guifiti, la nota para cruceros |
| `menu.html`    | El menú completo: del mar, de la cocina, del bar |
| `about.html`   | Nuestra historia — Yurumein, 1797, la familia, el museo, fotos y videos |
| `visit.html`   | Horarios, dirección, mapa, cuánto se hace desde cada puerto, y las preguntas frecuentes |
| `contact.html` | Formulario para pedir mesa, que se envía por WhatsApp o correo |
| `404.html`     | Página de error |

---

## ✏️ Lo que todavía te toca a ti

Todo lo que dice el sitio está en **un solo archivo**: `assets/js/data.js`.
Ábrelo, edita el texto, guarda y recarga la página. Nunca hace falta tocar HTML.

Cada texto tiene las dos versiones, así:

```js
title: { es: "Cocinado a la manera garífuna", en: "Cooked the Garífuna way" }
```

**Cambia siempre las dos.** Lo que está en `es:` sale en español y lo que está
en `en:` sale en inglés.

Estas son las cosas que siguen siendo suposiciones o ejemplos:

1. **El teléfono y el WhatsApp.** Ahora mismo es el número de Jafeth, de
   Martinez East End Tours. Pon el número del restaurante en `SITE.whatsapp`
   (solo números, sin `+` y sin espacios) y en `SITE.phone`.
2. **El horario.** `HOURS` es una suposición — de 11 de la mañana a 9 de la
   noche, más tarde los fines de semana. Corrige cada línea. Para un día
   cerrado, pon `open` y `close` en `""`.
3. **Los precios.** Todos son de ejemplo. Mientras `PRICES_CONFIRMED` esté en
   `false`, el menú dice *"Pregunta el precio de hoy"* en lugar de un número,
   para que nadie reciba un precio que tú no pusiste. Revisa el menú, corrige
   los precios, y recién entonces pon esa línea en `true`.
4. **El menú.** Los platos son los que la familia cocina, empezando por los que
   la gente ya nombra en sus reseñas: machuca, machuca con king crab y sopa
   marinera. Borra lo que no vendas y agrega lo que falte.
5. **El punto del mapa.** `MAP` está en el centro de Punta Gorda. Para ponerlo
   en la puerta: abre Google Maps, mantén presionado sobre el restaurante, copia
   los números que salen y pégalos como `lat` y `lon`.
6. **Dos respuestas.** Al final de `data.js` hay dos preguntas apagadas —
   *¿aceptan tarjeta?* y *¿pasan los partidos?* Escribe las respuestas de
   verdad, quita las `//` del principio de esas líneas, y aparecen en la página
   "Visítanos".
7. **El Facebook.** Hay dos páginas con el nombre Yurumei. El sitio enlaza a
   `…990474`; si tú publicas en la otra, cambia el enlace.

Datos ya confirmados del perfil de Tripadvisor: el nombre, la dirección en la
Calle Principal del Barrio La Cola, la cocina, la calificación 4.6 y la cuenta
de Instagram `@yurumei.ysbr`.

---

## El idioma

- El sitio abre en **español** para todo el mundo.
- El botón **EN / ES** del encabezado cambia el idioma sin recargar la página.
- La elección se guarda en el navegador del visitante y lo sigue de una página
  a otra.
- Si prefieres que el sitio abra en el idioma del navegador de cada visitante
  (inglés para la mayoría de los cruceros), pon `AUTO_DETECT_LANG = true` en
  `data.js`. La elección manual del visitante siempre manda por encima.
- Para cambiar el idioma con el que abre por defecto, cambia `DEFAULT_LANG`.

El texto fijo de las páginas lleva su traducción al lado, dentro del HTML:

```html
<h2 data-en="The menu">El menú</h2>
```

El español es lo que está escrito, y el inglés va en `data-en`. Si editas uno,
edita el otro.

---

## Agregar una foto

1. Pon el archivo en `assets/img/`.
2. Agrega una línea a `GALLERY` en `assets/js/data.js`:
   ```js
   { file: "mi-foto.jpg", caption: { es: "Qué se ve.", en: "What it shows." } },
   ```

Las fotos del pueblo y del restaurante son las mismas del sitio de
[Martinez East End Tours](https://martinezeastendtours.com) — misma familia,
mismo pueblo.

---

## Ponerlo en línea

El sitio ya está publicado con **GitHub Pages**, en la rama `main`, carpeta
`/ (root)`:

**https://jafethmartinez.github.io/Yurumei-restuarant/**

Cada vez que se suba un cambio a `main`, GitHub lo vuelve a publicar solo, en un
par de minutos.

Para usar un dominio propio (por ejemplo `yurumei.com`): crea un archivo llamado
`CNAME` en la raíz con solo el dominio adentro, y apunta el DNS del dominio a
GitHub Pages. Si lo haces, cambia también el dominio dentro de `sitemap.xml` y
`robots.txt`, que hoy nombran la dirección de github.io.

El archivo `.nojekyll` ya está puesto — evita que GitHub trate el sitio como un
blog.

---

## Cómo está armado

| Ruta | Para qué sirve |
|---|---|
| `assets/js/data.js` | **Todo el contenido, en los dos idiomas.** El único archivo que necesitas editar. |
| `assets/js/app.js`  | Dibuja el encabezado, el pie, el menú, el horario, el mapa, la galería y el formulario a partir de los datos, y maneja el cambio de idioma. No deberías tener que tocarlo. |
| `assets/css/site.css` | La apariencia. Los colores salen de la bandera garífuna — negro, blanco y amarillo — con el mar y el piso de barro del comedor. |
| `assets/img/`, `assets/video/` | Fotos y videos del pueblo y del restaurante. |
| `sitemap.xml`, `robots.txt` | Para que los buscadores encuentren las páginas. |

El encabezado y el pie se generan desde `app.js` en todas las páginas, así que un
cambio en la navegación se hace en un solo lugar y no en seis.

El formulario de mesas no necesita servidor: abre WhatsApp o el correo del
visitante con el mensaje ya escrito, y esa persona lo envía. No se manda nada
hasta que ella aprieta enviar.

---

## In English

This is the website for a family Garífuna restaurant in Punta Gorda, Roatán.
It is a plain static site — no build step, no dependencies. It loads in Spanish
and visitors can switch to English with the header button; the choice is
remembered.

All content lives in `assets/js/data.js`, where every string carries both
languages as `{ es: "…", en: "…" }`. Fixed page text carries its English in a
`data-en` attribute on the element. Menu prices are placeholders until
`PRICES_CONFIRMED` is set to `true` — until then the site shows "ask for today's
price" rather than a number nobody confirmed.
