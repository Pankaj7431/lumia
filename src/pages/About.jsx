import React from "react";
import { FaBabyCarriage, FaBlender } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";
import { ProgressBar } from "react-bootstrap";

function ProgressBar1() {
  return <ProgressBar now={100}/>;
}
function ProgressBar2() {
  return <ProgressBar now={60} />;
}
function ProgressBar3() {
  return <ProgressBar now={80} />;
}
function ProgressBar4() {
  return <ProgressBar now={72} />;
}
function ProgressBar5() {
  return <ProgressBar now={91} />;
}
function ProgressBar6() {
  return <ProgressBar now={30} />;
}

export default function About() {
  return (
    <div id="about" className="container1 mb-5 my-5 bg-light p-auto" >
      <br /><br />
      <div className="d-flex p-auto m-auto row my-5">
        <div className="col-sm-5 rounded">
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

        <div class="col-sm-6">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="list-unstyled">
            <li>
              {" "}
              <IoCheckmarkDone
                style={{
                  height: "30px",
                  color: "rgb(52, 152, 219)",
                  width: "40px",
                }}
              />{" "}
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </li>
            <li>
              {" "}
              <IoCheckmarkDone
                style={{
                  height: "30px",
                  color: "rgb(52, 152, 219)",
                  width: "40px",
                }}
              />{" "}
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </li>
          </ul>
          <div class="row icon-boxes d-flex">
            <div class="col-md-6 align-items-center">
              <FaBlender
                style={{
                  height: "50px",
                  width: "50px",
                  color: "rgb(52, 152, 219)",
                  margin: "10px",
                  padding: "5px",
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
                style={{
                  height: "50px",
                  width: "50px",
                  color: "rgb(52, 152, 219)",
                  margin: "10px",
                  padding: "5px",
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
                HTML <p className="val float-end">100%</p>
              </p>
              <ProgressBar1 />
            </div>

            <div className="progress-2 mt-2">
              <p className="skill">
                CSS <p className="val float-end">60%</p>
              </p>
              <ProgressBar2 />
            </div>

            <div className="progress-2 mt-2">
              <p className="skill">
                JavaScript <p className="val float-end">80%</p>
              </p>
              <ProgressBar3 />
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-5 d-block">
            <div className="progress-1">
              <p className="skill">
                PHP <p className="val float-end">72%</p>
              </p>
              <ProgressBar4 />
            </div>

            <div className="progress-2 mt-2">
              <p className="skill">
                Wordpress/CMS <p className="val float-end">91%</p>
              </p>
              <ProgressBar5 />
            </div>

            <div className="progress-2 mt-2">
              <p className="skill">
                Photoshop <p className="val float-end">30%</p>
              </p>
              <ProgressBar6 />
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
}
