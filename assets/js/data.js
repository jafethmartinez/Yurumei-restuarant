/* =====================================================================
   YURUMEI SPORT BAR & RESTAURANT — contenido del sitio / site content
   =====================================================================
   Todo lo que dice la página web está en este archivo. Edítalo aquí y
   todas las páginas se actualizan. Sin compilar, sin herramientas:
   guarda el archivo y recarga la página.

   EL SITIO ES BILINGÜE. Cada texto tiene dos versiones:
       { es: "en español", en: "in English" }
   Cambia las dos. El visitante elige con el botón ES/EN del encabezado.

   Busca las marcas ✏️ — son las cosas que todavía te toca a ti.

   Datos confirmados del perfil de Tripadvisor del restaurante (sept 2026):
   el nombre, la dirección, la cocina, la calificación 4.6, y que la machuca
   y la sopa marinera son por lo que viene la gente.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. LO BÁSICO  —  ✏️ REVISA ESTO PRIMERO
   Alimenta el encabezado, el pie de página y cada botón del sitio.
   --------------------------------------------------------------------- */
const SITE = {
  name:   "Yurumei",
  legal:  "Yurumei Sport Bar & Restaurant",
  tagline: {
    es: "Mariscos garífunas y cerveza fría frente al mar, en Punta Gorda — el pueblo garífuna más antiguo de Honduras",
    en: "Garífuna seafood and cold beer over the water, in Punta Gorda — the oldest Garífuna village in Honduras"
  },

  // ✏️ WhatsApp — solo números, sin + y sin espacios. Ahora mismo es el
  //    número de Jafeth (de Martinez East End Tours). Cámbialo por el
  //    número del restaurante.
  whatsapp: "16892870134",
  phone:    "+1 689-287-0134",
  email:    "emilmartinez938@yahoo.com",

  village: "Punta Gorda",
  street: {
    es: "Calle Principal, Barrio La Cola — a una cuadra de la Iglesia Católica",
    en: "Calle Principal, Barrio La Cola — one block from the Catholic church"
  },
  address: {
    es: "Calle Principal, Bo. La Cola, Punta Gorda, Roatán 34101, Islas de la Bahía, Honduras",
    en: "Calle Principal, Bo. La Cola, Punta Gorda, Roatán 34101, Islas de la Bahía, Honduras"
  },

  // ✏️ Actualiza el número cuando cambie.
  rating: "4.6",

  facebook:    "https://www.facebook.com/p/Yurumei-Sport-Bar-Restaurants-100042338990474/",
  instagram:   "https://www.instagram.com/yurumei.ysbr/",
  tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g292019-d12282783-Reviews-Yurumei_Sport_Bar_and_restaurant-Roatan_Bay_Islands.html"
  // ✏️ Ojo: hay una segunda página de Facebook con el nombre
  //    "Yurumei Sport Bar and Restaurant" (…100054399752515). Si esa es la
  //    que usas, cambia el enlace de arriba.
};

// Idioma con el que abre el sitio: "es" o "en".
const DEFAULT_LANG = "es";

// ✏️ Si lo pones en true, el sitio abre en el idioma del navegador del
//    visitante (inglés para la mayoría de los cruceros) en lugar de abrir
//    siempre en español. La elección del visitante siempre manda por encima.
const AUTO_DETECT_LANG = false;


/* ---------------------------------------------------------------------
   2. HORARIO  —  ✏️ ESTO ES UNA SUPOSICIÓN. CORRÍGELO.
   Para un día cerrado, pon open y close en "".
   `note` es opcional y sale en letra chica debajo del día.
   --------------------------------------------------------------------- */
const HOURS = [
  { day: { es: "Lunes",     en: "Monday" },    open: "11:00", close: "21:00", note: null },
  { day: { es: "Martes",    en: "Tuesday" },   open: "11:00", close: "21:00", note: null },
  { day: { es: "Miércoles", en: "Wednesday" }, open: "11:00", close: "21:00", note: null },
  { day: { es: "Jueves",    en: "Thursday" },  open: "11:00", close: "21:00", note: null },
  { day: { es: "Viernes",   en: "Friday" },    open: "11:00", close: "22:00", note: null },
  { day: { es: "Sábado",    en: "Saturday" },  open: "11:00", close: "22:00",
    note: { es: "La noche más movida — el bar se pone bueno", en: "Busiest night — the bar stays loud" } },
  { day: { es: "Domingo",   en: "Sunday" },    open: "11:00", close: "20:00",
    note: { es: "Día de familia — avisa si vienen muchos", en: "Family day — call ahead for a big table" } }
];

