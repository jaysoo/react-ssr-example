/* eslint-disable @typescript-eslint/camelcase */
import express from 'express';
import * as fs from 'fs';

const PORT = 3000;
const path = require('path');

declare const __non_webpack_require__: any;

const app = express();
const router = express.Router();

// Allow window and document objects to be used in React app.
Object.assign(global, require('domino').impl);

router.use(express.static(path.resolve(__dirname, 'public'), { index: false }));

const mainPath = path.resolve(__dirname, 'ssr/main.js');

router.use('*', function(req, res) {
  const filePath = path.resolve(__dirname, 'public/index.html');

  // Skip caching ssr fragment in dev mode.
  if (process.env.NODE_ENV !== 'production') {
    delete __non_webpack_require__.cache[mainPath];
  }
  const main = __non_webpack_require__(mainPath);

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    const { html, helmet } = main.render();

    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace('<title></title>', helmet.title.toString())
    );
  });
});

app.use(router);
app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
