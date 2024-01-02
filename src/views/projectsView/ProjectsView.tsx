import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Project } from "../../interfaces/common";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import "./ProjectsView.css";

const ProjectsView = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [workProjectList, setWorkProjectList] = useState<Project[]>([]);
  const [personalProjectList, setPersonalProjectList] = useState<Project[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`data/projects_${currentLanguage}.json`);
      const data: Project[] = await response.json();
      const workProjects = sortProjectsByYear(
        data.filter((project) => project.type === "work")
      );
      const personalProjects = sortProjectsByYear(
        data.filter((project) => project.type === "other")
      );
      setWorkProjectList(workProjects);
      setPersonalProjectList(personalProjects);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  // Sort projects - most recent first
  const sortProjectsByYear = (projects: Project[]) => {
    return projects.sort(
      (a: Project, b: Project) =>
        parseInt(b.years[0].start) - parseInt(a.years[0].start)
    );
  };

  // Fetch projects when view is loaded or language is changed
  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLanguage]);

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
      {!workProjectList && personalProjectList ? (
        <p>{t("projects.loading")}</p>
      ) : (
        <>
          {personalProjectList &&
            renderProjects(personalProjectList, t("projects.personal"))}
          {workProjectList &&
            renderProjects(workProjectList, t("projects.work"))}
        </>
      )}
    </div>
  );
};

export default ProjectsView;
