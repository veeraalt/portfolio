import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FaCircleChevronRight as ArrowIcon } from "react-icons/fa6";
import { FaDownload as DownloadIcon } from "react-icons/fa6";
import cvFile from "../../assets/cv_veera.pdf";
/* Imported to display text content and links correctly */
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./ResumeView.css";

const ResumeView = () => {
  /* react-pdf requires a PDF.js worker to work properly, the suggested
     solution from https://www.npmjs.com/package/react-pdf used here */
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  return (
    <div className="resumeContainer">
      <h1>CV</h1>
      <div className="resumeButtonContainer">
        <a
          className="pageLink resumeButton"
          href={cvFile}
          download="cv_veera_alt.pdf"
        >
          Download
          <DownloadIcon />
        </a>
        <a
          className="pageLink resumeButton"
          href={cvFile}
          target="_blank"
          rel="noreferrer"
        >
          Open
          <ArrowIcon />
        </a>
      </div>
      <Document file={cvFile}>
        <Page className="resumeFileContainer" pageNumber={1} />
      </Document>
    </div>
  );
};

export default ResumeView;
