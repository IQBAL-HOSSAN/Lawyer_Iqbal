import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../../../imgs/Banner-img/banner-1.jpeg";
import banner2 from "../../../../imgs/Banner-img/banner-2.jpeg";
import banner3 from "../../../../imgs/Banner-img/banner-3.jpeg";
const Banner = () => {
  return (
    <section>
      <Carousel fade>
        <Carousel.Item className="banner-item">
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption className="">
            <h2>Car Accident</h2>
            <p>
              Accidents happen. We hear it all the time, and usually chalk it up
              to bad luck or being in the wrong place at the wrong time. But
              sometimes an accident and a resulting injury are somebody’s fault.
            </p>
            <button className="btn btn-danger">Book Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="banner-item">
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h2>Divorce</h2>
            <p>
              Divorce entails the cancelation or reorganisation of the legal
              responsibilities of marriage by dissolving the bonds of marriage
              between a married couple under the rule of law of a particular
              state or country.
            </p>
            <button className="btn btn-danger">Book Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="banner-item">
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h2>Criminal Defence</h2>
            <p>
              Criminal law is the body of law that relates to crime. It
              prescribes conduct perceived as threatening, harmful, or otherwise
              endangering to the property, health, safety, and moral welfare of
              people inclusive of one's self.
            </p>
            <button className="btn btn-danger">Book Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
