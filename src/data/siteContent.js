import { Briefcase, Cake, Heart, PartyPopper } from "lucide-react";

/**
 * All the client's details live here. Anything in [square brackets]
 * is a note for the client to replace with her own words.
 */
export const PLACEHOLDERS = {
  businessName: "FOODBYHYBEK",
  phoneDisplay: "[Your phone number]",
  phoneHref: "tel:+10000000000", // replace with the real number
  whatsappNumber: "10000000000", // digits only, with country code
  email: "order@foodbyhybek.com",
  address: "[Your address in Edmonton, AB]",
  instagramUrl: "#", // replace with the real link
  facebookUrl: "#", // replace with the real link
  instagramHandle: "@[your handle]",
  ownerName: "[Your name]",
  ownerTitle: "[Your title]",
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
    description: "[A line about your wedding catering]",
    Icon: Heart,
  },
  {
    label: "Corporate",
    description: "[A line about your corporate catering]",
    Icon: Briefcase,
  },
  {
    label: "Private Parties",
    description: "[A line about your private party catering]",
    Icon: PartyPopper,
  },
  {
    label: "Other Events",
    description: "[Other events you cater]",
    Icon: Cake,
  },
];

export const menuCategories = [
  "Rice & Mains",
  "Soups & Swallows",
  "Grills & Small Chops",
  "Sides & Drinks",
];

// Sample dish names only. Replace with the real menu.
export const dishes = [
  { name: "Jollof Rice", origin: "Nigerian", category: "Rice & Mains" },
  { name: "Fried Rice", origin: "Nigerian", category: "Rice & Mains" },
  { name: "Waakye", origin: "Ghanaian", category: "Rice & Mains" },
  { name: "Egusi Soup", origin: "Nigerian", category: "Soups & Swallows" },
  { name: "Pounded Yam", origin: "Nigerian", category: "Soups & Swallows" },
  { name: "Banku & Tilapia", origin: "Ghanaian", category: "Soups & Swallows" },
  { name: "Suya", origin: "Nigerian", category: "Grills & Small Chops" },
  { name: "Kelewele", origin: "Ghanaian", category: "Grills & Small Chops" },
  { name: "Puff Puff", origin: "Nigerian", category: "Grills & Small Chops" },
  { name: "Fried Plantain", origin: "Nigerian", category: "Sides & Drinks" },
  { name: "Chin Chin", origin: "Nigerian", category: "Sides & Drinks" },
  { name: "Zobo", origin: "Nigerian", category: "Sides & Drinks" },
];

export const eventTypes = ["Wedding", "Corporate", "Private party", "Other"];
