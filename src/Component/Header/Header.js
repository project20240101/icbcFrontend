import React from "react";
import "./Header.css";
import Logo1 from "../Assets/rohin-library.png";
import Logo from "../Assets/logo.png";
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import {logout } from "../Slice/authSlice";


const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);




  const handleLogout=(e)=>{
    e.preventDefault();
    navigate("/")
    dispatch(logout())

  }


  return (
    <div className="header">
      <div className="header-box container">
        <div className="logo">
        {
          isLoggedIn ?   <Link to="/dashboard">  <img  src={Logo} alt="logo" /> </Link>

          : <Link to="/">  <img src={Logo} alt="logo" /> </Link>
        }
       
        
        </div>
        <div className="logout-btn">
        {isLoggedIn  &&  <button onClick={handleLogout} className="loggout_btn">Logout</button>}
         
        </div>
      </div>
    </div>
  );
};

export default Header;
