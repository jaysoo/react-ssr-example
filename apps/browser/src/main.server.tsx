import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './app/app';

export function render(): { html: string; helmet: Record<string, any> } {
  const helmetContext: any = {};
  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  );
  return {
    helmet: helmetContext.helmet,
    html
  };
}
