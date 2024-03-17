import React from "react";
import "./Dashboard.css";
import HeroImg from "../../Component/Assets/banner_img.jpg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-box container">
        <div className="left-content">
          <h1>Practice Your Driving Test</h1>
          <p>check Our Latest Classes with latest question and answers</p>

          <Link to="/classes">
            <button className="hero_btn"> Click Here For Test</button>
          </Link>
        </div>

        <div className="right-content">
          <img src={HeroImg} alt="heroimage" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
