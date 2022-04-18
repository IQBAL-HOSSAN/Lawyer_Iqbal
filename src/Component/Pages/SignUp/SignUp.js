import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const [sendEmailVerification] = useSendEmailVerification(auth);

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

    await updateProfile({ displayName: name });
    navigate("/login");
  };

  // handle sign in with google btn
  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
    navigate("/");
  };

  // facebook sign in
  const handleFacebookLogin = async () => {
    await signInWithFacebook();
    navigate("/");
  };

  // Sign In with github
  const handleSignInWithGithub = async () => {
    await signInWithGithub();
    navigate("/");
  };

  return (
    <div className="py-5">
      <h2 className="text-center mb-3">Please Sign Up</h2>
      <div className="w-25 mx-auto">
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

export default SignUp;
