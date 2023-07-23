import { type FC } from 'react';
import './HomePage.scss';
import ChartMenu from '../../Components/ChartMenu/ChartMenu';
interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className="HomePage" data-testid="HomePage">
    <ChartMenu/>
  </div>
);

export default HomePage;