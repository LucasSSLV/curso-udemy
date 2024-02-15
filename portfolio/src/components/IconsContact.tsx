import React from "react";
import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/iconsContact.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.instagram.com/seu_usuario_instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://wa.me/seu_numero_whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://github.com/seu_usuario_github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a href="mailto:seu_email@example.com">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;
