import React from "react";
import About from "./About.jsx";
import Content from "../components/content.jsx";
import Services from "./Services.jsx";
import Header from "../components/Header.jsx";
import Content1 from "../components/content1.jsx";
import Home from "./Home.jsx";
import Testimonials from "./Testimonials.jsx";
import Portfolio from "./Portfolio.jsx";
import Contacts from "./Contacts.jsx";
import ScrollToTop from "react-scroll-to-top";

export default function Main() {
  return (
    <div className="w-100 mx-0" style={{backgroundColor:"#f7fbfe"}} id="home">
      <Header />
      <Home />
      <Content />
      <About />
      <Content1 />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <ScrollToTop
        smooth
        color="white"
        height="25"
        width="25"
        style={{ backgroundColor: "#0099ff" }}
      />
    </div>
  );
}
