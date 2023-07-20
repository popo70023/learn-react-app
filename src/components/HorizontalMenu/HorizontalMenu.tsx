import  { FC , useState } from 'react';
import './HorizontalMenu.scss';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import type{ StylesConfig } from 'react-select';
import Select from 'react-select';
import { Link } from 'react-router-dom';
interface HorizontalMenuProps { }
interface MenuButton{
  name: string;
  link: string;
}
const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    height: '40px',
    minHeight: '40px',
    width: '100px',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '12px',
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

const DropdownClass = {
  placeholder: 'More', 
  className: 'Dropdown',
  options: DropdownMenu,
  styles: customStyles,
};

const HorizontalMenu: FC<HorizontalMenuProps> = () => {
  const menuButtons: MenuButton[] = [
    { name: 'Home', link: '/' },
    { name: 'Payments', link: '/' },
    { name: 'Customers', link: '/' },
    { name: 'Products', link: '/' },
    { name: 'Reports', link: '/' },
    { name: 'Connect', link: '/' },
  ];
  const [activeButton, setActiveButton] = useState('Home');
  const onButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);   
  };
  const [checked, setChecked] =useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
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
        <Select {...DropdownClass}
        />

        <button className="horizontal-menu-link developers"><div className="horizontal-menu-btn">{'Developers'}</div></button>
        <p className="horizontal-menu-link test-mode"><div className="horizontal-menu-btn">{'Test Mode'}</div></p>
        <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} className="switch-button"/>}label=""/>
      </div>
    </div>
  );
};

export default HorizontalMenu;