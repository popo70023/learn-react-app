import { FC } from 'react';
import './HorizontalMenuResponsive.scss';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import userIcon from '../../assets/svg/user_icon.svg';
import dropDownIconBlue from '../../assets/svg/drop_down_icon_blue.svg';

interface HorizontalMenuResponsiveProps {
  activeButton: string;
  showAboutMenu: boolean;
  checked: boolean;
  onButtonClick: (buttonName: string) => void;
  handleLeave: () => void;
  handleHover: () => void;
  handleButtonClick: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
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
const HorizontalMenuResponsive: FC<HorizontalMenuResponsiveProps> = ({ handleButtonClick, activeButton, onButtonClick, showAboutMenu, handleLeave, handleHover, checked, handleChange }) => {

  const menuButtons: MenuButton[] = [
    { name: 'Home', link: '/' },
    { name: 'Payments', link: '/Payments' },
    { name: 'Customers', link: '/Customers' },
    { name: 'Products', link: '/Products' },
    { name: 'Reports', link: '/Reports' },
    { name: 'Connect', link: '/Connect' },
  ];
  return (
    <div className="HorizontalMenuResponsive" data-testid="HorizontalMenuResponsive">
      <div className='menu-exit' onClick={handleButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M18 1.81286L16.1871 0L9 7.18714L1.81286 0L0 1.81286L7.18714 9L0 16.1871L1.81286 18L9 10.8129L16.1871 18L18 16.1871L10.8129 9L18 1.81286Z" fill="black" />
        </svg>
      </div>
      <div className='user-switch-and-button'>
        <button className="user-switch">
          <div className="user-switch-content">
            <img src={userIcon} />
            <div className="user-switch-text">
              <p className='name-user-text'>Name User</p>
              <img className='user-switch-menu' src={dropDownIconBlue} />
            </div>
          </div>
        </button>
        <button className="activate-button">
          Activate account ➜
        </button>
      </div>
      <div className="button-group-responsive">
        {menuButtons.map((button, index) => (
          <div key={index}
            className='horizontal-menu-scope' onClick={() => { onButtonClick(button.name); }}>
            <Link
              className="horizontal-menu-link"
              to={button.link}
            >
              <div className={`horizontal-menu-btn  ${activeButton === button.name ? 'horizontal-menu-btn-active' : ''} `}>{button.name}</div>
            </Link>
          </div>
        ))}
        <nav className="dropdown">
          <ul className="dropdown-menu">
            <li className="dropdown-menu-item" onMouseLeave={handleLeave}>
              <a onMouseEnter={handleHover} >More
                <svg className='dropdown-svg' xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="#0C1E5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <div className="dropdown-list">
                {showAboutMenu && <Submenu />}
              </div>
            </li>
          </ul>
        </nav>

      </div>
      <div className='horizontal-switch'>
        <button className="developers">{'Developers'}</button>
        <p className="test-mode">{'Test Mode'}</p>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} className="switch-button" />} label="" />
      </div>
      <div className="icon-bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="156" height="20" viewBox="0 0 156 20" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M57.7902 19.0885C57.4561 19.1998 57.095 19.0743 56.8727 18.7951L56.3989 18.1999C55.6761 17.2922 54.324 17.2922 53.6012 18.1999L53.1273 18.7951C52.9051 19.0743 52.5439 19.1998 52.2098 19.0885C51.4282 18.8282 50.6933 18.4616 50.0214 18.0052C49.7285 17.8063 49.599 17.4383 49.6731 17.0859L49.8306 16.3365C50.0715 15.1906 49.2285 14.1057 48.0863 14.0917L47.3375 14.0826C46.9862 14.0783 46.6654 13.8668 46.5419 13.5293C46.261 12.762 46.0764 11.9464 46.0032 11.0979C45.9722 10.7388 46.1718 10.4054 46.4864 10.2451L47.155 9.90456C48.1782 9.38333 48.4791 8.03055 47.7776 7.10535L47.3185 6.49987C47.1024 6.21497 47.0638 5.82508 47.2445 5.51533C47.6631 4.79764 48.1736 4.1429 48.7594 3.56824C49.0136 3.31888 49.3924 3.27086 49.711 3.42355L50.3869 3.74748C51.4219 4.2435 52.6401 3.64145 52.9075 2.50172L53.0825 1.75615C53.1648 1.40511 53.4378 1.13098 53.7866 1.08293C54.1835 1.02824 54.5885 1 55 1C55.4115 1 55.8165 1.02824 56.2134 1.08293C56.5622 1.13098 56.8352 1.40511 56.9176 1.75615L57.0925 2.50172C57.3599 3.64145 58.5781 4.2435 59.6131 3.74748L60.289 3.42355C60.6076 3.27086 60.9864 3.31888 61.2406 3.56824C61.8263 4.1429 62.337 4.79764 62.7555 5.51533C62.9363 5.82507 62.8976 6.21497 62.6815 6.49987L62.2224 7.10535C61.5209 8.03055 61.8217 9.38333 62.845 9.90456L63.5136 10.2451C63.8283 10.4054 64.0278 10.7388 63.9968 11.0979C63.9237 11.9464 63.7391 12.762 63.4581 13.5293C63.3346 13.8668 63.0138 14.0783 62.6625 14.0826L61.9137 14.0917C60.7715 14.1057 59.9285 15.1906 60.1694 16.3365L60.327 17.0859C60.401 17.4383 60.2715 17.8063 59.9787 18.0052C59.3067 18.4616 58.5718 18.8282 57.7902 19.0885ZM57.7097 10.2696C57.7097 11.8055 56.4966 13.0505 55 13.0505C53.5035 13.0505 52.2903 11.8055 52.2903 10.2696C52.2903 8.73372 53.5035 7.48871 55 7.48871C56.4966 7.48871 57.7097 8.73372 57.7097 10.2696Z" fill="#888FA7" />
          <path fillRule="evenodd" clipRule="evenodd" d="M147.643 0C150.178 0 152.143 2.04269 152.143 4.53222C152.143 7.02175 150.178 9.06444 147.643 9.06444C145.171 9.06444 143.143 7.02175 143.143 4.53222C143.143 2.04269 145.171 0 147.643 0Z" fill="#888FA7" />
          <path fillRule="evenodd" clipRule="evenodd" d="M138.509 19.4238H155.428C155.746 19.4238 156 19.1684 156 18.8493C155.682 14.1256 151.739 10.3593 146.968 10.3593C142.198 10.3593 138.318 14.1256 138 18.8493C138 19.1684 138.254 19.4238 138.509 19.4238Z" fill="#888FA7" />
          <path d="M109.373 16.9958H92.6273C92.1256 16.9958 91.812 16.4396 92.1256 16.007C92.9409 14.8636 93.474 13.4422 93.474 12.0516V7.41636C93.474 3.30646 96.8293 0 101 0C105.171 0 108.526 3.30646 108.526 7.41636V12.0516C108.526 13.4422 109.059 14.8636 109.874 16.007C110.188 16.4396 109.874 16.9958 109.373 16.9958ZM101 19.777C102.348 19.777 103.477 18.8499 103.76 17.6139H98.2405C98.5227 18.8499 99.6516 19.777 101 19.777Z" fill="#888FA7" />
          <path d="M9 1C4.03067 1 0 5.05953 0 10.0644C0 15.0693 4.03067 19.1289 9 19.1289C13.9693 19.1289 18 15.0693 18 10.0644C18 5.05953 13.9693 1 9 1ZM9.97546 15.1991C9.97546 15.5142 9.71779 15.7737 9.40491 15.7737H7.95092C7.63804 15.7737 7.38037 15.5142 7.38037 15.1991V14.2537C7.38037 13.9386 7.63804 13.6791 7.95092 13.6791H9.40491C9.71779 13.6791 9.97546 13.9386 9.97546 14.2537V15.1991ZM12.2761 9.56395C11.8896 10.1015 11.411 10.5279 10.8221 10.843C10.4908 11.0654 10.2699 11.2879 10.1595 11.5474C10.0859 11.7142 10.0307 11.9366 9.99387 12.1962C9.97546 12.4001 9.79141 12.5484 9.58896 12.5484H7.80368C7.56442 12.5484 7.38037 12.3445 7.39877 12.122C7.43558 11.6215 7.56442 11.2323 7.76687 10.9357C8.02454 10.5835 8.48466 10.1571 9.14724 9.6937C9.49693 9.47126 9.7546 9.21175 9.95706 8.89663C10.1595 8.5815 10.2515 8.21077 10.2515 7.78443C10.2515 7.35808 10.1411 7.00589 9.90184 6.74637C9.66258 6.48686 9.34969 6.3571 8.92638 6.3571C8.57669 6.3571 8.30061 6.46832 8.06135 6.67223C7.91411 6.80198 7.82209 6.96881 7.76687 7.19125C7.69325 7.45077 7.45399 7.6176 7.17791 7.6176L5.52147 7.58052C5.31902 7.58052 5.15337 7.39516 5.17178 7.19125C5.22699 6.30149 5.57669 5.63417 6.18405 5.15222C6.88344 4.61465 7.78528 4.3366 8.92638 4.3366C10.1411 4.3366 11.0982 4.65173 11.7975 5.26344C12.4969 5.87515 12.8466 6.7093 12.8466 7.76589C12.8466 8.43321 12.6442 9.02638 12.2761 9.56395Z" fill="#888FA7" />
        </svg>
      </div>
    </div>
  );
};

export default HorizontalMenuResponsive;
