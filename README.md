# React + Nx SSR Example

This workspace contains a React webapp and Express server app. The React app is rendering on the server then rehydrated in the browser.

To run the example, clone and install dependencies.

```
git clone https://github.com/jaysoo/react-ssr-example.git react-ssr-example
cd react-ssr-example
yarn install
```

Then run the dev server:

```
yarn start
```

## Build for production

Run the prod build script:

```
yarn build
```

Which will generate a compiled server module:

```
node dist/apps/server/main.js
```

## Testing and Linting

```
yarn test
yarn lint
```
