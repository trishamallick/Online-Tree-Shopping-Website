
import React from "react";
import "./RootPages/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h4>About Us</h4>
            <p>
              We are a plant nursery dedicated to providing high-quality plants
              and excellent customer service. Browse our collection and start
              creating your dream garden today.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/add-to-cart">Add To Cart</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contactUs">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                Gobardanga, North 24 PGS., West Bengal, 743273
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                flowerseason@gmai.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                +91-9989898999
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">
                &copy; {new Date().getFullYear()} Plant Nursery. All Rights Reserved.
              </p>
              <ul className="social-media">
                <li>
                  <Link to="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
