import React from "react";
import "./Moon.css";

const Moon = () => {
  return (
    <>
      <WaningMoon />
      <QuarterMoon />
      <FullMoon />
      <WaxingMoon />
    </>
  );
};

const WaningMoon = () => <div className="moon waningMoon" />;
const WaxingMoon = () => <div className="moon waxingMoon" />;
const QuarterMoon = () => <div className="moon quarterMoon" />;

const FullMoon = () => (
  <div className="moon fullMoon">
    <div className="crater crater1" />
    <div className="crater crater2" />
    <div className="crater crater3" />
  </div>
);

export { Moon, WaningMoon, WaxingMoon, QuarterMoon, FullMoon };
