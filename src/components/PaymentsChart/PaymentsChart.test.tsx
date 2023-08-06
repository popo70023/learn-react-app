import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaymentsChart from './PaymentsChart';

describe('<PaymentsChart />', () => {
  test('it should mount', () => {
    render(<PaymentsChart />);
    
    const paymentsChart = screen.getByTestId('PaymentsChart');

    expect(paymentsChart).toBeInTheDocument();
  });
});