import React, { FC, useState, useEffect } from 'react';
import './PaymentsList.scss';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox, Slider, Switch } from '@mui/material';



interface PaymentsListProps { }

interface List {

  Status: boolean;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  
}


const PaymentsList: FC<PaymentsListProps> = () => {
  const list: List[] = [
    { Status: true },
    { Status: false },
    { Status: true },
    { Status: true },
    { Status: true },
    { Status: false },
    { Status: true },
    { Status: false },
    { Status: false },
    { Status: false },
    { Status: false },
  ];

  const [checkboxStates, setCheckboxStates] = useState<boolean[]>(list.map(item => item.Status));
  const [switchStates, setSwitchStates] = useState<boolean[]>(list.map(item => item.Status));
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [allCheckboxChecked, setAllCheckboxChecked] = useState(false);


  const handleAllCheckboxChange = () => {
    const updatedCheckboxStates = checkboxStates.map(() => !allCheckboxChecked);
    setCheckboxStates(updatedCheckboxStates);
    setAllCheckboxChecked(!allCheckboxChecked);
  };
  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxStates = [...checkboxStates];
    updatedCheckboxStates[index] = !updatedCheckboxStates[index];
    setCheckboxStates(updatedCheckboxStates);

    setSelectedItemIndex(index);
  };
  const handleSwitchChange = (index: number) => {
    const updatedSwitchStates = [...switchStates];
    updatedSwitchStates[index] = !updatedSwitchStates[index];
    setSwitchStates(updatedSwitchStates);
  };
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, []);

  return (
    <div className="PaymentsList" data-testid="PaymentsList">
      <div className="PaymentsList-Container">
        <div className="tittle-Container ">
          <div className='all-checkbox'>
            <Checkbox
              className="checkbox  all-checkbox"
              checked={allCheckboxChecked}
              onChange={handleAllCheckboxChange}
            />
          </div>
          <p className="title-Product">Product</p>
          <p className="title-Performance">Performance</p>
          <p className="title-Stock">Stock</p>
          <p className="title-Price">Price</p>
          <p className="title-Status">Status</p>
        </div>
        <div className="List-Container">

          {data.map((item, index) => (
            <div key={index} className={`list-data ${checkboxStates[index] ? 'selected' : ''}`}>
              <div className={`list-item-details ${selectedItemIndex === index ? 'item-selected' : ''}`}>
                <Checkbox
                  className="checkbox"
                  checked={checkboxStates[index]}
                  onChange={() => { handleCheckboxChange(index); }}
                />
                <div className="Product-container">
                  <p className='list-margin-Product'>{item.name.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                    <div className='SKU'>
                      {item.address.zipcode}
                    </div>
                  </p>
                </div>
                <div className='list-Performance'>
                  <p className='list-Performance-text'>{item.username} </p>
                    
                  <Slider
                    defaultValue={Math.abs(Math.round(parseFloat(item.address.geo.lat)))}
                    valueLabelDisplay="auto"
                    step={25}
                    min={0}
                    max={100}
                    className={`slider-wrapper ${checkboxStates[index] ? 'slider-selected' : 'slider-noselected'}`}

                  />
                </div>
                <p className='list-margin'>{item.address.geo.lng}</p>
                <p className='list-margin'>${item.address.geo.lat}</p>
                <FormControlLabel
                  control={
                    <Switch
                      checked={switchStates[index]}
                      onChange={() => { handleSwitchChange(index); }}
                      className="switch-button"
                    />
                  }
                  label={switchStates[index] ? 'Active' : 'Non-Active'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default PaymentsList;



