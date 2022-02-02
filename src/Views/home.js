
import React from 'react';
import Logo1 from '../Pictures/water-pic1.jpg'
import InfoCarousel from '../Components/infoCarousel'
import BottomNav from '../Components/bottomNav';
import Water1 from "../Pictures/water-pic5.jpg";

import { Parallax } from 'react-parallax';
const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
  const inlineStyle={
    // background: '#fff',
    // left: '50%',
    // top: '50%',
    // position:'absolute',
    // padding: '20px',
    // transform: 'translate(-50%,-50%)'
  
  }
const home =() =>{
    return (
      <div className="page-container">
        <Parallax bgImage={Water1} strength={500}>
          <div  className='parallax-container'>
          <div className="text-back-shadow left-top-text">
          Wielkie oczekiwania są kluczem do wszystkiego
            </div>
            <div className="text-back-shadow right-bottom-text">
              Siła w skuteczności, <br />
              skuteczność w doświadczeniu
            </div>
          </div>
        </Parallax>
        <div className="carousel-container box-shadow2">
          <InfoCarousel />
        </div>
        <BottomNav />
      </div>
    );
} 
export default home;