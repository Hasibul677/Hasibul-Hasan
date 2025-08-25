import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="skills-main-div">
        {skills?.data?.map((skill) => (
          <div key={skill.id}>
            {/* Section Heading */}
            <div className="skills-text-div-center">
              <Fade right duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title || "My Skills"}
                </h1>
              </Fade>
            </div>

            {/* Software Skills (icons grid) */}
            <Fade right duration={1500}>
              <div className="software-skills-div">
                <SoftwareSkill skills={skill.softwareSkills} />
              </div>
            </Fade>

            {/* Categories */}
            <Fade right duration={2000}>
              <div className="skills-grid">
                {skill.categories.map((category, index) => (
                  <div className="skills-category-card" key={index}>
                    <h3 className="skills-category-title">{category.title}</h3>

                    {/* Skills list */}
                    <ul className="skills-list">
                      {category.skills.map((s, idx) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ul>

                    {/* Tools as chips */}
                    <div className="skills-tools">
                      {category.tools.map((tool, idx) => (
                        <span key={idx} className="tool-chip">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        ))}
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
