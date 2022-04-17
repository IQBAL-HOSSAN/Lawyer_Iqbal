import React from "react";
import { Card, Col } from "react-bootstrap";

const Services = ({ service }) => {
  const { img, name, description, price } = service;

  const sliceDescription = description.slice(0, 120);
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{sliceDescription}...</Card.Text>
            <p>
              <strong>Fee: {price}</strong>
            </p>
            <a className="btn btn-danger">Book Now</a>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Services;
