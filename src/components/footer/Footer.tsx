import {
  FaLinkedin as LinkedinIcon,
  FaGithub as GithubIcon,
  FaGoodreads as GoodreadsIcon,
  FaImdb as ImdbIcon,
} from "react-icons/fa6";

import "./Footer.css";

export const Footer = () => (
  <footer className="footer">
    <div className="footerLinks">
      <a
        className="footerLink"
        href={import.meta.env.VITE_LINKEDIN_URL}
        target="_blank"
        rel="noreferrer"
        tabIndex={0} // TODO: Why is this needed?
      >
        <LinkedinIcon size="32" />
      </a>
      <a
        className="footerLink"
        href={import.meta.env.VITE_GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        tabIndex={0}
      >
        <GithubIcon size="32" />
      </a>
      <a
        className="footerLink"
        href={import.meta.env.VITE_GOODREADS_URL}
        target="_blank"
        rel="noreferrer"
        tabIndex={0}
      >
        <GoodreadsIcon size="32" />
      </a>
      <a
        className="footerLink"
        href={import.meta.env.VITE_IMDB_URL}
        target="_blank"
        rel="noreferrer"
        tabIndex={0}
      >
        <ImdbIcon size="32" />
      </a>
    </div>
    <img
      className="profileImage"
      src="/data/veera-outline.png"
      alt="Profile image of Veera"
    />
  </footer>
);
