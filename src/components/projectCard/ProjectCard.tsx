import React from "react";
import { useTranslation } from "react-i18next";
import { FaArrowUpRightFromSquare as ExternalLinkIcon } from "react-icons/fa6";
import { Project } from "../../interfaces/common";
import { Tag } from "../tag/Tag";
import "./ProjectCard.css";

export const ProjectCard = ({
  project: { name, title, years, website, company, details, keywords },
}: {
  project: Project;
}) => {
  const { t } = useTranslation();

  return (
    <div className="projectCard">
      <ul className="projectYear">
        {years.map((year) => (
          <li key={year.start}>
            {year.end ? `${year.start} - ${year.end}` : year.start}
          </li>
        ))}
      </ul>
      <div className="projectDetails">
        {name ? (
          <a
            className="projectHeader projectNameHeader"
            href={website}
            target="_blank"
            rel="noreferrer"
            aria-label={`${name} ${t("common.website")}`}
          >
            <h3>{name}</h3>
            <ExternalLinkIcon size="14px" aria-hidden="true" />
          </a>
        ) : (
          <a
            className="projectHeader"
            href={website}
            target="_blank"
            rel="noreferrer"
            aria-label={`${company} ${t("common.website")}`}
          >
            <h3>{title}</h3>
            <div className="projectCompany">
              <h4>{company}</h4>
              <ExternalLinkIcon size="14px" aria-hidden="true" />
            </div>
          </a>
        )}
        <p>{details}</p>
        <ul className="projectTagList">
          {keywords.map((keyword) => (
            <li key={keyword}>
              <Tag label={keyword} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
