import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarDarkExample() {
  return (
    <NavDropdown title="Dropdown" menuVariant="light" drop="">
      <NavDropdown.Item href="#action/3.1"><a href="">Action</a></NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2"><a href="">Another action</a></NavDropdown.Item>
      <NavDropdown
        href="#action/3.3"
        title="Deep Dropdown"
        menuVariant="light"
        drop="end"
        className="px-3 text-gray hover:text-danger w-auto"
      ><a href=""></a>
        <NavDropdown.Item eventKey="1"><a href="">Action</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="2"><a href="">Another action</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="3"><a href="">Something else here</a></NavDropdown.Item>
      </NavDropdown>
      <NavDropdown.Item href="#action/3.4"><a href="">Dropdown6</a></NavDropdown.Item>
    </NavDropdown>
  );
}

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="d-flex justify-content-between align-items-center mx-auto max-w-40">
        <div className="w-40 ms-5 ps-5 ">
          <a
            onClick={() => handleNavigate("Home")}
            className="h3 text-warning text-uppercase py-2 mt-2 cursor-pointer text-decoration-none"
          >
            Lumia
          </a>
        </div>

        <div className="">
          <ul className="d-flex list-unstyled px-2 ml-0">
            <li className=" px-2 pt-4 h6">
              <a
                onClick={() => handleNavigate("Home")}
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li className="px-2 pt-4 h6 ">
              <a
                onClick={() => handleNavigate("/about")}
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                About
              </a>
            </li>
            <li className="px-2 pt-4 h6 ">
              <a
                onClick={() => handleNavigate("/Services")}
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                Services
              </a>
            </li>

            <li className="px-2 pt-4 h6 ">
              <a
                onClick={() => handleNavigate("/Testimonials")}
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                {" "}
                Testimonials
              </a>
            </li>
            <li className="px-2 pt-4 h6 dropdown">
              <a
                onClick={() => handleNavigate("/Dropdown")}
                className="text-gray text-decoration-none hover:text-blue-300 cursor-pointer"
              >
                <NavbarDarkExample />
              </a>
            </li>
            <li className="px-2 pt-4 h6 ">
              <a
                onClick={() => handleNavigate("/Contacts")}
                className="text-gray text-decoration-none hover:text-blue-300 focus:text-blue-300 cursor-pointer"
              >
                Contacts
              </a>
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
