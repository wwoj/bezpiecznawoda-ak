import React from "react";
import NavObject from './bottomNavItem';
import BottomNavObject from "./BottomNavObject";
const navBottom = () => {
  return (
   <div className="bottom-nav-container  ds-flex-wr-js-sb">
  
       
       <NavObject text="O firmie" type={0} linkTo="/info"/>
       <NavObject text="Oferta" type={1} linkTo="/offerts"/>
       <NavObject text="Kontakt" type={3} linkTo="/contact"/>
   


</div>
  );
};
export default navBottom;
