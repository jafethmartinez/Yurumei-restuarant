/* =====================================================================
   YURUMEI SPORT BAR & RESTAURANT — site content
   =====================================================================
   Everything the website says lives in this one file. Edit here and every
   page updates. No build step, no tools — save the file, refresh the page.

   Look for the ✏️ marks. Those are the spots that still need you.

   Details confirmed from the restaurant's Tripadvisor listing
   (Sept 2026): the name, the address, the cuisine, the 4.6 rating, and
   that machuca and sopa marinera are what people come for.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. THE BASICS  —  ✏️ CHECK THIS FIRST
   These feed the header, the footer, and every call button on the site.
   --------------------------------------------------------------------- */
const SITE = {
  name:     "Yurumei",
  legal:    "Yurumei Sport Bar & Restaurant",
  tagline:  "Garífuna seafood and cold beer over the water, in Punta Gorda — the oldest Garífuna village in Honduras",

  // ✏️ WhatsApp — digits only, no + and no spaces. This is currently
  //    Jafeth's number (from Martinez East End Tours). Replace it with the
  //    restaurant's own number.
  whatsapp: "16892870134",
  phone:    "+1 689-287-0134",
  email:    "emilmartinez938@yahoo.com",

  village:  "Punta Gorda",
  // Street address exactly as the Tripadvisor listing has it.
  street:   "Calle Principal, Barrio La Cola — one block from the Catholic church",
  address:  "Calle Principal, Bo. La Cola, Punta Gorda, Roatán 34101, Islas de la Bahía, Honduras",

  // Rating shown on the home page. ✏️ Update the number as it moves.
  rating:      "4.6",
  ratingSource:"Tripadvisor",

  facebook:    "https://www.facebook.com/p/Yurumei-Sport-Bar-Restaurants-100042338990474/",
  instagram:   "https://www.instagram.com/yurumei.ysbr/",
  tripadvisor: "https://www.tripadvisor.com/Restaurant_Review-g292019-d12282783-Reviews-Yurumei_Sport_Bar_and_restaurant-Roatan_Bay_Islands.html"
  // ✏️ Note: there is a second Facebook page under the name
  //    "Yurumei Sport Bar and Restaurant" (…100054399752515). If that is the
  //    one you actually post to, swap the facebook link above for it.
};


/* ---------------------------------------------------------------------
   2. OPENING HOURS  —  ✏️ THESE ARE A GUESS. CORRECT THEM.
   Set open and close to "" for a day you are closed.
   `note` is optional and shows in small text under the day.
   --------------------------------------------------------------------- */
const HOURS = [
  { day: "Monday",    open: "11:00", close: "21:00", note: "" },
  { day: "Tuesday",   open: "11:00", close: "21:00", note: "" },
  { day: "Wednesday", open: "11:00", close: "21:00", note: "" },
  { day: "Thursday",  open: "11:00", close: "21:00", note: "" },
  { day: "Friday",    open: "11:00", close: "22:00", note: "" },
  { day: "Saturday",  open: "11:00", close: "22:00", note: "Busiest night — the bar stays loud" },
  { day: "Sunday",    open: "11:00", close: "20:00", note: "Family day — call ahead for a big table" }
];

// ✏️ Set to true once the prices in MENU below are YOUR real prices.
//    While it is false the site shows "Ask for today's price" instead of a
//    number, so nobody is ever quoted a figure you did not set.
const PRICES_CONFIRMED = false;

// Currency shown next to prices once PRICES_CONFIRMED is true.
const CURRENCY = "L";   // Honduran lempira. Use "$" for US dollars.


/* ---------------------------------------------------------------------
   3. THE MENU
   ✏️ Machuca, machuca with king crab and sopa marinera are the dishes your
      guests already name in their reviews, so they lead. THE PRICES ARE
      PLACEHOLDERS — go through every one, then set PRICES_CONFIRMED = true.
      Delete anything you don't serve, add anything missing.
      `signature: true` also puts the dish on the home page.
   --------------------------------------------------------------------- */
