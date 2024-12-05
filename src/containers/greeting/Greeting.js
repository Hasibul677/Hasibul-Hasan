import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import codeImg from "../../assests/images/code.svg";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              {/* <h3 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h3> */}
              <div className="greeting-text">
                <h3 className="wave-text">
                  <span>M</span>
                  <span>d</span>
                  <span className="space">&nbsp;</span>
                  <span>H</span>
                  <span>a</span>
                  <span>s</span>
                  <span>i</span>
                  <span>b</span>
                  <span>u</span>
                  <span>l</span>
                  <span className="space">&nbsp;</span>
                  <span>H</span>
                  <span>a</span>
                  <span>s</span>
                  <span>a</span>
                  <span>n</span>
                </h3>
              </div>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              {/* <SocialMedia theme={theme} /> */}
              {/* <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <FeelingProud theme={theme} /> */}
            <img src={codeImg} alt="Description of SVG" width="90%" />
          </div>
        </div>
      </div>
    </Fade>
  );
}
