import React from 'react';
import { Leaf, Recycle, TreePine, Users } from 'lucide-react';

export default function Impact() {
  return (
    <section id="impact" className="section-padding impact-section">
      <div className="container">
        <div className="impact-box">
          <div className="impact-badge">
            <Leaf size={28} />
          </div>
          <div className="impact-details">
            <span className="section-eyebrow">ENVIRONMENTAL CHAMPION</span>
            <h2>Technology should improve the places we live.</h2>
            <p className="impact-text">
              Through my work with <a href="https://wahapahapa-waste-management.netlify.app/" target="_blank" rel="noreferrer" className="inline-link"><strong>Wahapahapa Waste Management</strong></a>, I connect software development with hands-on conservation in Kwale County. My goal is to combine software engineering and environmental action to build sustainable community solutions.
            </p>

            <div className="impact-metrics-grid">
              <div className="impact-card">
                <Recycle size={20} className="impact-icon" />
                <h4>Plastic Recovery & Sorting</h4>
                <p>Documenting, weighing, and recovering plastic waste from ecosystems.</p>
              </div>
              <div className="impact-card">
                <TreePine size={20} className="impact-icon" />
                <h4>Landscaping & Planting</h4>
                <p>Tree planting, drainage management, and green space restoration.</p>
              </div>
              <div className="impact-card">
                <Users size={20} className="impact-icon" />
                <h4>Community Action & M&E</h4>
                <p>Community cleanups, beach restoration, and sensitization programs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
