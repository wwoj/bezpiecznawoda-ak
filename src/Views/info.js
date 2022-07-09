import React from "react";
import AKLogo from "../Pictures/Logo_5.png";
import Water10 from "../Pictures/water-pic14.jpg";

import { Parallax } from 'react-parallax';

function Info(){

    return (
      <div className="page-container">
        <Parallax bgImage={Water10} strength={-500}>
          <div className="parallax-container">
            <div className="logo-back-shadow center-logo">
            <img src={AKLogo} alt="Bezpieczna woda Logo" className="logo-info" style={{width:"175px"}}/>

            </div>
          </div>
        </Parallax>
        
        <div className="space-between ">
          <h2>O nas:</h2>
        <p>
          Zespół składający się z&nbsp;osób posiadających długoletnie doświadczenie w&nbsp;branży dezynfekcji i&nbsp;uzdatniania wody. 
          </p>
          <p>Domeną firmy jest profesjonalizm oraz 
          indywidualne podejście do każdego przypadku. 
            </p>
            <h4 >Siła w skuteczności,
skuteczność w&nbsp;doświadczeniu</h4>
          </div>
      </div>
    );
}
export default Info;