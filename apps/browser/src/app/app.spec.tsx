import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );

    expect(getByText('Hello World!')).toBeTruthy();
  });
});