// ✏️ Ponlo en true cuando los precios del MENÚ sean TUS precios de verdad.
//    Mientras esté en false, el sitio dice "Pregunta el precio de hoy" en
//    lugar de un número, para que nadie reciba un precio que tú no pusiste.
const PRICES_CONFIRMED = false;

// Moneda que se muestra cuando PRICES_CONFIRMED es true.
const CURRENCY = "L";   // Lempiras. Usa "$" para dólares.


/* ---------------------------------------------------------------------
   3. EL MENÚ
   ✏️ La machuca, la machuca con king crab y la sopa marinera van primero
      porque son los platos que la gente nombra en sus reseñas. LOS PRECIOS
      SON DE EJEMPLO — revísalos uno por uno y luego pon
      PRICES_CONFIRMED = true. Borra lo que no vendas, agrega lo que falte.
      `signature: true` también pone el plato en la página de inicio.
   --------------------------------------------------------------------- */
const MENU = [
  {
    id: "mar",
    section: { es: "Del mar", en: "From the sea" },
    blurb: {
      es: "Comprado a los pescadores del pueblo. Cuando se acaba, se acabó.",
      en: "Bought off the boats in the village. When it's gone, it's gone."
    },
    items: [
      { price: 320, signature: true,
        name: { es: "Machuca", en: "Machuca" },
        note: {
          es: "Plátano verde majado en pilón de madera, en caldo cremoso de coco con mariscos. Este es el plato por el que la gente cruza la isla.",
          en: "Green plantain mashed in a wooden mortar, in a creamy coconut seafood broth. This is the dish people drive across the island for."
        },
        tags: [{ es: "Nuestra especialidad", en: "Our signature" }] },

      { price: 600, signature: true,
        name: { es: "Machuca con king crab", en: "Machuca with king crab" },
        note: { es: "El mismo plato, con king crab. Pregunta qué entró hoy.",
                en: "The same bowl, with king crab in it. Ask what came in today." },
        tags: [{ es: "Pregúntala", en: "Ask for it" }] },

      { price: 650,
        name: { es: "Machuca con pescado, camarón y langosta", en: "Machuca with fish, shrimp and lobster" },
        note: { es: "Los tres, en un solo plato. Ven con hambre.",
                en: "All three, in one bowl. Bring an appetite." }, tags: [] },

      { price: 340, signature: true,
        name: { es: "Sopa marinera", en: "Sopa marinera" },
        note: {
          es: "Sopa de mariscos en leche de coco con yuca y maíz dulce — comida isleña tradicional, hecha como siempre se ha hecho aquí.",
          en: "Seafood soup in coconut milk with yuca and sweet corn — traditional island food, made the way it has always been made here."
        },
        tags: [{ es: "Nuestra especialidad", en: "Our signature" }] },

      { price: 350, signature: true,
        name: { es: "Tapado", en: "Tapado" },
        note: { es: "Guiso de mariscos cocinado despacio en leche de coco fresca con plátano verde, yuca y hierbas.",
                en: "Seafood stew simmered slowly in fresh coconut milk with green plantain, yuca and herbs." },
        tags: [{ es: "Clásico garífuna", en: "Garífuna classic" }] },

      { price: 280,
        name: { es: "Pescado frito entero", en: "Whole fried fish" },
        note: { es: "La pesca del día, frita entera, con plátano frito y ensalada de repollo.",
                en: "Today's catch, fried whole, with fried plantain and cabbage salad." }, tags: [] },

      { price: 300,
        name: { es: "Sopa de caracol", en: "Conch soup" },
        note: { es: "Caracol, leche de coco y yuca.", en: "Sopa de caracol — conch, coconut milk and yuca." }, tags: [] },

      { price: 320,
        name: { es: "Camarones al ajillo", en: "Garlic shrimp" },
        note: { es: "Con arroz y frijoles cocinados en leche de coco.",
                en: "With rice and beans cooked in coconut milk." }, tags: [] },

      { price: 600,
        name: { es: "Langosta a la parrilla", en: "Grilled lobster" },
        note: { es: "Partida, a la parrilla, con mantequilla y ajo. Por temporada — pregunta qué trajeron las lanchas.",
                en: "Split, grilled, butter and garlic. Seasonal — ask what the boats brought." },
        tags: [{ es: "Por temporada", en: "Seasonal" }] }
    ]
  },
  {
    id: "cocina",
    section: { es: "De la cocina", en: "From the kitchen" },
    blurb: { es: "Lo que come la familia.", en: "What the family eats." },
    items: [
      { price: 60, signature: true,
        name: { es: "Ereba", en: "Ereba" },
        note: { es: "Casabe, prensado y horneado como se ha hecho siempre. Lo más antiguo de este menú.",
                en: "Cassava bread, pressed and baked the old way. The oldest thing on this menu." },
        tags: [{ es: "Clásico garífuna", en: "Garífuna classic" }] },

      { price: 90,
        name: { es: "Arroz con frijoles en leche de coco", en: "Rice and beans in coconut milk" },
        note: { es: "Va con todo, y es bueno hasta pedido solo.",
                en: "Served with everything, and good enough to order on its own." }, tags: [] },

      { price: 60, name: { es: "Pan de coco", en: "Coconut bread" }, note: null, tags: [] },
      { price: 60, name: { es: "Plátano frito", en: "Fried plantain" }, note: null, tags: [] },

      { price: 220,
        name: { es: "Plato de pollo", en: "Chicken plate" },
        note: { es: "Para quien en la mesa no come mariscos.",
                en: "For anyone at the table who doesn't eat seafood." }, tags: [] },

      { price: 200, name: { es: "Sopa de yuca", en: "Cassava soup" }, note: null, tags: [] },

      { price: 70,
        name: { es: "Baleadas", en: "Baleadas" },
        note: { es: "Tortilla de harina, frijoles, queso y mantequilla crema.",
                en: "Flour tortilla, beans, cheese, cream. The Honduran standard." }, tags: [] }
    ]
  },
  {
    id: "bar",
    section: { es: "Del bar", en: "From the bar" },
    blurb: { es: "Fría, y a unos pasos del agua.", en: "Cold, and a few steps from the water." },
    items: [
      { price: 100, signature: true,
        name: { es: "Guifiti", en: "Guifiti" },
        note: {
          es: "El nuestro — raíces y hierbas reposadas en ron, embotellado aquí con la etiqueta de Yurumei. Por copa, o por botella para llevar.",
          en: "Our own — roots and herbs steeped in rum, bottled here under the Yurumei label. By the glass, or by the bottle to take home."
        },
        tags: [{ es: "Hecho aquí", en: "Made here" }] },

      { price: 60,
        name: { es: "Cerveza fría", en: "Cold beer" },
        note: { es: "Salva Vida, Port Royal, Imperial.", en: "Salva Vida, Port Royal, Imperial." }, tags: [] },

      { price: 90, name: { es: "Ron y mezclas", en: "Rum and mixers" }, note: null, tags: [] },

      { price: 50,
        name: { es: "Agua de coco", en: "Fresh coconut water" },
        note: { es: "Abierto frente a ti.", en: "Opened in front of you." }, tags: [] },

      { price: 60,
        name: { es: "Jugos naturales", en: "Fresh fruit juice" },
        note: { es: "Lo que esté maduro — pregunta.", en: "Whatever is ripe — ask." }, tags: [] },

      { price: 35, name: { es: "Gaseosas y agua", en: "Soft drinks and water" }, note: null, tags: [] }
    ]
  }
];


