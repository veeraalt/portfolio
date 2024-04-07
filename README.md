# Portfolio web app

The app is hosted on GitHub Pages on: https://veeraalt.github.io/portfolio/.

The app consists of Node.js backend and React frontend that uses TypeScript.

## Getting started

You can run this app locally by following these steps:

1. Clone this repository

2. Start the server / backend

- Navigate to the `/server` folder
- Run `npm install` to install the dependencies
- Run `npm start` or `npm run dev` (hot reload) to start the server in `localhost:3001` in the browser

3. Start the client / frontend

- Navigate to the `/client` folder
- Run `npm install` to install the dependencies
- Run `npm start` to start the app in `localhost:3000` in the browser

4. Navigate to `localhost:3000` to view the app

## Styling

Pure CSS is mostly used for styling.

[Material UI](https://mui.com/) is also used to ensure the accessibility of more complex components, such as a language selection menu.

## Deployment

A new deployment to Github Pages can be created by running the following command:

`npm run deploy`

The deployment is made based on the `main` branch so make sure you have merged the code there.
