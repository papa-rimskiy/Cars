import React, { useState } from 'react';
import { connect } from 'react-redux';

function SelectFilter(props) {
  const [selectDropdownOpenCheck, setselectDropdownOpenCheck] = useState(false);
  const [selectInput, setSelectInput] = useState('Brand');

  const selectDropdownOpen = () => {
    setselectDropdownOpenCheck(!selectDropdownOpenCheck);
  };

  const onChange = (el) => {
    setSelectInput(el);
    props.createSelect(el);
    setselectDropdownOpenCheck(!selectDropdownOpenCheck);
  };

  const array = props.valueCars.map(el => el.make);
  const newArray = array.filter((el, pos) => array.indexOf(el) == pos);
  newArray.unshift('all');
  return (
    <div className="select">
      <div className="select_filter">
        <div className="select__input" onClick={selectDropdownOpen}>
          {selectInput}
          <i class={(selectDropdownOpenCheck=== false) ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
        </div>
        <div className={(selectDropdownOpenCheck === false) ? "select__dropdown" : "select_open"}>
          {newArray.map(el =>
          <ul className="select__list">
            <li className="select__item" value={el} key={el} onClick={() => onChange(el)} >{el}</li>
          </ul>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  valueCars: state.cars.cars,
});

const mapDispatchToProps = {
  createSelect: (select) => ({ type: 'CREATE_SELECT', payload: select }),
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter);
