import React from "react";
import { Container } from "react-bootstrap";
import aboutImag from "../../../imgs/iqbal-hossan-99-about-img.jpg";
import "./About.css";

const About = () => {
  return (
    <div id="about-page" className=" py-5">
      <div className="about-banner"></div>
      <Container>
        <h2 className="text-center ">About Me</h2>
        <div className="d-flex justify-content-center mb-5 ">
          <div className=" under-line bg-danger"></div>
        </div>
        <div className="about-content d-md-flex d-lg-flex gap-5 align-items-center">
          <div className="about-left">
            <h3 className="mb-4">This is Md Iqbal Hossan</h3>
            <p className="about-text">
              My present goal is to be a skilled full stack web developer. For
              this reason I always try to study and practice web related
              technology like javascript, ReactJs, firebase, Nodejs, MongoDB
              etc. Also take some sort courses to improve my knowledge.
            </p>
          </div>
          <div className="about-right ">
            <img className="w-100" src={aboutImag} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
