import type React from 'react';
import  { useState } from 'react';
import './ChartMenu.scss';
import { Link } from 'react-router-dom';

interface ChartMenuProps {}
interface MenuButton{
  name: string;
  link: string;
  childText?: string[];
  className?: string;
}

const ChartMenu: React.FC<ChartMenuProps> = () => {
  const menuButtons: MenuButton[] = [
  { name: 'All-Payments', link: '/', childText: ['All-transactions'] },
  { name: 'Fraud-Risk', link: '/' },
  { name: 'Invoices', link: '/' },
  { name: 'Subscriptions', link: '/' },
  { name: 'Quotes', link: '/' },
  { name: 'Payment-Link', link: '/',className: 'payment-link-btn'  },
    ];
  const [activeButton, setActiveButton] = useState('Home');
  const [showChildText, setShowChildText] = useState(false);
  const onButtonClick = (buttonName: string, childText?: string[]) => {
    setActiveButton(buttonName);
    setShowChildText(childText !== undefined && childText.length > 0);
  };
    return(
      <div className="ChartMenu" data-testid="ChartMenu">
      <span className="Tittle">Payments</span>
       {menuButtons.map((button, index) => (
        <Link
          key={index}
          className="Chart-menu-link"
          to={button.link}
          onClick={() => { onButtonClick(button.name); }}
          
        >
          <div className={`Chart-menu-btn  ${activeButton === button.name? 'Chart-menu-btn-active': ''}`}>{button.name}
 
          </div>
        </Link>
      ))} 
      {showChildText && (
        <div className="childTextContainer">
          {menuButtons.find((button) => button.name === 'All-Payments')?.childText?.map((text, index) => (
            <p key={index} className="childText">
              {text}
            </p>
          ))}
        </div>
      )}
      <div className="backgroundLine"></div>
    </div>
     );
 
};
export default ChartMenu;
