import Tilt from "react-parallax-tilt";
import "./logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <Tilt
      className="Tilt br2 shadow-2"
      options={{ max: 55 }}
      style={{ height: 150, width: 150 }}
    >
      <div className="Tilt-inner">
        <img alt="logo" src={brain}></img>
      </div>
    </Tilt>
  );
};

export default Logo;
