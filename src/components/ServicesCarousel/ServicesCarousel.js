import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const ServicesCarousel = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    adaptiveHeight: true, // Adjust height to fit content
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between slides (in milliseconds)
  };

  return (
    <div className="services-container">
      <h1 className="services-heading">All Services</h1>
      <p className="services-para">
        The time is now for it to be okay to be great. For being a bright color.
        For standing out.
      </p>
      <Slider {...settings}>
        <div className="services-list">
          <li className="list-item">
            <img
              src="https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724844390/Vector_7_akbqzu.png"
              className="services-img"
              alt="Fridge"
            />
            <h2 className="appliance-name">Fridge</h2>
            <p className="appliance-para">
              We get insulted by others, lose trust for those others. We get
              back stabbed by friends. It becomes harder for us to give others a
              hand.
            </p>
          </li>
        </div>

        <div className="services-list">
          <li className="list-item">
            <img
              src="https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724844794/Vector_8_jjw7yn.png"
              className="services-img"
              alt="Air Conditioner"
            />
            <h2 className="appliance-name">Air Conditioner</h2>
            <p className="appliance-para">
              Don't get your heart broken by people we love, even that we give
              them all we have. Then we lose family over time. As we live, our
              hearts turn colder.
            </p>
          </li>
        </div>

        <div className="services-list">
          <li className="list-item">
            <img
              src="https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724845132/Vector_10_x1habo.png"
              className="services-img"
              alt="Television"
            />
            <h2 className="appliance-name">Television</h2>
            <p className="appliance-para">
              What else could rust the heart more over time? Blackgold. The time
              is now for it to be okay to be great. or being a bright color. For
              standing out.
            </p>
          </li>
        </div>

        <div className="services-list">
          <li className="list-item">
            <img
              src="https://res.cloudinary.com/dxsi3qcvy/image/upload/v1724845019/fire-burner-thin_1_l3yyhx.png"
              className="services-img"
              alt="Gas Stove"
            />
            <h2 className="appliance-name">Gas Stove</h2>
            <p className="appliance-para">
              We get insulted by others, lose trust for those others. We get
              back stabbed by friends. It becomes harder for us to give others a
              hand.
            </p>
          </li>
        </div>
      </Slider>
    </div>
  );
};

export default ServicesCarousel;
