import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChartMenu from './ChartMenu';

describe('<ChartMenu />', () => {
  test('it should mount', () => {
    render(<ChartMenu />);
    
    const chartMenu = screen.getByTestId('ChartMenu');

    expect(chartMenu).toBeInTheDocument();
  });
});