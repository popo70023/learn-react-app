import React, { FC, useState } from 'react';
import './PaymentsList.scss';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox, Slider, Switch } from '@mui/material';



interface PaymentsListProps { }

interface List {
  Product: string;
  Performance: string;
  PerformanceNum: number;
  Stock: string;
  Price: number;
  Status: boolean;
}

const PaymentsList: FC<PaymentsListProps> = () => {
  const list: List[] = [
    { Product: 'Product Really\n1043id3', Performance: 'Good', PerformanceNum: 50, Stock: "2.400", Price: 16, Status: true },
    { Product: 'Product Sureally\n1043id3', Performance: 'Bad', PerformanceNum: 25, Stock: "1.200", Price: 41, Status: false },
    { Product: 'Product Really\n1043id3', Performance: 'Good', PerformanceNum: 50, Stock: "2.400", Price: 16, Status: true },
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
          <p className="title">Product</p>
          <p className="title">Performance</p>
          <p className="title">Stock</p>
          <p className="title">Price</p>
          <p className="title">Status</p>
        </div>
        <div className="List-Container">
          {list.map((item, index) => (
            <div key={index} className={`list-data ${checkboxStates[index] ? 'selected' : ''}`}>
              <div className={`list-item-details ${selectedItemIndex === index ? 'item-selected' : ''}`}>
                <Checkbox
                  className="checkbox"
                  checked={checkboxStates[index]}
                  onChange={() => {handleCheckboxChange(index);}}
                />
                <p className='list-margin-Product'>{item.Product.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                  <div className='SKU'>
                    SKU = 1432-TW
                  </div>
                </p>
                <div className='list-Performance'>
                  <p className='list-Performance-text'>{item.Performance} </p>

                  <Slider
                    defaultValue={item.PerformanceNum}
                    valueLabelDisplay="auto"
                    step={25}
                    min={0}
                    max={100}
                    className={`slider-wrapper ${checkboxStates[index] ? 'slider-selected' : 'slider-noselected'}`}
                    onMouseDown={(e) => {e.preventDefault();}}
                  />
                </div>
                <p className='list-margin'>{item.Stock}</p>
                <p className='list-margin'>${item.Price}</p>
                <FormControlLabel
                  control={
                    <Switch
                      checked={switchStates[index]}
                      onChange={() => {handleSwitchChange(index);}}
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



