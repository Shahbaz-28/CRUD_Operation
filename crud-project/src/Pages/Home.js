import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../style/sliders.css";
import image1 from "../Assets/img-1.webp";
import image2 from "../Assets/img-2.jpeg";
import image3 from "../Assets/img3.jpeg";

const slideImages = [
  {
    URL: image3,
  },
  {
    URL: image2,
  },
  {
    URL: image1,
  },
];

const Home = () => {
  return (
    <div>
      <Slide>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              className="sliders-edits"
              style={{ backgroundImage: `url(${image.URL})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Home;
