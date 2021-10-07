import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/Authcontext";
import "../assets/sty_login.css";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div>
      <div className="backgroundWrapper">
        <div className="loginWapper">
          <h1>LOGIN</h1>
          <form action="" className="inputGroup">
            <div className="loginForm">
              <input
                type="text"
                className="emailAddress"
                ref={emailRef}
                required
              />
              <label for="emailAddress">Email Address</label>
            </div>
          </form>
          <form action="" className="inputGroup">
            <div className="passw">
              <input
                type="password"
                className="password"
                ref={passwordRef}
                required
              />
              <label for="password">Password</label>
            </div>
          </form>
          <div className="btnGroup">
            <div className="login_Btn">
              <button type="submit">LOG-IN</button>
            </div>
            <div className="joinUs">
              <h3>You do not have a account?</h3>
              <NavLink to="/Joinus" className="joinlink">
                JOIN-US
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
