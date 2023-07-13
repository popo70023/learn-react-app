import { type FC } from 'react';
import './Header.scss';
import logo from '../../assets/svg/logo.svg';
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
        <div className="user-icon"></div>
        Name User
        <img src={dropDownIconBlue} />
      </button>
      <button className="activate-button">
        Activate account ➜
      </button>
      <div className="search-frame">
        <input className="search-input">

        </input>
        <button className="search-button">
          <img src={searchIcon} />
          Search
        </button>
      </div>
      <button className="create-button">
        Create
        <img src={dropDownIconWhite} />
      </button>
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
