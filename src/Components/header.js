import React from "react";
import { Link, NavLink } from "react-router-dom";
import AKLogo from "../Pictures/Logo_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faMobile,faPhone } from '@fortawesome/free-solid-svg-icons'
const header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-li">
          <div>
            <img src={AKLogo} alt="Bezpieczna woda Logo" />
          </div>
        </li>
        <li className="navbar-li">
          <NavLink
            activeclassname="test"
            className="nav-link navbar-text"
            end
            to="/"
          >
            Strona główna
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink
            activeclassname="test"
            className="nav-link navbar-text"
            end
            to="/contact"
          >
            Kontakt
          </NavLink>
        </li>
        <li className="navbar-li">
          <NavLink
            activeclassname="test"
            className="nav-link navbar-text"
            end
            to="/contact/mail"
          >
            Contact-Mail
          </NavLink>
        </li>
      </ul>
      <div className="navbar-contact-container">
        <ul className="navbar-list navbar-contact">
          <li>
            <a className="navbar-contact-item" href="tel:+48534073727">
              Zadzwoń do nas
              <FontAwesomeIcon icon={faMobile} />

            </a>
          </li>

          <li>
            <a
              className="navbar-contact-item"
              href="mailto:bezpiecznawoda@bzwoda.pl"
            >
              napisz do nas
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
        </div>
    </nav>
  );
};
export default header;
