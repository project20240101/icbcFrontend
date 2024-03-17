import React from "react";
import "./Classes.css";
import { Link, useNavigate } from "react-router-dom";

const Classes = () => {

  const navigate = useNavigate();

  return (
    <div className="classes">
      <section className="classes-box container">
        <div className="classes-heading">
          <h2>
            Our <span className="b-class-secondary">Classes </span>
          </h2>
        </div>

        <div className="classes-grid">   

        <Link   to="/questions/:class1">
        <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
          <i class="fa-solid fa-truck-fast"></i>
          </div>
          <h3>CLASS 1  (semi-trailer truck)</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam consequatur necessitatibus eaque.
          </p>
        </div>
      </div>
        </Link>
        
        <Link   to="/questions/:class2">
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
              <i class="fa-solid fa-bus"></i>
              </div>
              <h3>CLASS 2 (Bus)</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          </Link>

          <Link   to="/questions/:class3">
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
              <i class="fa-solid fa-truck-moving"></i>
              </div>
              <h3>CLASS 3 (truck with more then two axels)</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          </Link>

          <Link   to="/questions/:class4">
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
              <i class="fa-solid fa-taxi"></i>
              </div>
              <h3>CLASS 4 (taxi, limousine, ambulance)</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          </Link>

          <Link   to="/questions/:class5">
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
              <i class="fa-solid fa-van-shuttle"></i>
              </div>
              <h3>CLASS 5 (passenger vehicle)</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          </Link>


          <Link   to="/questions/:class6">
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
              <i class="fa-solid fa-motorcycle"></i>
              </div>
              <h3>CLASS 6 (motorcycle)</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          </Link>

          <Link   to="/questions/:class7">
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
              <i class="fa-solid fa-sliders"></i>
              </div>
              <h3>CLASS 7 (air brake endorsement)</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          </Link>

          <Link   to="/questions/:class7">
          <div className="col">
            <div className="service-card">
              <div className="icon-wrapper">
              <i class="fa-solid fa-caravan"></i>
              </div>
              <h3>CLASS 8 (

                house trailer endorsement)</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Classes;
