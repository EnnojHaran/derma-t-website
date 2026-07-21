# Derma-T Website

The website for **Derma-T**, a student-led nonprofit advancing skin health,
dermatology education, and community wellness. Built with **React 18**,
**Vite**, and **React Router**.

## Tech stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) — dev server & build tool
- [React Router](https://reactrouter.com/) — client-side routing

## Getting started

Requires [Node.js](https://nodejs.org/) 18+.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# create a production build in dist/
npm run build

# preview the production build locally
npm run preview
```

## Project structure

```
index.html            # Vite entry HTML
public/               # static assets served as-is (favicon)
src/
  main.jsx            # app bootstrap + router provider
  App.jsx             # route definitions + layout shell
  index.css           # global styles (aqua & teal theme)
  assets/             # bundled assets (logo)
  data/content.js     # site copy: benefits, stats, roles, facts, etc.
  components/         # Navbar, Footer, PageHero, ScrollToTop
  pages/              # Home, About, Activities, Team, Facts, Contact
```

## Editing content

Most page copy (benefits, statistics, team roles, activities, fun facts, and the
contact form's role options) lives in [`src/data/content.js`](src/data/content.js).
Edit that file to update text without touching component markup.

## Routes

| Path          | Page       |
| ------------- | ---------- |
| `/`           | Home       |
| `/about`      | About      |
| `/activities` | Activities |
| `/team`       | Team       |
| `/facts`      | Fun Facts  |
| `/contact`    | Get Involved / Contact |
