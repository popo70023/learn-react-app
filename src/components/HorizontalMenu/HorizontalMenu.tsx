import type { FC,useState } from 'react';
import React from 'react';
import './HorizontalMenu.scss';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { StylesConfig } from 'react-select';
import Select from 'react-select';
interface HorizontalMenuProps {}
const items: string[] = ['Home', 'Payments', 'Customers','Products','Reports','Connect'];
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

const HorizontalMenu: FC<HorizontalMenuProps> = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="HorizontalMenu">
      <div className="ButtonGroup">
        {items.map((item, index) => (
          <button key={index} className={`Button Button${item}`}>{item}</button>
        ))}
        <Select {...DropdownClass}/>
        <button className="Button Developers">{'Developers'}</button>
        <button className="Button TestMode">{'Test Mode'}</button>
        <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} className="SwitchButton"/>}label=""/>
      </div>
    </div>
  );
};
export default HorizontalMenu;
