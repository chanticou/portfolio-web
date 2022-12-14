import React from "react";
import "./NavBar.css";
import { PortfolioWeb } from "../PortfolioWeb/PortfolioWeb";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="content_navBar">
        <ul className="ul_navBar">
          <li>
            <PortfolioWeb />
          </li>
          <Link to="/home">
            <li>HOME</li>
          </Link>

          <Link to="/yo">
            <li>YO</li>
          </Link>
          <Link to="/">
            <li>PERFIL</li>
          </Link>
          <Link to="/contact-form">
            <li>CONTACTO</li>
          </Link>
        </ul>
      </div>
    </>
  );
};
