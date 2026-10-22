# Hassan Rana — personal website

The personal portfolio and research site of **Muhammad Hassan Rana**, MSc Data Science student at the
University of Debrecen. Built with **React 19, Vite, TypeScript and Tailwind CSS v4**, with icons from
**Lucide**. It is a static site: no server, no database, no secrets.

---

## 1. What you need (one-time setup)

1. **Node.js 20.19 or newer** (version 22 recommended). Download the "LTS" installer from
   <https://nodejs.org> and install it. This also installs `npm`, the tool that downloads the site's
   building blocks.
2. A code editor — **Visual Studio Code** (<https://code.visualstudio.com>) is free and easy.
3. A free **GitHub** account (<https://github.com>) for hosting the code.

To check Node is installed, open a terminal (on Windows: *PowerShell*) and run:

```bash
node -v   # should print v20.19 or higher
```

## 2. Run the site on your computer

Open a terminal **inside the project folder** (in VS Code: *Terminal → New Terminal*) and run:

```bash
npm install      # downloads dependencies — only needed the first time
npm run dev      # starts a local preview
```

Open the address it prints (usually <http://localhost:5173>). The page refreshes automatically
whenever you save a file. Press `Ctrl + C` in the terminal to stop it.

| Command             | What it does                                                |
| ------------------- | ----------------------------------------------------------- |
| `npm run dev`       | Local preview with live reload                              |
| `npm run build`     | Checks the code for errors, then builds the final site into `dist/` |
| `npm run preview`   | Serves the built `dist/` folder so you can check it         |
| `npm run typecheck` | Only checks the code for type errors                        |

## 3. Editing your content

You almost never need to touch the design code. **All text lives in `src/data/`:**

| File                     | What's in it                                                              |
| ------------------------ | ------------------------------------------------------------------------- |
| `src/data/site.ts`       | Name, headline, intro, photo, email, LinkedIn, GitHub, CV path, menu      |
| `src/data/projects.ts`   | Project cards                                                             |
| `src/data/research.ts`   | Research interests, thesis, papers, experiments, technical notes         |
| `src/data/experience.ts` | Work, research and leadership entries                                     |
| `src/data/education.ts`  | Degrees, courses, scholarships and awards                                 |
| `src/data/skills.ts`     | Skill groups and the "Beyond technology" interests                        |

The About story is written directly in `src/components/sections/About.tsx` — edit the paragraphs there.

Tips:
- Text goes between quotes: `'like this'`. If your text contains an apostrophe, use a curly one (`’`)
  or wrap the text in double quotes.
- `null` means "not set yet". Links set to `null` show **"coming soon"** instead of a broken link;
  LinkedIn/GitHub set to `null` are simply hidden.
- If you make a typo, `npm run dev` shows a red error message pointing to the line.

### Honesty markers (built in)
- **`status: 'placeholder'`** → card shows *"Placeholder · details to confirm"* with a dashed border.
- **`verified: false`** on an outcome → shows an *"Unverified"* tag. Set `verified: true` only for results
  you can back up.
- **Thesis areas** with `state: 'proposed'` are shown as proposed. Change to `'confirmed'` once agreed.
- **`needsDetails: true`** on an experience entry → shows *"Details to add"*.
- **Papers** list is empty on purpose. Add only real or clearly labelled `in-preparation` work —
  there is a commented example in `research.ts`.

### Add your LinkedIn and GitHub
In `src/data/site.ts`:
```ts
linkedin: 'https://www.linkedin.com/in/your-handle/',
github: 'https://github.com/your-username',
```

### Add a profile photo
1. Save a photo (JPG or WebP, about 800×960 px, under 300 KB) as `public/images/profile.jpg`.
2. In `src/data/site.ts` change `photo: null` to:
   ```ts
   photo: { src: '/images/profile.jpg', alt: 'Portrait of Muhammad Hassan Rana' },
   ```
Without a photo, the "HR" monogram is shown instead.

### Update your CV
Replace `public/cv/Muhammad_Hassan_Rana_CV.pdf` with your new PDF, keeping the same file name
(or change `cv:` in `site.ts`).

### Add project screenshots
Put images in `public/images/projects/` and add to the project in `projects.ts`:
```ts
image: { src: '/images/projects/nlp-pipeline.png', alt: 'Diagram of the multi-agent pipeline' },
```
Project images load lazily (only when scrolled into view).

### Change colours or fonts
Edit the `@theme` block at the top of `src/index.css`. The lime accent is `--color-lime`.

## 4. Folder structure

```
hassan-rana-site/
├── index.html              Page title, description, social-preview tags, fonts
├── vite.config.ts          Build setup; also writes sitemap.xml and robots.txt
├── netlify.toml            Netlify settings
├── public/                 Files copied as-is to the site
│   ├── cv/                 Your CV (PDF)
│   ├── images/             Profile photo, project images
│   ├── favicon.svg, apple-touch-icon.png, og-image.png
│   ├── 404.html            "Page not found" page
│   └── _headers            Security & caching headers (Netlify + Cloudflare)
└── src/
    ├── data/               ← ALL CONTENT (edit these)
    ├── components/
    │   ├── layout/         Navbar, Footer, Monogram
    │   ├── sections/       One file per homepage section
    │   └── ui/             Small reusable pieces (badges, links, section wrapper)
    ├── hooks/              Active-section tracking for the navbar
    ├── App.tsx             Section order
    ├── main.tsx            Entry point
    └── index.css           Colours, fonts, animations
```

## 5. Deploying for free

First put the project on GitHub: create a new repository on github.com, then upload the folder
(drag-and-drop works, or use GitHub Desktop). Don't upload `node_modules` or `dist` — `.gitignore`
already excludes them.

### Option A — Netlify (recommended)
1. Sign in at <https://app.netlify.com> with GitHub.
2. *Add new site → Import an existing project →* choose your repository.
3. Netlify reads `netlify.toml`, so the settings fill in automatically
   (build command `npm run build`, publish directory `dist`). Click **Deploy**.
4. Your site is live at `https://<name>.netlify.app`. Rename it under *Site configuration → Change site name*.

Netlify passes its own address to the build, so the sitemap and social previews work automatically.
If you add a custom domain, set **`SITE_URL`** (e.g. `https://hassanrana.com`) under
*Site configuration → Environment variables* and redeploy.

### Option B — Cloudflare Pages
1. Sign in at <https://dash.cloudflare.com> → *Workers & Pages → Create → Pages → Connect to Git*.
2. Pick the repository and set:
   - Framework preset: **Vite** (or None)
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Under *Environment variables* add `NODE_VERSION = 22` and `SITE_URL = https://<project>.pages.dev`.
4. Deploy.

Every time you push a change to GitHub, the site rebuilds and updates itself.

### Environment variables
Only one, and it is **not secret**: `SITE_URL`, the public address of the site (see `.env.example`).
If it isn't set (and you're not on Netlify), the build prints a warning and uses `https://example.com`
in the sitemap and social tags — set it before sharing your link.

## 6. Adding a contact form (optional)
The site uses an email link (`mailto:`) and a "copy email" button — nothing pretends to send a message.
For a real form later:
- **Netlify Forms** (free tier): add a `<form name="contact" method="POST" data-netlify="true">` with a
  hidden `<input type="hidden" name="form-name" value="contact">`, deploy on Netlify, and submissions
  appear in your Netlify dashboard. Also add a matching hidden form to `index.html` so Netlify detects it.
- **Formspree** (<https://formspree.io>): create a form, then set the form's `action` to the URL it gives
  you. The form ID is public by design — never put API keys or passwords in frontend code.

## 7. Adding project and research pages
Every project has a `slug` (e.g. `nlp-multi-agent-synthesizer`), ready for pages like `/projects/<slug>`:
1. `npm install react-router-dom`
2. Move the section list from `App.tsx` into `src/pages/Home.tsx`.
3. Create `src/pages/ProjectPage.tsx` that finds the project by slug in `src/data/projects.ts`.
4. Set up routes in `App.tsx` (`/` → Home, `/projects/:slug` → ProjectPage, `*` → a NotFound page).
5. Add a redirect so the host serves `index.html` for those paths — for Netlify add to `netlify.toml`:
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```
   (Cloudflare Pages does this automatically if you delete `public/404.html`.)
6. Add the new URLs to the sitemap in `vite.config.ts`.

## 8. Accessibility & performance notes
- Semantic sections and headings, "skip to main content" link, visible lime focus outlines,
  full keyboard support (mobile menu closes with `Esc`).
- Animations switch off for visitors who enable "reduce motion" in their system settings.
- Text colours meet WCAG AA contrast on the dark background.
- Only three runtime dependencies (React, React DOM, Lucide icons); images are lazy-loaded.
