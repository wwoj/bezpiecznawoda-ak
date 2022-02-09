import React from "react";
import NavObject from './bottomNavItem';
import { NavLink } from "react-router-dom";
import AKLogo from "../Pictures/Logo_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faMobile } from '@fortawesome/free-solid-svg-icons'
const navBottom = () => {
  return (
   <div className="bottom-nav-container box-shadow1 ds-flex-wr-js-sb">
       
       
       <NavObject text="O firmie" type={0} linkTo="/info"/>
       <NavObject text="Oferta" type={1} linkTo="/offerts"/>
       <NavObject text="Realizacje" type={2} linkTo="/history"/>
       <NavObject text="Kontakt" type={3} linkTo="/contact"/>

       {/* <NavObject text="Rozwiązywanie problemów" iconClass="fas fa-address-card"/>
       <NavObject text="Uzdatanianie wody" iconClass="fas fa-address-card"/>
       <NavObject text="Innowacyjne metody" iconClass="fas fa-address-card"/>
       <NavObject text="Kontakt" iconClass="fas fa-address-card"/> */}

</div>
  );
};
export default navBottom;