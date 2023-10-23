import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import cvFile from "../../assets/cv_veera.pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
/* Imported to display text content and links correctly */
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./ResumeView.css";

const ResumeView = () => {
  /* react-pdf requires a PDF.js worker to work properly, 
     worker from 'pdfjs-dist' used here */
  pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  return (
    <div className="resumeContainer">
      <h1>CV</h1>
      <Document file={cvFile}>
        <Page className="resumeFileContainer" pageNumber={1} />
      </Document>
    </div>
  );
};

export default ResumeView;
