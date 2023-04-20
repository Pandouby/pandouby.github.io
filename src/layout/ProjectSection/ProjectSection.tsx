import { FC } from "react";
import "./styles.scss";
import Card from "../Card/Card";

const ProjectSection: FC = () => {
  return (
    <div className="section project-section">
      <div className="project-title">projects</div>
      <div className="projects-wrapper">
        <Card title="Game"> 
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, facere distinctio! Velit minima voluptatem veniam magnam ex culpa laboriosam labore voluptatum optio incidunt quas, quam a beatae consequuntur, dolores ipsa.</p>
        </Card>
      </div>
    </div>
  );
};

export default ProjectSection;
