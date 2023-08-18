import { FC, useState } from 'react';
import './HorizontalMenu.scss';
import HorizontalMenuResponsive from '../HorizontalMenuResponsive/HorizontalMenuResponsive';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
interface HorizontalMenuProps { }
interface MenuButton {
  name: string;
  link: string;
}

const Submenu: React.FC = () => {
  return (
    <ul className="nav__submenu">
      <li className="nav__submenu-item">
        <a>Text</a>
      </li>
    </ul>
  );
};
const items: string[] = ['Home', 'Payments', 'Customers', 'Products', 'Reports'];
const HorizontalMenu: FC<HorizontalMenuProps> = () => {
  const menuButtons: MenuButton[] = [
    { name: 'Home', link: '/' },
    { name: 'Payments', link: '/Payments' },
    { name: 'Customers', link: '/Customers' },
    { name: 'Products', link: '/Products' },
    { name: 'Reports', link: '/Reports' },
    { name: 'Connect', link: '/Connect' },
  ];
  const [clicked, setClicked] = useState(false);

  const ButtonClick = () => {
    setClicked(true);
  };
  const [activeButton, setActiveButton] = useState('Home');
  const onButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const handleHover = () => {
    setShowAboutMenu(true);
  };

  const handleLeave = () => {
    setShowAboutMenu(false);
  };

  return (
    <div className='horizontal-menu-model'>
      <div className="horizontal-menu" data-testid="horizontal-menu">
        <div className="button-group">
          {menuButtons.map((button, index) => (
            <Link
              key={index}
              className="horizontal-menu-link"
              to={button.link}
              onClick={() => { onButtonClick(button.name); }}
            >
              <div className={`horizontal-menu-btn  ${activeButton === button.name ? 'horizontal-menu-btn-active' : ''} `}>{button.name}</div>
            </Link>
          ))}
          <nav className="dropdown">
            <ul className="dropdown-menu">
              <li className="dropdown-menu-item" onMouseLeave={handleLeave}>
                <a onMouseEnter={handleHover} >More</a>

                <div className="dropdown-list">
                  {showAboutMenu && <Submenu />}
                </div>
              </li>
            </ul>
          </nav>
          <svg className={`dropdown-svg  ${showAboutMenu ? 'dropdown-svg-active' : ''}`}  xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="#0C1E5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <button className="horizontal-menu-link developers"><div className="horizontal-menu-btn">{'Developers'}</div></button>
          <p className="horizontal-menu-link test-mode"><div className="horizontal-menu-btn">{'Test Mode'}</div></p>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} className="switch-button" />} label="" />
        </div>
      </div>
      <div className="horizontal-menu-phone" onClick={handleButtonClick}>
        <svg className='horizontal-menu-svg' width="25px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {isClicked && <HorizontalMenuResponsive
        handleButtonClick={handleButtonClick}
        activeButton={activeButton} onButtonClick={onButtonClick}
        showAboutMenu={showAboutMenu} 
        handleLeave={handleLeave} handleHover={handleHover} 
        checked={checked} handleChange={handleChange}/>}
    </div>
  );
};

export default HorizontalMenu;