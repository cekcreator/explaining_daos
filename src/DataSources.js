import React from 'react';
import { Link } from 'react-router-dom';

const DataSources = () => {
  return (
    <div className="min-h-screen">
      <header className="glass-header">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold gradient-text">DAO Governance Dashboard</h1>
            <p className="mt-2 text-muted">Research & Data Sources</p>
          </div>
          <Link to="/" className="btn btn-ghost">← Back to Dashboard</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">About Our Research</h2>
          <p className="text-muted mb-4 leading-relaxed">
            This dashboard presents a comparative analysis of governance mechanisms in Decentralized Autonomous Organizations (DAOs)
            and traditional corporate entities. All visualizations and insights are derived from credible sources in both blockchain
            governance and traditional corporate governance domains.
          </p>
          <p className="text-muted leading-relaxed">
            Our methodology includes data collection from on-chain analytics platforms, official governance forums, SEC filings,
            and academic research on organizational governance. Where applicable, we've normalized metrics to enable meaningful
            comparisons between these fundamentally different governance models.
          </p>
        </div>

        {/* Primary Data Sources */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-8">Primary Data Sources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DAO Data Sources */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-6 text-primary flex items-center">
                DAO Governance Data
              </h3>

              <div className="space-y-6">
                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">DeepDAO Data Explorer</h4>
                  <p className="text-sm text-muted mb-3">Comprehensive analytics on DAO treasuries, voting participation, and governance metrics.</p>
                  <a href="https://deepdao.io" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline flex items-center">
                    Visit DeepDAO
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Tally Proposal Histories</h4>
                  <p className="text-sm text-muted mb-3">Historical data on DAO proposals, voting patterns, and execution outcomes.</p>
                  <a href="https://tally.mirror.xyz/6e3I6e4K2FL_dcv5cnDTnJdQ0NSpqFnENZBAs7zre4s" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline flex items-center">
                    View Tally Reports
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Snapshot</h4>
                  <p className="text-sm text-muted mb-3">Off-chain voting platform data used by many DAOs for governance decisions.</p>
                  <a href="https://snapshot.org/#/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline flex items-center">
                    Explore Snapshot
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Aragon</h4>
                  <p className="text-sm text-muted mb-3">DAO creation and governance framework with integrated analytics.</p>
                  <a href="https://aragon.org" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline flex items-center">
                    Visit Aragon
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">DAO-Specific Governance Forums</h4>
                  <p className="text-sm text-muted mb-3">Direct sources of governance discussion and proposal formation.</p>
                  <div className="flex flex-col space-y-2 mt-3 pl-2 border-l-2 border-blue-200">
                    <a href="https://gov.uniswap.org/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">Uniswap Governance Forum</a>
                    <a href="https://forum.makerdao.com/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">MakerDAO Forum</a>
                    <a href="https://governance.aave.com/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">Aave Governance Forum</a>
                    <a href="https://governance.decentraland.org/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">Decentraland DAO</a>
                    <a href="https://www.comp.xyz/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">Compound Forum</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Governance Data Sources */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold mb-6 text-secondary flex items-center">
                Corporate Governance Data
              </h3>

              <div className="space-y-6">
                <div className="bg-green-50/50 p-5 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">SEC Proxy Statements (DEF 14A)</h4>
                  <p className="text-sm text-muted mb-3">Official shareholder voting data and corporate governance disclosures.</p>
                  <a href="https://www.investopedia.com/terms/s/sec-form-def-14a.asp" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm font-semibold hover:underline flex items-center">
                    About Proxy Statements
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="bg-green-50/50 p-5 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">OECD Corporate Governance Principles</h4>
                  <p className="text-sm text-muted mb-3">International standards for corporate governance best practices.</p>
                  <a href="https://www.oecd.org/corporate/principles-corporate-governance/" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm font-semibold hover:underline flex items-center">
                    OECD Framework
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="bg-green-50/50 p-5 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">SEC Guidance on Shareholder Voting</h4>
                  <p className="text-sm text-muted mb-3">Regulatory framework and data on corporate voting practices.</p>
                  <a href="https://www.sec.gov/resources-small-businesses/going-public/annual-meetings-proxy-requirements" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm font-semibold hover:underline flex items-center">
                    SEC Guidance
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="bg-green-50/50 p-5 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Proxy Voting Services</h4>
                  <p className="text-sm text-muted mb-3">Third-party data on institutional voting practices and recommendations.</p>
                  <div className="flex flex-col space-y-2 mt-3 pl-2 border-l-2 border-green-200">
                    <a href="https://www.issgovernance.com/" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm hover:underline">ISS (Institutional Shareholder Services)</a>
                    <a href="https://www.glasslewis.com/" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm hover:underline">Glass Lewis</a>
                  </div>
                </div>

                <div className="bg-green-50/50 p-5 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-2 text-gray-800">Corporate Annual Reports</h4>
                  <p className="text-sm text-muted mb-3">Official company disclosures on governance structure and practices.</p>
                  <div className="flex flex-col space-y-2 mt-3 pl-2 border-l-2 border-green-200">
                    <a href="https://investor.fb.com/financials/default.aspx" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm hover:underline">Meta Investor Relations</a>
                    <a href="https://www.berkshirehathaway.com/reports.html" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm hover:underline">Berkshire Hathaway Reports</a>
                    <a href="https://ir.tesla.com/" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm hover:underline">Tesla Investor Relations</a>
                    <a href="https://investor.apple.com/" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm hover:underline">Apple Investor Relations</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-8">Additional Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DAO Research */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">DAO Research & Theory</h3>

              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                  <h4 className="font-bold text-lg mb-2">Vitalik Buterin's Research on DAO Voting</h4>
                  <p className="text-sm text-muted mb-3">Theoretical frameworks for improving DAO governance mechanisms.</p>
                  <a href="https://vitalik.ca/general/2021/08/16/voting3.html" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline flex items-center">
                    Moving beyond coin voting governance
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                  <h4 className="font-bold text-lg mb-2">Ethereum DAO Primer</h4>
                  <p className="text-sm text-muted mb-3">Official Ethereum Foundation resources on DAO fundamentals.</p>
                  <a href="https://ethereum.org/en/dao/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline flex items-center">
                    Ethereum DAO Guide
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Corporate Governance Research */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Corporate Governance Research</h3>

              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-gray-200 hover:border-green-200 hover:bg-green-50/30 transition-colors">
                  <h4 className="font-bold text-lg mb-2">OECD Corporate Governance Framework</h4>
                  <p className="text-sm text-muted mb-3">Comprehensive international standards for corporate governance.</p>
                  <a href="https://www.oecd.org/corporate/principles-corporate-governance/" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm font-semibold hover:underline flex items-center">
                    OECD Framework
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 hover:border-green-200 hover:bg-green-50/30 transition-colors">
                  <h4 className="font-bold text-lg mb-2">SEC Guidance on Shareholder Voting</h4>
                  <p className="text-sm text-muted mb-3">Regulatory framework for corporate voting in the United States.</p>
                  <a href="https://www.sec.gov/investor/alerts/votinginannualshareholdersmeetings.pdf" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm font-semibold hover:underline flex items-center">
                    SEC Investor Alert
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Methodology */}
        <div className="card p-8">
          <h2 className="text-2xl font-bold mb-6">Data Collection Methodology</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-primary">DAO Metrics Collection</h3>
              <p className="text-muted leading-relaxed">
                DAO governance data was collected from both on-chain (Etherscan transaction histories) and off-chain (Snapshot votes) sources.
                For governance participation metrics, we normalized data by calculating the percentage of total token supply that participated
                in votes, allowing for comparison across different DAOs and with traditional corporate governance mechanisms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Corporate Governance Data Collection</h3>
              <p className="text-muted leading-relaxed">
                Corporate governance data was sourced from official SEC filings (particularly DEF 14A proxy statements), annual reports,
                and third-party aggregators like ISS and Glass Lewis. We focused on shareholder voting participation,
                power distribution, and governance process timelines to enable meaningful comparisons with DAO governance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Timeframe & Data Currency</h3>
              <p className="text-muted leading-relaxed">
                The dashboard presents data collected from January 2021 through October 2024, with special attention to
                capturing the evolution of DAO governance mechanisms over this period. Corporate governance data follows
                annual reporting cycles with the most recent complete fiscal year included for each entity.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted text-sm mb-6">DAO Governance Research Dashboard — Data Sources & Methodology</p>
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

export default DataSources;