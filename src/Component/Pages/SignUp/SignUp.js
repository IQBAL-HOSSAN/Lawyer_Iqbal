import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin/SocialLogin";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // send email verification
  const [sendEmailVerification, sending, VerificationError] =
    useSendEmailVerification(auth);

  const [updateProfile] = useUpdateProfile(auth);

  // Sign Up with email and password
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    alert("sending email");

    await updateProfile({ displayName: name });
    navigate("/");
  };

  return (
    <div className="py-5">
      <Container>
        <div className="col-md-4 col-lg-4 col-10 mx-auto">
          <h2 className="text-center mb-3">Please Sign Up</h2>
          <div className=" mx-auto">
            <Form onSubmit={handleFormSubmit} className="">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  placeholder="Enter name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  className={agree ? "text-primary" : "text-danger"}
                  onClick={() => setAgree(!agree)}
                  type="checkbox"
                  name="terms"
                  label="Accept genius terms and condition"
                />
              </Form.Group>
              <Button
                className="w-50 d-block mx-auto"
                disabled={!agree}
                variant="primary"
                type="submit"
              >
                Sign Up
              </Button>
              <p className="mt-3">
                Already have a account?
                <span className="ms-2">
                  <Link className="text-decoration-none" to="/login">
                    Log In
                  </Link>
                </span>
              </p>
            </Form>
            {/* after & before line */}
            <div className="d-flex align-items-center my-4">
              <div
                style={{ width: "48%", height: "2px" }}
                className="bg-primary "
              ></div>
              <div className="mx-2 pb-1">Or</div>
              <div
                style={{ width: "48%", height: "2px" }}
                className="bg-primary"
              ></div>
            </div>
            {/* login with others */}
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