/* ---------------------------------------------------------------------
   4. QUÉ ES ESTE LUGAR — las tres cosas que debe saber el visitante
   --------------------------------------------------------------------- */
const PILLARS = [
  { icon: "pot",
    title: { es: "Cocinado a la manera garífuna", en: "Cooked the Garífuna way" },
    body: {
      es: "Leche de coco, plátano verde, yuca, y pescado que esta mañana estaba en el agua. Sin atajos y sin fusión — estas son las recetas que nuestra gente trajo aquí en 1797.",
      en: "Coconut milk, green plantain, cassava, and fish that was in the water this morning. No shortcuts and no fusion — these are the recipes our people carried here in 1797."
    } },
  { icon: "beer",
    title: { es: "Un sport bar frente al agua", en: "A sports bar over the water" },
    body: {
      es: "Punta Gorda es un pueblo de pescadores de verdad, y nosotros estamos mirándolo. Cerveza fría, el partido puesto, las lanchas entrando, y sin precios de puerto de crucero.",
      en: "Punta Gorda is a working fishing village, and we sit looking out at it. Cold beer, the game on, boats coming in, and no cruise-port prices."
    } },
  { icon: "bottle",
    title: { es: "Guifiti embotellado aquí mismo", en: "Guifiti bottled on site" },
    body: {
      es: "Reposamos nuestro propio guifiti con raíces y hierbas y lo embotellamos con la etiqueta de Yurumei. Tómate una copa con la comida o llévate una botella.",
      en: "We steep our own guifiti from roots and herbs and bottle it under the Yurumei label. Have a glass with your meal or carry one home."
    } }
];


