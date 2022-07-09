import React, {useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard,faInfo,faTint,faHistory } from '@fortawesome/free-solid-svg-icons'
function NavButton(props) {
    const [width,setWidth]=useState(window.innerWidth)
     useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth)
    }
        window.addEventListener('resize', handleResize)
      })
      const widthChange = 800;
    const test1 =function(type){
        switch(type)
        {
            case 0:
                return <FontAwesomeIcon icon={faInfo}   className={width>widthChange? "fa-5x": "fa-2x"}/>
            case 1:
                return <FontAwesomeIcon icon={faTint}  className={width>widthChange? "fa-5x": "fa-2x"}/>
            case 2:
                return <FontAwesomeIcon icon={faHistory} className={width>widthChange? "fa-5x": "fa-2x"}/>
            case 3:
                return <FontAwesomeIcon icon={faAddressCard} className={width>widthChange? "fa-5x": "fa-2x"}/>
            default:
                    break;
        }
    }
    test1(props.type);
  return (
      
   <div className="nav-bottom-item ds-f-vert-center-sa box-shadow1">
       
       <NavLink
            end
            to={props.linkTo}
            className="ds-flex-center-column"
          >          
            <div className="nav-bottom-item-icon"> 
            
            {test1(props.type)} 
            </div>
            <div className="nav-bottom-item-text">{props.text} </div>
        </NavLink>
 

</div>
  );
};
export default NavButton;