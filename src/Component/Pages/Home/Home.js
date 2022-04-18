import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import Consultation from "./Consultation/Consultation";
import "./Home.css";
// import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Consultation></Consultation>
      {
        <Container className="py-5">
          <h2 className="text-center ">My Services</h2>
          <div className="d-flex justify-content-center mb-4 ">
            <div className=" under-line bg-danger"></div>
          </div>
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) =>
              services.map((service) => (
                <Services key={service.id} service={service}></Services>
              ))
            )}
          </Row>
        </Container>
      }
    </div>
  );
};

export default Home;
