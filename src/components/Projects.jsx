import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.filterCat === activeFilter || p.status.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-header-flex">
          <div>
            <span className="section-eyebrow">SELECTED WORK</span>
            <h2>Projects built around real use cases.</h2>
          </div>
          <p className="header-subtitle">
            A curated selection of applications representing my technical standards and live deployments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-bar">
          {['All', 'Web Apps', 'Environmental', 'In Development'].map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="projects-grid">
          {filteredProjects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="card-num">{p.id}</div>
              <div className="card-content">
                <div className="card-header">
                  <div>
                    <span className="category-tag">{p.category}</span>
                    <h3 className="project-title">{p.title}</h3>
                  </div>
                  <span className={`status-badge-sm ${p.statusType}`}>
                    {p.status}
                  </span>
                </div>

                <p className="project-desc">{p.desc}</p>

                <div className="project-footer">
                  <div className="stack-tags">
                    {p.stack.map(s => (
                      <span className="stack-pill" key={s}>{s}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {p.link && p.link !== '#' && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="live-link-btn"
                      >
                        Visit Live Site <ExternalLink size={14} />
                      </a>
                    )}
                    <button
                      className="details-btn"
                      onClick={() => onSelectProject(p)}
                    >
                      Details <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
