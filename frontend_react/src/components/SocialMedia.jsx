import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/Vishal-1004" target="_blank" rel="noreferrer">
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/vishal-kumar-yadav-8085a3232/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://linktr.ee/VishalKumarYadav"
      target="_blank"
      rel="noreferrer"
    >
      <SiLinktree />
    </a>
  </div>
);

export default SocialMedia;
