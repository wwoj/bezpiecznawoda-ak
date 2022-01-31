
import React from 'react';
import Logo1 from '../Pictures/water-pic1.jpg'
import InfoCarousel from '../Components/infoCarousel'
const home =() =>{
    return(
        <div>
            <div className='slogan-container slogon-size'>
                <div className='slogon-size'>
                    <img src={Logo1} alt={"Company motto"} className='slogon-size'/>
                </div>
                <div className='slogan-text'>
                    Siła w skuteczności, skuteczność w doświadczeniu 
                </div>
            </div>
            <InfoCarousel/>
            Hello in Home page
            </div>
    )
} 
export default home;