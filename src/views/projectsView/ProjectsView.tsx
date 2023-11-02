import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Project, ProjectList } from "../../interfaces/common";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import "./ProjectsView.css";

const ProjectsView = () => {
  const { t } = useTranslation();
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
      <h1>{t("common.projects")}</h1>
      {!projectList ? (
        <p>{t("projects.loading")}</p>
      ) : (
        <>
          {projectList.other &&
            renderProjects(projectList.other, t("projects.personal"))}
          {projectList.work &&
            renderProjects(projectList.work, t("projects.work"))}
        </>
      )}
    </div>
  );
};

export default ProjectsView;
