import React from 'react';
import { IoIosBasketball, IoIosAperture, IoIosCash  } from "react-icons/io";

export default function About() {
  return (
      <div
        className="d-flex justify-content-between text-center row"
      >
        <div className=" col-lg-3">
          <div className="icon1 text-center px-5 py-5 rounder-circle">
            <IoIosBasketball
              style={{
                height: "75px",
                width: "75px",
                color: "rgb(0, 102, 255)",
                margin: "10px",
                background: "rgb(204, 204, 204,0.3)",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
            <div style={{ margin: "20px" }}>
              <h3>Name</h3>
              Lorem ipsum dolor sit amet.
              <p>Email</p>
            </div>
          </div>
        </div>
        <div className=" col-lg-3">
          <div className="icon1 text-center px-5 py-5 rounder-circle">
            <IoIosCash
              style={{
                height: "75px",
                width: "75px",
                color: "rgb(0, 102, 255)",
                margin: "10px",
                background: "rgb(204, 204, 204,0.3)",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
            <div style={{ margin: "20px" }}>
              <h3>Name</h3>
              Lorem ipsum dolor sit amet.
              <p>Email</p>
            </div>
          </div>
        </div>
        <div className=" col-lg-3">
          <div className="icon1 text-center px-5 py-5 rounder-circle">
            <IoIosAperture
              style={{
                height: "75px",
                width: "75px",
                color: "rgb(0, 102, 255)",
                margin: "10px",
                background: "rgb(204, 204, 204,0.3)",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
            <div style={{ margin: "20px" }}>
              <h3>Name</h3>
              Lorem ipsum dolor sit amet.
              <p>Email</p>
            </div>
          </div>
        </div>
        <br />

    </div>
  )
}
