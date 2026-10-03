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
  { label: "Welcome", href: "#welcome" },
  { label: "Story", href: "#story" },
  { label: "Services", href: "#services" },
];

export const navLinksRight = [
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
];

export const serviceItems = [
  {
    label: "Weddings",
    description: "Generous Nigerian spreads for your celebration, served buffet-style so every guest is looked after.",
    Icon: Heart,
  },
  {
    label: "Corporate",
    description: "Hearty, well-presented food for team lunches, client events and company gatherings.",
    Icon: Briefcase,
  },
  {
    label: "Private Parties",
    description: "Birthdays, anniversaries and house gatherings, with party favourites like suya, puff puff and small chops.",
    Icon: PartyPopper,
  },
  {
    label: "Other Events",
    description: "Naming ceremonies, graduations, milestone celebrations and more. Tell us what you have in mind.",
    Icon: Cake,
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
    slug: "semolina",
    name: "Semolina",
    origin: "Nigerian",
    category: "Soups & Swallows",
    description: "Smooth, soft semolina swallow, perfect for pairing with your favourite Nigerian soups.",
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

export const eventTypes = ["Wedding", "Corporate", "Private party", "Other"];
