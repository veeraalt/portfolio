import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Project } from "../../interfaces/common";
import { getProjects } from "../../services/projects";
import { ProjectCard } from "../../components/projectCard/ProjectCard";
import { LoadingSpinner } from "../../components/loadingSpinner/LoadingSpinner";
import "./ProjectsView.css";

const ProjectsView = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [workProjectList, setWorkProjectList] = useState<Project[]>([]);
  const [personalProjectList, setPersonalProjectList] = useState<Project[]>([]);
  const [isProjectsLoading, setIsProjectsLoading] = useState<boolean>(false);

  const fetchProjects = async () => {
    setIsProjectsLoading(true);
    try {
      const projects = await getProjects(currentLanguage);
      const workProjects = sortProjectsByYear(
        projects.filter((project: Project) => project.type === "work")
      );
      const personalProjects = sortProjectsByYear(
        projects.filter((project: Project) => project.type === "other")
      );
      setWorkProjectList(workProjects);
      setPersonalProjectList(personalProjects);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setIsProjectsLoading(false);
    }
  };

  // Sort projects - most recent first
  const sortProjectsByYear = (projects: Project[]) => {
    return projects.reverse();
  };

  // Fetch projects when view is loaded or language is changed
  useEffect(() => {
    fetchProjects();
  }, [currentLanguage]);

  const renderProjects = (projects: Project[], title: string) => (
    <>
      <h2>{title}</h2>
      {isProjectsLoading ? (
        <LoadingSpinner text={t("common.loading")} />
      ) : (
        <ul className="projectCardList">
          {projects.length === 0 ? (
            <p>{t("projects.empty")}</p>
          ) : (
            projects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))
          )}
        </ul>
      )}
    </>
  );

  return (
    <div className="projectContainer">
      <h1>{t("common.projects")}</h1>
      {personalProjectList &&
        renderProjects(personalProjectList, t("projects.personal"))}
      {workProjectList && renderProjects(workProjectList, t("projects.work"))}
    </div>
  );
};

export default ProjectsView;
