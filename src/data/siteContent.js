import { Briefcase, Cake, Heart, PartyPopper } from "lucide-react";

/**
 * All the client's details live here. Anything in [square brackets]
 * is a note for the client to replace with her own words.
 */
export const PLACEHOLDERS = {
  businessName: "FOODBYHYBEK",
  phoneDisplay: "+1 (780) 217-4272",
  phoneHref: "tel:+17802174272",
  whatsappNumber: "17802174272", // digits only, with country code
  email: "order@foodbyhybek.com",
  address: "[Your address in Edmonton, AB]",
  instagramUrl: "https://www.instagram.com/foodbyhybek/",
  facebookUrl: "#", // replace with the real link
  instagramHandle: "@foodbyhybek",
  ownerName: "Hybek",
  ownerTitle: "Owner/CEO",
};

export const WHATSAPP_LINK = `https://wa.me/${PLACEHOLDERS.whatsappNumber}?text=${encodeURIComponent(
  "Hi, I'd like a quote for an event.",
)}`;

export const navLinksLeft = [
  { label: "Menu", to: "/menu" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
];

export const navLinksRight = [
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
];

export const serviceItems = [
  {
    label: "Weddings",
    description: "Generous Nigerian spreads for your celebration, served buffet-style so every guest is looked after.",
    Icon: Heart,
    photoSlug: "gold-domes-spread",
    detailPlaceholder: "[What you include for weddings: setup, serving staff, and anything else guests can expect]",
    quoteLabel: "Quote for a wedding",
  },
  {
    label: "Corporate",
    description: "Hearty, well-presented food for team lunches, client events and company gatherings.",
    Icon: Briefcase,
    photoSlug: "buffet-line",
    detailPlaceholder: "[What you include for corporate events: drop-offs or full service, and the group sizes you handle]",
    quoteLabel: "Quote for corporate",
  },
  {
    label: "Private Parties",
    description: "Birthdays, anniversaries and house gatherings, with party favourites like suya, puff puff and small chops.",
    Icon: PartyPopper,
    photoSlug: "swallow-and-jollof",
    detailPlaceholder: "[What you include for private parties: trays, buffet setup, or full service]",
    quoteLabel: "Quote for a party",
  },
  {
    label: "Other Events",
    description: "Naming ceremonies, graduations, milestone celebrations and more. Tell us what you have in mind.",
    Icon: Cake,
    photoSlug: "plate-in-hand",
    detailPlaceholder: "[Other events you cater, and anything people should know before they ask]",
    quoteLabel: "Tell us about your event",
  },
];

export const menuCategories = ["Rice & Mains", "Soups & Swallows", "Grills", "Small Chops", "Sides"];

// Dish photos are picked up automatically by file name:
// drop src/assets/menu/dishes/<slug>.webp (4:3, about 800x600) and the card uses it.
// A dish with no photo gets a branded placeholder card.
const dishPhotos = import.meta.glob("../assets/menu/dishes/*.webp", {
  eager: true,
  import: "default",
});

const withPhoto = (dish) => ({
  ...dish,
  photo: dishPhotos[`../assets/menu/dishes/${dish.slug}.webp`] ?? null,
});

export const dishes = [
  // Rice & Mains
  {
    slug: "jollof-rice",
    name: "Jollof Rice",
    origin: "Nigerian",
    category: "Rice & Mains",
    description: "Fragrant long-grain rice cooked in a rich tomato and pepper sauce, seasoned to perfection with a subtle smoky finish.",
  },
  {
    slug: "shrimp-fried-rice",
    name: "Shrimp Fried Rice",
    origin: "Nigerian",
    category: "Rice & Mains",
    description: "Fluffy rice stir-fried with succulent shrimp, colourful vegetables and aromatic seasonings for a savoury, satisfying dish.",
  },
  {
    slug: "coconut-rice",
    name: "Coconut Rice",
    origin: "Nigerian",
    category: "Rice & Mains",
    description: "Fragrant rice cooked with creamy coconut and carefully balanced seasonings for a subtle tropical flavour.",
  },
  {
    slug: "asun-rice",
    name: "Asun Rice",
    origin: "Nigerian",
    category: "Rice & Mains",
    description: "Flavourful rice paired with smoky, peppered Asun for a satisfying blend of spice and richness.",
  },
  {
    slug: "waakye",
    name: "Waakye",
    origin: "Ghanaian",
    category: "Rice & Mains",
    description: "A hearty Ghanaian favourite of tender rice and beans, traditionally served with a variety of savoury sides and sauces.",
  },
  {
    slug: "ewa-agoyin",
    name: "Ewa Agoyin",
    origin: "Nigerian",
    category: "Rice & Mains",
    description: "Soft, tender beans topped with a rich, spicy pepper sauce for a classic Nigerian favourite.",
  },
  {
    slug: "yam-porridge",
    name: "Yam Porridge",
    origin: "Nigerian",
    category: "Rice & Mains",
    description: "Soft yam cooked in a rich, seasoned pepper sauce until tender and full of flavour.",
  },

  // Soups & Swallows
  {
    slug: "egusi-soup",
    name: "Egusi Soup",
    origin: "Nigerian",
    category: "Soups & Swallows",
    description: "A rich, savoury melon-seed soup cooked with peppers, leafy vegetables and assorted proteins.",
  },
  {
    slug: "efo-riro",
    name: "Efo Riro",
    origin: "Nigerian",
    category: "Soups & Swallows",
    description: "A flavourful Nigerian vegetable stew made with leafy greens, peppers, palm oil and assorted proteins.",
  },
  {
    slug: "pounded-yam",
    name: "Pounded Yam",
    origin: "Nigerian",
    category: "Soups & Swallows",
    description: "Smooth, soft pounded yam, perfect for pairing with your favourite Nigerian soups.",
  },
  {
    slug: "catfish-pepper-soup",
    name: "Catfish Pepper Soup",
    origin: "Nigerian",
    category: "Soups & Swallows",
    description: "Tender catfish simmered in a fragrant, peppery broth infused with traditional Nigerian spices.",
  },

  // Grills
  {
    slug: "suya",
    name: "Suya",
    origin: "Nigerian",
    category: "Grills",
    description: "Tender grilled meat coated in a signature blend of spicy, nutty suya seasoning.",
  },
  {
    slug: "grilled-chicken",
    name: "Grilled Chicken",
    origin: "Nigerian",
    category: "Grills",
    description: "Juicy chicken seasoned with aromatic spices and grilled for a deliciously smoky finish.",
  },
  {
    slug: "peppered-turkey",
    name: "Peppered Turkey",
    origin: "Nigerian",
    category: "Grills",
    description: "Tender turkey pieces tossed in a rich, spicy pepper sauce with a satisfying kick.",
  },
  {
    slug: "asun",
    name: "Asun",
    origin: "Nigerian",
    category: "Grills",
    description: "Smoky, tender pieces of goat meat tossed with peppers and spices for a bold, spicy finish.",
  },

  // Small Chops
  {
    slug: "puff-puff",
    name: "Puff Puff",
    origin: "Nigerian",
    category: "Small Chops",
    description: "Light, fluffy balls of sweet fried dough with a golden, gently crisp exterior.",
  },
  {
    slug: "spring-roll",
    name: "Spring Roll",
    origin: "Nigerian",
    category: "Small Chops",
    description: "Crisp pastry rolls filled with a savoury vegetable filling and fried until golden.",
  },
  {
    slug: "fish-roll",
    name: "Fish Roll",
    origin: "Nigerian",
    category: "Small Chops",
    description: "Golden, crispy pastry filled with seasoned fish for a savoury snack that's satisfying from the first bite.",
  },
  {
    slug: "peppered-snail",
    name: "Peppered Snail",
    origin: "Nigerian",
    category: "Small Chops",
    description: "Tender snails tossed in a bold, spicy pepper sauce for a deliciously satisfying bite.",
  },

  // Sides
  {
    slug: "plantain",
    name: "Plantain",
    origin: "Nigerian",
    category: "Sides",
    description: "Sweet, golden plantain slices fried until beautifully caramelized on the outside and tender inside.",
  },
  {
    slug: "shrimp-sauce",
    name: "Shrimp Sauce",
    origin: "Nigerian",
    category: "Sides",
    description: "Succulent shrimp cooked in a savoury, well-seasoned sauce that pairs beautifully with your favourite sides.",
  },
  {
    slug: "moi-moi",
    name: "Moi-Moi",
    origin: "Nigerian",
    category: "Sides",
    description: "Soft, savoury steamed bean pudding blended with peppers, onions and aromatic spices.",
  },
].map(withPhoto);

// Gallery photos are picked up by file name from src/assets/gallery/<slug>.webp.
// Add a photo, then add its slug and alt text here. Entries without a file are skipped.
const galleryFiles = import.meta.glob("../assets/gallery/*.webp", {
  eager: true,
  import: "default",
});

export const galleryItems = [
  { slug: "buffet-line", alt: "Buffet line of jollof rice and soups under gold and black serving domes" },
  { slug: "gold-domes-spread", alt: "Gold serving domes with bread, plantain and moi-moi" },
  { slug: "owner-at-domes", alt: "Setting up a buffet of gold and black serving domes" },
  { slug: "stew-station-team", alt: "The team ladling stew at a live station" },
  { slug: "fish-and-yam", alt: "Grilled fish with fried yam and pepper sauce on a gold-rimmed plate" },
  { slug: "fbh-domes", alt: "Black marble serving domes with the FBH emblem" },
  { slug: "serving-suya", alt: "Serving suya at an event, with gold chafing dishes lined up behind" },
  { slug: "swallow-and-jollof", alt: "Guest taking swallow from a buffet of jollof and gold serving domes" },
  { slug: "speaking-banners", alt: "Speaking at an event in front of branded banners" },
  { slug: "plate-in-hand", alt: "A plate of small chops and meat being served at the buffet" },
  { slug: "at-the-pot", alt: "Serving food from pots at a live station" },
  { slug: "logo-detail", alt: "The FBH logo engraved on a black marble serving dome" },
]
  .map((item) => ({ ...item, photo: galleryFiles[`../assets/gallery/${item.slug}.webp`] ?? null }))
  .filter((item) => item.photo);

// Look up a gallery photo (and its alt text) by slug, for banners and strips on other pages
export const getGalleryItem = (slug) => galleryItems.find((item) => item.slug === slug);

export const eventTypes = ["Wedding", "Corporate", "Private party", "Other"];

// ---------------------------------------------------------------------------
// Events page
// ---------------------------------------------------------------------------

// Replace "#" with the link to her ticketing site. Every "Get Tickets" button uses it
// unless an event has its own ticketUrl.
export const TICKETS_URL = "#";

export const featuredEvent = {
  name: "[Event name]",
  date: "[Day, Month DD, YYYY]",
  time: "[Start - end time]",
  venue: "[Venue, Edmonton, AB]",
  description: "[Two sentences on what guests can expect: the food, the setting and the atmosphere]",
  priceNote: "From [ticket price]",
  photoSlug: "serving-suya",
  ticketUrl: TICKETS_URL,
};

export const upcomingEvents = [
  { id: "event-one", month: "[MON]", day: "[DD]", title: "[Event name]", details: "[Venue, Edmonton, AB] · [Start time]", ticketUrl: TICKETS_URL },
  { id: "event-two", month: "[MON]", day: "[DD]", title: "[Event name]", details: "[Venue, Edmonton, AB] · [Start time]", ticketUrl: TICKETS_URL },
  { id: "event-three", month: "[MON]", day: "[DD]", title: "[Event name]", details: "[Venue, Edmonton, AB] · [Start time]", ticketUrl: TICKETS_URL },
];

// "What happens next" steps shown beside the quote form
export const quoteSteps = [
  { title: "Send your details", text: "Tell us the date, your guest count and the dishes you have in mind." },
  { title: "Get your custom quote", text: "[How soon you reply, e.g. within 24 hours]. The quote is built around your guest count and menu." },
  { title: "Confirm your date", text: "[How a booking is secured, e.g. a deposit or a tasting]. Then we handle the food." },
];
