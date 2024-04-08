import React from "react";



export default function Home() {
  return (
    <div className=""  id="home">

      <div className="mb-0" style={{ height: "500px", width: "100%" }}>
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="img-fluid d-block "
          style={{ height: "500px", width: "100%", filter: "brightness(50%)" }}
        />
        <div className="text-overlay text-center">
          <h1 className="py-1">
            Welcome to <span className="span1">Lumia</span>
          </h1>
          <h5 className="text-gray-800 mb-4">
            We are team of talented designers making websites with Bootstrap
          </h5>
          <a name="" id="" className="btn btn-primary" href="#" role="button">
            Get Started
          </a>
        </div>
      </div>
      <div className="section-title1 mt-5 mb-5 p-0">
        <h2>What we do</h2>
        <h1></h1>
        <p className="pt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          perferendis?
        </p>
      </div>
        </div>
  );
}
