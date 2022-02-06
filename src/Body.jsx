import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PriceFilter from './PriceFilter';
import SelectFilter from './SelectFilter';
import Content from './Content';
import Header from './Header';

function Body(props) {
  const [content, setContent] = useState([]);
  const [priceOf, setPriceOf] = useState('');
  const [priceTo, setPriceTo] = useState('');

  useEffect(() => {
    fetch('https://private-anon-e29d34398a-carsapi1.apiary-mock.com/cars')
      .then((responce) => responce.json())
      .then((json) => setContent(json));
  }, []);

  props.createCars(content.filter((el) => el.price >= priceOf && el.price <= priceTo));

  const acceptancePriceOf = (val) => {
    setPriceOf(val);
  };

  const acceptancePriceTo = (val) => {
    setPriceTo(val);
  };

  return (
    <>
      <Header />
      <div className="filters_and_information">
        <div className="filters">
          <PriceFilter
            acceptancePriceOf={acceptancePriceOf}
            acceptancePriceTo={acceptancePriceTo}
          />
          <SelectFilter />
        </div>
        <div className="information">
          <h5>Favorite Motors of the World - sale and delivery of cars from America, Europe and Asia.
            The largest automotive Internet site in the world. New cars at below market prices.
            <p className="Copyright"> © 2021 Favorite Motors of the World</p>
          </h5>
        </div>
      </div>
      <div className="content">
        <Content />
      </div>
    </>
  );
}

const mapDispatchToProps = {
  createCars: (cars) => ({ type: 'CREATE_CARS', payload: cars }),
};

export default connect(null, mapDispatchToProps)(withRouter(Body));
