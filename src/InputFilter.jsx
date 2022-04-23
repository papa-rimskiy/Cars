import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function InputFilter(props) {
  const [value, setValue] = useState('');

  useEffect(() => {
    props.createInput(value);
  }, [value]);

  const onChange = (e) => {
    const target = e.target.value;
    setValue(target);
  };

  return (
    <div className="input_filter">
      <input value={value} onChange={(e) => onChange(e)} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  inputValue: state.cars.cars,
});

const mapDispatchToProps = {
  createInput: (input) => ({ type: 'CREATE_INPUT', payload: input }),
};
export default connect(mapStateToProps, mapDispatchToProps)(InputFilter);
