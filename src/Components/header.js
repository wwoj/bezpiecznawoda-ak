import React from "react";
import Media from 'react-media';
import NavbarBig from './navbarBig';
import NavbarSmall from './navbarSmall';

function Header(){
 
  return (
      <Media queries={{ small: { maxWidth: 700 } }}>
          {matches =>
            matches.small ? (
              <NavbarSmall/>
            ) : 
            <NavbarBig/>
            
          }
        </Media>
      
    
  );
};
export default Header;
