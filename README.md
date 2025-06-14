# TicketAi Users Frontend

This is the user-facing frontend for TicketAi, built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/). The app is deployed using [Firebase Hosting](https://firebase.google.com/docs/hosting).

## Project Structure

```
.
├── .firebaserc
├── .github/
│   └── workflows/
│       ├── firebase-hosting-merge.yml
│       └── firebase-hosting-pull-request.yml
├── .gitignore
├── firebase.json
├── index.html
├── package.json
├── public/
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── App.test.js
│   ├── index.css
│   ├── index.jsx
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── vite.config.mjs
└── README.md
```

## Available Scripts

### Start the Development Server

```sh
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### Build for Production

```sh
npm run build
```
Builds the app for production to the `dist` folder (used by Vite).  
**Note:** Firebase is configured to serve from the `build` folder. You may need to adjust the `firebase.json` or Vite config if deploying.

### Run Tests

```sh
npm test
```
Launches the test runner in interactive watch mode.

## Tooling

- **React** for UI development
- **Vite** for fast development and build
- **Tailwind CSS** for utility-first styling
- **Firebase Hosting** for deployment
- **Jest** and **Testing Library** for testing

## Deployment

Deployment is automated via GitHub Actions:
- On pull requests: Preview deploys to Firebase Hosting.
- On merge to `main`: Deploys to the live channel.

See [`.github/workflows/`](.github/workflows/) for workflow details.

## Learn More

- [React documentation](https://react.dev/)
- [Vite documentation](https://vitejs.dev/guide/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs/)
