import React from "react";
import { FaArrowUpRightFromSquare as ExternalLinkIcon } from "react-icons/fa6";
import { Project } from "../../interfaces/common";
import { Tag } from "../tag/Tag";
import "./ProjectCard.css";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="projectCard">
      <ul className="projectYear">
        {project.years.map((year) => (
          <li key={year.start}>
            {year.end ? `${year.start} - ${year.end}` : year.start}
          </li>
        ))}
      </ul>
      <div className="projectDetails">
        <a
          className="projectHeader"
          href={project.website}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.company} website`}
        >
          <h3>{project.title}</h3>
          <div className="projectCompany">
            <h4>{project.company}</h4>
            <ExternalLinkIcon size="14px" aria-hidden="true" />
          </div>
        </a>
        <p>{project.details}</p>
        <ul className="projectTagList">
          {project.keywords.map((keyword) => (
            <li key={keyword}>
              <Tag label={keyword} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
