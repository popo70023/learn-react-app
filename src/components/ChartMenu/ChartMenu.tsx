import type React from 'react';
import { useState, useEffect } from 'react';
import './ChartMenu.scss';
import { Link, Route, Routes } from 'react-router-dom';
import PaymentsPage from '../../pages/PaymentsPage/PaymentsPage.lazy';
interface ChartMenuProps { }
interface MenuButtonLink {
  name: string;
  link: string;
}
interface MenuButton {
  menuButtonLink: MenuButtonLink;
  childs?: MenuButtonLink[];
}

const ChartMenu: React.FC<ChartMenuProps> = () => {
  const menuButtons: MenuButton[] = [
    { menuButtonLink: { name: 'All-Payments', link: '/Payments' }, childs: [{ name: 'All-transactions', link: '/Payments/All-transactions' }] },
    { menuButtonLink: { name: 'Fraud-Risk', link: '/Payments' } },
    { menuButtonLink: { name: 'Invoices', link: '/Payments' } },
    { menuButtonLink: { name: 'Subscriptions  ', link: '/Payments' } },
    { menuButtonLink: { name: 'Quotes', link: '/Payments' } },
    { menuButtonLink: { name: 'Payment-Link', link: '/Payments' } },
  ];

  const [showChildContainer, setShowChildContainer] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [showChildText, setShowChildText] = useState(false);
  const onButtonClick = (buttonName: string, childText?: string[]) => {
    setActiveButton((prevActiveButton) => (prevActiveButton === buttonName ? null : buttonName));
    setShowChildText(childText !== undefined && childText.length > 0);
    setShowChildContainer(true);
  };

  return (
    <div className='page'>
      <div className="ChartMenu" data-testid="ChartMenu">

        <div className="vertical-menu">
          <span className="Tittle">Payments</span>
          <div className='Menu-Container'>
            {menuButtons.map((button, index) => (
              <div key={index} className='test'>
                <Link
                  className="Chart-menu-link"
                  to={button.menuButtonLink.link}
                  onClick={() => { onButtonClick(button.menuButtonLink.name); }}
                >
                  <div className={`Chart-menu-btn   ${activeButton === button.menuButtonLink.name ? 'Chart-menu-btn-active' : ''}`}>
                    <div className={`vertical-line ${activeButton === button.menuButtonLink.name ? 'vertical-line-active' : ''}`}></div>
                    {button.menuButtonLink.name}
                  </div>
                </Link>
                {button.childs !== undefined && activeButton === button.menuButtonLink.name ? button.childs.map((child, childTextIndex) => (
                  <Link
                    key={childTextIndex}
                    className='child-text'
                    to={child.link}
                  >{child.name}
                  </Link>
                )) : null}
              </div>
            ))}
            <div className="backgroundLine"></div>
          </div>
        </div>

        <div className="horizontal-menu">
          <div className='Menu-Container'>
            {menuButtons.map((button, index) => (
              <div key={index} className='test'>
                <Link
                  className="Chart-menu-link"
                  to={button.menuButtonLink.link}
                  onClick={() => { onButtonClick(button.menuButtonLink.name); }}
                >
                  <div className={`Chart-menu-btn   ${activeButton === button.menuButtonLink.name ? 'Chart-menu-btn-active' : ''}`}>

                    {button.menuButtonLink.name}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showChildContainer && (
        <div className='child-contianer'>
          {menuButtons.map((button, index) => (
            <div key={index} className='child-menu'>
              {button.childs !== undefined && activeButton === button.menuButtonLink.name ? button.childs.map((child, childTextIndex) => (
                <Link
                  key={childTextIndex}
                  className='child-text'
                  to={child.link}
                >{child.name}
                </Link>
              )) : null}
            </div>
          ))}
        </div>
      )}
      {activeButton !== null && activeButton !== undefined && (
        <div className="triangle"></div>
      )}
      
      <Routes>
        <Route path='/All-transactions' element={<div className='PaymentsPage'><PaymentsPage /></div>} />
      </Routes>

    </div>
  );
};
export default ChartMenu;