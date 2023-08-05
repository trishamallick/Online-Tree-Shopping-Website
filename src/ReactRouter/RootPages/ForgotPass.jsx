import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEmailSent(true);
  };

  return (
    <>
      <div className="forg">
        <div className="forgot-password">
          {isEmailSent ? (
            <div>
              <h2>Reset Password Email Sent!</h2>
              <p>Please check your email for further instructions.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Forgot Password</h2>
              <p>Enter your email address to receive a password reset link.</p>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="bn">
                <button type="submit" className="ln1">Send Reset Link</button><br />
                <Link to="/Login">
                  <button className="ln">Login</button>
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
