# FOODBYHYBEK

Single-page catering site. React + Vite + Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Where to edit

- `src/data/siteContent.js`: phone, WhatsApp number (digits only, with country code), address, socials, name, nav links, services and the dish list. Anything in [square brackets] is a note to the client.
- `src/components/sections/`: one file per page section.
- `src/components/layout/`: nav, footer, floating WhatsApp button.
- `src/components/ui/`: shared pieces (buttons, headings, reveal animation, photo placeholder, logo).
- `src/styles/tokens.js`: the shared colour and font class strings.
- Dish photos: drop `src/assets/menu/dishes/<slug>.webp` (4:3, about 800x600). The slug is the dish's `slug` in `siteContent.js`; the card picks the photo up automatically.
- Gallery: add `src/assets/gallery/<slug>.webp` (3:2), then add its slug and alt text to `galleryItems` in `siteContent.js`.
- Photo blocks are `PhotoPlaceholder` components. Swap each for an `<img>` once photos arrive.

## Still to do

- Wire the quote form's `handleSubmit` to a backend that emails order@foodbyhybek.com.
- Replace the text logo (`Logo` component) with the real logo file.
