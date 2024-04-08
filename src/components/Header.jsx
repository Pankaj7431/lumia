import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import NavbarDarkExample from "../hooks/NavbarDarkExample";

const Header = () => {
  
  return (
    <div className="bg-white border-b shadow-sm sticky-top position-sticky"id="header">
      <header className="d-flex justify-between align-items-center mx-auto max-w-30">
        <div className="w-40 px-5" style={{marginRight:"250px"}}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={100}
            className="h3 text-gray text-uppercase py-2 mt-2 mx-5 px-5 cursor-pointer text-decoration-none"
          >
            Lumia
          </Link>
        </div>

        <div className="navbar w-50 mx5">
          <ul className="d-flex list-unstyled px-2 ml-0">
            <li className="px-2 pt-4 h6">
              <Link
                activeClass="active"
                to="home"
                smooth={true}
                duration={100}
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="px-2 pt-4 h6 ">
              <Link
                to="about"
               
                smooth={true}
                duration={100}
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className="px-2 pt-4 h6 ">
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={100}
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li className="px-2 pt-4 h6 ">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={100}
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                Portfolio
              </Link>
            </li>
            <li className="px-2 pt-4 h6 ">
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                duration={100}
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                Testimonials
              </Link>
            </li>
            <li className="px-2 pt-4 h6 dropdown">
            <li><a href=""><NavbarDarkExample /></a></li>
            </li>
            <li className="px-2 pt-4 h6 ">
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                duration={100}
                className="text-gray text-decoration-none hover:text-blue-300 focus:text-blue-300 cursor-pointer"
              >
                Contacts
              </Link>
            </li>
            <div className="mt-3 pt-1 px-2 ">
              <FaTwitter
                className="mx-1 cursor-pointer"
                style={{ color: "#a8adaa", fontSize: "18px" }}
              />
              <FaFacebook
                className="mx-1"
                style={{ color: "#a8adaa", fontSize: "18px" }}
              />
              <FaInstagram
                className="mx-1"
                style={{ color: "#a8adaa", fontSize: "18px" }}
              />
              <FaLinkedin
                className="mx-1"
                style={{ color: "#a8adaa", fontSize: "18px" }}

              />
            </div>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
