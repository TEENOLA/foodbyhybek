# FOODBYHYBEK

Multi-page catering site. React + Vite + Tailwind CSS v4 + React Router.

Pages: Home (`/`), Menu (`/menu`), Services (`/services`), Gallery (`/gallery`), About (`/about`), Events (`/events`), Request a Quote (`/quote`).

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Where to edit

- `src/data/siteContent.js`: phone, WhatsApp number (digits only, with country code), address, socials, name, nav links, services, the dish list, gallery photos and the events. Anything in [square brackets] is a note to the client.
- `src/pages/`: one file per page. Each page is a stack of sections, so reorder or remove sections here.
- `src/components/sections/`: the sections the pages are built from.
- `src/components/layout/`: layout, nav, footer, floating WhatsApp button.
- `src/components/ui/`: shared pieces (buttons, banner, headings, reveal animation, logo, dish card).
- `src/styles/tokens.js`: the shared colour and font class strings.

## Events and the ticketing link

In `siteContent.js`:

- `TICKETS_URL`: set this to the link for her ticketing site. Every "Get Tickets" button uses it and opens it in a new tab.
- `featuredEvent`: the big "Next event" banner.
- `upcomingEvents`: the rows underneath. Add or remove rows. Give a row its own `ticketUrl` if an event has a separate ticket page.

## Photos

- Dish photos: drop `src/assets/menu/dishes/<slug>.webp` (4:3, about 800x600). The slug is the dish's `slug` in `siteContent.js`; the card picks the photo up automatically.
- Gallery: add `src/assets/gallery/<slug>.webp` (3:2), then add its slug and alt text to `galleryItems`. The same slugs are used for page banners and photo strips (`getGalleryItem("slug")`).

## Deploying

Every page is a route handled in the browser, so the host must send all paths to `index.html`.

- Vercel: `vercel.json` already does this.
- Netlify: `public/_redirects` already does this.
- Other hosts: add a rewrite of `/*` to `/index.html`.

## Still to do

- Wire the quote form's `handleSubmit` (`src/components/sections/QuoteForm.jsx`) to a backend that emails order@foodbyhybek.com.
- Replace the [bracketed] copy with her own words, and add her real address.
- Set `TICKETS_URL` and fill in the events.
