import React from "react";
import { NavLink } from "react-router-dom";
import AKLogo from "../Pictures/Logo_3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function NavbarBig(){
 
  return (
    <nav className="ds-flex-sb nav-container ds-flex-wramp">
      
      <ul className="list-style ds-flex-sb ds-flex-wramp">
        <li>
          <NavLink activeclassname="test" className="" end to="/">
            <img className="logo-container" src={AKLogo} alt="Bezpieczna woda Logo" />
          </NavLink>
        </li>
      </ul>
      <ul className="list-style ds-flex-sb ds-flex-wramp">
        <li>
          <NavLink activeclassname="test" className="" end to="/info">
            O firmie
          </NavLink>
        </li>
        <li>
        <NavLink to="/offerts" activeclassname="selected">
            Oferta
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="test" className="" end to="/history">
            Realizacje
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="test" className="" end to="/contact">
            Kontakt
          </NavLink>
        </li>
        <li>
          <a href="tel:+48534073727">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavbarBig;
