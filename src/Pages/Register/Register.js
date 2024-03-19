import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [handleEye, setHandleEye] = useState(true);

  const navigate = useNavigate();

  const note = () =>
    toast("please enter valid name & password upto five charactors");
  const success = () => toast("User Created Successfully");
  const fail = () => toast("user name or email existed!");

  useEffect(() => {}, [error]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length < 5 || name.length < 5) {
      setError(true);
      setTimeout(() => {
        note();
      }, 1000);
    } else {
      axios
        .post("https://icbsbackend.onrender.com/api/auth/register", {
          name,
          email,
          password,
        })
        .then((result) => {
          if (result.data.status === "success") {
            setError(false);
            navigate("/");
            setTimeout(() => {
              success();
            }, 1000);
          }
        })
        .catch((err) => (err ? fail() : ""));
    }
  };

  return (
    <div className="register">
      <div className="register-card">
        <h2>Signup Form</h2>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="name"
            placeholder="Name"
            className="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <button type="submit" className="login_btn">
            Signup
          </button>
        </form>
        <ToastContainer />

        <div className="footer_card">
          <p>Already Have an account.</p>
          <Link to="/">Login Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
