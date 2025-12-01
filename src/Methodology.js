import React from 'react';
import { Link } from 'react-router-dom';

const Methodology = () => {
  return (
    <div className="min-h-screen">
      <header className="glass-header">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold gradient-text">DAO Governance Dashboard</h1>
            <p className="mt-2 text-muted">Research Methodology</p>
          </div>
          <Link to="/" className="btn btn-ghost">← Back to Dashboard</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
        {/* Introduction */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Research Methodology Overview</h2>
          <p className="text-muted leading-relaxed">
            This dashboard presents a comparative analysis of governance in Decentralized Autonomous Organizations (DAOs)
            and traditional corporate entities. Our approach combines quantitative metrics analysis with qualitative
            case study research to provide a comprehensive view of how these different governance systems operate.
          </p>
        </div>

        {/* Data Collection */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-8">Data Collection Methods</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DAO Data Collection */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-6 text-primary flex items-center">
                DAO Governance Data
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">On-chain Data Sources</h4>
                  <p className="text-muted mb-3">
                    We collected transaction data from Etherscan and other blockchain explorers to analyze:
                  </p>
                  <ul className="list-check space-y-2 text-sm text-muted">
                    <li>Proposal creation and voting transactions</li>
                    <li>Treasury management operations</li>
                    <li>Validator/delegate activities</li>
                    <li>Token distribution patterns</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Off-chain Governance Data</h4>
                  <p className="text-muted mb-3">
                    We analyzed governance forums and platforms to track:
                  </p>
                  <ul className="list-check space-y-2 text-sm text-muted">
                    <li>Snapshot votes and discussion content</li>
                    <li>Discussion-to-proposal conversion rates</li>
                    <li>Governance forum participation metrics</li>
                    <li>Proposal drafting and feedback cycles</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Third-party Analytics</h4>
                  <p className="text-muted">
                    We leveraged DeepDAO, Dune Analytics, and other platforms to obtain aggregated metrics
                    on DAO governance performance, participation rates, and treasury management.
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Data Collection */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold mb-6 text-secondary flex items-center">
                Corporate Governance Data
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Regulatory Filings</h4>
                  <p className="text-muted mb-3">
                    We analyzed SEC filings and other regulatory documents, focusing on:
                  </p>
                  <ul className="list-check space-y-2 text-sm text-muted">
                    <li>DEF 14A Proxy Statements for shareholder voting data</li>
                    <li>10-K Annual Reports for corporate governance structures</li>
                    <li>8-K filings for significant governance events</li>
                    <li>Corporate bylaws and governance guidelines</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Investor Relations Documents</h4>
                  <p className="text-muted mb-3">
                    We collected information from corporate IR websites including:
                  </p>
                  <ul className="list-check space-y-2 text-sm text-muted">
                    <li>Annual shareholder meeting materials</li>
                    <li>Corporate governance guidelines</li>
                    <li>Board committee charters</li>
                    <li>Executive compensation frameworks</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Proxy Advisory Services</h4>
                  <p className="text-muted">
                    We incorporated data from ISS and Glass Lewis on shareholder voting recommendations,
                    institutional voting patterns, and governance quality scores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Analysis */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Data Analysis Methodology</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Standardizing Participation Metrics</h3>
              <p className="text-muted leading-relaxed">
                To enable meaningful comparison between DAOs and corporations, we normalized participation data by
                calculating voter participation as a percentage of total eligible voters (token holders or shareholders).
                For DAOs, we adjusted for token delegation and multi-signature wallets to provide a more accurate
                reflection of individual participation rates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Power Distribution Analysis</h3>
              <p className="text-muted leading-relaxed">
                We calculated Gini coefficients for both token distribution (DAOs) and shareholding patterns (corporations)
                to quantify power concentration. For more nuanced analysis, we segmented token/share holders into percentile
                brackets and tracked voting power by bracket. In corporate contexts, we accounted for dual-class share structures
                that create voting power disparities.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Governance Timeline Quantification</h3>
              <p className="text-muted leading-relaxed">
                We developed a standardized governance cycle model for both DAOs and corporations, allowing us to
                measure the time required for each phase of decision-making. For DAOs, we tracked the full lifecycle
                from forum discussion to on-chain execution. For corporations, we mapped the process from initial
                board consideration through shareholder voting to implementation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Proposal Success Rate Analysis</h3>
              <p className="text-muted leading-relaxed">
                We categorized governance proposals by type (treasury, protocol changes, grants, community initiatives)
                and tracked success rates across categories. For corporate governance, we distinguished between management
                proposals and shareholder proposals, noting the significant difference in success rates between these types.
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-bold mb-3 text-gray-800">Case Study Selection</h3>
              <p className="text-muted leading-relaxed">
                Case studies were selected to represent significant governance events that highlight the strengths
                and challenges of each governance model. We prioritized cases with comprehensive documentation and
                clear outcomes that demonstrate characteristic patterns of DAO and corporate decision-making processes.
              </p>
            </div>
          </div>
        </div>

        {/* Limitations */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Research Limitations</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold mb-3 text-gray-800">Data Completeness</h3>
              <p className="text-sm text-muted">
                While on-chain DAO activity is transparent, much of the governance discussion happens in forums, Discord,
                and Telegram, which are not always systematically archived. We've made best efforts to capture this activity,
                but some informal governance may be underrepresented in our analysis.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold mb-3 text-gray-800">Corporate Transparency</h3>
              <p className="text-sm text-muted">
                Corporate governance often includes private board discussions and executive decisions that are not
                fully documented in public filings. Our analysis is limited to publicly available information, which
                may not capture the complete decision-making process.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold mb-3 text-gray-800">Evolving Nature</h3>
              <p className="text-sm text-muted">
                DAO governance models are rapidly evolving, with new mechanisms being introduced regularly. Our analysis
                represents a snapshot of current practices but may not reflect future developments in this dynamic space.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted text-sm mb-6">DAO Governance Research Dashboard — Research Methodology</p>
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

export default Methodology;