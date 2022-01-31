import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Carousel_1 from "../Pictures/water-pic4.jpg";


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
        return(
            <Carousel >
            <Carousel.Item>
                <div className="carousel-item-object"> 
              <img
                className="d-block carousel-item-picture"
                src={Carousel_1}
                alt="First slide"
              />
              </div>
              <Carousel.Caption>
                <h3>Uzdatnianie wody</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="carousel-item-object"> 
              <img
                className="d-block carousel-item-picture"
                src={Carousel_1}
                alt="First slide"
              />
              </div>
      
              <Carousel.Caption>
                <h3>Dezynfekcja wody</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="carousel-item-object"> 
              <img
                className="d-block carousel-item-picture"
                src={Carousel_1}
                alt="First slide"
              />
              </div>
      
              <Carousel.Caption>
                <h3> Rozwiązywanie problemów z wodą</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="carousel-item-object"> 
              <img
                className="d-block carousel-item-picture"
                src={Carousel_1}
                alt="First slide"
              />
              </div>
      
              <Carousel.Caption>
                <h3>Innowacyjne metody usuwania osadów z instalacji eliminacja brudnej rdzawej ciepłej wody użytkowej</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )
    }
}
 