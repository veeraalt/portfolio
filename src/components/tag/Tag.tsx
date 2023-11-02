import React from "react";
import { isDarkColor } from "../../helpers/isDarkColor";

const getTagProperties = (
  label: string
): { tagColor: string; textColor: string } => {
  /* Take extensions such as ".js" off the label, and in the case of labels containing
   * spaces, only take the first part in consideration when deciding the color */
  const trimmedLabel = label.split(".")[0].split(" ")[0].trim().toLowerCase();
  const computedStyle = getComputedStyle(document.documentElement);

  /* Use existing color if found from css, otherwise use default grey */
  const tagColor =
    computedStyle.getPropertyValue(`--color-${trimmedLabel}`) ||
    computedStyle.getPropertyValue("--grey-dark") ||
    "darkgrey";

  /* Determine whether black or white text should be used based on the
     background brightness */
  const textColor = isDarkColor(tagColor) ? "var(--white)" : "var(--black)";

  return { tagColor, textColor };
};

export const Tag = ({ label }: { label: string }) => {
  const { tagColor, textColor } = getTagProperties(label);
  return (
    <div
      style={{
        backgroundColor: tagColor,
        color: textColor,
        borderRadius: "25px",
        padding: "0 0.6rem 0.15rem",
      }}
    >
      {label}
    </div>
  );
};
