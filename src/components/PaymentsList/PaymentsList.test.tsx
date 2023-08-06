import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaymentsList from './PaymentsList';

describe('<PaymentsList />', () => {
  test('it should mount', () => {
    render(<PaymentsList />);
    
    const paymentsList = screen.getByTestId('PaymentsList');

    expect(paymentsList).toBeInTheDocument();
  });
});