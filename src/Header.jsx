import React from 'react';
import { withRouter } from 'react-router-dom';
import InputFilter from './InputFilter';

function Header(props) {
  const backToMainPage = () => {
    props.history.push('/');
  };

  return (
    <div className="header">
      <div className="logoAndName" onClick={backToMainPage}>
        <img className="logo" src="../images/logo.jpg" />
        <h2 className="cars">Favorite Motors of the World</h2>
      </div>
      <InputFilter />
    </div>
  );
}

export default withRouter(Header);
