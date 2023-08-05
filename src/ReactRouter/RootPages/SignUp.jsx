import React, { useState} from "react";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";
import './Home.css'
import {  ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUp=()=>{
  
  const navigate = useNavigate();
    
  const [input, setInput] = useState({
      email: "",
      password: "",
  });

  const handleSubmit =(e)=>{
      if (!input.email) {
          toast.error("Email ID is required");
      }
      else if (!input.password) {
          toast.error("Password is required");
      }
      else if(input.password.length<=6){
          toast.error("Password should be more than 6 characters");
      }
      else{
      localStorage.setItem("user", JSON.stringify(input));
      toast.success("Sign Up Successful",{
          position: toast.POSITION.TOP_CENTER
      });
      setTimeout(() => {
          navigate("/Login");
        }, 3000);
      }
  }
  const handleLogout = () => {
      localStorage.removeItem("loggedIn");
      navigate("/signup");
  }
    return(
        <>
        <div className="signup">
            <div className="hh1">Create an Account</div>
            <hr></hr>
            <div className="f">
               <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email"
            id="email"
            name="email"
                                value={input.email}
                                onChange={(e) =>
                                    setInput(
                                        { ...input, [e.target.name]: e.target.value }
                                    )
                                } />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input  type="password"
             id="password"
             name="password"
                                value={input.password}
                                onChange={(e) =>
                                    setInput(
                                        { ...input, [e.target.name]: e.target.value }
                                    )
                                }/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">I'm not a Robot.</label>
  </div>
  <div className="login">
                        <button type="button" className="btn btn-primary" id="bton">SignUp</button><br />
                        <ToastContainer />
                      </div>
                      <div className="modal-footer d-flex justify-content-center">
                       
                          <div class="signup-section">Already have an account? 
                          <Link to="/Login" class="text-info">Login</Link>
                          
                        </div>
                      </div>
                    </form>
            </div>
        </div>
        <div className="logout2">
                    <button id="logoutbtn2" onClick={handleLogout}>Log Out</button>
                </div>
        </>
    )
}
export default SignUp; 