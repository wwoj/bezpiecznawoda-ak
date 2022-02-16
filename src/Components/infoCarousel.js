import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Carousel_1 from "../Pictures/water-pic1.jpg";
import Carousel_6 from "../Pictures/water-pic6.jpg";
import Carousel_7 from "../Pictures/water-pic7.jpg";
import Carousel_8 from "../Pictures/water-pic8.jpg";
import Carousel_9 from "../Pictures/water-pic9.jpg";


import { NavLink } from "react-router-dom";


import Carousel_2 from "../Pictures/water-pic4.jpg";



import 'bootstrap/dist/css/bootstrap.min.css';
export default class InfoCarousel extends Component
{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 111500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
          <Carousel variant="dark">
            <Carousel.Item>
              <div className="carousel-item-object">
                <img
                  className="d-block carousel-item-picture"
                  src={Carousel_1}
                  alt="First slide"
                />
              </div>
              <Carousel.Caption>
                <NavLink end to="/offerts">
                  <div className="text-dec-back-slider">
                    <h3>Uzdatnianie wody</h3>
                  </div>
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-item-object">
                <img
                  className="d-block carousel-item-picture"
                  src={Carousel_6}
                  alt="First slide"
                />
              </div>

              <Carousel.Caption>
              <NavLink end to="/offerts">
                <div className="text-dec-back-slider">
                  <h3>Dezynfekcja wody</h3>
                </div>
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-item-object">
                <img
                  className="d-block carousel-item-picture"
                  src={Carousel_8}
                  alt="First slide"
                />
              </div>

              <Carousel.Caption>
              <NavLink end to="/offerts">
                <div className="text-dec-back-slider">
                  <h3> Rozwiązywanie problemów z wodą</h3>
                </div>
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-item-object">
                <img
                  className="d-block carousel-item-picture"
                  src={Carousel_9}
                  alt="First slide"
                />
              </div>

              <Carousel.Caption>
              <NavLink end to="/offerts">
                <div className="text-dec-back-slider">
                  <h3>Innowacyjne rozwiązania</h3>
                </div>
                </NavLink>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
    }
}
 