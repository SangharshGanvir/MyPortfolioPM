import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LayoutDashboard, Brain, Search, Lightbulb, Palette, TrendingUp, BookOpen, FileText, AlertCircle, Users, Shield, CheckCircle } from 'lucide-react';

const AIGovernmentServicePlatform = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'challenge', label: 'Challenge', icon: Brain },
    { id: 'research', label: 'Research', icon: Search },
    { id: 'strategy', label: 'Strategy', icon: Lightbulb },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'impact', label: 'Impact', icon: TrendingUp },
    { id: 'reflection', label: 'Reflection', icon: BookOpen },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-dark-card border-r border-dark-border overflow-y-auto hidden lg:block z-40">
        <div className="p-6">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Work
          </Link>

          <h3 className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-4">
            Table of Contents
          </h3>

          <nav className="space-y-1">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === section.id
                      ? 'bg-primary/10 text-primary border-l-2 border-primary'
                      : 'text-gray-400 hover:text-white hover:bg-dark-bg'
                  }`}
                >
                  <Icon size={18} />
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Hero Section */}
        <section id="overview" className="bg-dark-card border-b border-dark-border py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="lg:hidden mb-8">
              <Link 
                to="/work" 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <ArrowLeft size={16} />
                Back to Work
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <div className="text-xs text-primary uppercase tracking-wider mb-4 font-semibold">
                  CASE STUDY — 2024
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  AI-Enabled Government Service Platform
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  An AI-enabled government service platform designed to help citizens complete benefit and 
                  license applications through a mobile app, while enabling government staff to process cases 
                  more efficiently through a web dashboard with AI-assisted triage and validation.
                </p>

                <button className="btn-primary mb-12">
                  View Live Prototype
                </button>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">ROLE</div>
                    <div className="text-white font-medium">UX Project Manager</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">DURATION</div>
                    <div className="text-white font-medium">12 Weeks</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">TYPE</div>
                    <div className="text-white font-medium">Self-initiated</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">TOOLS</div>
                    <div className="text-white font-medium">Figma, Miro, Notion</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Hero Image */}
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-200 via-blue-100 to-green-100 rounded-2xl overflow-hidden flex items-center justify-center p-8">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="text-gray-400 mx-auto mb-4" size={64} />
                      <p className="text-gray-600 font-medium">Hero Image Placeholder</p>
                      <p className="text-gray-500 text-sm mt-2">Add government service interface mockup</p>
                      <p className="text-gray-400 text-xs mt-1">(Mobile form or dashboard)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section id="challenge" className="py-12 md:py-20 border-b border-dark-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">01. The Challenge</h2>

            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">Description</h3>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Government services are often fragmented across multiple portals, requiring citizens to navigate 
                  complex procedures and submit repetitive documentation.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Many citizens—especially elderly users and people with low digital literacy—struggle to:
                </p>

                <div className="grid md:grid-cols-2 gap-4 ml-6">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300">Identify the correct government service</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300">Understand required documentation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300">Track application progress</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300">Communicate with departments</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Government staff also face operational inefficiencies due to manual verification, duplicated 
                  data entry, and high inquiry volumes.
                </p>
              </div>
            </div>

            {/* Key Issues */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">Key Issues Identified</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertCircle className="text-red-400" size={18} />
                  </div>
                  <p className="text-gray-300">Long waiting times for service approval</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="text-red-400" size={18} />
                  </div>
                  <p className="text-gray-300">Limited digital literacy among some citizens</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="text-red-400" size={18} />
                  </div>
                  <p className="text-gray-300">Lack of transparency in application progress</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="text-red-400" size={18} />
                  </div>
                  <p className="text-gray-300">Fragmented communication between departments</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="text-red-400" size={18} />
                  </div>
                  <p className="text-gray-300">High operational workload for government staff</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="bg-dark-card py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">02. Research & Insights</h2>

            <h3 className="text-xl font-bold mb-6">Research Methods</h3>

            {/* Research Methods - 3 Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">User Interviews & Surveys</h3>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">25 citizens across age groups</p>
                  <p className="text-gray-400 text-sm">10 government staff members</p>
                </div>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Data Analysis</h3>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">Application processing data</p>
                  <p className="text-gray-400 text-sm">Citizen support requests</p>
                  <p className="text-gray-400 text-sm">Department workflows</p>
                </div>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Competitive Audit</h3>
                <p className="text-gray-400 text-sm mb-3">Platforms studied:</p>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">• Estonia e-Government</p>
                  <p className="text-gray-300 text-sm">• UK GOV Digital Services</p>
                  <p className="text-gray-300 text-sm">• Singapore Smart Nation</p>
                </div>
              </div>
            </div>

            {/* Persona Card */}
            <div className="bg-dark-bg border border-dark-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">Persona</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary mb-2">Low Digital Literacy Citizen</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Age:</span>
                    <span className="text-gray-300 ml-2">58</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Occupation:</span>
                    <span className="text-gray-300 ml-2">Retired Worker</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Pain Points</h5>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <p className="text-gray-300 text-sm">Difficult to understand forms</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <p className="text-gray-300 text-sm">Unsure which service to choose</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <p className="text-gray-300 text-sm">Needs assistance tracking status</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Goals</h5>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p className="text-gray-300 text-sm">Simple step-by-step service guidance</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p className="text-gray-300 text-sm">Transparent application tracking</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <p className="text-gray-300 text-sm">Quick assistance when confused</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section id="strategy" className="py-12 md:py-20 border-b border-dark-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">03. The Strategy</h2>

            <p className="text-gray-300 mb-12 leading-relaxed max-w-4xl">
              The product strategy focuses on AI-assisted citizen journeys.
            </p>

            {/* Strategy Pillars */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">Strategy Pillars</h3>
              <div className="bg-dark-card border border-dark-border rounded-lg p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Pillar 1 */}
                  <div>
                    <div className="text-5xl font-bold text-primary mb-4">1</div>
                    <h4 className="text-lg font-bold mb-3">Guided Service Navigation</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      AI assistant helps citizens choose the correct service.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div>
                    <div className="text-5xl font-bold text-primary mb-4">2</div>
                    <h4 className="text-lg font-bold mb-3">Real-time Status Visibility</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Transparent application progress.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div>
                    <div className="text-5xl font-bold text-primary mb-4">3</div>
                    <h4 className="text-lg font-bold mb-3">Intelligent Form Automation</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      AI pre-fills citizen data from records.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MVP Roadmap */}
            <div>
              <h3 className="text-xl font-bold mb-6">12 Week MVP Roadmap</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 1-2</h4>
                  <p className="text-gray-400 text-sm">Research & information architecture</p>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 3-6</h4>
                  <p className="text-gray-400 text-sm">Wireframes & citizen flows</p>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 7-9</h4>
                  <p className="text-gray-400 text-sm">AI assistant integration</p>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 10-12</h4>
                  <p className="text-gray-400 text-sm">Testing & developer handoff</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Section */}
        <section id="design" className="bg-dark-card py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">04. Design & Artifacts</h2>

            <p className="text-gray-300 mb-12 leading-relaxed">
              Now comes the important part for you: generating UI from Stitch.
            </p>

            <p className="text-gray-300 mb-12 leading-relaxed">
              We will create prompts for:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="text-primary" size={24} />
                </div>
                <h3 className="font-bold mb-2">Low fidelity flows</h3>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="font-bold mb-2">Mobile citizen app</h3>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <LayoutDashboard className="text-primary" size={24} />
                </div>
                <h3 className="font-bold mb-2">Web staff dashboard</h3>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="text-primary" size={24} />
                </div>
                <h3 className="font-bold mb-2">Design system</h3>
              </div>
            </div>

            {/* Placeholder for future design artifacts */}
            <div className="bg-dark-bg border border-dark-border rounded-lg p-8">
              <div className="aspect-[16/9] bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Palette className="text-gray-500 mx-auto mb-3" size={48} />
                  <p className="text-gray-500 text-sm">Design Artifacts Coming Soon</p>
                  <p className="text-gray-600 text-xs mt-1">UI screens and flows will be added here</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-12 md:py-20 border-b border-dark-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">05. Impact</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">50%</div>
                <p className="text-gray-400 text-sm">Increase in form completion</p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">35%</div>
                <p className="text-gray-400 text-sm">Reduction in processing time</p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <p className="text-gray-400 text-sm">Fewer support inquiries</p>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">4.5/5</div>
                <p className="text-gray-400 text-sm">Citizen satisfaction score</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection Section */}
        <section id="reflection" className="bg-dark-card py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">06. Reflection</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Key Learnings</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-300">AI should guide, not replace human judgment in government services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-300">Accessibility must be built in from the start, not added later</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-300">Designing for multiple user roles requires careful balance</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/work" 
                className="btn-primary inline-flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Back to All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Key Takeaways Section */}
        <section className="py-12 md:py-20 border-b border-dark-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Takeaways</h2>
            <div className="bg-dark-card border border-dark-border rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <p className="text-gray-300 leading-relaxed">Early user testing with citizens of varying digital literacy levels showed that guided step-by-step flows outperformed traditional form layouts — even when the total number of fields was the same.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <p className="text-gray-300 leading-relaxed">Collaborating with government operations staff revealed that AI-assisted case triage only earned trust when staff could see the reasoning and override decisions — transparency was non-negotiable.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <p className="text-gray-300 leading-relaxed">Simplifying the eligibility check into a conversational format reduced form abandonment significantly — users responded better to plain-language questions than to bureaucratic terminology.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <p className="text-gray-300 leading-relaxed">Designing for public services requires building trust at every interaction — clear progress indicators, honest error messages, and visible audit trails made citizens more willing to complete applications online.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIGovernmentServicePlatform;
