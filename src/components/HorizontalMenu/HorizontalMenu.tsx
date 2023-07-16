import type { FC,useState } from 'react';
import React from 'react';
import './HorizontalMenu.scss';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { StylesConfig } from 'react-select';
import Select from 'react-select';
import { Link } from 'react-router-dom';
interface horizontalMenuProps { }
interface MenuButton{
  name: string;
  link: string;
}
const DropdownStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    height: '40px',
    minHeight: '40px',
    width:'100px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '7px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'black',
    marginLeft: '-38px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'black',
    marginLeft: '-38px',
    width: '32.5px',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'black',

  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),

};
const DropdownMenu = [
  { label: 'Text', value: 'Text' },
];
const DropdownClass={
  placeholder:"More", 
  className:"Dropdown",
  options:DropdownMenu,
  styles:DropdownStyles,
};
const HorizontalMenu: FC<horizontalMenuProps> = () => {
  const menuButtons: MenuButton[] = [
    { name: 'Home', link: '/' },
    { name: 'Payments', link: '/' },
    { name: 'Customers', link: '/' },
    { name: 'Products', link: '/' },
    { name: 'Reports', link: '/' },
    { name: 'Connect', link: '/' },
  ];
  const [activeButton, setActiveButton] = React.useState('Home');
  const onButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);   
  };
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="HorizontalMenu" data-testid="HorizontalMenu">
      <div className="ButtonGroup">
        {menuButtons.map((button, index) => (
          <Link
            key={index}
            className="HorizontalMenuLink"
            to={button.link}
            onClick={() => { onButtonClick(button.name); }}
            >
            <div className={`HorizontalMenuBtn  ${activeButton === button.name ? 'HorizontalMenuBtnActive' : ''} ${button.name}`}>{button.name}</div>
          </Link>
        ))}
        <Select {...DropdownClass}/>
        <button className="HorizontalMenuLink Developers"><div className="HorizontalMenuBtn">{'Developers'}</div></button>
        <h5 className="HorizontalMenuLink TestMode"><div className="HorizontalMenuBtn">{'Test Mode'}</div></h5>
        <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} className="SwitchButton"/>}label=""/>
      </div>
      
    </div>
  );
};

export default HorizontalMenu;