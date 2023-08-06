import { FC, useState  } from 'react';
import './Payments.scss';
import ChartMenu from '../../Components/ChartMenu/ChartMenu';
import PaymentsHeader from '../../Components/PaymentsHeader/PaymentsHeader';
import PaymentsList from '../../Components/PaymentsList/PaymentsList';
interface PaymentsProps {}

const Payments: FC<PaymentsProps> = () => {
  const [activeButton, setActiveButton] = useState('All');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

 return ( 
  <div className="Payments" data-testid="Payments">
    <ChartMenu />
    <div className='payments-header'>
    <PaymentsHeader activeButton={activeButton} onButtonClick={handleButtonClick} />
    </div>
    
    
  </div>
);
};

export default Payments;
