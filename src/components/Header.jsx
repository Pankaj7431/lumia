import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import NavbarDarkExample from "../hooks/NavbarDarkExample";


const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="bg-white border-b shadow-sm sticky-top ">
      <header className="d-flex justify-content-between align-items-center mx-auto max-w-40">
        <div className="w-40 ms-5 ps-5 ">
          <Link
            to="home"
            spy={true}
            smooth={true}
            className="h3 text-gray text-uppercase py-2 mt-2 cursor-pointer text-decoration-none"
          >
            Lumia
          </Link>
        </div>

        <div className="">
          <ul className="d-flex list-unstyled px-2 ml-0">
            <li className=" px-2 pt-4 h6">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="px-2 pt-4 h6 ">
              <Link
                to="about"
                spy={true}
                smooth={true}
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
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                Services
              </Link>
            </li>

            <li className="px-2 pt-4 h6 ">
              <Link
                to="about"
                spy={true}
                smooth={true}
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                Testimonials
              </Link>
            </li>
            <li className="px-2 pt-4 h6 dropdown">
              <Link
                to="Dropdown"
                spy={true}
                smooth={true}
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                <NavbarDarkExample />
              </Link>
            </li>
            <li className="px-2 pt-4 h6 ">
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                className="text-gray text-decoration-none hover:text-blue-300 focus:text-blue-300 cursor-pointer"
              >
                Contacts
              </Link>
            </li>
            <div className="mt-3 pt-1 mx-1 px-2 ">
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
