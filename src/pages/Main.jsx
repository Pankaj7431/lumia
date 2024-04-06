import React from "react";
import About from "./About.jsx";
import Content from "../components/content.jsx"
import Services from "./Services.jsx";
import Header from "../components/Header.jsx";
import Content1 from "../components/content1.jsx";
import Home from "./Home.jsx";
import Testimonials from "./Testimonials.jsx";
import Portfolio from "./Portfolio.jsx";
import Contacts from "./Contacts.jsx";





export default function Main() {
  return (
    <div className="text-xl"  id="home">
      <Header/>
      <Home/>
      <Content/>
      <About/>
      <Content1/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contacts/>
        </div>
  );
}