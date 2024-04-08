import React from 'react';
import { FaSmile } from "react-icons/fa";
import CountUp from 'react-countup';
import { FaBookJournalWhills } from "react-icons/fa6";
import { GiVrHeadset } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";

export default function content1() {
  return (
    <div>
      <div className="content1 d-flex mx-5 px-5 my-5 row" style={{ marginTop: "100px" }}>
        <div className="col-lg-3 col-6">
          <div className="text-center px-5 py-5 rounder-circle d-block">
            <FaSmile
              style={{
                height: "65px",
                width: "65px",
                color: "rgb(52, 152, 219)",
                margin: "10px",
                backgroundColor: "rgb(234, 244, 251)",
                borderRadius: "50%",
                padding: "15px",
              }}
            />
            <div> <span style={{ fontSize: "30px", fontWeight: "bolder", }}><CountUp enableScrollSpy end={23222} /></span></div>
            <div> <p>Happy Clients</p></div>

          </div>

        </div>
        <div className="col-lg-3 col-6">
          <div className="text-center px-5 py-5 rounder-circle d-block">
            <FaBookJournalWhills
              style={{
                height: "65px",
                width: "65px",
                color: "rgb(52, 152, 219)",
                margin: "10px",
                backgroundColor: "rgb(234, 244, 251)",
                borderRadius: "50%",
                padding: "15px",
              }}
            />
            <div> <span style={{ fontSize: "30px", fontWeight: "bolder", }}><CountUp enableScrollSpy end={2323} /></span></div>
            <div> <p>Happy Clients</p></div>

          </div>

        </div>
        <div className="col-lg-3 col-6">
          <div className="text-center px-5 py-5 rounder-circle d-block">
            <GiVrHeadset
              style={{
                height: "65px",
                width: "65px",
                color: "rgb(52, 152, 219)",
                margin: "10px",
                backgroundColor: "rgb(234, 244, 251)",
                borderRadius: "50%",
                padding: "15px",
              }}
            />
            <div> <span style={{ fontSize: "30px", fontWeight: "bolder", }}><CountUp enableScrollSpy end={2332} /></span></div>
            <div> <p>Happy Clients</p></div>

          </div>

        </div>
        <div className="col-lg-3 col-6">
          <div className="text-center px-5 py-5 rounder-circle d-block">
            <IoPeople
              style={{
                height: "60px",
                width: "60px",
                color: "rgb(52, 152, 219)",
                margin: "10px",
                backgroundColor: "rgb(234, 244, 251)",
                borderRadius: "50%",
                padding: "15px",
              }}
            />
            <div> <span style={{ fontSize: "30px", fontWeight: "bolder", }}>
              <CountUp enableScrollSpy end={2312} /></span></div>
            <div> <p>Happy Clients</p></div>

          </div>

        </div>
      </div>
    </div>
  )
}