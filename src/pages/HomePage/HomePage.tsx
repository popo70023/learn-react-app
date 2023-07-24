import { type FC } from 'react';
import './HomePage.scss';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className="HomePage" data-testid="HomePage">
    HomePage Component
    a test message
  </div>
);

export default HomePage;