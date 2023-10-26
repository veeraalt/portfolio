import React, { useEffect, useState } from "react";
import { Project } from "../../interfaces/common";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import "./ProjectsView.css";

const ProjectsView = () => {
  const [projectList, setProjectList] = useState<Array<Project> | undefined>(
    undefined
  );

  useEffect(() => {
    fetch("data/projects.json")
      .then((r) => r.json())
      .then((data) => setProjectList(data));
  }, []);

  return (
    <div className="projectContainer">
      <h1>Projects</h1>
      <h2>Work experience</h2>
      {projectList && (
        <ul className="projectCardList">
          {projectList.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectsView;
