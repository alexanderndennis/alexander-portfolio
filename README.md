# Alexander Dennis — Portfolio

Personal portfolio site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages at [nyamieh.com](https://nyamieh.com).

## Run locally

Requires Node.js 22.23.4 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## Editing content

All content lives in `src/data/`. Search for `TODO` to find every placeholder.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Domain, name, role, tagline, bio, skills, email, social links |
| `src/data/projects.ts` | Project cards |
| `src/data/experience.ts` | Work/education timeline |
| `public/cv.pdf` | Your CV (add this file, or set `cvPath: null` in `site.ts`) |
| `public/og.png` | Image shown when the link is shared (1200×630) |
| `public/favicon.svg` | Browser tab icon |

## Deploying with a custom domain

Pushing to `main` builds and deploys the site via `.github/workflows/deploy.yml`.

One-time setup:

1. **Set your domain in code** — change `url` in `src/data/site.ts` to `https://yourdomain.com`.
2. **Enable Pages** — on GitHub: *Settings → Pages → Build and deployment → Source: GitHub Actions*.
3. **Add the domain on GitHub** — *Settings → Pages → Custom domain*, enter your domain and save.
4. **Point DNS at GitHub** at your domain registrar:
   - Apex domain (`yourdomain.com`) — four `A` records to
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (optionally `AAAA` records to `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`).
   - `www` subdomain — a `CNAME` record to `alexanderndennis.github.io`.
5. **Turn on HTTPS** — once DNS has propagated (minutes to a few hours), tick *Enforce HTTPS* in *Settings → Pages*.
6. *(Recommended)* **Verify the domain** under your GitHub account's *Settings → Pages* to stop anyone else claiming it.

> With the GitHub Actions deploy method, the custom domain is configured in repository settings — no `CNAME` file is needed.
