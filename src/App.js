import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DataSources from './DataSources';
import About from './about';
import Methodology from './Methodology';
import CaseStudy from './CaseStudy';

// Real data from research document
const participationData = [
  { name: 'Uniswap', daoParticipation: 3.2, corporateParticipation: 70 },
  { name: 'MakerDAO', daoParticipation: 9.4, corporateParticipation: 68 },
  { name: 'Aave', daoParticipation: 4.7, corporateParticipation: 72 },
  { name: 'Decentraland', daoParticipation: 5.8, corporateParticipation: 65 },
  { name: 'Compound', daoParticipation: 6.2, corporateParticipation: 69 },
];

const powerDistributionData = {
  'Uniswap': [
    { name: 'Top 1%', dao: 68, corporate: 0 },
    { name: 'Next 9%', dao: 24, corporate: 0 },
    { name: 'Remaining 90%', dao: 8, corporate: 0 }
  ],
  'MakerDAO': [
    { name: 'Top 1%', dao: 62, corporate: 0 },
    { name: 'Next 9%', dao: 28, corporate: 0 },
    { name: 'Remaining 90%', dao: 10, corporate: 0 }
  ],
  'Meta': [
    { name: 'CEO/Founder', corporate: 58, dao: 0 },
    { name: 'Institutional', corporate: 32, dao: 0 },
    { name: 'Retail', corporate: 10, dao: 0 }
  ],
  'Berkshire': [
    { name: 'CEO/Management', corporate: 38, dao: 0 },
    { name: 'Institutional', corporate: 52, dao: 0 },
    { name: 'Retail', corporate: 10, dao: 0 }
  ],
  'Tesla': [
    { name: 'CEO/Founder', corporate: 43, dao: 0 },
    { name: 'Institutional', corporate: 45, dao: 0 },
    { name: 'Retail', corporate: 12, dao: 0 }
  ],
  'Apple': [
    { name: 'Executive Team', corporate: 15, dao: 0 },
    { name: 'Institutional', corporate: 73, dao: 0 },
    { name: 'Retail', corporate: 12, dao: 0 }
  ]
};

const decisionTimelineData = {
  'DAO': [
    { name: 'Forum Discussion', days: 7 },
    { name: 'Temperature Check', days: 3 },
    { name: 'Consensus Check', days: 3 },
    { name: 'On-chain Proposal', days: 2 },
    { name: 'Execution', days: 2 }
  ],
  'Corporate': [
    { name: 'Board Planning', days: 14 },
    { name: 'Proxy Statement', days: 30 },
    { name: 'AGM', days: 1 },
    { name: 'Implementation', days: 60 }
  ]
};

const compareTimelineData = [
  { name: 'Proposal', dao: 1, corporate: 14 },
  { name: 'Discussion', dao: 7, corporate: 30 },
  { name: 'Voting', dao: 5, corporate: 1 },
  { name: 'Execution', dao: 2, corporate: 60 }
];

const outcomeAnalysisData = [
  { name: 'Treasury', daoSuccess: 72, corporateSuccess: 95 },
  { name: 'Protocol', daoSuccess: 78, corporateSuccess: 92 },
  { name: 'Grants', daoSuccess: 48, corporateSuccess: 65 },
  { name: 'Community', daoSuccess: 85, corporateSuccess: 45 },
];

// DAOs and corporations from the research
const daoOptions = ['Uniswap', 'MakerDAO', 'Aave', 'Decentraland', 'Compound'];
const corporateOptions = ['Meta', 'Berkshire Hathaway', 'Tesla', 'Apple'];

// Colors matching CSS variables
const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'];
const PRIMARY_COLOR = '#4F46E5';
const SECONDARY_COLOR = '#10B981';

// Case study data mapping for the dashboard
const caseStudyLinks = {
  dao: [
    { id: 'uniswap-v3', title: 'Uniswap V3 Deployment', org: 'Uniswap' },
    { id: 'makerdao-emergency', title: 'MakerDAO Emergency Shutdown', org: 'MakerDAO' },
    { id: 'aave-safety', title: 'Aave Safety Module', org: 'Aave' }
  ],
  corporate: [
    { id: 'meta-privacy', title: 'Meta Privacy Policy Changes', org: 'Meta' },
    { id: 'tesla-compensation', title: 'Tesla CEO Compensation Package', org: 'Tesla' }
  ]
};

