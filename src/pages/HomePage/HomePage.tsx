import { type FC } from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className="HomePage" data-testid="HomePage">
    HomePage Component
    <Header />
  </div>
);

export default HomePage;