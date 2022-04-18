import React from "react";
import "./Testimonial.css";
import { Carousel, Container } from "react-bootstrap";

const Testimonial = () => {
  return (
    <section id="testimonial" className="py-5 text-center">
      <Container>
        <h2 className="text-center">Testimonial</h2>
        <div className="d-flex justify-content-center mb-3 ">
          <div className=" under-line bg-danger"></div>
        </div>
        <h4>What our clients say!</h4>
        <Carousel fade>
          <Carousel.Item className="text-secondary">
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonial;
