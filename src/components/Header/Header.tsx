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

interface HeaderProps { }

const Header: FC<HeaderProps> = () => (
  <div className="Header" data-testid="Header">
    <div className="logo-bar">
      <img src={logo} />
    </div>
    <button className="beta-hint">
      Test Beta
    </button>
    <div className="tool-bar">
      <button className="user-switch">
        <div className="user-switch-content">
          <img src={userIcon} />
          <div className="user-switch-text">
            <p>Name User</p>
            <img src={dropDownIconBlue} />
          </div>
        </div>
      </button>
      <button className="activate-button">
        Activate account ➜
      </button>
      <div className="search-frame">
        <input className="search-input">

        </input>
        <button className="search-button" onClick={(e) => {console.log('hellow');}}>
          <img src={searchIcon} />
          Search
        </button>
      </div>
      <button className="create-button">
        Create
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
);

export default Header;
