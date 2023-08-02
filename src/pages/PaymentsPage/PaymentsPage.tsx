import { FC } from 'react';
import './PaymentsPage.scss';
import ChartMenu from '../../components/ChartMenu/ChartMenu';
interface PaymentsPageProps {}

const PaymentsPage: FC<PaymentsPageProps> = () => (
  <div className="PaymentsPage" data-testid="PaymentsPage">
    <ChartMenu/>
  </div>
);

export default PaymentsPage;
