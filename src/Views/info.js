import React ,{useState,useEffect }from "react";
import AKLogo from "../Pictures/Logo_2.png";
import Water10 from "../Pictures/water-pic14.jpg";

import { Parallax } from 'react-parallax';

function Info(){

    return (
      <div className="page-container">
        <Parallax bgImage={Water10} strength={-500}>
          <div className="parallax-container">
            <div className="logo-back-shadow center-logo">
            <img src={AKLogo} alt="Bezpieczna woda Logo" className="logo-info"/>

            </div>
          </div>
        </Parallax>
        
        <div className="space-between box-shadow1">
          <p>
          Zespół składający się z osób posiadających długoletnie doświadczenie w branży dezynfekcji i uzdatniania wody poparte licznymi sukcesami. Domeną firmy jest profesjonalizm oraz indywidualne podejście do każdego przypadku. Preferujemy indywidualne spotkania rozpoznawcze bez żadnych zobowiązań
            </p>
            <h4 style={{padding:"1rem"}}>Siła w skuteczności,
skuteczność w doświadczeniu</h4>
          </div>
      </div>
    );
}
export default Info;