/* ---------------------------------------------------------------------
   5. FOTOS
   Para agregar las tuyas: pon el archivo en assets/img/ y añade una línea.
   --------------------------------------------------------------------- */
const GALLERY = [
  { file: "tapado-lobster.jpg", caption: {
      es: "Mariscos en caldo de coco con langosta, machuca al lado, limón y salsa en la mesa.",
      en: "Seafood in coconut broth with lobster, machuca on the side, lime and hot sauce on the table." } },
  { file: "museum-drums.jpg", caption: {
      es: "Por dentro — tambores, caracoles y la colección de la familia.",
      en: "Inside — drums, conch shells and the family's collection." } },
  { file: "guifiti-bottles.jpg", caption: {
      es: "Guifiti, reposado y embotellado aquí con la etiqueta de Yurumei.",
      en: "Guifiti, steeped and bottled here under the Yurumei label." } },
  { file: "dining-room.jpg", caption: {
      es: "Banderas que los visitantes han ido dejando, de casi todas partes.",
      en: "Flags left behind by guests, from just about everywhere." } },
  { file: "punta-gorda.jpg", caption: {
      es: "Punta Gorda en día de fiesta.", en: "Punta Gorda on a feast day." } },
  { file: "arrival-day.jpg", caption: {
      es: "Día de la Llegada Garífuna — los cayucos llegan cada 12 de abril.",
      en: "Garífuna Arrival Day — the canoes come ashore every 12th of April." } },
  { file: "punta-dance.jpg", caption: {
      es: "Punta — bailada en el pueblo, no montada para nadie.",
      en: "Punta — danced in the village, not staged for anyone." } }
];

const VIDEOS = [
  { file: "museum-tour.mp4", poster: "dining-room.jpg",
    caption: { es: "Un recorrido por el comedor", en: "A walk through the dining room" } },
  { file: "drumming.mp4", poster: "museum-drums.jpg",
    caption: { es: "Tambores garífunas", en: "Garífuna drumming" } },
  { file: "punta-dance.mp4", poster: "punta-dance.jpg",
    caption: { es: "El baile de la punta", en: "The Punta dance" } }
];


/* ---------------------------------------------------------------------
   6. CÓMO LLEGAR
   --------------------------------------------------------------------- */
const DIRECTIONS = [
  { from: { es: "Desde el puerto de cruceros Mahogany Bay", en: "From Mahogany Bay Cruise Center" },
    time: { es: "Unos 45 minutos en carro", en: "About 45 minutes by road" },
    body: {
      es: "Al este por French Harbour y Oak Ridge, y luego bajando a Punta Gorda. Estamos en la Calle Principal, Barrio La Cola, a una cuadra de la Iglesia Católica. Cualquier taxista conoce el pueblo.",
      en: "East through French Harbour and Oak Ridge, then down into Punta Gorda. We are on Calle Principal in Barrio La Cola, one block from the Catholic church. Any taxi driver knows the village."
    } },
  { from: { es: "Desde el Puerto de Roatán (Coxen Hole)", en: "From Port of Roatán (Coxen Hole)" },
    time: { es: "Unos 50 minutos en carro", en: "About 50 minutes by road" },
    body: {
      es: "Toma la carretera principal hacia el este y pregunta por Punta Gorda — en la isla todos lo conocen. A una cuadra de la Iglesia Católica, sobre la calle principal.",
      en: "Take the main road east and ask for Punta Gorda — everyone on the island knows it. One block from the Catholic church, on the main street."
    } },
  { from: { es: "Desde el aeropuerto de Roatán (RTB)", en: "From Roatán Airport (RTB)" },
    time: { es: "Unos 40 minutos en carro", en: "About 40 minutes by road" },
    body: { es: "Al este por la carretera principal, luego bajando al pueblo hasta la Calle Principal.",
            en: "East along the main road, then down into the village and onto Calle Principal." } },
  { from: { es: "Desde West End o West Bay", en: "From West End or West Bay" },
    time: { es: "Como una hora y cuarto", en: "About an hour and a quarter" },
    body: { es: "Es el camino largo cruzando la isla, y por eso el east end todavía se ve como el east end.",
            en: "It is the long way across the island, and it is the reason the east end still looks like the east end." } }
];

