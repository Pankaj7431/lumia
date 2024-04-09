import React, { useState } from "react";
import Data from "../data";
import { FaBabyCarriage, FaBlender } from "react-icons/fa";


export default function Portfolio() {
  
  const [items, setItems] = useState(Data);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
    if (active) {
      setActive(false);
    }
    const updateItems = Data.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };
  return (
    <div className="text-center bg-white mx-5" id="portfolio">
      <br />
      <br />
      <div className="section-title1 mt-5 mb-5 p-0">
        <h2>Portfolio</h2>
        <h1></h1>
        <p className="pt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          perferendis?
        </p>
      </div>
      <br />
      <div className="container">
        <div align="center">
          <button
            className="btn btn-default filter-button"
            onClick={() => setItems(Data)}
            data-filter="all"
          >
            All
          </button>
          <button
            className="btn btn-default filter-button"
            onClick={() => filterItem("app")}
            data-filter="hdpe"
          >
            Card
          </button>
          <button
            className="btn btn-default filter-button"
            onClick={() => filterItem("card")}
            data-filter="sprinkle"
          >
            Web
          </button>
          <button
            className="btn btn-default filter-button"
            onClick={() => filterItem("web")}
            data-filter="spray"
          >
            App
          </button>
        </div>
        <br />
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          {items.map((elem) => {
            const { id, name, image, description } = elem;

            return (
              <div
                className="portfolio-container col-md-6 col-lg-4 filter-web wow fadeInUp px-3 "
                style={{ position: "relative" }}
                id={id}
              >
                <div
                  className="card mb-3 d-block"
                  style={{
                    textAlign: "center",
                    marginLeft: "100px",
                    width: "65%",
                  }}
                >
                  <div className="row d-block">
                    <div className="portfolio-img col-lg-12">
                      <img
                        className="portfolio-img img-fluid "
                        src={image}
                        style={{ height: "320px", filter: "" }}
                      />
                      <div className="overlay">
                        <a href="">
                          <FaBabyCarriage className="icon" />
                        </a>
                        <a href="">
                          <FaBlender className="icon" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-16">
                      <div className="card-body">
                        <h5 className="card-title mb-0">{name}</h5>
                        <p className="card-text">{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
    </div>
  );
}