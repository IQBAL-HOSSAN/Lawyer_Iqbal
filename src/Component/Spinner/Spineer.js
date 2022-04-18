import React from "react";
import { Container } from "react-bootstrap";

const Spineer = () => {
  return (
    <Container>
      <div
        style={{ height: "300px" }}
        classNames="spinner-border text-danger d-flex justify-content-center"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </Container>
  );
};

export default Spineer;