// ✏️ Pon aquí el punto exacto del restaurante para que el mapa caiga bien.
//    Lo más fácil: abre Google Maps, mantén presionado sobre el restaurante,
//    copia los números que aparecen y pégalos aquí.
const MAP = { lat: 16.4083, lon: -86.3389, zoom: 16 };


/* ---------------------------------------------------------------------
   7. PREGUNTAS QUE HACE LA GENTE
   --------------------------------------------------------------------- */
const FAQ = [
  { q: { es: "¿Necesito reservación?", en: "Do I need a reservation?" },
    a: { es: "Para una o dos personas no — llega nomás. Para un grupo de seis o más, o si vienes de un crucero con el tiempo medido, mándanos un WhatsApp el día anterior para que la cocina esté lista.",
         en: "Not for a table or two — walk in. For a group of six or more, or if you are coming off a ship on a schedule, send a WhatsApp message the day before so the kitchen is ready for you." } },

  { q: { es: "¿Cuánto tarda la machuca?", en: "How long does machuca take?" },
    a: { es: "Se hace al momento y no es rápida — calcula de 30 a 45 minutos. De eso se trata. Pide una cerveza fría o un guifiti y mira entrar las lanchas mientras esperas.",
         en: "It is made to order and it is not fast — count on 30 to 45 minutes. That is the point of it. Order a cold beer or a guifiti and watch the boats come in while you wait." } },

  { q: { es: "¿Qué pido la primera vez?", en: "What should I order the first time?" },
    a: { es: "Machuca, y si ese día hay king crab, pídela con king crab. Si prefieres sopa en vez de caldo con plátano, pide la sopa marinera.",
         en: "Machuca, and if there is king crab that day, have it with king crab. If you would rather have soup than a bowl of broth and plantain, order the sopa marinera." } },

  { q: { es: "¿Pueden cocinar para alguien que no come mariscos?", en: "Can you cook for someone who doesn't eat seafood?" },
    a: { es: "Sí. Hay plato de pollo, arroz con frijoles en leche de coco, baleadas, sopa de yuca y plátano frito. Avísanos al pedir y lo atendemos.",
         en: "Yes. There is a chicken plate, rice and beans in coconut milk, baleadas, cassava soup and fried plantain. Tell us when you order and we will look after them." } },

  { q: { es: "¿Hay algo para vegetarianos?", en: "Is there anything for a vegetarian?" },
    a: { es: "Arroz con frijoles, ereba, plátano frito y sopa de yuca, sí. Casi todo lo demás empieza con pescado, así que avísanos antes y te preparamos un plato como se debe.",
         en: "Rice and beans, ereba, fried plantain and cassava soup, yes. Almost everything else in the kitchen starts with fish, so tell us in advance and we will make you a proper plate." } },

  { q: { es: "Venimos en crucero. ¿Nos da tiempo de ir y volver?", en: "We are on a cruise ship. Can we get out here and back?" },
    a: { es: "Sí, y de sobra, si salen del puerto por la mañana. Son unos 45 minutos de ida y otros tantos de vuelta desde Mahogany Bay. Nuestra familia también tiene Martinez East End Tours y puede llevarlos y traerlos.",
         en: "Yes, with room to spare, if you leave the port in the morning. It is about 45 minutes each way from Mahogany Bay. Our family also runs Martinez East End Tours and can drive you both ways." } },

  { q: { es: "¿Podemos comprar guifiti para llevar?", en: "Can we buy guifiti to take home?" },
    a: { es: "Sí, por botella, con la etiqueta de Yurumei. Revisa las reglas de tu país sobre llevar alcohol antes de volar.",
         en: "Yes, by the bottle, with the Yurumei label on it. Check your own country's rules on bringing alcohol back before you fly." } }

  // ✏️ DOS PREGUNTAS PARA TI. Están apagadas para que el sitio nunca muestre
  //    una respuesta a medias. Escribe la respuesta de verdad, quita las //
  //    del principio de cada línea, y aparecen en la página "Visítanos".
  //
  // ,{ q: { es: "¿Aceptan tarjeta?", en: "Do you take cards?" },
  //    a: { es: "Escribe aquí la respuesta real — ¿solo efectivo, o también tarjeta? ¿Lempiras, dólares, o los dos?",
  //         en: "Write the real answer here — cash only, or cards too? Lempira, dollars, or both?" } }
  //
  // ,{ q: { es: "¿Pasan los partidos?", en: "Do you show the games?" },
  //    a: { es: "Escribe aquí la respuesta real — qué ligas ponen y si la gente puede pedir un partido.",
  //         en: "Write the real answer here — which leagues you put on, and whether people can ask for a match." } }
];


