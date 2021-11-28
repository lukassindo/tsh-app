import React from 'react';

import { render } from 'tests';

import MainPage from './MainPage';

describe('Products', () => {
  test('Displays page header', async () => {
    const { getByText } = render(<MainPage />);

    expect(getByText('Products page')).toBeInTheDocument();
  });
});