const MENU = [
  {
    section: "From the sea", id: "sea",
    blurb: "Bought off the boats in the village. When it's gone, it's gone.",
    items: [
      { name: "Machuca", price: 320, signature: true,
        note: "Green plantain mashed in a wooden mortar, in a creamy coconut seafood broth. This is the dish people drive across the island for.",
        tags: ["Our signature"] },
      { name: "Machuca with king crab", price: 600, signature: true,
        note: "The same bowl, with king crab in it. Ask what came in today.",
        tags: ["Ask for it"] },
      { name: "Machuca with fish, shrimp and lobster", price: 650,
        note: "All three, in one bowl. Bring an appetite.", tags: [] },
      { name: "Sopa marinera", price: 340, signature: true,
        note: "Seafood soup in coconut milk with yuca and sweet corn — traditional island food, made the way it has always been made here.",
        tags: ["Our signature"] },
      { name: "Tapado", price: 350, signature: true,
        note: "Seafood stew simmered slowly in fresh coconut milk with green plantain, yuca and herbs.",
        tags: ["Garífuna classic"] },
      { name: "Whole fried fish", price: 280,
        note: "Today's catch, fried whole, with fried plantain and cabbage salad.", tags: [] },
      { name: "Conch soup", price: 300, note: "Sopa de caracol — conch, coconut milk and yuca.", tags: [] },
      { name: "Garlic shrimp", price: 320, note: "With rice and beans cooked in coconut milk.", tags: [] },
      { name: "Grilled lobster", price: 600,
        note: "Split, grilled, butter and garlic. Seasonal — ask what the boats brought.", tags: ["Seasonal"] }
    ]
  },
  {
    section: "From the kitchen", id: "kitchen",
    blurb: "What the family eats.",
    items: [
      { name: "Ereba", price: 60, signature: true,
        note: "Cassava bread, pressed and baked the old way. The oldest thing on this menu.",
        tags: ["Garífuna classic"] },
      { name: "Rice and beans in coconut milk", price: 90,
        note: "Served with everything, and good enough to order on its own.", tags: [] },
      { name: "Coconut bread", price: 60, note: "", tags: [] },
      { name: "Fried plantain", price: 60, note: "", tags: [] },
      { name: "Chicken plate", price: 220, note: "For anyone at the table who doesn't eat seafood.", tags: [] },
      { name: "Cassava soup", price: 200, note: "", tags: [] },
      { name: "Baleadas", price: 70, note: "Flour tortilla, beans, cheese, cream. The Honduran standard.", tags: [] }
    ]
  },
  {
    section: "From the bar", id: "drink",
    blurb: "Cold, and a few steps from the water.",
    items: [
      { name: "Guifiti", price: 100, signature: true,
        note: "Our own — roots and herbs steeped in rum, bottled here under the Yurumei label. By the glass, or by the bottle to take home.",
        tags: ["Made here"] },
      { name: "Cold beer", price: 60, note: "Salva Vida, Port Royal, Imperial.", tags: [] },
      { name: "Rum and mixers", price: 90, note: "", tags: [] },
      { name: "Fresh coconut water", price: 50, note: "Opened in front of you.", tags: [] },
      { name: "Fresh fruit juice", price: 60, note: "Whatever is ripe — ask.", tags: [] },
      { name: "Soft drinks and water", price: 35, note: "", tags: [] }
    ]
  }
];


/* ---------------------------------------------------------------------
   4. WHAT THE PLACE IS  —  the three things a visitor should know
   --------------------------------------------------------------------- */
const PILLARS = [
  { icon: "pot",
    title: "Cooked the Garífuna way",
    body: "Coconut milk, green plantain, cassava, and fish that was in the water this morning. No shortcuts and no fusion — these are the recipes our people carried here in 1797." },
  { icon: "beer",
    title: "A sports bar over the water",
    body: "Punta Gorda is a working fishing village, and we sit looking out at it. Cold beer, the game on, boats coming in, and no cruise-port prices." },
  { icon: "bottle",
    title: "Guifiti bottled on site",
    body: "We steep our own guifiti from roots and herbs and bottle it under the Yurumei label. Have a glass with your meal or carry one home." }
];


/* ---------------------------------------------------------------------
   5. PHOTOS
   To add your own: drop the file in assets/img/ and add a line here.
   --------------------------------------------------------------------- */
