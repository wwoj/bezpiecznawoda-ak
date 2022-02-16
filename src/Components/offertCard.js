import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom,faTools,faTint,faFaucet,faWater,faPumpSoap } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';
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
            return <FontAwesomeIcon icon={faFaucet} size="5x" />;
            break;
        }
    }
  return (
    <Link className="offerts-link-to ds-f-vert-center-sa nav-bottom-item" to={"offert_"+props.target} duration={5000}>
    <div className="nav-bottom-item ds-f-vert-center-sa box-shadow1">
      
        <div className="nav-bottom-item-icon">{IcongSelect(props.type)}</div>
        <div className="nav-bottom-item-text">{props.text} </div>
        
    </div>
    </Link>

  );
};
export default OffertCard;