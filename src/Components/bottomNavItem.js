import React from "react";
import { NavLink } from "react-router-dom";
import AKLogo from "../Pictures/Logo_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard,faInfo,faTint,faHistory } from '@fortawesome/free-solid-svg-icons'
const navBottom = (props) => {
    const test =function(){
        console.log("test me asd here")

    }
    const test1 =function(type){
        switch(type)
        {
            case 0:
                return <FontAwesomeIcon icon={faInfo} size="5x" />
                break;
            case 1:
                return <FontAwesomeIcon icon={faTint} size="5x"/>
                break;
            case 2:
                return <FontAwesomeIcon icon={faHistory} size="5x"/>
                break;
            case 3:
                return <FontAwesomeIcon icon={faAddressCard} size="5x"/>
                break;
        }
    }
    test1(props.type);
  return (
      
   <div className="nav-bottom-item ds-f-vert-center-sa box-shadow1">
       
       <NavLink
            end
            to={props.linkTo}
          >          
            <div className="nav-bottom-item-icon"> 
            {test1(props.type)} 
            </div>
            <div className="nav-bottom-item-text">{props.text} </div>
        </NavLink>
 

</div>
  );
};
export default navBottom;