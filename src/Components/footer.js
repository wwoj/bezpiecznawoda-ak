import React from "react";
import AKLogo from "../Pictures/Logo_4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const footer = () => {
  return (
    <div className="footer-container box-shadow2 ds-flex-wr-js-sb">
      <div className="footer-column-container ds-flex-center-center">
        <div className="footer-column-title ds-flex-center-center">
          <img src={AKLogo} alt="Bezpieczna woda Logo" />
        </div>
      </div>
      <div className="footer-column-container ds-flex-start-start-column">
        <h2 className="footer-column-title">Śledź nas</h2>
        <div className="list-of-social ds-flex-center-center">
          <a
            href="https://www.facebook.com/Bezpieczna-Woda-100265002841328"
            target="_blank"
            rel="noreferrer"
            className="ds-flex-center-center"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
      </div>
      <div className="footer-column-container ds-flex-start-start-column">
        <h2 className="footer-column-title">Kontakt</h2>
        <p className="footer-column-title">Artur Konopka</p>
        <p className="footer-column-title">biuro@bezpiecznawoda.com</p>
        <p className="footer-column-title">+48-574-231-257</p>
      </div>
    </div>
  );
};
export default footer;
