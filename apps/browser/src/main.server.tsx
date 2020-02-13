import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import App from './app/app';

export function render(): {
  html: string;
  style: string;
  helmet: Record<string, any>;
} {
  const helmetContext: any = {};
  const sheet = new ServerStyleSheet();
  const html = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    )
  );
  return {
    helmet: helmetContext.helmet,
    style: sheet.getStyleTags(),
    html
  };
}
