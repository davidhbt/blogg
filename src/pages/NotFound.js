import React from "react";
import logo from '../assets/Group 2.png'

const NotFound = () => {
  return (
    <div>
      <img src="/images/404.jpg" alt="Page not found" />
      <div style={{ marginTop: '100px' }}>Powerd By <br /> <img src={logo} style={{ width: '200px' }} alt="" /></div>

    </div>
  );
};

export default NotFound;
