import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom,faTools,faTint,faKiwiBird,faWater,faPumpSoap } from '@fortawesome/free-solid-svg-icons'
const OffertCard = (props) => {
    const test =function(){
        console.log("test me asd here")

    }
    const IcongSelect =function(type){
        switch (type) {
          case 0:
            return <FontAwesomeIcon icon={faTools} size="5x" />;
            break;
          case 1:
            return <FontAwesomeIcon icon={faTint} size="5x" />;
            break;
          case 2:
            return <FontAwesomeIcon icon={faPumpSoap} size="5x" />;
            break;
          case 3:
            return <FontAwesomeIcon icon={faWater} size="5x" />;
            break;
          case 4:
            return <FontAwesomeIcon icon={faBroom} size="5x" />;
            break;
        }
    }
  return (
      
   <div className="nav-bottom-item ds-f-vert-center-sa box-shadow1">
       
                
            <div className="nav-bottom-item-icon"> 
            {IcongSelect(props.type)} 
            </div>
            <div className="nav-bottom-item-text">{props.text} </div>
       
 

</div>
  );
};
export default OffertCard;