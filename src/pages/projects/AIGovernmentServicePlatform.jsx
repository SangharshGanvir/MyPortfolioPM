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

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Problem Description */}
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Accessing government services is often slow, confusing, and stressful. Citizens must navigate 
                  long forms, unclear requirements, and multiple departments, while government staff handle large 
                  case volumes manually.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  The challenge was to design a system that could support citizens through a mobile app, enable 
                  government staff via a web dashboard, and use AI to reduce complexity and processing time.
                </p>
              </div>

              {/* Right Column - Key Issues */}
              <div className="bg-dark-card border border-dark-border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6">Key Issues Identified</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <FileText className="text-red-400" size={18} />
                    </div>
                    <p className="text-gray-300">Forms were too long and difficult to understand</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <AlertCircle className="text-red-400" size={18} />
                    </div>
                    <p className="text-gray-300">Citizens didn't know if they were eligible before applying</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="text-red-400" size={18} />
                    </div>
                    <p className="text-gray-300">Staff manually reviewed repetitive data</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <AlertCircle className="text-red-400" size={18} />
                    </div>
                    <p className="text-gray-300">Errors caused frequent resubmissions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="bg-dark-card py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">02. Research & Insights</h2>

            {/* Research Methods - 3 Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">User Interviews & Surveys</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Spoke with citizens and frontline staff to understand pain points in applying for benefits, 
                  permits, and licenses.
                </p>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Data Analysis</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Reviewed drop-off points in government digital forms and common rejection reasons.
                </p>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Competitive Audit</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Analyzed digital government platforms across regions to benchmark usability and accessibility.
                </p>
              </div>
            </div>

            {/* Persona Insight Card */}
            <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6">
                  Persona Insight: "Low Digital Literacy Citizen"
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left - Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="text-center p-8">
                      <Users className="text-gray-500 mx-auto mb-3" size={48} />
                      <p className="text-gray-500 text-sm">Persona Image</p>
                      <p className="text-gray-600 text-xs mt-1">Add citizen photo</p>
                    </div>
                  </div>

                  {/* Right - Quote and Details */}
                  <div>
                    <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
                      "I don't know if I am filling the form correctly. If something is wrong, I only find out 
                      weeks later."
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Goals</p>
                        <p className="text-gray-300 text-sm">Complete forms successfully, avoid repeat visits</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Frustrations</p>
                        <p className="text-gray-300 text-sm">Long forms, unclear language</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Needs</p>
                        <p className="text-gray-300 text-sm">Guidance, validation, reassurance</p>
                      </div>
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
              The strategy focused on using AI to assist, not replace, human decision-making. Three guiding 
              principles shaped the solution:
            </p>

            {/* Three Pillars */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Pillar 1 */}
                <div>
                  <div className="text-5xl font-bold text-primary mb-4">1</div>
                  <h4 className="text-lg font-bold mb-3">Guide Before Submit</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Use AI to check eligibility and completeness before submission.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div>
                  <div className="text-5xl font-bold text-primary mb-4">2</div>
                  <h4 className="text-lg font-bold mb-3">Reduce Staff Load</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Automate routine checks so staff focus on complex cases.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div>
                  <div className="text-5xl font-bold text-primary mb-4">3</div>
                  <h4 className="text-lg font-bold mb-3">Design for Trust</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Make AI suggestions visible and explainable to both citizens and staff.
                  </p>
                </div>
              </div>
            </div>

            {/* MVP Roadmap */}
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide">12-Week MVP Roadmap</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 1-2</h4>
                  <p className="text-gray-400 text-sm">Research & Definition</p>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 3-6</h4>
                  <p className="text-gray-400 text-sm">Flows & Wireframes</p>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 7-10</h4>
                  <p className="text-gray-400 text-sm">High-Fidelity Design</p>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 11-12</h4>
                  <p className="text-gray-400 text-sm">Testing & Refinement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Section */}
        <section id="design" className="bg-dark-card py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">04. Design & Artifacts</h2>
              <a href="#" className="text-primary text-sm hover:underline">View Design System →</a>
            </div>

            {/* Low-Fidelity Flows */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">Low-Fidelity Flows</h3>
              <div className="bg-dark-bg border border-dark-border rounded-lg p-8">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Palette className="text-gray-500 mx-auto mb-3" size={48} />
                    <p className="text-gray-500 text-sm">Flow Diagram Placeholder</p>
                    <p className="text-gray-600 text-xs mt-1">Add form simplification and case review flow wireframes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI & Accessibility */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">AI & Accessibility</h3>
              <div className="bg-dark-bg border border-dark-border rounded-lg p-8">
                <p className="text-gray-400 leading-relaxed mb-6">
                  Design decisions prioritized:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-300">Plain language</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-300">Step-by-step guidance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-300">Inline AI validation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-300">Clear feedback messages</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-300">Accessibility-first layout</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-dark-bg border border-dark-border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Citizen Mobile App</h3>
                <p className="text-gray-500 text-sm mb-4">(AI-Enabled)</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    AI-assisted form completion
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Eligibility pre-check
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Document upload with error detection
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Application status tracking
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Appointment booking for in-person support
                  </li>
                </ul>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Government Staff Web Dashboard</h3>
                <p className="text-gray-500 text-sm mb-4">(AI-Enabled)</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    AI case triage (low vs high risk)
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Automatic form validation
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Missing data alerts
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Case priority queue
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Manual override and audit trail
                  </li>
                </ul>
              </div>
            </div>

            {/* Final Deliverables */}
            <h3 className="text-xl font-bold mb-8">Final Deliverables</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mobile App */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                    <Users className="text-primary" size={18} />
                  </div>
                  <h4 className="text-lg font-bold">Mobile App</h4>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                    <div className="aspect-[9/16] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <div className="text-center px-2">
                        <p className="text-gray-600 text-xs">Guided Form</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                    <div className="aspect-[9/16] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                      <div className="text-center px-2">
                        <p className="text-gray-600 text-xs">Eligibility Check</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                    <div className="aspect-[9/16] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <div className="text-center px-2">
                        <p className="text-gray-600 text-xs">App Status</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Web Dashboard */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                    <LayoutDashboard className="text-primary" size={18} />
                  </div>
                  <h4 className="text-lg font-bold">Web Dashboard</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                    <div className="aspect-[16/10] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-8">
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Case Review Queue</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        <p className="text-gray-600 text-xs">AI Validation</p>
                      </div>
                    </div>
                    <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        <p className="text-gray-600 text-xs">Timeline</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-12 md:py-20 border-b border-dark-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">05. Projected Impact</h2>

            {/* Metrics Card */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 mb-12">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">+50%</div>
                  <p className="text-gray-300 font-medium">Form Completion</p>
                  <p className="text-gray-500 text-sm mt-1">Guided submission flow</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">-40%</div>
                  <p className="text-gray-300 font-medium">Processing Time</p>
                  <p className="text-gray-500 text-sm mt-1">AI-assisted validation</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">-35%</div>
                  <p className="text-gray-300 font-medium">Service Counter Visits</p>
                  <p className="text-gray-500 text-sm mt-1">Better digital success</p>
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            <div>
              <h3 className="text-lg font-bold mb-6">Client Testimonial</h3>
              <div className="bg-dark-card border border-dark-border rounded-lg p-8">
                <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
                  "This platform fundamentally improves how citizens access services and how staff process cases. 
                  AI support allows us to reduce errors while maintaining human oversight."
                </p>
                <p className="text-sm text-gray-500">— Director of Digital Services, Public Sector Agency</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection Section */}
        <section id="reflection" className="bg-dark-card py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Reflection</h2>
            
            <div className="bg-dark-bg border border-dark-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary" size={20} />
                </div>
                <h3 className="text-xl font-bold pt-2">Designing AI for Public Trust</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                This project highlighted the responsibility of using AI in public services. Automation needed to 
                be transparent, fair, and auditable. Rather than replacing staff decisions, AI acted as an 
                assistant to reduce errors and workload.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                The key learning was that trust is built through clarity — users must understand what the system 
                is doing and why. Designing for accessibility and explainability proved more important than adding 
                advanced features.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                Future phases could include multilingual AI support and predictive service demand planning.
              </p>

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
      </div>
    </div>
  );
};

export default AIGovernmentServicePlatform;
