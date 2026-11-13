# FlowAutomation — React landing page

A simplified, responsive landing page built with React + Vite. The seven services and their outcomes are taken from the supplied Astro component. The GitHub repository could not be accessed during implementation, so this is a new interpretation of that component, not a verified reproduction of the full original frontend.

## Run locally

Requires Node.js 22.12+ and npm.

```sh
npm ci
npm run dev
```

## Configure contacts

Edit `src/config.js` with your real email, Telegram username, and international WhatsApp phone number. Empty channels are hidden. Before contacts are configured, the page offers a copyable project brief and says contact channels are coming soon. No fake links or nonfunctional form is included.

Service text is in `src/services.js`; layout is in `src/main.jsx`; styling is in `src/styles.css`.

## Deploy on GitHub Pages

1. Put the **contents of this folder** at the root of a new GitHub repository, including `.github/workflows/deploy.yml` and `package-lock.json`.
2. Open Settings → Pages → Build and deployment → Source → **GitHub Actions**.
3. Push to `main`, or run the deployment workflow manually from Actions.
4. Open the URL shown in the successful deployment. GitHub Pages normally publishes publicly; check your repository/account settings.

`base: './'` supports repository subpaths, and hash links do not need a routing fallback. This is a static site: no server, database, secrets, or backend required.

If adding this as a subfolder of an existing repository, update the workflow working directory, npm cache dependency path, and artifact path accordingly.

## Build

```sh
npm run build
npm run preview
```

The production output is `dist/`. Google Fonts is optional; system font fallbacks are included. All graphics are CSS and ship with the project. No original repository assets were copied.
