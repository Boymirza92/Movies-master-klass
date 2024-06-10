import React, { useState } from "react";
import "./Navbar.css";
import react from "reactstrap";

function NavbarContainer(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjXt0_DtinCU1Apvzdtu4KZbUTMJJT23pOw&s" alt="" />
          Hush kelibsiz
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Bosh sahifa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Biz haqimizda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Xizmatlar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Aloqa
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarContainer;
