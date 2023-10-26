import React, { useEffect, useState } from "react";
import { Project, ProjectList } from "../../interfaces/common";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import "./ProjectsView.css";

const ProjectsView = () => {
  const [projectList, setProjectList] = useState<ProjectList | undefined>(
    undefined
  );

  const fetchProjects = async () => {
    try {
      const response = await fetch("data/projects.json");
      const data = await response.json();
      setProjectList(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const renderProjects = (projects: Project[], title: string) => (
    <>
      <h2>{title}</h2>
      <ul className="projectCardList">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className="projectContainer">
      <h1>Projects</h1>
      {!projectList ? (
        <p>No projects found.</p>
      ) : (
        <>
          {projectList.other &&
            renderProjects(projectList.other, "Personal projects")}
          {projectList.work &&
            renderProjects(projectList.work, "Work experience")}
        </>
      )}
    </div>
  );
};

export default ProjectsView;
