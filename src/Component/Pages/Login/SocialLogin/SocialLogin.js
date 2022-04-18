import React from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";

const SocialLogin = () => {
  // sign in with google
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  // sign in with github
  const [signInWithGithub] = useSignInWithGithub(auth);

  // sign in with facebook
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // handle sign in with google btn
  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
    navigate(from, { replace: true });
  };

  // facebook sign in
  const handleFacebookLogin = async () => {
    await signInWithFacebook();
    navigate(from, { replace: true });
  };

  // Sign In with github
  const handleSignInWithGithub = async () => {
    await signInWithGithub();
    navigate(from, { replace: true });
  };
  return (
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
  );
};

export default SocialLogin;
