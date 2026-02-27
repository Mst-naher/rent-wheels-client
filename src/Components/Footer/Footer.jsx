import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import MyContainer from "../MyContainer/MyContainer";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-indigo-900 via-purple-300 to-pink-900 mt-10">
      <MyContainer>
        <footer className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-5 text-primary-content p-10 gap-7 ">
          <div>
            <div className="flex flex-col">
              <figure>
                <img className="w-13.75 mb-5" src={logo} alt="" />
              </figure>
              {/* <h3 className=" text-xl font-semibold p-1">
              <span className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                HERO.IO
              </span>
            </h3> */}
            </div>
            <p className="font-bold">
              RentWheels Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </div>
          <div>
            <h4>About Us</h4>
            <p>We are number one ....</p>
          </div>
          <div>
            <h4>Terms & Conditions:</h4>
            <p>33/A</p>
            <p>34/b</p>
            <p>35/d</p>
          </div>
          <div>
            <h4 className="mb-5">Contact Info:</h4>

            <p className="mb-2">
              <FaPhoneAlt />
            </p>
            <p>
              <MdOutlineMail />
            </p>
            <p>Address</p>
          </div>
          <div>
            <h4 className="mb-5">Social Media Links:</h4>

            <div>
              <p className="mb-2">
                <a>
                  <BsTwitterX />
                </a>
              </p>
              <p className="mb-2">
                <a>
                  <FaLinkedin />
                </a>
              </p>
              <p className="">
                <a>
                  <FaFacebook />
                </a>
              </p>
            </div>
          </div>
        </footer>
      </MyContainer>
    </div>
  );
};

export default Footer;
