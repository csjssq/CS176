import React, { Component } from "react";
import Slider from "react-slick";
import "./img.css";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      autoplay:true,
    };
    return (
      <div>
        <center><h2> Lazy Load</h2></center>
        <div className="container">
        <Slider {...settings}>
          <div>
            <img src={"/images/1.jpg"} />
          </div>
          <div>
            <img src={"/images/2.jpg"} />
          </div>
          <div>
            <img src={"/images/3.jpg"} />
          </div>
          <div>
            <img src={"/images/4.jpg"} />
          </div>
          <div>
            <img src={"/images/5.jpg"} />
          </div>
          {/* only one image to show infinite */}
          {/* <div><img src={"/images/3.jpg"} /></div>
          <div><img src={"/images/3.jpg"} /></div> */}
        </Slider>
      </div>
      </div>
    );
  }
}