import CircularProgress from "@mui/material/CircularProgress";
import "./LoadingSpinner.css";

export const LoadingSpinner = ({ text }: { text?: string }) => (
  <div className="loadingSpinner">
    <CircularProgress />
    {text && <span>{text}</span>}
  </div>
);
