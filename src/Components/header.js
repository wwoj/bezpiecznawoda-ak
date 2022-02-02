import React,{useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import AKLogo from "../Pictures/Logo_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faPhone, } from '@fortawesome/free-solid-svg-icons'
function Header(){
 
  return (
    <nav className="ds-flex-sb nav-container ds-flex-wramp">
      <ul className="list-style ds-flex-sb ds-flex-wramp">
        <li>
          <NavLink activeClassName="test" className="" end to="/">
            <img src={AKLogo} alt="Bezpieczna woda Logo" />
          </NavLink>
        </li>
      </ul>
      <ul className="list-style ds-flex-sb ds-flex-wramp">
        <li>
          <NavLink activeClassName="test" className="" end to="/info">
            O firmie
          </NavLink>
        </li>
        <li>
        <NavLink to="/offerts" activeClassName="selected">
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
          <a href="tel:+48533098555">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
{/* <NavLink
              activeclassname="test"
              className="nav-link navbar-text"
              end
              to="/"
            >
              Strona główna
            </NavLink> */}