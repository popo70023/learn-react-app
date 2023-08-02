import { FC } from 'react';
import './Payments.scss';
import ChartMenu from '../../Components/ChartMenu/ChartMenu';
interface PaymentsProps {}

const Payments: FC<PaymentsProps> = () => (
  <div className="Payments" data-testid="Payments">
    <ChartMenu />
  </div>
);

export default Payments;
