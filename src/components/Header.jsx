import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import NavbarDarkExample from "../hooks/NavbarDarkExample";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <>
    
    <nav className="navbar sticky-top navbar-expand-lg bg-light" id="header">
      <div className="container-fluid">
        <div className="navbar-header text-center">
          <a href="">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={100}
              className="h1 text-gray text-uppercase py-2 mt-2 mx-5 px-5 cursor-pointer text-decoration-none"
            >
              Lumia
            </Link>
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto w-100 justify-content-end">
            <li className="px-2 pt-4 h6 active">
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
            <li className="h6 ">
              <a href="" className="text-dark">
                <NavbarDarkExample />
              </a>
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
            <button
              className="navbar-toggle border-0 text-center bg-light"
              type="button"
              data-toggle="collapse"
            ></button>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;