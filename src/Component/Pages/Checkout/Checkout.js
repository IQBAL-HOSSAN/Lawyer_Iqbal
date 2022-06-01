import React from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../Share/PageTitle/PageTitle";

const Checkout = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast("Thank you so much for the order.");
  };
  return (
    <div className="py-5">
      <PageTitle title="Check Out"></PageTitle>
      <Container>
        <div className="col-md-4 col-lg-4 col-10 mx-auto">
          <h2 className="text-center ">Check Out </h2>
          <div className="d-flex justify-content-center mb-5 ">
            <div className=" under-line bg-danger"></div>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name*</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required />
            </Form.Group>
            <Form.Label>Country / Region</Form.Label>
            <Form.Select aria-label="Country / Region">
              <option>Bangladesh</option>
              <option value="1">India</option>
              <option value="2">France</option>
              <option value="3">Uk</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Street address*</Form.Label>
              <Form.Control
                type="text"
                placeholder="House Number and Street address"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Town / City*</Form.Label>

              <Form.Control type="text" placeholder="Town / City" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>District*</Form.Label>
              <Form.Select aria-label="Country / Region" required>
                <option>Noakhali</option>
                <option value="1">Dhaka</option>
                <option value="2">Cumillah</option>
                <option value="3">Laxmipur</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" placeholder="Email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone*</Form.Label>
              <Form.Control type="text" placeholder="phone" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Check Out
            </Button>
          </Form>
          <ToastContainer />
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
