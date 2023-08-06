import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaymentsHeader from './PaymentsHeader';

describe('<PaymentsHeader />', () => {
  test('it should mount', () => {
    const activeButton = 'All';
    const onButtonClick = (buttonName:string) => {
      // 測試用的函式邏輯
    };
    render(<PaymentsHeader activeButton={activeButton} onButtonClick={onButtonClick}/>);
    
    const paymentsHeader = screen.getByTestId('PaymentsHeader');

    expect(paymentsHeader).toBeInTheDocument();
  });
});