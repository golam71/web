# Astro Starter Kit: Minimal

```
git clone https://github.com/Salam-Labs/web
cd web
pnpm install
pnpm run start
```




## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public
│  ├── All images are here ()
├── src
   ├── components
   │   ├── Card.astro
   │   ├── Features.astro
   │   ├── Footer.astro
   │   ├── Hero.astro
   │   ├── Stats.astro
   │   └── WordBubble.astro
   ├── elements
   │   ├── Button.astro
   │   ├── CompassCircle.astro
   │   ├── CompassNeedle.astro
   │   ├── IconButton.astro
   │   └── Kaaba.astro
   ├── layouts
   │   └── Layout.astro
   ├── pages
   │   ├── 404.astro
   │   ├── gallery.astro
   │   ├── index.astro
   │   └── team.astro
   └── solid
       ├── Modal.jsx
       ├── Navbar.jsx
       └── Testimonials.jsx
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, are placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Read the docs [our documentation](https://docs.astro.build) 
