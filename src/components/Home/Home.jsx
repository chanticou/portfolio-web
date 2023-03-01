import { NavBar } from "../NavBar/NavBar";
import { SwiperComponent } from "../SwiperComponent/SwiperComponent";
import youreName from "../../assets/youreName.jpg";
import Player from "../Player/Player";
import music from "../../assets/rain-lofi.mp3";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="content_home">
        <NavBar />
        <div className="content_space_girl_image">
          <div>
            <img className="space_girl_image" src={youreName} alt=""></img>

            <p className="home_hi">¡Hola! Soy</p>
            <p className="home_name">Chantal Coutenceau</p>
            <p className="home_fullstack">Desarrolladora Full-stack</p>
            <Player url={music} />
          </div>
          <div className="gradient_image"></div>
        </div>
        <SwiperComponent />
      </div>
    </>
  );
};
