import { type FC } from 'react';
import './Header.scss';
import logo from '../../assets/svg/logo.svg';
import userIcon from '../../assets/svg/user_icon.svg';
import searchIcon from '../../assets/svg/search_icon.svg';
import dropDownIconBlue from '../../assets/svg/drop_down_icon_blue.svg';
import dropDownIconWhite from '../../assets/svg/drop_down_icon_white.svg';
import helpIcon from '../../assets/svg/help_icon.svg';
import settingIcon from '../../assets/svg/setting_icon.svg';
import bellIcon from '../../assets/svg/bell_icon.svg';
import accountIcon from '../../assets/svg/account_icon.svg';
import { Route, Routes } from 'react-router-dom';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => (
  <div className="Header" data-testid="Header">
    <div className="logo-hint">
      <a className="active-page-hint">
        <Routes>
          <Route path="/" element="home" />
          <Route path="/Payments/*" element="Payments" />
          <Route path="/Customers" element="Customers" />
          <Route path="/Products" element="Products" />
          <Route path="/Reports" element="Reports" />
          <Route path="/Connect" element="Connect" />
        </Routes>
      </a>
      <img src={logo} className="logo" />
      <button className="beta-hint">
        Test Beta
      </button>
    </div>
    <div className="tool-bar">
      <div className="main-tool-bar">
        <button className="user-switch">
          <div className="user-switch-content">
            <img src={userIcon} />
            <p>Name User</p>
            <img src={dropDownIconBlue} />
          </div>
        </button>
        <button className="activate-button">
          Activate account ➜
        </button>
        <div className="search-frame">
          <input className="search-input" />
          <button className="search-button">
            <img src={searchIcon} />
            <p className="search-text">Search</p>
          </button>
        </div>
        <button className="create-button">
          <p>Create</p>
          <img src={dropDownIconWhite} />
        </button>
      </div>
      <div className="icon-bar">
        <img src={helpIcon} />
        <img src={settingIcon} />
        <img src={bellIcon} />
        <img src={accountIcon} />
      </div>
    </div>
  </div>
);

export default Header;
