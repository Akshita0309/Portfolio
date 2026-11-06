# Akshita Nagdali — Developer Portfolio

A modern, responsive personal developer portfolio built with React, Vite and
Tailwind CSS. It presents a BTech Computer Science background, technical
skills, projects, certifications, and learning profiles, with a dark/light
theme, sticky navigation, and a project detail page powered by React Router.

## Features

- Sticky navbar that shrinks on scroll, with a mobile hamburger menu
- Dark and light themes with a toggle, persisted to `localStorage`
- Hero, About, Skills, Experience, Projects, Certifications, Learning &
  Profiles, Education, and Contact sections
- A dedicated project detail page at `/projects/:slug` (React Router)
- A contact form with client-side validation (no backend wired up yet —
  see [Wiring up the contact form](#wiring-up-the-contact-form))
- All content driven from a single data file — no need to touch component
  code to update your information
- Subtle, `prefers-reduced-motion`-aware scroll reveal and hover animations
- Semantic HTML, visible keyboard focus states, and basic SEO/Open Graph tags

## Tech stack

- **Frontend:** React 19, React Router, Vite
- **Styling:** Tailwind CSS v4, CSS custom properties for theming
- **Icons:** lucide-react
- **Fonts:** Space Grotesk, Inter, JetBrains Mono (self-hosted via Fontsource)

## Folder structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   └── RESUME_README.txt      # instructions for adding your resume.pdf
├── src/
│   ├── components/            # reusable, presentational components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Certifications.jsx
│   │   ├── Profiles.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Reveal.jsx          # scroll-reveal wrapper
│   ├── pages/
│   │   ├── Home.jsx            # assembles all sections
│   │   └── ProjectDetail.jsx   # /projects/:slug
│   ├── data/
│   │   └── profile.js          # <-- all your content lives here
│   ├── hooks/
│   │   └── useTheme.js
│   ├── utils/
│   │   └── slug.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # design tokens + global styles
├── index.html                  # page title, meta description, OG tags
├── vite.config.js
└── package.json
```

## Installation

Requires Node.js 18+ and npm.

```bash
npm install
```

## Building for production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## Deployment

The build output in `dist/` is a static site and can be deployed to any
static host:

- **Vercel / Netlify:** connect the repository, set the build command to
  `npm run build` and the output directory to `dist`.
- **GitHub Pages:** run `npm run build`, then publish the contents of
  `dist/` to your `gh-pages` branch (or use an action such as
  `peaceiris/actions-gh-pages`).
- **Any static host (S3, Nginx, etc.):** upload the contents of `dist/`.

Because this uses React Router with real (non-hash) URLs like
`/projects/justeat-food-delivery-application`, make sure your host is
configured with an SPA fallback (all unknown routes serve `index.html`) —
most static hosts have a one-line setting for this (e.g. a `_redirects`
file on Netlify with `/* /index.html 200`, or "SPA/rewrite" mode elsewhere).

## Updating your information

Almost everything on the site comes from **`src/data/profile.js`**. You
generally shouldn't need to edit component files for content changes.

### Basic info, social links, resume

Edit the top-level fields in `profile`:

```js
export const profile = {
  name: "Akshita Nagdali",
  email: "YOUR_EMAIL@example.com",
  social: {
    linkedin: "https://linkedin.com/in/...",
    github: "https://github.com/...",
    trailhead: "https://trailblazer.me/id/...",
  },
  resumeUrl: "/resume.pdf",
  // ...
};
```

To make the resume buttons work, add your PDF at `public/resume.pdf`
(see `public/RESUME_README.txt`).

### Adding a project

Add an object to the `projects` array in `profile.js`:

```js
{
  name: "Your Project Name",
  description: "One or two sentences about the project.",
  technologies: ["React", "Node.js"],
  features: ["Feature one", "Feature two"],
  githubUrl: "https://github.com/you/your-repo", // or leave as "YOUR_GITHUB_URL"
  featured: false,
}
```

Each project automatically gets a card on the Projects section and its own
detail page at `/projects/<slugified-name>`. Leaving `githubUrl` as a
`YOUR_GITHUB_URL` placeholder disables the Code button instead of linking nowhere.

### Adding a certification

Add an object to the `certifications` array:

```js
{
  name: "Certification Name",
  issuer: "Issuing Organization",
  date: "Jan 2026",
  credentialId: "ABC123",
  certificateUrl: "https://...",
  verifyUrl: "https://...",
}
```

Leave any field as a `YOUR_...` placeholder if you don't have it yet — the
UI hides the corresponding button/value gracefully.

### Adding a learning/professional profile

Add an object to the `learningProfiles` array — this is what powers the
"Learning & Profiles" section (LinkedIn, GitHub, Trailhead, and easily
LeetCode, HackerRank, GeeksforGeeks, Credly, Coursera, Udemy, Microsoft
Learn, Kaggle, etc.):

```js
{
  platform: "LeetCode",
  description: "Data structures and algorithm practice.",
  username: "YOUR_LEETCODE_USERNAME",
  url: "https://leetcode.com/YOUR_LEETCODE_USERNAME",
  buttonLabel: "View LeetCode",
  achievement: null, // or a short string like "Top 5%"
}
```

### Changing social links

Update `profile.social` and `profile.email` in `profile.js` — the navbar,
hero, footer, and contact section all read from these same values.

### Skills, experience, and education

These follow the same pattern — edit the `skills`, `experience`, and
`education` arrays/objects in `profile.js`. Each entry maps directly to a
card or timeline item; no component changes are required.

## Wiring up the contact form

The contact form (`src/components/Contact.jsx`) validates input and shows
a success state, but does not send anything yet — no backend email service
is included by default. To make it functional, pick one of:

- **Formspree / Getform / Basin** — point the form's `onSubmit` at their
  API endpoint instead of the local `setSubmitted(true)` call.
- **EmailJS** — call their client-side SDK with your service/template IDs
  (keep IDs in environment variables, never commit real keys).
- **Your own API route** — `fetch()` a POST request to an endpoint you
  control.

Whichever you choose, keep any API keys in environment variables (see
`.env.local`, which is git-ignored) and never commit them to the
repository.

## Accessibility & performance notes

- All interactive elements have visible focus states and appropriate
  `aria-*` attributes.
- Animations respect `prefers-reduced-motion`.
- Fonts are self-hosted (no external font requests at runtime).
- Placeholder values are used instead of invented personal data — replace
  every `YOUR_...` value in `src/data/profile.js` before deploying.

## Git

This project is set up as a git repository with an initial commit. To push
it to your own remote:

```bash
git remote add origin <your-repo-url>
git push -u origin main
```
