import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Services = ({ service }) => {
  const { img, name, description, price } = service;

  const navigate = useNavigate();

  const handleBookNowBtn = () => {
    navigate("/checkout");
  };

  const sliceDescription = description.slice(0, 120);
  return (
    <section>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{sliceDescription}...</Card.Text>
            <p>
              <strong>Fee: {price}</strong>
            </p>
            <button onClick={handleBookNowBtn} className="btn btn-danger">
              Book Now
            </button>
          </Card.Body>
        </Card>
      </Col>
    </section>
  );
};

export default Services;
