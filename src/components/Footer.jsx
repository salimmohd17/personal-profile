import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container foot-content">
        <div className="foot-left">
          <span>© {new Date().getFullYear()} Salim Mohamed Mwamkoba. All rights reserved.</span>
          <span className="colophon-text">
            Built with React 18, Vite & Lucide Icons. Synchronized with official CV credentials.
          </span>
        </div>
        <div className="foot-right">
          <span>Software Developer · Environmental Champion</span>
        </div>
      </div>
    </footer>
  );
}
