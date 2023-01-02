import { useState } from "react";
import "./App.css";
import ParticlesBg from "particles-bg";
import Navigation from "./components/Navigation/navigation";
import Logo from "./components/Logo/logo";
import ImageLinkForm from "./components/ImageLinkForm/imagelinkform";
import Rank from "./components/Rank/rank";
import FaceRecognition from "./components/FaceRecogniton/facerecognition";

const App = () => {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onButtonSubmit = () => {
    setImageURL(input);
  };
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <ParticlesBg num={200} type="cobweb" bg={true} />
      <FaceRecognition imageURL={imageURL} />
    </div>
  );
};

export default App;
