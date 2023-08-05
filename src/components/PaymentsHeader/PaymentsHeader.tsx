import { FC, useState } from 'react';
import './PaymentsHeader.scss';

interface PaymentsHeaderProps {
  activeButton: string;
  onButtonClick: (buttonName: string) => void;
}

const PaymentsHeader: FC<PaymentsHeaderProps> = ({ activeButton, onButtonClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  const [isClickedExport, setIsClickedExport] = useState(false);
  const handleButtonClickExport = () => {
    setIsClickedExport(!isClickedExport);
  };

  const [isClickedCreatePayment, setIsClickedCreatePayment] = useState(false);
  const handleButtonClickCreatePayment = () => {
    setIsClickedCreatePayment(!isClickedCreatePayment);
  };

  // const [activeButton, setActiveButton] = useState('All');
  // const onButtonClick = (buttonName: string) => {
  //   setActiveButton(buttonName);   
  // };
  return (
    <div className="PaymentsHeader" data-testid="PaymentsHeader">
      <div className='header-button'>
        <p className='payments-header-title'>Payments</p>
        <button className={isClicked ? 'button horizontal-menu-btn-active' : 'button horizontal-menu-btn-style'}
          onClick={handleButtonClick}>
          <div className='button-display'>
            <svg className='button-svg' xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
              <path d="M9.22928 3.41066C9.90495 3.41066 10.4527 2.87101 10.4527 2.20533C10.4527 1.53964 9.90495 1 9.22928 1C8.5536 1 8.00586 1.53964 8.00586 2.20533C8.00586 2.87101 8.5536 3.41066 9.22928 3.41066Z" stroke="#0C1E5B" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.4453 2.20532H12.4865" stroke="#0C1E5B" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 2.20532H8.00567" stroke="#0C1E5B" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.41287 7.44532C5.08854 7.44532 5.63629 6.90568 5.63629 6.24C5.63629 5.57431 5.08854 5.03467 4.41287 5.03467C3.7372 5.03467 3.18945 5.57431 3.18945 6.24C3.18945 6.90568 3.7372 7.44532 4.41287 7.44532Z" stroke="#0C1E5B" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.63672 6.23999H12.4878" stroke="#0C1E5B" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 6.23999H3.19571" stroke="#0C1E5B" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.22928 11.4801C9.90495 11.4801 10.4527 10.9404 10.4527 10.2747C10.4527 9.60904 9.90495 9.0694 9.22928 9.0694C8.5536 9.0694 8.00586 9.60904 8.00586 10.2747C8.00586 10.9404 8.5536 11.4801 9.22928 11.4801Z" stroke="#0C1E5B" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.4453 10.2747H12.4865" stroke="#0C1E5B" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M1 10.2747H8.00567" stroke="#0C1E5B" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className='button-text'>Filter</p>
          </div>
        </button>


        <button className={isClickedExport ? 'button horizontal-menu-btn-active' : 'button horizontal-menu-btn-style'}
          onClick={handleButtonClickExport}>
          <div className='button-display'>
            <svg className='button-svg' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M8.42857 1.57111L1 8.99968" stroke="#0C1E5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.28516 1H7.99944C8.55172 1 8.99944 1.44772 8.99944 2V6.71428" stroke="#0C1E5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className='button-text'>Export</p>
          </div>
        </button>
        <button className={isClickedCreatePayment?'created-payment created-payment-active':'created-payment '}  onClick={handleButtonClickCreatePayment}>
          <p className='add-text'>+</p>
          <p className='created-payment-text'>Create Payment</p>
        </button>

      </div>
      <div className='payments-button-group'>
        {[{ name: 'All' }, { name: 'Succeeded' }, { name: 'Refunded' }, { name: 'Uncaptured' }].map((item, index) => (
          <div key={index}>
          <button 
          onClick={() => { onButtonClick(item.name); }}
          className={`payments-button  ${activeButton === item.name ? 'payments-button-active' : 'payments-button-style'} `} >
            {item.name}
            <hr className={`payments-button-hr  ${activeButton === item.name ? 'button-hr-style' : 'button-hr-active'} `}></hr>
          </button>
          
          </div>))}

      </div>
      <hr className='button-hr' />
    </div>
  );
};

export default PaymentsHeader;
