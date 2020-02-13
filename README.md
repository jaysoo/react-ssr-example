# React + Nx SSR Example

This workspace contains a couple of webapps that provides SSR and styled-components:

1. Plain React + express app
2. Next.js app

To get started, clone the repo and install dependencies.

```
git clone https://github.com/jaysoo/react-ssr-example.git react-ssr-example
cd react-ssr-example
yarn install
```

## Plain React + express server

Then run the dev server:

```
yarn nx run server:serve-all
```

### Build for production

Run the prod build script:

```
yarn nx run server:build-all
```

Which will generate a compiled server module:

```
node dist/apps/server/main.js
```

## Next.js

To run the dev server:

```
yarn nx run next-app:serve
```

To generate a static site:

```
yarn nx run next-app:export
```

Then the static site will be at `dist/apps/next-app/exported`.
