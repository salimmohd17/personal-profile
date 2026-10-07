import React from 'react';
import { Globe, Terminal, Database, Code2, Cpu, ShieldCheck } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const getIcon = (key) => {
  switch (key) {
    case 'frontend': return <Globe size={18} />;
    case 'backend': return <Terminal size={18} />;
    case 'database': return <Database size={18} />;
    case 'code': return <Code2 size={18} />;
    case 'tools': return <Cpu size={18} />;
    case 'emerging': default: return <ShieldCheck size={18} />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">TECHNICAL TOOLKIT</span>
          <h2>Core Competencies & Technologies.</h2>
          <p className="header-subtitle">
            A comprehensive stack spanning web development, programming languages, databases, IoT, and software tools.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-card-head">
                <div className="icon-box">{getIcon(cat.categoryKey)}</div>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-pills-list">
                {cat.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
