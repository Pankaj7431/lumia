import React from "react";
import { IoIosBasketball, IoIosAperture, IoIosCash } from "react-icons/io";

export default function About() {
  return (
    <div className="d-flex justify-content-between text-center row px-5 mb-5 w-auto">
      <div className="col-sm-4">
        <div className="icon1 text-center px-5 rounder-circle d-block">
          <IoIosBasketball
            style={{
              height: "75px",
              width: "75px",
              color: "rgb(52, 152, 219)",
              backgroundColor: "rgb(234, 244, 251)",
              margin: "10px",
              borderRadius: "50%",
              padding: "15px",
            }}
          />
          <div style={{ margin: "10px" }}>
            <h3>Name</h3>
            Lorem ipsum dolor sit amet.
            <p>Email</p>
          </div>
        </div>
      </div>
      <div className=" col-sm-4">
        <div className="icon1 text-center px-5 rounder-circle d-block">
          <IoIosCash
            style={{
              height: "75px",
              width: "75px",
              color: "rgb(52, 152, 219)",
              margin: "10px",
              backgroundColor: "rgb(234, 244, 251)",
              borderRadius: "50%",
              padding: "15px",
            }}
          />
          <div style={{ margin: "10px" }}>
            <h3>Name</h3>
            Lorem ipsum dolor sit amet.
            <p>Email</p>
          </div>
        </div>
      </div>
      <div className=" col-sm-4">
        <div className="icon1 text-center px-5 rounder-circle">
          <IoIosAperture
            style={{
              height: "75px",
              width: "75px",
              color: "rgb(52, 152, 219)",
              margin: "10px",
              backgroundColor: "rgb(234, 244, 251)",
              borderRadius: "50%",
              padding: "15px",
            }}
          />
          <div style={{ margin: "10px" }}>
            <h3>Name</h3>
            Lorem ipsum dolor sit amet.
            <p>Email</p>
          </div>
        </div>
      </div>
      <br /><br />
      <br /><br />
    </div>
  );
}
