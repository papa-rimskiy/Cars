import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loading from './Loading';

function Content(props) {
  if (props.valueCars.length === 0) {
    return (
      <div className="Content">
        <Loading />
      </div>
    );
  }

  const choise = (el) => {
    props.history.push(`/cars/${el.model}`);
  };

  const input = props.valueInput
  const select = props.valueSelect

  const filterInput = (result) => {
    return result.filter(el => el.make.includes(input) || el.model.includes(input))
  }

  const filterSelect = (result) => {
    if (select === 'all') {
      return result;
    } else {
      return result.filter(el => el.make.includes(select))
    }
  };

  const carsFilter = () => {
    const { valueCars } = props;
    let result = valueCars;

    result = filterInput(result);
    result = filterSelect(result);
    return result;
  }

  const carsStore = carsFilter();
  return (
    <div className="cars_store">
      {carsStore.map((el) =>
        <div className="cars_info" key={el.model} onClick={() => choise(el)}>
          <div className="cars_img" key={el.model} style={{ backgroundImage: `url(${el.img_url})` }}></div>
          <div className="cars_make" key={el.model}>{el.make}</div>
          <div className="cars_model" key={el.model}>{el.model}</div>
          <div className="cars_year" key={el.model}>year: {el.year}</div>
          <div className="cars_horsepower" key={el.model}>horsepower: {el.horsepower} </div>
          <div className="cars_price" key={el.model}>price: {el.price} $</div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  valueCars: state.cars.cars,
  valueInput: state.input.input,
  valueSelect: state.select.select,
});

export default connect(mapStateToProps, null)(withRouter(Content));
