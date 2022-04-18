import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin/SocialLogin";
import { async } from "@firebase/util";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  let showError;
  if (error || resetError) {
    showError = (
      <div>
        <p className="text-danger"> Error: {error.message}</p>
      </div>
    );
  }
  // sign in with email and password
  const handleLogIn = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);

    navigate(from, { replace: true });
    console.log(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };

  return (
    <div className="my-5">
      <h2 className="text-center mb-3">Please Log In</h2>
      <div className="w-25 mx-auto">
        <Form onSubmit={handleLogIn} className="">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          {/* error */}
          {showError}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={() => setAgree(!agree)}
              className={agree ? "text-primary" : "text-danger"}
              type="checkbox"
              label="Accept the genius terms and condition"
            />
          </Form.Group>

          <Button
            disabled={!agree}
            className="w-50 mx-auto d-block"
            variant="primary"
            type="submit"
          >
            Log In
          </Button>
          {/* <input disabled={!agree} type="submit" /> */}
          <p className="mt-3">
            {" "}
            Create a new account!
            <span className="ms-2">
              <Link className="text-decoration-none" to="/signup">
                Sign Up
              </Link>
            </span>
          </p>
          <p>
            Forget Password?{" "}
            <Button onClick={resetPassword} variant="link">
              Reset Password
            </Button>
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
        {/* login with social media */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
