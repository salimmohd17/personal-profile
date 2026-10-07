import React from 'react';
import { ArrowUpRight, Download, Copy, Check, Code2 } from 'lucide-react';
import { stats } from '../data/portfolioData';

export default function Hero({ copyEmail, copiedEmail }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span>Available for opportunities · Kenya</span>
          </div>

          <h1 className="hero-title">
            Building digital products that <em>solve real problems.</em>
          </h1>

          <p className="hero-lead">
            I’m <strong>Salim Mohamed Mwamkoba</strong>, a software developer skilled in full-stack web applications, relational databases, backend APIs, and environmental technology systems.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Explore Selected Work <ArrowUpRight size={17} />
            </a>
            <a
              className="btn btn-secondary"
              href="/Salim_Mwamkoba_Resume.pdf"
              download="Salim_Mwamkoba_Resume.pdf"
            >
              <Download size={16} /> Download CV (PDF)
            </a>
            <button className="btn btn-outline" onClick={copyEmail}>
              {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
              {copiedEmail ? 'Copied Email' : 'Copy Email'}
            </button>
          </div>

          {/* Stats Bar */}
          <div className="hero-stats">
            {stats.map((s, idx) => (
              <div className="stat-item" key={idx}>
                <span className="stat-val">{s.value}</span>
                <span className="stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Card Widget */}
        <div className="profile-card">
          <div className="card-top">
            <span className="card-tag">ENGINEERING PROFILE</span>
            <Code2 size={20} className="card-icon" />
          </div>

          <div className="card-center">
            <div className="avatar-img-wrap">
              <img src="/logo.png" alt="Salim Mohamed Mwamkoba" className="avatar-img" />
            </div>
            <h3 className="avatar-title">Salim Mwamkoba</h3>
            <p className="avatar-subtitle">Software Developer & Eco Champion</p>
            <div className="skill-pills-mini">
              <span>React</span>
              <span>PHP</span>
              <span>Node.js</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="card-bottom">
            <div className="card-meta">
              <strong>Education</strong>
              <span>B.Sc. in IT (MMUST)</span>
            </div>
            <div className="card-meta">
              <strong>Community Role</strong>
              <span>M&E / Tech Contributor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
