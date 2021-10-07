import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../assets/sty_joinus.css";
import { useAuth } from "../contexts/Authcontext";

function Joinus() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div>
      <div className="backgroundWrapper">
        <div className="joinusWapper">
          <h1>Create New Account</h1>
          <form action="" className="joinInput">
            <div className="emailAddress">
              <input
                type="text"
                className="emailAddress"
                ref={emailRef}
                required
              />
              <label for="emailAddress">Email Address</label>
            </div>

            <div className="passw">
              <input
                type="password"
                className="password"
                ref={passwordRef}
                required
              />
              <label for="password">Password</label>
            </div>
            <div className="passw">
              <input
                type="password"
                className="checkPasw"
                ref={passwordConfirmRef}
                required
              />
              <label for="password">Confirm Password</label>
            </div>
          </form>
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Joinus;
