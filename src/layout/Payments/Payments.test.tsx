import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Payments from './Payments';

describe('<Payments />', () => {
  test('it should mount', () => {
    render(<Payments />);
    
    const payments = screen.getByTestId('Payments');

    expect(payments).toBeInTheDocument();
  });
});