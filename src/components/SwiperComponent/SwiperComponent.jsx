import React, { useEffect } from "react";
import propertiesAndYou from "../../assets/propertiesandyou.jpg";
import chiaoLogo from "../../assets/logo-pastas.jpg";
import bentoLogo from "../../assets/BENTO-logo.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./SwiperComponent.css";
import "./SwiperComponent.css";

export function SwiperComponent() {
  return (
    <>
      <p className="proyects">Proyectos</p>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="wrapper">
          <SwiperSlide>
            <div className="content_card">
              <a href="https://proyecto-final-frontend-lyart.vercel.app/">
                <img
                  className="image_carrusel"
                  src={propertiesAndYou}
                  alt="Describe Image"
                ></img>
                <div className="content_title">
                  <h1 className="heading">Properties&&you</h1>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content_card">
              <a href="https://chanticou.github.io/Ciao-pastas-restaurant/">
                <img
                  className="image_carrusel"
                  src={chiaoLogo}
                  alt="Chiao logo"
                ></img>

                <div className="content_title">
                  <h1 className="heading">Chiao</h1>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content_card">
              <a href="https://www.loom.com/share/4c176869e51049f79e02d0f1cb08c8b1">
                <img
                  className="image_carrusel"
                  src={bentoLogo}
                  alt="Bento logo"
                ></img>
                <div className="content_title">
                  <h1 className="heading">Bento</h1>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="image_carrusel"
              src={propertiesAndYou}
              alt="Describe Image"
            ></img>
            <div className="content_title">
              <h1 className="heading">Properties&&you</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content_card">
              <a href="https://chanticou.github.io/Ciao-pastas-restaurant/">
                <img
                  className="image_carrusel"
                  src={chiaoLogo}
                  alt="Chiao logo"
                ></img>

                <div className="content_title">
                  <h1 className="heading">Chiao</h1>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content_card">
              <a href="https://www.loom.com/share/4c176869e51049f79e02d0f1cb08c8b1">
                <img
                  className="image_carrusel"
                  src={bentoLogo}
                  alt="Bento logo"
                ></img>
                <div className="content_title">
                  <h1 className="heading">Bento</h1>
                </div>
              </a>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="content_card">
              <a href="https://www.loom.com/share/4c176869e51049f79e02d0f1cb08c8b1">
                <img
                  className="image_carrusel"
                  src={bentoLogo}
                  alt="Bento logo"
                ></img>
                <div className="content_title">
                  <h1 className="heading">Bento</h1>
                </div>
              </a>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="content_card">
              <a href="https://www.loom.com/share/4c176869e51049f79e02d0f1cb08c8b1">
                <img
                  className="image_carrusel"
                  src={bentoLogo}
                  alt="Bento logo"
                ></img>
                <div className="content_title">
                  <h1 className="heading">Bento</h1>
                </div>
              </a>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="content_card">
              <a href="https://www.loom.com/share/4c176869e51049f79e02d0f1cb08c8b1">
                <img
                  className="image_carrusel"
                  src={bentoLogo}
                  alt="Bento logo"
                ></img>
                <div className="content_title">
                  <h1 className="heading">Bento</h1>
                </div>
              </a>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      {/* <div className="wrapper">
        <section id="section1">
          <a
            // onClick={(e) => handleCLick("left-arrow")}
            href="#section3"
            className="arrow__btn left-arrow"
          >
            ‹
          </a>
          <div className="content_card">
            <a href="https://proyecto-final-frontend-lyart.vercel.app/">
              <img
                className="image_carrusel"
                src={propertiesAndYou}
                alt="Describe Image"
              ></img>
              <div className="content_title">
                <h1 className="heading">Properties&&you</h1>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="https://chanticou.github.io/Ciao-pastas-restaurant/">
              <img
                className="image_carrusel"
                src={chiaoLogo}
                alt="Chiao logo"
              ></img>

              <div className="content_title">
                <h1 className="heading">Chiao</h1>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="https://www.loom.com/share/4c176869e51049f79e02d0f1cb08c8b1">
              <img
                className="image_carrusel"
                src={bentoLogo}
                alt="Bento logo"
              ></img>
              <div className="content_title">
                <h1 className="heading">Bento</h1>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="https://proyecto-final-frontend-lyart.vercel.app/">
              <img
                className="image_carrusel"
                src={propertiesAndYou}
                alt="Describe Image"
              ></img>
              <div className="content_title">
                <h1 className="heading">Properties&&you</h1>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="https://chanticou.github.io/Ciao-pastas-restaurant/">
              <img
                className="image_carrusel"
                src={chiaoLogo}
                alt="Chiao logo"
              ></img>

              <div className="content_title">
                <h1 className="heading">Chiao</h1>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="https://www.loom.com/share/4c176869e51049f79e02d0f1cb08c8b1">
              <img
                className="image_carrusel"
                src={bentoLogo}
                alt="Bento logo"
              ></img>
              <div className="content_title">
                <h1 className="heading">Bento</h1>
              </div>
            </a>
          </div>
          <a
            // onClick={(e) => handleCLick("right-arrow")}
            href="#section2"
            className="arrow__btn right-arrow"
          >
            ›
          </a>
        </section>
      </div> */}
    </>
  );
}
