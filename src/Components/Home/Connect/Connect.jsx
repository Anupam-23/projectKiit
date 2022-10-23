import React from "react";
import "./Connect.scss";

const connect = () => {
  return (
    <div className="wrapper">
      <div
        className="connect"
        style={{ backgroundImage: ` url(asset/images/Home/home.jpg)`, backgroundSize: 'cover'}}>
        <div className="cont">
          <h1 className="heading">
            Connect with  <br /> Alumni 
          </h1>
          <button type="button" className="connect-btn">
            Connect
          </button>
        </div>
      </div>
      <div
        className="knowmore"
        style={{ backgroundImage: `url(asset/images/Home/Event/bg.png)` }}>
        <p className="info">
          Register and Login
          <br />
          Connect to Alumni
          <br />
          Explore Job Opportunities
          <br />
          Share Memories
          <br />
        </p>
        <button type="button" className="know-btn">
          Know More
        </button>
      </div>
    </div>
  );
};

export default connect;
