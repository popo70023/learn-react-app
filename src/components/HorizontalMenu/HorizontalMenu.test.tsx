import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HorizontalMenu from './HorizontalMenu';

describe('<HorizontalMenu />', () => {
  test('it should mount', () => {
    render(<HorizontalMenu />);
    
    const horizontalMenu = screen.getByTestId('HorizontalMenu');

    expect(horizontalMenu).toBeInTheDocument();
  });
});