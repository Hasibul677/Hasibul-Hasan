import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SoftwareSkill = ({ skills }) => {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skills?.data?.[0]?.softwareSkills?.map((skill, index) => (
            <OverlayTrigger
              key={index}
              placement={"top"}
              overlay={
                <Tooltip id={`tooltip-${index}`}>
                  <strong>{skill.skillName}</strong>
                </Tooltip>
              }
            >
              <li className="software-skill-inline" name={skill.skillName}>
                <span
                  className="iconify"
                  data-icon={skill.fontAwesomeClassname}
                  style={skill.style}
                  data-inline="false"
                ></span>
              </li>
            </OverlayTrigger>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;
