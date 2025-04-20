import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import BackendImg from "./BackendImg";

function GetSkillSvg(props) {
  if (props.fileName === "FullStackImg") {
    return <FullStackImg theme={props.theme} />;
  } else if (props.fileName === "BackendImg") {
    return <BackendImg theme={props.theme} />;
  } else {
    return null;
  }
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    console.log(skills?.data);
    return (
      <div>
        {skills?.data?.map((skill) => {
          return (
            <div key={skill.id} className="skills-main-div">
              {/* <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade> */}

              <div className="skills-text-div">
                <div className="skills-text-div-center">
                  <Fade right duration={1000}>
                    <h1
                      className="skills-heading"
                      style={{ color: theme.text }}
                    >
                      {skill.title}
                    </h1>

                    <SoftwareSkill skills={skills} />
                  </Fade>
                </div>

                <Fade right duration={2000}>
                  <div className="row">
                    {skill.categories.map((skillSentence, index) => {
                      return (
                        <div className="col-6">
                          <p
                            style={{
                              fontWeight: 800,
                              marginTop: "15px",
                              fontSize: "20px",
                            }}
                          >
                            {skillSentence.title}
                          </p>
                          <div
                            key={index}
                            className="subTitle skills-text"
                            style={{ color: theme.secondaryText }}
                          >
                            {skillSentence.skills.map((skill, index) => {
                              return (
                                <div key={index}>
                                  <p>{skill}</p>
                                </div>
                              );
                            })}
                            {skillSentence.tools.map((tool, index) => (
                              <span key={index}>
                                {tool}
                                {index !== skillSentence.tools.length - 1 &&
                                  ", "}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

SkillSection.defaultProps = {
  theme: {
    text: "#000000",
    secondaryText: "#7a7a7a",
  },
};

export default SkillSection;
