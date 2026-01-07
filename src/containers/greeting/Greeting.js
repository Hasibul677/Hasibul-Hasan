import React from "react";
import "./Greeting.css";
import { greeting } from "../../portfolio";
import codeImg from "../../assests/images/laptop.webp";
import Button from "../../components/button/Button";

export default function Greeting(props) {
  const theme = props.theme;

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        {/* === Left Side (Text) === */}
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-name" style={{ color: theme.text }}>
              Md <span className="highlight">Hasibul</span> Hasan Shanto
            </h1>

            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              {greeting.subTitle}
            </p>

            <div className="">
              <Button
                text="Download Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              />
            </div>
          </div>
        </div>

        {/* === Right Side (Image) === */}
        <div className="greeting-image-div">
          <div className="image-wrapper">
            <img
              src={codeImg}
              alt="Developer at work"
              className="greeting-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
