import React from 'react';
import { X, CheckCircle2, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="modal-header">
          <span className="category-tag">{project.category}</span>
          <h3>{project.title}</h3>
          <span className={`status-badge-sm ${project.statusType}`}>
            {project.status}
          </span>
        </div>

        <div className="modal-body">
          <p className="modal-long-desc">{project.longDesc}</p>

          <h4>Key Technical Highlights</h4>
          <ul className="highlights-list">
            {project.highlights.map((h, idx) => (
              <li key={idx}>
                <CheckCircle2 size={16} className="check-icon" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <h4>Technologies Used</h4>
          <div className="stack-tags">
            {project.stack.map(s => (
              <span className="stack-pill" key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Visit Live Site <ExternalLink size={16} />
            </a>
          )}
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
