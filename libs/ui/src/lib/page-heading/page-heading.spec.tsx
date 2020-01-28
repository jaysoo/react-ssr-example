import React from 'react';
import { render } from '@testing-library/react';

import PageHeading from './page-heading';

describe(' PageHeading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageHeading />);
    expect(baseElement).toBeTruthy();
  });
});
