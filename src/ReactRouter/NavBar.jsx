import React from "react";
import "./RootPages/Home.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart"; 

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">FlowerSeason</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
         
            <li className="nav-item ">
              <NavLink to="/" className="nav-link" id="nlink">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
            <NavLink
                className="nav-link dropdown-toggle"
                to="/lifespan"
                id="nlink"
                role="button"
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Lifespan
              </NavLink>
              <ul class="dropdown-menu">
                <li><NavLink  to="/annual" className="dropdown-item" id="ditem">Annual Plant</NavLink></li>
                <li><NavLink to="/biennial" className="dropdown-item" id="ditem">Biennial Plant</NavLink></li>
                <li><NavLink to="/perennial" className="dropdown-item" id="ditem">Perennial Plant</NavLink></li>
              </ul>
            </li>
            <li class="nav-item">
              <NavLink to="/Pots" className="nav-link" id="nlink">
              Pots & Planters
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/about" className="nav-link" id="nlink">About</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink to="/ContactUs" className="nav-link" id="nlink">Contact Us</NavLink>
            </li>

          </ul>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="Navigate">
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" id="menubar">

              <li className="nav-item ">
                <NavLink to="/Login" className="nav-link" title="Account"><FontAwesomeIcon icon={faUser} /></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/add-to-cart" className="nav-link" title="Cart"><FontAwesomeIcon icon={faCartShopping} /></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Wishlist" className="nav-link" title="Wishlist"><FontAwesomeIcon icon={faHeart} /></NavLink>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}
export default NavBar;