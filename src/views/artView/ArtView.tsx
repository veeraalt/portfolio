import React from "react";
import { useTranslation } from "react-i18next";
import "./ArtView.css";
import { Heart } from "../../components/graphics/heart/Heart";
import { Smiley } from "../../components/graphics/smiley/Smiley";
import { Peace } from "../../components/graphics/peace/Peace";

const ArtView = () => {
  const { t } = useTranslation();

  const cssGraphics = [
    {
      title: "heart",
      component: <Heart />,
      html: `<div id="heart" />`,
      css: `#heart {
  height: 32px;
  width: 32px;
  position: relative;
}

#heart:before,
#heart:after {
  position: absolute;
  content: "";
  width: 55%;
  height: 90%;
  background: #ff9eac;
  border-radius: 50px 50px 0 0;
  transform: rotate(-45deg);
  transform-origin: 50% 30%;
}

#heart:after {
  transform: rotate(45deg);
  transform-origin: 95% 100%;
}`,
    },
    {
      title: "smiley",
      component: <Smiley />,
      html: `<div id="smiley">
  <div id="eyes" />
  <div id="mouth">
    <div id="teeth" />
  </div>
</div>`,
      css: `#smiley {
  position: relative;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #f8ef71;
}

#eyes:before,
#eyes:after {
  content: "";
  position: absolute;
  width: 15%;
  height: 15%;
  background-color: #391619;
  border-radius: 50%;
  top: 30%;
  left: 25%;
}

#eyes:after {
  left: 60%;
  right: 25%;
}

#mouth {
  position: relative;
  background-color: #391619;
  width: 60%;
  height: 30%;
  border-radius: 0 0 50px 50px;
  top: 60%;
  left: 20%;
}

#teeth {
  position: relative;
  width: 90%;
  height: 40%;
  background-color: white;
  border-radius: 0 0 40px 40px;
  top: 10%;
  left: 5%;
}`,
    },
    {
      title: "peace",
      component: <Peace />,
      html: `<div id="peace">
  <div id="circle">
    <div id="line1" />
    <div id="line2" />
    <div id="line3" />
  </div>
</div>`,
      css: `#peace {
  width: 32px;
  height: 32px;
}

#circle {
  width: 100%;
  height: 100%;
  border: 2px solid #5b48e0;
  border-radius: 50px;
  box-sizing: border-box;
}

#line1,
#line2,
#line3 {
  position: relative;
  width: 7%;
  background-color: #5b48e0;
  height: 100%;
  left: 47%;
}

#line2,
#line3 {
  width: 7%;
  height: 55%;
  bottom: 55%;
  left: 28%;
  transform: rotate(45deg);
}

#line3 {
  left: 65%;
  bottom: 110%;
  transform: rotate(-45deg);
}`,
    },
  ];

  return (
    <div className="contactContainer">
      <h1>{t("art.title")}</h1>
      <p className="card">
        {t("art.intro")}
        <a
          className="highlight inlineLink"
          href="https://tripleten.com/blog/posts/the-how-and-why-of-stunning-css-art-with-examples"
          target="_blank"
          rel="noreferrer"
        >
          TripleTen.
        </a>
      </p>

      <div className="cardContainer">
        {cssGraphics.map((graphic) => (
          <div className="card" key={graphic.title}>
            <div className="cardTitleContainer">
              <h2>{t(`art.${graphic.title}`)}</h2>
              {graphic.component}
            </div>
            <div className="cardContentContainer">
              <h3>HTML:</h3>
              <code>{graphic.html}</code>
              <h3>CSS:</h3>
              <code>{graphic.css}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtView;
