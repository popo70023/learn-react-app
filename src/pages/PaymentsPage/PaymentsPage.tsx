import { FC } from 'react';
import './PaymentsPage.scss';
import Payments from '../../layout/Payments/Payments';
interface PaymentsPageProps {}

const PaymentsPage: FC<PaymentsPageProps> = () => (
  <div className="PaymentsPage" data-testid="PaymentsPage">
    <Payments />
  </div>
);

export default PaymentsPage;
