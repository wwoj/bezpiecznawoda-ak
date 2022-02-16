import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import AKLogo from "../Pictures/Logo_4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faPhone, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

function NavbarSmall(){
    const [height, setCount] = useState(0);
 
    const switchMenuVisibility = function(){
        height ===0? setCount(100) :setCount(0);
    }
   
  return (
    <nav className="ds-flex-sb nav-container ds-flex-wramp">
      <ul
        className="list-style ds-flex-sb ds-flex-wramp"
        style={{ width: "100%", padding: "0" }}
      >
        <li>
          <NavLink activeclassname="test" className="" end to="/">
            <img
              style={{ width: "220px" }}
              src={AKLogo}
              alt="Bezpieczna woda Logo"
            />
          </NavLink>
        </li>
        <li>
          <div style={{ color: "white" }} onClick={switchMenuVisibility}>
            <FontAwesomeIcon icon={faBars} size="3x" />
          </div>
        </li>
      </ul>
      <div className="small-navbar" style={{height:`${height}%`}}>
        <div className="List-container">
          <ul className="small-navbar-ul">
            <li>
              <div style={{ color: "white" }} onClick={switchMenuVisibility}>
                <FontAwesomeIcon icon={faArrowCircleUp} size="3x" />
              </div>
            </li>
            <li>
              <NavLink activeclassname="test" className="" end to="/info" onClick={switchMenuVisibility}>
                O firmie
              </NavLink>
            </li>
            <li>
              <NavLink to="/offerts" activeclassname="selected" onClick={switchMenuVisibility}>
                Oferta
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="test" className="" end to="/history" onClick={switchMenuVisibility}>
                Realizacje
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="test" className="" end to="/contact" onClick={switchMenuVisibility}>
                Kontakt
              </NavLink>
            </li>
            <li>
              <a href="tel:+48534073727">
                <FontAwesomeIcon icon={faPhone} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavbarSmall;
