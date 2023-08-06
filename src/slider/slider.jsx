import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      lazyLoad: "ondemand",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
     <div className="slider-container">
      <h1>Testimonials</h1>
       <Slider {...settings} className="slide">
        <div className="slider">
          <img
            src="https://i.ibb.co/4ZQzzY3/pexels-artem-podrez-5726698.jpg"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a
            magnam adipisci magni distinctio neque ullam, tempora itaque quasi
            excepturi molestiae, voluptatem fugit deserunt consectetur amet
          </p>
          <h4>Johnson.M.J</h4>
          <h3>Director of "Finance Times"</h3>
        </div>
        <div className="slider">
          <img
            src="https://i.ibb.co/1bdxY3b/pexels-chokniti-khongchum-2280547.jpg"
            alt=""
          />
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a
            magnam adipisci magni distinctio neque ullam, tempora itaque quasi
            excepturi molestiae, voluptatem fugit deserunt consectetur amet
            
          </p>
          <h4>Johnson.M.J</h4>
          <h3>Director of "Finance Times"</h3>
        </div>
        <div className="slider">
          <img
            src="https://i.ibb.co/0FgCq8Q/pexels-pixabay-207601.jpg"
            alt=""
          />
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a
            magnam adipisci magni distinctio neque ullam, tempora itaque quasi
            excepturi molestiae, voluptatem fugit deserunt consectetur amet
            
          </p>
          <h4>Johnson.M.J</h4>
          <h3>Director of "Finance Times"</h3>
        </div>
        <div className="slider">
          <img
            src="https://i.ibb.co/dWk8zy2/pexels-martin-lopez-954585.jpg"
            alt=""
          />
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a
            magnam adipisci magni distinctio neque ullam, tempora itaque quasi
            excepturi molestiae, voluptatem fugit deserunt consectetur amet
            
          </p>
          <h4>Johnson.M.J</h4>
          <h3>Director of "Finance Times"</h3>
        </div>
        <div className="slider">
          <img
            src="https://i.ibb.co/wLQPRBf/pexels-harsh-thacker-15789888.jpg"
            alt=""
          />
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a
            magnam adipisci magni distinctio neque ullam, tempora itaque quasi
            excepturi molestiae, voluptatem fugit deserunt consectetur amet
           
          </p>
          <h4>Johnson.M.J</h4>
          <h3>Director of "Finance Times"</h3>
        </div>
        <div className="slider">
          <img
            src="https://i.ibb.co/Jz7YKhx/pexels-chokniti-khongchum-3938023.jpg"
            alt=""
          />
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a
            magnam adipisci magni distinctio neque ullam, tempora itaque quasi
            excepturi molestiae, voluptatem fugit deserunt consectetur amet
            
          </p>
          <h4>Johnson.M.J</h4>
          <h3>Director of "Finance Times"</h3>
        </div>
        <div className="slider">
          <img
            src="https://i.ibb.co/6sQ7RkS/pexels-chokniti-khongchum-2280571.jpg"
            alt=""
          />
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a
            magnam adipisci magni distinctio neque ullam, tempora itaque quasi
            excepturi molestiae, voluptatem fugit deserunt consectetur amet
            
          </p>
          <h4>Johnson.M.J</h4>
          <h3>Director of "Finance Times"</h3>
        </div>
        <div className="slider">
          <img
            src="https://i.ibb.co/kmP2ygL/pexels-chokniti-khongchum-2280549.jpg"
            alt=""
          />
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa a
            magnam adipisci magni distinctio neque ullam, tempora itaque quasi
            excepturi molestiae, voluptatem fugit deserunt consectetur amet
           
          </p>
          <h4>Johnson.M.J</h4>
          <h3>Director of "Finance Times"</h3>
        </div>
      </Slider>
     </div>
    );
  }
}
