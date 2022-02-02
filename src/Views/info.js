import React ,{useState,useEffect }from "react";
import AKLogo from "../Pictures/Logo_2.png";
import Water10 from "../Pictures/water-pic14.jpg";

import { Parallax } from 'react-parallax';
const image3 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
  const inlineStyle={
    background: '#fff',
    left: '50%',
    top: '50%',
    position:'absolute',
    padding: '20px',
    transform: 'translate(-50%,-50%)'
  
  }
function Info(){
    const [count, setCount] = useState(0);
    function testMe(){
        setCount(count + 1);
        console.log("TestMe",count)
    }
    
    useEffect(() => {
        // Zaktualizuj tytuł dokumentu, korzystając z interfejsu API przeglądarki
        document.title = `Naciśnięto ${count} razy`;
      });
    return (
      <div className="page-container">
        <Parallax bgImage={Water10} strength={-600}>
          <div className="parallax-container">
            <div className="logo-back-shadow center-logo">
            <img src={AKLogo} alt="Bezpieczna woda Logo" className="logo-info"/>

            </div>
          </div>
        </Parallax>
        
        <div className="space-between box-shadow1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.

Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt eget. Leo a diam sollicitudin tempor id. A lacus vestibulum sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Et malesuada fames ac turpis egestas sed. Sit amet nisl suscipit adipiscing bibendum est ultricies. Arcu ac tortor dignissim convallis aenean et tortor at. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eros donec ac odio tempor orci dapibus ultrices. Elementum nibh tellus molestie nunc. Et magnis dis parturient montes nascetur. Est placerat in egestas erat imperdiet. Consequat interdum varius sit amet mattis vulputate enim.

Sit amet nulla facilisi morbi tempus. Nulla facilisi cras fermentum odio eu. Etiam erat velit scelerisque in dictum non consectetur a erat. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Ut sem nulla pharetra diam. Fames ac turpis egestas maecenas. Bibendum neque egestas congue quisque egestas diam. Laoreet id donec ultrices tincidunt arcu non sodales neque. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Faucibus interdum posuere lorem ipsum dolor sit.</p>
        </div>
      </div>
    );
}
export default Info;