/* ---------------------------------------------------------------------
   8. PALABRAS DE LA INTERFAZ
   Los botones, los títulos del menú de navegación y el formulario.
   Cámbialos solo si quieres otra forma de decirlo.
   --------------------------------------------------------------------- */
const UI = {
  nav_home:    { es: "Inicio",           en: "Home" },
  nav_menu:    { es: "Menú",             en: "Menu" },
  nav_about:   { es: "Nuestra historia", en: "Our story" },
  nav_visit:   { es: "Visítanos",        en: "Visit us" },
  nav_contact: { es: "Contacto",         en: "Contact" },

  wa_button:   { es: "Escríbenos por WhatsApp", en: "WhatsApp us" },
  wa_hello:    { es: "¡Hola Yurumei! Quisiera preguntar por una mesa.",
                 en: "Hello Yurumei! I would like to ask about a table." },

  ask_price:   { es: "Pregunta el precio de hoy", en: "Ask for today's price" },

  open_now:    { es: "Abierto ahora · hasta las", en: "Open now · until" },
  opens_at:    { es: "Cerrado ahora · abre a las", en: "Closed now · opens" },
  closed_today:{ es: "Cerrado por hoy",  en: "Closed for today" },
  closed_day:  { es: "Cerrado hoy",      en: "Closed today" },
  closed:      { es: "Cerrado",          en: "Closed" },

  hours_day:     { es: "Día",    en: "Day" },
  hours_kitchen: { es: "Cocina", en: "Kitchen" },

  foot_find:   { es: "Encuéntranos", en: "Find us" },
  foot_pages:  { es: "Páginas",      en: "Pages" },
  foot_since:  { es: "Punta Gorda, Roatán · Garínagu desde 1797",
                 en: "Punta Gorda, Roatán · Garinagu since 1797" },

  map_google:  { es: "Abrir en Google Maps", en: "Open in Google Maps" },
  map_osm:     { es: "Abrir en OpenStreetMap", en: "Open in OpenStreetMap" },

  lang_switch_to_en: { es: "English", en: "English" },
  lang_switch_to_es: { es: "Español", en: "Español" },
  lang_label:  { es: "Cambiar idioma", en: "Change language" },

  // Formulario de mesas
  form_greeting: { es: "¡Hola Yurumei! Quisiera pedir una mesa.",
                   en: "Hello Yurumei! I would like to request a table." },
  form_name:     { es: "Nombre",   en: "Name" },
  form_people:   { es: "Personas", en: "People" },
  form_date:     { es: "Fecha",    en: "Date" },
  form_time:     { es: "Hora",     en: "Time" },
  form_phone:    { es: "Teléfono", en: "Phone" },
  form_wants:    { es: "Le interesa", en: "Interested in" },
  form_notes:    { es: "Notas",    en: "Notes" },
  form_subject:  { es: "Solicitud de mesa", en: "Table request" }
};
