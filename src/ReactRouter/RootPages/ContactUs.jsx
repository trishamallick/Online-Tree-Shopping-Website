import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

const ContactUs = () => {
  return (
    <>
      <div className="cu">
        <div className="cub">
          <div className="map">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15403223.938914822!2d81.29134770937499!3d19.517870162713354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1680436558320!5m2!1sen!2sin" style={{ style: "border:0;", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }} id="map"></iframe> */}
            <img src="../image/cu.jpg" alt="Contact Us" id="map" />
          </div>
          <div className="cus">
            <div className="cud">
              <div className="od">
                <h4>Contact Info</h4>
                <br />
                <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;
                Gobardanga, North 24 PGS., West Bengal, 743273
                <br />
                <br />
                <FontAwesomeIcon icon={faEnvelope} />&nbsp;
                flowerseason@gmail.com
                <br />
                <br />
                <FontAwesomeIcon icon={faPhone} />&nbsp;
                +91-9989898999
              </div>
            </div>
            <div className="cuf">
              <form>
                <input type="text" placeholder="Full Name" /><br />
                {/* <input type="tel" placeholder="Mobile Number" /><br /> */}
                <input type="email" placeholder="Email ID" /><br />
                <input placeholder="Message.." id="message" /><br />
                <button id="btn34">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
