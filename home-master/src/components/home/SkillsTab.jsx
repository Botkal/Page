import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";
import { useTranslation } from "react-i18next";

function SkillsSection({ skills, isScrolled }) {
  const { t } = useTranslation();

  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill.key}-${index}`}
          skill={t(`Skill.skill_${skill.key}`)}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(0, Math.floor(skills.length / 2))}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(Math.floor(skills.length / 2))}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

export default SkillsTab;
