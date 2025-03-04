import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown as ArrowDown } from "react-icons/fa6";
import { FaChevronUp as ArrowUp } from "react-icons/fa6";
import "./Card.css";

interface Graphic {
  title: string;
  component: JSX.Element;
  description?: string | JSX.Element;
  html?: string;
  css?: string;
  categories?: Graphic[];
}

export const Card = ({ graphic }: { graphic: Graphic }) => {
  const { t } = useTranslation();
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="card" key={graphic.title}>
      <div className="cardTitleRowContainer">
        <div className="cardTitleContainer">
          <h2>{t(`art.${graphic.title}`)}</h2>
          {graphic.component}
        </div>
        <button
          className="arrowButton"
          onClick={() => setDetailsVisible(!detailsVisible)}
        >
          {detailsVisible ? <ArrowUp size="18" /> : <ArrowDown size="18" />}
        </button>
      </div>
      {detailsVisible && (
        <div className="cardContentContainer">
          {graphic.description && <p>{graphic.description}</p>}
          {graphic.html && (
            <>
              <h3>HTML:</h3>
              <code className="innerCard">{graphic.html}</code>
              <h3>CSS:</h3>
              <code className="innerCard">{graphic.css}</code>
            </>
          )}
          <div className="categoriesContainer">
            {graphic.categories &&
              graphic.categories.map((category) => (
                <Card graphic={category} key={category.title} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
