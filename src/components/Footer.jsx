import React from 'react';
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";



function Footer() {
  return (
    <div
      style={{ height: '350px', backgroundColor: '#633823' }}
      className="container-fluid text-light p-5"
    >
      <div className="row">
        <div className="col-lg-4">
          <h4 className="mb-3">AI Resume Builder</h4>
          <p style={{ textAlign: 'justify' }}>
            AI Resume Builder is designed to help job seekers create professional,
            ATS-friendly resumes quickly and effortlessly. Our platform uses
            artificial intelligence to generate well-structured, personalized
            resumes based on your skills, experience, and career goals. Whether
            you're a student, a fresher, or an experienced professional, we make
            resume creation simple, fast, and effective—helping you stand out and
            increase your chances of landing your dream job.
          </p>
        </div>

        <div className="col-lg-4"></div>

        <div className="col-lg-4">
          <h4 className="mb-3">Contact Us</h4>
          <p><MdAttachEmail /> resumebuilder@gmail.com</p>
          <p><FaPhoneAlt /> 940004000</p>

          <h5 className="my-3">Connect With Us</h5>
          <div className="fs-5">
            <FaInstagram />
            <FaFacebook className="mx-2" />
            <IoLogoWhatsapp />
          </div>
        </div>
      </div>

      <h6 className="text-center my-5">
        Designed & Built using React
      </h6>
    </div>
  );
}

export default Footer;