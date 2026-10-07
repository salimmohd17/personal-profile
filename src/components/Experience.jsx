import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container grid-two">
        <div>
          <span className="section-eyebrow">PRACTICAL EXPERIENCE</span>
          <h2>Professional Work & M&E Roles</h2>

          <div className="timeline-box">
            <div className="timeline-item">
              <div className="timeline-head">
                <Briefcase size={18} className="timeline-icon" />
                <div>
                  <h3>{experienceData.organization}</h3>
                  <span className="role-subtitle">{experienceData.role} ({experienceData.period})</span>
                </div>
              </div>
              <p className="timeline-desc">
                {experienceData.description}
              </p>
              <ul className="timeline-bullets">
                {experienceData.responsibilities.map((resp, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={15} className="check-icon" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <span className="section-eyebrow">ACADEMIC BACKGROUND</span>
          <h2>Education & Training</h2>

          <div className="edu-card">
            <div className="edu-head">
              <GraduationCap size={24} className="edu-icon" />
              <div>
                <h3>{educationData.institution}</h3>
                <span className="role-subtitle">{educationData.degree} ({educationData.status})</span>
              </div>
            </div>
            <div className="edu-body">
              <h4>Core Areas of Study:</h4>
              <div className="edu-tags">
                {educationData.topics.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
