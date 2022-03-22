import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function LinkedinIcon(width, height, color) {
  return (
    <FontAwesomeIcon icon={faLinkedinIn} style={{ width, height, color }} />
  );
}

function GithubIcon(width, height, color) {
  return <FontAwesomeIcon icon={faGithub} style={{ width, height, color }} />;
}

function MailIcon(width, height, color) {
  return <FontAwesomeIcon icon={faEnvelope} style={{ width, height, color }} />;
}

export { LinkedinIcon, GithubIcon, MailIcon };