const GALLERY = [
  { file: "tapado-lobster.jpg", caption: "Seafood in coconut broth with lobster, machuca on the side, lime and hot sauce on the table." },
  { file: "museum-drums.jpg",   caption: "Inside — drums, conch shells and the family's collection." },
  { file: "guifiti-bottles.jpg",caption: "Guifiti, steeped and bottled here under the Yurumei label." },
  { file: "dining-room.jpg",    caption: "Flags left behind by guests, from just about everywhere." },
  { file: "punta-gorda.jpg",    caption: "Punta Gorda on a feast day." },
  { file: "arrival-day.jpg",    caption: "Garífuna Arrival Day — the canoes come ashore every 12th of April." },
  { file: "punta-dance.jpg",    caption: "Punta — danced in the village, not staged for anyone." }
];

const VIDEOS = [
  { file: "museum-tour.mp4", poster: "dining-room.jpg",  caption: "A walk through the dining room" },
  { file: "drumming.mp4",    poster: "museum-drums.jpg", caption: "Garífuna drumming" },
  { file: "punta-dance.mp4", poster: "punta-dance.jpg",  caption: "The Punta dance" }
];


/* ---------------------------------------------------------------------
   6. GETTING HERE
   --------------------------------------------------------------------- */
const DIRECTIONS = [
  { from: "Mahogany Bay Cruise Center", time: "About 45 minutes by road",
    body: "East through French Harbour and Oak Ridge, then down into Punta Gorda. We are on Calle Principal in Barrio La Cola, one block from the Catholic church. Any taxi driver knows the village." },
  { from: "Port of Roatán (Coxen Hole)", time: "About 50 minutes by road",
    body: "Take the main road east and ask for Punta Gorda — everyone on the island knows it. One block from the Catholic church, on the main street." },
  { from: "Roatán Airport (RTB)", time: "About 40 minutes by road",
    body: "East along the main road, then down into the village and onto Calle Principal." },
  { from: "West End or West Bay", time: "About an hour and a quarter",
    body: "It is the long way across the island, and it is the reason the east end still looks like the east end." }
];

// ✏️ Set these to the restaurant's exact spot so the map pin is right.
//    Easiest way: open Google Maps, right-click on the restaurant, click the
//    numbers that appear to copy them, and paste them here.
const MAP = { lat: 16.4083, lon: -86.3389, zoom: 16 };


/* ---------------------------------------------------------------------
   7. QUESTIONS PEOPLE ASK
   --------------------------------------------------------------------- */
const FAQ = [
  { q: "Do I need a reservation?",
    a: "Not for a table or two — walk in. For a group of six or more, or if you are coming off a ship on a schedule, send a WhatsApp message the day before so the kitchen is ready for you." },
  { q: "How long does machuca take?",
    a: "It is made to order and it is not fast — count on 30 to 45 minutes. That is the point of it. Order a cold beer or a guifiti and watch the boats come in while you wait." },
  { q: "What should I order the first time?",
    a: "Machuca, and if there is king crab that day, have it with king crab. If you would rather have soup than a bowl of broth and plantain, order the sopa marinera." },
  { q: "Can you cook for someone who doesn't eat seafood?",
    a: "Yes. There is a chicken plate, rice and beans in coconut milk, baleadas, cassava soup and fried plantain. Tell us when you order and we will look after them." },
  { q: "Is there anything for a vegetarian?",
    a: "Rice and beans, ereba, fried plantain and cassava soup, yes. Almost everything else in the kitchen starts with fish, so tell us in advance and we will make you a proper plate." },
  // ✏️ TWO QUESTIONS FOR YOU. Both are commented out so the site never shows
  //    a half-written answer. Fill in the answer, delete the // in front of
  //    each of the three lines, and the question appears on the Visit page.
  //
  // { q: "Do you take cards?",
  //   a: "Write the real answer here — cash only, or cards too? Lempira, dollars, or both?" },
  //
  // { q: "Do you show the games?",
  //   a: "Write the real answer here — which leagues you put on, and whether people can ask for a match." },
  { q: "We are on a cruise ship. Can we get out here and back?",
    a: "Yes, with room to spare, if you leave the port in the morning. It is about 45 minutes each way from Mahogany Bay. Our family also runs Martinez East End Tours and can drive you both ways." },
  { q: "Can we buy guifiti to take home?",
    a: "Yes, by the bottle, with the Yurumei label on it. Check your own country's rules on bringing alcohol back before you fly." }
];
