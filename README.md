# asianhornet.com — Astro + Decap + Cloudflare starter

Goal: publish a fast, cheap, portable site now, then add a sightings DB later.

## Quick start
1. Install Node 18 or higher.
2. `npm install`
3. `npm run dev` then open http://localhost:4321
4. Visit `/admin` for the CMS in local mode.

## Deploy on Cloudflare Pages
1. Push this repo to GitHub.
2. In Cloudflare Pages, create a new project from the repo.
3. Build command: `npm run build` • Build output: `dist` • Node 18.
4. Connect your domain once DNS is on Cloudflare.
5. Turn on Cloudflare Web Analytics if you prefer to avoid Plausible.

## CMS notes (Decap)
- `public/admin/config.yml` uses the GitHub backend.
- Create a GitHub OAuth app, add the callback to your domain, and set the env vars in Cloudflare if you want live editing.
- Local editing works out of the box.

## Forms now vs later
- The report form is a placeholder. You have three options:
  - Use a simple relay service for email submissions.
  - Use Cloudflare Workers or Pages Functions for a custom endpoint.
  - Add Supabase for storage, auth, and file uploads when volume warrants it.

## Newsletter
- Add your Buttondown subscribe link to the home page once created.

## Plausible
- Replace the data-domain attribute in `Base.astro` once DNS is live.

## Why no map yet
- Maps attract spam and false reports. Publish first. Add data once you have moderation capacity.
- 

