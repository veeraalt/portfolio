import React, { useEffect, useState } from "react";
import { Tag } from "../../components/tag/Tag";
import "./ProjectsView.css";

interface Year {
  start: string;
  end?: string;
}

interface Project {
  id: number;
  years: Array<Year>;
  title: string;
  company: string;
  details: string;
  keywords: Array<string>;
}

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
          {projectList.map((project: Project) => (
            <li className="projectCard" key={project.id}>
              <div className="projectYear">
                {project.years.map((year) => (
                  <p key={year.start}>
                    {year.end ? `${year.start} - ${year.end}` : year.start}
                  </p>
                ))}
              </div>
              <div className="projectDetails">
                <h3>{project.title}</h3>
                <h4>{project.company}</h4>
                <p>{project.details}</p>
                <ul className="projectTagList">
                  {project.keywords.map((keyword) => (
                    <li key={keyword}>
                      <Tag label={keyword} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectsView;
