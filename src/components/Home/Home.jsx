import { NavBar } from "../NavBar/NavBar";
import { SwiperComponent } from "../SwiperComponent/SwiperComponent";
import "./Home.css";
export const Home = () => {
  return (
    <>
      <div className="content_home">
        <NavBar />
        <SwiperComponent />
      </div>
    </>
  );
};
