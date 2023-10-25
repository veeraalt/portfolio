import React, { useEffect, useState } from "react";
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
                <div className="projectTagList">
                  {project.keywords.map((keyword) => (
                    <div className="projectTag" key={keyword}>
                      {keyword}
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectsView;
