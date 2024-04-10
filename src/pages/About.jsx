import React from "react";
import { FaBabyCarriage, FaBlender } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";
import { ProgressBar} from "react-bootstrap";


export default function About() {
  return (
    
    <div id="about" className="container mb-5" >
      <br /><br />
      <div className="d-flex row my-5">
        <div className="col-md-6 rounded">
          <img
            src="https://bootstrapmade.com/demo/templates/Lumia/assets/img/about.jpg"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "5px",

              float:"inline-end"
            }}
          />
        </div>

        <div class="col-md-6">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="list-unstyled">
            <li>
              {" "}
              <IoCheckmarkDone
              className="contact-icon p-1"
                style={{
                  height: "30px",
                  color: "rgb(52, 152, 219)",
                  width: "auto",
                  borderRadius:"50%"
                }}
              />{" "}
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>
              {" "}
              <IoCheckmarkDone
              className="contact-icon"
                style={{
                  height: "30px",
                  color: "rgb(52, 152, 219)",
                  width: "auto",
                  borderRadius:"50%"
                }}
              />{" "}
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
          </ul>
          <div class="row icon-boxes d-flex">
            <div class="col-md-6 align-items-center">
              <FaBlender
              className="contact-icon"
                style={{
                  height: "50px",
                  width: "50px",
                  color: "rgb(52, 152, 219)",
                  margin: "10px",
                  padding: "5px",
                  borderRadius:"10px"
                }}
              />
              <h4>Corporis voluptates sit</h4>
              <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </p>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
              <FaBabyCarriage
              className="contact-icon"
                style={{
                  height: "50px",
                  width: "50px",
                  color: "rgb(52, 152, 219)",
                  margin: "10px",
                  padding: "5px",
                  borderRadius:"10px"
                }}
              />
              <h4>Ullamco laboris nisi</h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="progress-container mt-2 pt-5">
        <div className="row  mx-5 px-2">
          <div className="col-lg-5 d-block pr-5">
            <div className="progress-2">
              <p className="skill">
                HTML <p className="float-end">100%</p>
              </p>
              <ProgressBar now={100} className="progress"/>
            </div>

            <div className="progress-2 mt-2">
              <p className="skill">
                CSS <p className="val float-end">60%</p>
              </p>
              <ProgressBar now={60} className="progress"/>
            </div>

            <div className="progress-2 mt-2">
              <p className="skill">
                JavaScript <p className="val float-end">80%</p>
              </p>
              <ProgressBar now={30} className="progress"/>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-5 d-block">
            <div className="progress-1">
              <p className="skill">
                PHP <p className="val float-end">72%</p>
              </p>
              <ProgressBar now={72} className="progress"/>
            </div>

            <div className="progress-2 mt-2">
              <p className="skill">
                Wordpress/CMS <p className="val float-end">91%</p>
              </p>
              <ProgressBar now={91} className="progress"/>
            </div>

            <div className="progress-2 mt-2">
              <p className="skill">
                Photoshop <p className="val float-end">30%</p>
              </p>
              <ProgressBar now={30} className="progress"/>
            </div>
          </div>
        </div>
      </div>
      <br /><br />

    </div>
  );
}
