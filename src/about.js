import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      <header className="glass-header">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold gradient-text">DAO Governance Dashboard</h1>
            <p className="mt-2 text-muted">About the Project</p>
          </div>
          <Link to="/" className="btn btn-ghost">← Back to Dashboard</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
        {/* Project Overview */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-muted mb-4 leading-relaxed">
            The DAO Governance Dashboard is an interactive visualization tool designed to compare
            governance mechanisms between Decentralized Autonomous Organizations (DAOs) and traditional
            corporate structures. Our dashboard provides researchers, investors, and governance
            enthusiasts with data-driven insights into participation rates, power distribution,
            decision timelines, and governance outcomes.
          </p>
          <p className="text-muted leading-relaxed">
            This project aims to bridge the gap in understanding between emerging blockchain-based
            governance systems and established corporate governance frameworks. By visualizing these
            differences side-by-side, we hope to contribute to the ongoing dialogue about the future
            of organizational governance.
          </p>
        </div>

        {/* Technical Implementation */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Technology Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold mb-3 text-primary">Frontend</h4>
                  <ul className="list-check space-y-2 text-sm text-muted">
                    <li>React (Create React App)</li>
                    <li>React Router for navigation</li>
                    <li>Recharts for data visualization</li>
                    <li>Custom CSS utility classes</li>
                  </ul>
                </div>
                <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                  <h4 className="font-bold mb-3 text-secondary">Data Processing</h4>
                  <ul className="list-check space-y-2 text-sm text-muted">
                    <li>JavaScript data manipulation</li>
                    <li>JSON data structure</li>
                    <li>Statistical normalization</li>
                  </ul>
                </div>
                <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
                  <h4 className="font-bold mb-3 text-purple-700">Research Methodology</h4>
                  <ul className="list-check space-y-2 text-sm text-muted">
                    <li>Comparative analysis</li>
                    <li>Metric standardization</li>
                    <li>Case study development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Project Repository</h3>
              <p className="text-muted mb-4">
                This project is available on GitHub open source.
              </p>
              <a
                href="https://github.com/cekcreator/explaining_daos"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted text-sm mb-6">DAO Governance Research Dashboard — Developed by Andrew Pleeter & Caleb Kumar</p>
          <div className="flex justify-center flex-wrap gap-6">
            <Link to="/" className="footer-link">Dashboard Home</Link>
            <Link to="/data-sources" className="footer-link">Data Sources</Link>
            <Link to="/methodology" className="footer-link">Methodology</Link>
            <Link to="/case-studies" className="footer-link">Case Studies</Link>
            <Link to="/about" className="footer-link">About</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;