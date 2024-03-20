import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Component/Slice/authSlice";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [handleEye, setHandleEye] = useState(true);
  const [loading, setLoading] = useState(false);

  const notify = () => toast("Please Enter Valid Credential!");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("https://icbsbackend.onrender.com/api/auth/login", {
        email,
        password,
      })
      .then((result) => {
        if (result.data.status === "success") {
          setTimeout(() => {
            dispatch(login());
            navigate("/dashboard");
            setEmail("");
            setPassword("");
            setLoading(false);
          }, 1000);
        }
      })
      .catch((err) => {
        notify();
        setLoading(false);
      });
   
  };

  return (
    <div className="login">
      <div className="login-card">
        <h2>Login Form</h2>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={handleEye ? "password" : "text"}
              placeholder="password"
              className="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              style={{ position: "absolute", right: "15px", top: "5px" }}
              onClick={() => {
                setHandleEye(!handleEye);
              }}
            >
              {handleEye ? (
                <i class="fa-regular fa-eye-slash"></i>
              ) : (
                <i class="fa-regular fa-eye"></i>
              )}
            </span>
          </div>

          <Link to="/register" className="fp">
            Forgot password?
          </Link>

          {!loading ? (
            <button type="submit" className="login_btn">
              Login
            </button>
          ) : (
            <button disabled={true} className="login_btn">
              Processing...
            </button>
          )}
        </form>

        <ToastContainer />

        <div className="footer_card">
          <p>Not a member?</p>
          <Link to="/register">Sign-up now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
