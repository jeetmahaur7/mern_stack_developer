import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import Services from "./Services";
import Error from "./Error";
import Footer from './Footer';

export default class AppC extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/profile/:name?/:dsg?/:salary" element={<Profile />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
