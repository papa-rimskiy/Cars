import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from './Loading';
import Header from './Header';

function CarsChoise({ inputValue, ...props }) {
  const [infoCars, setInfoCars] = useState([]);
  const newsTitle = props.match.params.model

  useEffect(() => {
    fetch('http://localhost:3000/cars.json')
      .then((responce) => responce.json())
      .then((json) => setInfoCars(json.cars));
  }, [newsTitle]);

  if (infoCars.length === 0) {
    return (
      <div className="Content">
        <Loading />
      </div>
    );
  }

  const inputValueFilter = inputValue.filter((el) => el.model === newsTitle);
  const infoCarsFind = infoCars.find((el) => el.make === inputValueFilter[0].make);
  const makeInfo = [];
  makeInfo.push(infoCarsFind);

  return (
    <>
      <Header />
      <div className="cars_choise">
        {makeInfo.map((el) =>
          <div className="info_about_make">
          <div className="info_about_make_logo">
            <div className="info_about_make_img" style={{ backgroundImage: `url(${el.logo})` }}> </div>
           </div>
        <div className="info_about_make_history">
          <h1>{el.info}</h1>
        </div>
      </div>
      )}
      {inputValueFilter.map(el => 
      <div className="cars_choise_characteristic">  
        <div className="cars_choise_characteristic_img">
          <div className="cars_choise_characteristic_img_logo" style={{ backgroundImage: `url(${el.img_url})` }}></div>
        </div>
        <div className="cars_choise_full_characteristics">
          <div className="cars_choise_full_characteristics_make">{el.make}</div>
          <div className="cars_choise_full_characteristics_model">{el.model}</div>
          <div className="cars_choise_full_characteristics_year">year: {el.year}  </div>
          <div className="cars_choise_full_characteristics_horsepower">horsepower: {el.horsepower} </div>
          <div className="cars_choise_full_characteristics_price">{el.price} $</div>
        </div>
      </div>
      )}
    </div>
  </>
  );
}

const mapStateToProps = (state) => ({
  inputValue: state.cars.cars,
});

export default connect(mapStateToProps)(withRouter(CarsChoise));
