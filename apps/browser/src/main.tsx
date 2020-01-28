import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './app/app';

ReactDOM.hydrate(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
  document.getElementById('root')
);
