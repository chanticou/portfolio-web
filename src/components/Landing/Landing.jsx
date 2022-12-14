import React from "react";
import "./Landing.css";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { PortfolioWeb } from "../PortfolioWeb/PortfolioWeb";
export const Landing = () => {
  return (
    <>
      <div className="content_Landing">
        <PortfolioWeb />
        <div className="link_landing">
          <h2 className="title_landing">¿Quién esta viendo ahora?</h2>
          <ProfilePicture />
          <span className="name_profile">Chanti</span>
        </div>
      </div>
    </>
  );
};
