import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FaCircleChevronRight as ArrowIcon } from "react-icons/fa6";
import { FaDownload as DownloadIcon } from "react-icons/fa6";
/* Imported to display text content and links correctly */
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./ResumeView.css";

const ResumeView = () => {
  /* react-pdf requires a PDF.js worker to work properly, an external CDN from
     https://www.npmjs.com/package/react-pdf used here */
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  const filePath = process.env.REACT_APP_CV_URL;

  return (
    <div className="resumeContainer">
      <h1>CV</h1>
      <p>
        Check out my CV from below. You can also download it or open it in a new
        tab.
      </p>
      <div className="resumeButtonContainer">
        <a className="pageLink resumeButton" href={filePath} download>
          Download
          <DownloadIcon />
        </a>
        <a
          className="pageLink resumeButton"
          href={filePath}
          target="_blank"
          rel="noreferrer"
        >
          Open
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
