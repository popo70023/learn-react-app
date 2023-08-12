import { FC, useState  } from 'react';
import './Payments.scss';
import ChartMenu from '../../components/ChartMenu/ChartMenu';
import PaymentsHeader from '../../components/PaymentsHeader/PaymentsHeader';
import PaymentsList from '../../components/PaymentsList/PaymentsList';
interface PaymentsProps {}

const Payments: FC<PaymentsProps> = () => {
  const [activeButton, setActiveButton] = useState('All');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

 return ( 
  <div className="Payments" data-testid="Payments">
  
    <div className='payments-header'>
    <PaymentsHeader activeButton={activeButton} onButtonClick={handleButtonClick} />
    </div>
    
    
  </div>
);
};

export default Payments;
