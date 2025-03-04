import React from "react";
import { useTranslation } from "react-i18next";
import { Heart } from "../../components/graphics/heart/Heart";
import { Smiley } from "../../components/graphics/smiley/Smiley";
import { Peace } from "../../components/graphics/peace/Peace";
import {
  Moon,
  WaningMoon,
  WaxingMoon,
  QuarterMoon,
  FullMoon,
} from "../../components/graphics/moon/Moon";
import { Card } from "../../components/card/Card";
import "./ArtView.css";

const ArtView = () => {
  const { t } = useTranslation();

  const cssGraphics = [
    {
      title: "moon.title",
      component: <Moon />,
      description: (
        <span>
          {t("art.moon.description1")}
          <a
            className="highlight inlineLink"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            box-shadow
          </a>
          {t("art.moon.description2")}
        </span>
      ),
      categories: [
        {
          title: "waningMoon.title",
          component: <WaningMoon />,
          html: `<div class="moon waningMoon" />`,
          css: `.moon {
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 50%;
}

.waningMoon {
  box-shadow: inset 10px 0  #f9f985;
}`,
        },
        {
          title: "waxingMoon.title",
          component: <WaxingMoon />,
          html: `<div class="moon waxingMoon" />`,
          css: `.moon {
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 50%;
}

.waxingMoon {
  box-shadow: inset -14px 0 #f9f985;
}`,
        },
        {
          title: "fullMoon.title",
          component: <FullMoon />,
          description: t("art.fullMoon.description"),
          html: `<div class="moon fullMoon">
    <div class="crater crater1" />
    <div class="crater crater2" />
    <div class="crater crater3" />
  </div>`,
          css: `.moon {
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 50%;
}

.fullMoon {
  background-color: #f9f985;
}

.crater {
  position: relative;
  background-color: #f1c194;
  border-radius: 50%;
}

.crater1 {
  width: 20%;
  height: 20%;
  top: 55%;
  left: 50%;
}

.crater2 {
  width: 10%;
  height: 10%;
  top: 18%;
  left: 18%;
}

.crater3 {
  width: 15%;
  height: 15%;
  top: -9%;
  left: 60%;
}`,
        },
        {
          title: "quarterMoon.title",
          component: <QuarterMoon />,
          description: t("art.quarterMoon.description"),
          html: `<div class="moon quarterMoon" />`,
          css: `.moon {
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 50%;
}

.quarterMoon {
  width: 16px;
  margin-right: 16px;
  background-color: #f9f985;
  border-radius: 50px 0 0 50px;
}`,
        },
      ],
    },
    {
      title: "smiley.title",
      description: t("art.smiley.description"),
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
      title: "heart.title",
      description: t("art.heart.description"),
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
      title: "peace.title",
      component: <Peace />,
      description: t("art.peace.description"),
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
    <div>
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
          <Card key={graphic.title} graphic={graphic} />
        ))}
      </div>
    </div>
  );
};

export default ArtView;
