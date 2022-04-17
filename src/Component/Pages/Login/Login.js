import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, error] = useSignInWithGoogle(auth);
  console.log(error);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate("/services");
  }

  const handleSignIn = (event) => {
    event.preventDefault();

    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    console.log(event.target.email.value);
    signInWithEmailAndPassword(email, password);

    navigate(from, { replace: true });
  };
  // handle sign in with google btn
  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };

  // Sign In with github
  const handleSignInWithGithub = () => {
    signInWithGithub();
  };

  // facebook sign in
  const handleFacebookLogin = () => {
    signInWithFacebook();
  };
  return (
    <div className="my-5">
      <h2 className="text-center mb-3">Please Log In</h2>
      <div className="w-25 mx-auto">
        <Form onSubmit={handleSignIn} className="">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <p>{error}</p>
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
            Sign In
          </Button>
          <p className="mt-3">
            {" "}
            Create a new account!
            <span className="ms-2">
              <Link className="text-decoration-none" to="/signup">
                Sign Up
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
        <div className="d-block">
          <button
            onClick={handleSignInWithGoogle}
            className="d-block w-100 mt-3 py-2  rounded-pill"
          >
            <FaGoogle /> Google Sign In
          </button>
          <button
            onClick={handleFacebookLogin}
            style={{ background: "#4267B2" }}
            className="d-block w-100 mt-3 py-2 text-white rounded-pill border "
          >
            <FaFacebook /> Facebook Sign In
          </button>
          <button
            onClick={handleSignInWithGithub}
            className="d-block w-100 mt-3 py-2 border rounded-pill bg-black text-white"
          >
            <FaGithub /> Github Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
