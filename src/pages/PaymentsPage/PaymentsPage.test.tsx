import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaymentsPage from './PaymentsPage';

describe('<PaymentsPage />', () => {
  test('it should mount', () => {
    render(<PaymentsPage />);
    
    const paymentsPage = screen.getByTestId('PaymentsPage');

    expect(paymentsPage).toBeInTheDocument();
  });
});