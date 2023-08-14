import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HorizontalMenuResponsive from './HorizontalMenuResponsive';

describe('<HorizontalMenuResponsive />', () => {
  test('it should mount', () => {
    const activeButton = 'Home';
    const showAboutMenu = false;
    const checked=false;
    const handleButtonClick= () => {
      // 測試用的函式邏輯
    };
    const onButtonClick= (buttonName:string) => {
      // 測試用的函式邏輯
    };
    const handleLeave= () => {
      // 測試用的函式邏輯
    };
    const handleHover= () => {
      // 測試用的函式邏輯
    };
    const handleChange= (event: React.ChangeEvent<HTMLInputElement>) => {
      // 測試用的函式邏輯
    };

    render(<HorizontalMenuResponsive handleButtonClick={handleButtonClick}
      activeButton={activeButton} onButtonClick={onButtonClick}
      showAboutMenu={showAboutMenu} handleLeave={handleLeave}
      handleHover={handleHover}
      checked={checked} handleChange={handleChange}/>);
    
    const horizontalMenuResponsive = screen.getByTestId('HorizontalMenuResponsive');

    expect(horizontalMenuResponsive).toBeInTheDocument();
  });
});