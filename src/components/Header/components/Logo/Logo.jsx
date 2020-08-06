import React from "react";
import { withRouter } from 'react-router-dom';

import "./Logo.scss";

const Logo = (props) => {

  const backToHomePage = () => {
    props.history.push('/')
  }

  return <h1 onClick={backToHomePage} className="logo">WordsMine!</h1>;
};

export default withRouter(Logo);
