import { FC } from 'react';
import './Dashboard.scss';
import Header from '../../components/Header/Header';
import HorizontalMenu from '../../components/HorizontalMenu/HorizontalMenu';

interface DashboardProps {}
const Dashboard: FC<DashboardProps> = () => (
  <div className="Dashboard" data-testid="Dashboard">
    <div className="header">
    <Header />
    </div>
    <div className="horizontal-menu">
    <HorizontalMenu />
    </div>
  </div>
);

export default Dashboard;