function Dashboard() {
  const navigate = useNavigate();
  const [selectedDAO, setSelectedDAO] = useState('Uniswap');
  const [selectedCorporation, setSelectedCorporation] = useState('Meta');
  const [activeTab, setActiveTab] = useState('overview');

  // Get correct power distribution data based on selection
  const getDAOPowerData = () => {
    return powerDistributionData[selectedDAO] || powerDistributionData['Uniswap'];
  };

  const getCorporatePowerData = () => {
    return powerDistributionData[selectedCorporation] || powerDistributionData['Meta'];
  };

  // Get metrics for selected entities
  const getDaoParticipation = () => {
    const data = participationData.find(item => item.name === selectedDAO);
    return data ? data.daoParticipation : 4.2;
  };

  const getCorporateParticipation = () => {
    const data = participationData.find(item => item.name === selectedDAO);
    return data ? data.corporateParticipation : 70;
  };

  // Navigate to case study
  const handleCaseStudyClick = (caseId) => {
    navigate(`/case-study/${caseId}`);
  };

  // Get additional metrics
  const getDAOInfo = () => {
    switch (selectedDAO) {
      case 'Uniswap':
        return {
          token: 'UNI',
          governance: 'Uses Snapshot for off-chain voting',
          challenge: 'Low participation and vote centralization',
          treasury: 'One of the largest DAO treasuries',
          notable: 'Pioneered liquidity protocol governance',
          gini: 0.87,
          topWallets: '68%',
          delegation: '21%'
        };
      case 'MakerDAO':
        return {
          token: 'MKR',
          governance: 'Complex system with delegates, executive votes, and governance facilitators',
          challenge: 'Voter apathy on technical decisions',
          treasury: '$500M+',
          notable: 'Pioneer in on-chain governance',
          gini: 0.82,
          topWallets: '62%',
          delegation: '35%'
        };
      case 'Aave':
        return {
          token: 'AAVE',
          governance: 'Uses Snapshot + on-chain actions via Tally',
          challenge: 'Technical complexity of proposals',
          treasury: '$250M+',
          notable: 'Well-structured governance process',
          gini: 0.78,
          topWallets: '58%',
          delegation: '28%'
        };
      case 'Decentraland':
        return {
          token: 'MANA',
          governance: 'Uses Aragon stack',
          challenge: 'Governing virtual assets',
          treasury: '$100M+',
          notable: 'Governance of virtual land and digital assets',
          gini: 0.75,
          topWallets: '53%',
          delegation: '18%'
        };
      case 'Compound':
        return {
          token: 'COMP',
          governance: 'On-chain voting with time-lock execution',
          challenge: 'Developer-heavy proposals',
          treasury: '$350M+',
          notable: 'Pioneered on-chain governance for DeFi',
          gini: 0.81,
          topWallets: '60%',
          delegation: '32%'
        };
      default:
        return {
          token: 'UNI',
          governance: 'Uses Snapshot for off-chain voting',
          challenge: 'Low participation and vote centralization',
          treasury: 'Large',
          notable: 'Pioneered liquidity protocol governance',
          gini: 0.87,
          topWallets: '68%',
          delegation: '21%'
        };
    }
  };

  const getCorporateInfo = () => {
    switch (selectedCorporation) {
      case 'Meta':
        return {
          structure: 'Centralized with Mark Zuckerberg holding major control via dual-class shares',
          power: 'Zuckerberg controls ~58% voting power',
          notable: 'Example of how centralized power can shape corporate policy',
          gini: 0.81,
          institutional: '76%',
          founder: '58%'
        };
      case 'Berkshire Hathaway':
        return {
          structure: 'Small board and centralized decision-making',
          power: 'Led by Warren Buffett with significant influence',
          notable: 'Long-term shareholder focus, unique annual meetings',
          gini: 0.76,
          institutional: '80%',
          founder: '38%'
        };
      case 'Tesla':
        return {
          structure: 'Board influenced by CEO',
          power: 'Elon Musk\'s influence dominates decision-making',
          notable: 'Strong CEO influence, retail investor engagement',
          gini: 0.79,
          institutional: '75%',
          founder: '43%'
        };
      case 'Apple':
        return {
          structure: 'Traditional board structure with active shareholder meetings',
          power: 'More distributed than other examples',
          notable: 'Strong board, shareholder activism, large retail investor base',
          gini: 0.72,
          institutional: '73%',
          founder: '15%'
        };
      default:
        return {
          structure: 'Centralized with Mark Zuckerberg holding major control via dual-class shares',
          power: 'Zuckerberg controls ~58% voting power',
          notable: 'Example of how centralized power can shape corporate policy',
          gini: 0.81,
          institutional: '76%',
          founder: '58%'
        };
    }
  };

  return (
    <div className="min-h-screen">
      <header className="glass-header">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold gradient-text">DAO vs Corporate Governance</h1>
            <p className="mt-2 text-muted">Interactive Comparison Dashboard</p>
          </div>
          <div className="flex gap-4">
            <Link to="/about" className="btn btn-ghost">About</Link>
            <Link to="/case-studies" className="btn btn-primary">Case Studies</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
        {/* Entity Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4 text-primary">Select DAO</h2>
            <div className="flex flex-wrap gap-2">
              {daoOptions.map(dao => (
                <button
                  key={dao}
                  className={`btn ${selectedDAO === dao ? 'btn-primary' : 'btn-ghost bg-gray-100'}`}
                  onClick={() => setSelectedDAO(dao)}
                >
                  {dao}
                </button>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4 text-secondary">Select Corporation</h2>
            <div className="flex flex-wrap gap-2">
              {corporateOptions.map(corp => (
                <button
                  key={corp}
                  className={`btn ${selectedCorporation === corp ? 'btn-secondary' : 'btn-ghost bg-gray-100'}`}
                  onClick={() => setSelectedCorporation(corp)}
                >
                  {corp}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="nav-tabs">
          {['overview', 'participation', 'power', 'timeline', 'outcomes'].map((tab) => (
            <button
              key={tab}
              className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('timeline', ' Timeline').replace('power', ' Power')}
            </button>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="card p-8">
          {activeTab === 'overview' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Governance Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="card-flat">
                  <h3 className="text-lg font-semibold mb-2 text-muted">Voter Turnout</h3>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold text-primary">{getDaoParticipation()}%</p>
                      <p className="text-sm text-muted">{selectedDAO}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-secondary">{getCorporateParticipation()}%</p>
                      <p className="text-sm text-muted">{selectedCorporation}</p>
                    </div>
                  </div>
                </div>
                <div className="card-flat">
                  <h3 className="text-lg font-semibold mb-2 text-muted">Power Concentration</h3>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold text-primary">{getDAOInfo().topWallets}</p>
                      <p className="text-sm text-muted">Top holders</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-secondary">{getCorporateInfo().founder}</p>
                      <p className="text-sm text-muted">Control</p>
                    </div>
                  </div>
                </div>
                <div className="card-flat">
                  <h3 className="text-lg font-semibold mb-2 text-muted">Decision Timeline</h3>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold text-primary">~17d</p>
                      <p className="text-sm text-muted">DAO</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-secondary">~105d</p>
                      <p className="text-sm text-muted">Corp</p>
                    </div>
                  </div>
                </div>
                <div className="card-flat">
                  <h3 className="text-lg font-semibold mb-2 text-muted">Inequality (Gini)</h3>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold text-primary">{getDAOInfo().gini}</p>
                      <p className="text-sm text-muted">DAO</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-secondary">{getCorporateInfo().gini}</p>
                      <p className="text-sm text-muted">Corp</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-primary-light p-6 rounded-xl border border-blue-100">
                  <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                    <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
                    {selectedDAO} Profile
                  </h3>
                  <div className="space-y-3">
                    <p><span className="font-semibold">Token:</span> {getDAOInfo().token}</p>
                    <p><span className="font-semibold">Mechanism:</span> {getDAOInfo().governance}</p>
                    <p><span className="font-semibold">Challenge:</span> {getDAOInfo().challenge}</p>
                    <div className="mt-4 pt-4 border-t border-blue-200">
                      <h4 className="font-semibold mb-2 text-primary">Standard Process</h4>
                      <div className="flex items-center text-sm text-muted flex-wrap gap-2">
                        <span className="bg-white px-2 py-1 rounded shadow-sm">Forum</span> →
                        <span className="bg-white px-2 py-1 rounded shadow-sm">Temp Check</span> →
                        <span className="bg-white px-2 py-1 rounded shadow-sm">Vote</span> →
                        <span className="bg-blue-600 text-white px-2 py-1 rounded shadow-sm">Execute</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary-light p-6 rounded-xl border border-green-100">
                  <h3 className="text-xl font-bold mb-4 text-secondary flex items-center">
                    <span className="w-2 h-8 bg-green-600 rounded-full mr-3"></span>
                    {selectedCorporation} Profile
                  </h3>
                  <div className="space-y-3">
                    <p><span className="font-semibold">Structure:</span> {getCorporateInfo().structure}</p>
                    <p><span className="font-semibold">Power:</span> {getCorporateInfo().power}</p>
                    <p><span className="font-semibold">Ownership:</span> {getCorporateInfo().institutional} Inst.</p>
                    <div className="mt-4 pt-4 border-t border-green-200">
                      <h4 className="font-semibold mb-2 text-secondary">Standard Process</h4>
                      <div className="flex items-center text-sm text-muted flex-wrap gap-2">
                        <span className="bg-white px-2 py-1 rounded shadow-sm">Board</span> →
                        <span className="bg-white px-2 py-1 rounded shadow-sm">Proxy</span> →
                        <span className="bg-white px-2 py-1 rounded shadow-sm">AGM</span> →
                        <span className="bg-green-600 text-white px-2 py-1 rounded shadow-sm">Implement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'participation' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Voter Participation Comparison</h2>
              <p className="mb-6 text-muted">Compare voter turnout percentages between DAOs and traditional corporations.</p>

              <div style={{ height: 400, width: '100%' }}>
                <ResponsiveContainer>
                  <BarChart
                    data={participationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} />
                    <Tooltip cursor={{ fill: '#F1F5F9' }} contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                    <Legend />
                    <Bar dataKey="daoParticipation" name="DAO Participation %" fill={PRIMARY_COLOR} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="corporateParticipation" name="Corporate Participation %" fill={SECONDARY_COLOR} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-flat bg-primary-light border-blue-100">
                  <h3 className="text-lg font-bold text-primary mb-3">DAO Barriers</h3>
                  <ul className="list-check space-y-2 text-sm text-muted">
                    <li>Gas fees for on-chain voting</li>
                    <li>Technical complexity of proposals</li>
                    <li>Token distribution inequality ("Whales")</li>
                  </ul>
                </div>
                <div className="card-flat bg-secondary-light border-green-100">
                  <h3 className="text-lg font-bold text-secondary mb-3">Corporate Barriers</h3>
                  <ul className="list-check space-y-2 text-sm text-muted">
                    <li>Institutional dominance of voting</li>
                    <li>Limited shareholder proposal access</li>
                    <li>Regulatory hurdles for proposals</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'power' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Power Distribution Analysis</h2>
              <p className="mb-6 text-muted">Visualizing how voting power is distributed.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{selectedDAO} Distribution</h3>
                  <div style={{ height: 300, width: '100%' }}>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={getDAOPowerData()}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="dao"
                        >
                          {getDAOPowerData().map((entry, index) => (
                            <Cell key={`cell-dao-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                        <Legend verticalAlign="bottom" height={36} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-3xl font-bold text-primary">{getDAOInfo().gini}</p>
                    <p className="text-sm text-muted">Gini Coefficient</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-4 text-secondary">{selectedCorporation} Distribution</h3>
                  <div style={{ height: 300, width: '100%' }}>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={getCorporatePowerData()}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="corporate"
                        >
                          {getCorporatePowerData().map((entry, index) => (
                            <Cell key={`cell-corp-${index}`} fill={index === 0 ? '#059669' : index === 1 ? '#10b981' : '#6ee7b7'} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                        <Legend verticalAlign="bottom" height={36} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-3xl font-bold text-secondary">{getCorporateInfo().gini}</p>
                    <p className="text-sm text-muted">Gini Coefficient</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Decision Flow Timeline</h2>
              <p className="mb-6 text-muted">Comparing the time required for governance decisions (days).</p>

              <div style={{ height: 400, width: '100%' }}>
                <ResponsiveContainer>
                  <BarChart
                    data={compareTimelineData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                    <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} />
                    <YAxis dataKey="name" type="category" width={100} axisLine={false} tickLine={false} tick={{ fill: '#334155', fontWeight: 500 }} />
                    <Tooltip contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                    <Legend />
                    <Bar dataKey="dao" name="DAO Timeline (days)" fill={PRIMARY_COLOR} radius={[0, 4, 4, 0]} barSize={20} />
                    <Bar dataKey="corporate" name="Corporate Timeline (days)" fill={SECONDARY_COLOR} radius={[0, 4, 4, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-primary-light rounded-xl">
                  <h3 className="text-lg font-bold text-primary mb-4">DAO Process</h3>
                  <div className="space-y-4 relative pl-4 border-l-2 border-blue-200">
                    {decisionTimelineData['DAO'].map((step, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-white"></div>
                        <p className="font-semibold text-sm">{step.name}</p>
                        <p className="text-xs text-muted">{step.days} days</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-secondary-light rounded-xl">
                  <h3 className="text-lg font-bold text-secondary mb-4">Corporate Process</h3>
                  <div className="space-y-4 relative pl-4 border-l-2 border-green-200">
                    {decisionTimelineData['Corporate'].map((step, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
                        <p className="font-semibold text-sm">{step.name}</p>
                        <p className="text-xs text-muted">{step.days} days</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'outcomes' && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Governance Outcome Analysis</h2>
              <p className="mb-6 text-muted">Success rates of proposals by category (%).</p>

              <div style={{ height: 400, width: '100%' }}>
                <ResponsiveContainer>
                  <BarChart
                    data={outcomeAnalysisData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} />
                    <Tooltip contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                    <Legend />
                    <Bar dataKey="daoSuccess" name="DAO Success Rate %" fill={PRIMARY_COLOR} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="corporateSuccess" name="Corporate Success Rate %" fill={SECONDARY_COLOR} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Featured Case Studies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudyLinks.dao.slice(0, 2).map(study => (
                    <div
                      key={study.id}
                      onClick={() => handleCaseStudyClick(study.id)}
                      className="card p-6 cursor-pointer hover:border-blue-500"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded uppercase">DAO</span>
                        <span className="text-primary">→</span>
                      </div>
                      <h4 className="font-bold text-lg mb-1">{study.title}</h4>
                      <p className="text-sm text-muted">{study.org}</p>
                    </div>
                  ))}
                  {caseStudyLinks.corporate.slice(0, 2).map(study => (
                    <div
                      key={study.id}
                      onClick={() => handleCaseStudyClick(study.id)}
                      className="card p-6 cursor-pointer hover:border-green-500"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-bold rounded uppercase">Corporate</span>
                        <span className="text-secondary">→</span>
                      </div>
                      <h4 className="font-bold text-lg mb-1">{study.title}</h4>
                      <p className="text-sm text-muted">{study.org}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Link to="/case-studies" className="btn btn-primary">
                    View All Case Studies
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted text-sm mb-6">DAO Governance Research Dashboard — Data sources include DeepDAO, Tally, Snapshot, SEC filings</p>
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
}

// Case studies overview page
function CaseStudies() {
  const navigate = useNavigate();

  const handleCaseStudyClick = (caseId) => {
    navigate(`/case-study/${caseId}`);
  };

  return (
    <div className="min-h-screen">
      <header className="glass-header">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Governance Case Studies</h1>
            <p className="mt-2 text-muted">In-depth Analysis of Key Events</p>
          </div>
          <Link to="/" className="btn btn-ghost">← Back to Dashboard</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
        <div className="card p-8 mb-8">
          <p className="text-lg text-muted mb-8 max-w-3xl">
            Explore in-depth case studies of significant governance events in both DAOs and traditional corporations.
            These analyses highlight the practical application of governance processes, challenges faced, and outcomes achieved.
          </p>

          {/* DAO Case Studies */}
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
            <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
            DAO Governance Cases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {caseStudyLinks.dao.map(study => (
              <div
                key={study.id}
                onClick={() => handleCaseStudyClick(study.id)}
                className="card p-6 cursor-pointer hover:border-blue-500"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded uppercase">DAO</span>
                  <span className="text-primary">→</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{study.title}</h4>
                <p className="text-sm text-muted">{study.org}</p>
              </div>
            ))}
          </div>

          {/* Corporate Case Studies */}
          <h3 className="text-xl font-bold text-secondary mb-6 flex items-center">
            <span className="w-2 h-8 bg-green-600 rounded-full mr-3"></span>
            Corporate Governance Cases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudyLinks.corporate.map(study => (
              <div
                key={study.id}
                onClick={() => handleCaseStudyClick(study.id)}
                className="card p-6 cursor-pointer hover:border-green-500"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-bold rounded uppercase">Corporate</span>
                  <span className="text-secondary">→</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{study.title}</h4>
                <p className="text-sm text-muted">{study.org}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted text-sm mb-6">DAO Governance Research Dashboard — Case Study Analysis</p>
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
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/data-sources" element={<DataSources />} />
      <Route path="/about" element={<About />} />
      <Route path="/methodology" element={<Methodology />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-study/:caseId" element={<CaseStudy />} />
    </Routes>
  );
}

export default App;