import React from "react";
import AKLogo from "../Pictures/Logo_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const footer =()=>{
    return (
      <div className="footer-container box-shadow2 ds-flex-wr-js-sb">
        <div className="footer-column-container ds-flex-center-center">
          <div className="footer-column-title ds-flex-center-center">
            <img src={AKLogo} alt="Bezpieczna woda Logo" />
          </div>
        </div>
        <div className="footer-column-container ds-flex-start-start-column">
          <h2 className="footer-column-title">Śledz nas</h2>
          <div className="list-of-social ds-flex-center-center">
            
            <a href="https://www.facebook.com/" target="_blank" className="box-shadow1">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            </a>
          </div>
        </div>
        <div className="footer-column-container ds-flex-start-start-column">
          <h2 className="footer-column-title">Kontakt</h2>
          <h5 className="footer-column-title">bezpiecznaWoda-ak</h5>
          <p className="footer-column-title">ul. xxxxxxxxx XX</p>
          <p className="footer-column-title">XX-XXX Kraków</p>
        </div>
      </div>
    );
}
export default footer;