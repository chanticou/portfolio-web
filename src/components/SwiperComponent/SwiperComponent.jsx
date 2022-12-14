import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import propertiesAndYou from "../../assets/propertiesandyou.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SwiperComponent.css";
// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

export function SwiperComponent() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="content_swiperSlide_swiperComponent">
            {/* <Link to="/proyect/propertiesAndYou"> */}
            <p>Properties&&you</p>
            <a href={"https://proyecto-final-frontend-lyart.vercel.app/"}>
              <img
                className="image_propertiesAndYou_swiperComponent"
                src={propertiesAndYou}
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content_swiperSlide_swiperComponent">
            {/* <Link to="/proyect/propertiesAndYou"> */}
            <p>Properties&&you</p>
            <a href={"https://proyecto-final-frontend-lyart.vercel.app/"}>
              <img
                className="image_propertiesAndYou_swiperComponent"
                src={propertiesAndYou}
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_swiperSlide_swiperComponent">
            {/* <Link to="/proyect/propertiesAndYou"> */}
            <p>Properties&&you</p>
            <a href={"https://proyecto-final-frontend-lyart.vercel.app/"}>
              <img
                className="image_propertiesAndYou_swiperComponent"
                src={propertiesAndYou}
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_swiperSlide_swiperComponent">
            {/* <Link to="/proyect/propertiesAndYou"> */}
            <p>Properties&&you</p>
            <a href={"https://proyecto-final-frontend-lyart.vercel.app/"}>
              <img
                className="image_propertiesAndYou_swiperComponent"
                src={propertiesAndYou}
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_swiperSlide_swiperComponent">
            {/* <Link to="/proyect/propertiesAndYou"> */}
            <p>Properties&&you</p>
            <a href={"https://proyecto-final-frontend-lyart.vercel.app/"}>
              <img
                className="image_propertiesAndYou_swiperComponent"
                src={propertiesAndYou}
                alt=""
              />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
