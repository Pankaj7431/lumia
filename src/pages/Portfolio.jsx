import React, {useState} from "react";
import Data from "../data"

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
    <div className="text-center" id="portfolio">
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
        {/* <ul className="nav nav-pills justify-content-center  col-sm-6">
        <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active  mx-2"}
              onClick={() => setItems(Data)}
            >
              All
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active mx-2"}
              onClick={() => filterItem("app")}
            >
              App
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active mx-2"}
              onClick={() => filterItem("card")}
            >
              Card
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active mx-2"}
              onClick={() => filterItem("web")}
            >
              Web
            </a>
          </li>
          
        </ul> */}
        <div align="center">
            <button className="btn btn-default filter-button" onClick={() => setItems(Data)} data-filter="all">All</button>
            <button className="btn btn-default filter-button" onClick={()=> filterItem("app")} data-filter="hdpe">Card</button>
            <button className="btn btn-default filter-button" onClick={()=> filterItem("card")} data-filter="sprinkle">Web</button>
            <button className="btn btn-default filter-button" onClick={()=> filterItem("web")} data-filter="spray">App</button>
        </div>
        <br/>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          {items.map((elem) => {
            const { id, name, image, description, } = elem;

            return (
              <div className="col-lg-4" id={id}>
                <div className="card mb-3 px-0 d-block" style={{textAlign:"center",marginLeft:"100px"}}>
                  <div className="row d-block">
                    <div className="col-lg-12">
                      <img className="img-fluid"src={image} alt={name} style={{ height: '320px' }} filter hdpe/>
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
      </div><br />
    </div>
  );
}
