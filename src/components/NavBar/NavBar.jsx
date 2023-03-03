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
            <li className="li_home">Home</li>
          </Link>

          <Link to="/yo">
            <li className="li_home">Yo</li>
          </Link>

          <Link to="/contact-form">
            <li className="li_home">Contacto</li>
          </Link>
          <Link to="/">
            <li className="li_home">Perfil</li>
          </Link>
        </ul>
        <div className="gradient_black_navBar"></div>
      </div>
    </>
  );
};
