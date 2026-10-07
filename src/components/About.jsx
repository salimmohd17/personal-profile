import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container grid-two">
        <div className="section-header">
          <span className="section-eyebrow">ABOUT ME</span>
          <h2>Developer with a practical, impact-driven mindset.</h2>
        </div>
        <div className="about-body">
          <p>
            Software Developer with practical experience in designing and developing modern web applications, software systems, databases, and digital platforms. Skilled in frontend and backend development using JavaScript, React, Next.js, PHP, Node.js, Express.js, MySQL, C, C++, and Java.
          </p>
          <p>
            Beyond software development, I am passionate about environmental conservation and community development. Through my involvement with <a href="https://wahapahapa-waste-management.netlify.app/" target="_blank" rel="noreferrer" className="inline-link"><strong>Wahapahapa Waste Management</strong></a> in Kwale County, I contribute to waste-management operations, monitoring & evaluation (M&E), digital documentation, environmental awareness, plastic recovery, and community cleanups.
          </p>
          <div className="about-link-wrap">
            <a className="inline-link" href="#experience">
              View my experience & education <ChevronRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
