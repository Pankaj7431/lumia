import React from 'react';
import { FaSmile } from "react-icons/fa";
import CountUp from 'react-countup';
import { FaBookJournalWhills } from "react-icons/fa6";
import { GiVrHeadset } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";

export default function content1() {
  return (
    <div>
      <div className="content1 d-flex mx-5 px-5 mt-5 row" style={{marginTop:"100px"}}>
        <div className="col-lg-3 col-6">
        <div className="text-center px-5 py-5 rounder-circle d-block">
            <FaSmile
              style={{
                height: "50px",
                width: "50px",
                color: "rgb(0, 102, 255)",
                margin: "10px",
                background: "rgb(204, 204, 204,0.3)",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
            <div> <span   style={{fontSize: "30px", fontWeight:"bolder", }}><CountUp end={23222}/></span></div>
            <div> <p>Happy Clients</p></div>
           
          </div>

        </div>
        <div className="col-lg-3 col-6">
        <div className="text-center px-5 py-5 rounder-circle d-block">
            <FaBookJournalWhills
              style={{
                height: "50px",
                width: "50px",
                color: "rgb(0, 102, 255)",
                margin: "10px",
                background: "rgb(204, 204, 204,0.3)",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
            <div> <span   style={{fontSize: "30px", fontWeight:"bolder", }}><CountUp end={232223}/></span></div>
            <div> <p>Happy Clients</p></div>
           
          </div>

        </div>
        <div className="col-lg-3 col-6">
        <div className="text-center px-5 py-5 rounder-circle d-block">
            <GiVrHeadset
              style={{
                height: "50px",
                width: "50px",
                color: "rgb(0, 102, 255)",
                margin: "10px",
                background: "rgb(204, 204, 204,0.3)",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
            <div> <span   style={{fontSize: "30px", fontWeight:"bolder", }}><CountUp end={232132}/></span></div>
            <div> <p>Happy Clients</p></div>
           
          </div>

        </div>
        <div className="col-lg-3 col-6">
        <div className="text-center px-5 py-5 rounder-circle d-block">
            <IoPeople
              style={{
                height: "50px",
                width: "50px",
                color: "rgb(0, 102, 255)",
                margin: "10px",
                background: "rgb(204, 204, 204,0.3)",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
            <div> <span   style={{fontSize: "30px", fontWeight:"bolder", }}><CountUp end={232}/></span></div>
            <div> <p>Happy Clients</p></div>
           
          </div>

        </div>
      </div>
    </div>
  )
}