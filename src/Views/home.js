
import React from 'react';
import InfoCarousel from '../Components/infoCarousel'
import BottomNav from '../Components/bottomNav';


const home =() =>{
    return (
      <div className="page-container">
       
        <div className="carousel-container box-shadow2">
          <InfoCarousel />
        </div>
        <BottomNav />
      </div>
    );
} 
export default home;