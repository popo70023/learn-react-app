import { FC } from 'react';
import './Dashboard.scss';
import Header from '../../Components/Header/Header';
import HorizontalMenu from '../../Components/HorizontalMenu/HorizontalMenu';
import ChartMenu from '../../Components/ChartMenu/ChartMenu';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <div className="Dashboard" data-testid="Dashboard">
    Dashboard Component
    <Header />
    <HorizontalMenu />
    <ChartMenu />
  </div>
);

export default Dashboard;
