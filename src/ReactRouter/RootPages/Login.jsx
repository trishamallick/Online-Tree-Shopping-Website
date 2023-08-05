import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import {GoogleLoginButton} from "react-social-login-buttons";
import {FacebookLoginButton} from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
import {LoginSocialGoogle} from "reactjs-social-login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };
  const handleSocialLogin = (user) => {
    console.log(user);
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
  };


  return (

    <>
      <div className="signup">
        <div className="hh1">Log In</div>
        <hr></hr>
        <div className="f">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required />
            </div>
            <Link to="/ForgotPass">
              <div className="fp">Forgot Password?</div></Link>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">I'm not a Robot.</label>
            </div>
            <div className="login">
              <button type="submit" className="btn btn-primary" id="bton">Login</button><br />
            </div>
            <div class="text-center text-muted delimiter" id="ousn">or use a social network</div>
            <div class="d-flex justify-content-center social-buttons" id="slogo">
              <LoginSocialGoogle 
               client_id={"300265427136-07feq0seg4bkgcsqf4hnlts31j1qq5sc.apps.googleusercontent.com"}
               scope="openid profile email"
               discoveryDocs="claims_supported"
               access_type="offline"
               onResolve={({ provider, data }) => {
                 console.log(provider, data);
               }}
               onReject={(err) => {
                 console.log(err);
               }}
              >
              <button type="button" id="fab" class="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Google" style={{ width:"6rem" }}>
                 <GoogleLoginButton
              style={{
                height: '1rem',
              }}
            />
              </button>
              </LoginSocialGoogle>
              <LoginSocialFacebook
                provider="facebook"
                appId="247479408088096"
                onLoginSuccess={handleSocialLogin}
                onLoginFailure={handleSocialLoginFailure}
              >
                <button
                  type="button"
                  id="fab"
                  class="btn btn-secondary btn-round"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                  style={{
                    width:"6rem"
                  }}
                >
                  <FacebookLoginButton style={{
                height: '1rem',
              }}/>
                </button>
              </LoginSocialFacebook>
            </div>
            <div className="modal-footer d-flex justify-content-center">

              <div class="signup-section">Already have an account?
                <Link to="/SignUp" class="text-info">Sign up</Link>

              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
