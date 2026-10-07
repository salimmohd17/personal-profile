import React from 'react';
import { Mail, Download, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact({ copyEmail, copiedEmail }) {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container contact-container">
        <div className="contact-main">
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h2>Have a project or opportunity?</h2>
          <p>
            I am open to software development roles, full-stack projects, and environmental technology collaborations. Let's create practical value together.
          </p>
          
          <div className="contact-buttons">
            <button className="btn btn-primary" onClick={copyEmail}>
              <Mail size={18} /> {copiedEmail ? 'Email Copied!' : 'sirleemmuhammad18@gmail.com'}
            </button>
            <a
              className="btn btn-secondary"
              href="/Salim_Mwamkoba_Resume.pdf"
              download="Salim_Mwamkoba_Resume.pdf"
            >
              <Download size={16} /> Download Official CV (PDF)
            </a>
          </div>
        </div>

        <div className="contact-socials-box">
          <h4>Connect & Follow</h4>
          <div className="social-links-grid">
            <a
              href="https://github.com/salimmohd17"
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >
              <Github size={20} />
              <span>GitHub (salimmohd17)</span>
              <ExternalLink size={14} className="ext-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/salim-mohamed"
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >
              <Linkedin size={20} />
              <span>LinkedIn (Salim Mohamed)</span>
              <ExternalLink size={14} className="ext-icon" />
            </a>
            <a
              href="mailto:sirleemmuhammad18@gmail.com"
              className="social-card"
            >
              <Mail size={20} />
              <span>sirleemmuhammad18@gmail.com</span>
              <ExternalLink size={14} className="ext-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
