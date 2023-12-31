import React from "react";
import { useTranslation } from "react-i18next";
import { Document, Page, pdfjs } from "react-pdf";
import { FaCircleChevronRight as ArrowIcon } from "react-icons/fa6";
import { FaDownload as DownloadIcon } from "react-icons/fa6";
/* Imported to display text content and links correctly */
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./ResumeView.css";

const ResumeView = () => {
  const { t } = useTranslation();
  /* react-pdf requires a PDF.js worker to work properly, an external CDN from
     https://www.npmjs.com/package/react-pdf used here */
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  const filePath = process.env.REACT_APP_CV_URL;

  return (
    <div className="resumeContainer">
      <h1>{t("common.cv")}</h1>
      <p>{t("cv.intro")}</p>
      <div className="resumeButtonContainer">
        <a className="pageLink resumeButton" href={filePath} download>
          {t("cv.download")}
          <DownloadIcon />
        </a>
        <a
          className="pageLink resumeButton"
          href={filePath}
          target="_blank"
          rel="noreferrer"
        >
          {t("cv.open")}
          <ArrowIcon />
        </a>
      </div>
      <Document file={filePath}>
        <Page className="resumeFileContainer" pageNumber={1} />
      </Document>
    </div>
  );
};

export default ResumeView;
