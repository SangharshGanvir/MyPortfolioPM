import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LayoutDashboard, Brain, Search, Lightbulb, Palette, TrendingUp, BookOpen, Clock, XCircle, Users, Target, AlertCircle } from 'lucide-react';

const AIJobMatchingPlatform = () => {
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
                  AI-Powered Job Matching Platform
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  An AI-enabled career platform designed to help job seekers discover relevant roles through 
                  skill-based matching, while giving recruiters a web dashboard to review candidate fit and 
                  manage applications more effectively.
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
                    <div className="text-white font-medium">10 Weeks</div>
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
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-200 via-blue-100 to-purple-100 rounded-2xl overflow-hidden flex items-center justify-center p-8">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <Brain className="text-gray-400 mx-auto mb-4" size={64} />
                      <p className="text-gray-600 font-medium">Hero Image Placeholder</p>
                      <p className="text-gray-500 text-sm mt-2">Add AI matching interface mockup</p>
                      <p className="text-gray-400 text-xs mt-1">(Mobile app or dashboard)</p>
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
                  Finding the right job is time-consuming and emotionally draining. Most job platforms rely on 
                  keyword-based search, which produces irrelevant results and forces users to manually filter 
                  hundreds of listings.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  At the same time, recruiters struggle to identify strong candidates quickly due to poor skill 
                  visibility and low-quality applications.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  The challenge was to design a system that could support job seekers through a mobile app, 
                  enable recruiters via a web dashboard, and use AI responsibly to improve matching and transparency.
                </p>
              </div>

              {/* Right Column - Key Issues */}
              <div className="bg-dark-card border border-dark-border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6">Key Issues Identified</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="text-red-400" size={18} />
                    </div>
                    <p className="text-gray-300">Job recommendations felt random and unreliable</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <AlertCircle className="text-red-400" size={18} />
                    </div>
                    <p className="text-gray-300">Users didn't understand why a role was suggested</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Search className="text-red-400" size={18} />
                    </div>
                    <p className="text-gray-300">Career switchers struggled to map transferable skills</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="text-red-400" size={18} />
                    </div>
                    <p className="text-gray-300">Recruiters spent too much time filtering candidates</p>
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
                  Spoke with job seekers and hiring managers to understand frustrations with job discovery 
                  and candidate screening.
                </p>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Data Analysis</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Reviewed common drop-off points in job application funnels and resume filtering patterns.
                </p>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Competitive Audit</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Analyzed leading job platforms and AI-driven recruitment tools to benchmark transparency 
                  and usability.
                </p>
              </div>
            </div>

            {/* Persona Insight Card */}
            <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6">
                  Persona Insight: "Career Switcher"
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left - Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="text-center p-8">
                      <Users className="text-gray-500 mx-auto mb-3" size={48} />
                      <p className="text-gray-500 text-sm">Persona Image</p>
                      <p className="text-gray-600 text-xs mt-1">Add career switcher photo</p>
                    </div>
                  </div>

                  {/* Right - Quote and Details */}
                  <div>
                    <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
                      "I know I have the skills, but I don't know which roles I should even be applying for. 
                      Most platforms just show me the same generic jobs."
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Goals</p>
                        <p className="text-gray-300 text-sm">Relevant opportunities, confidence in fit</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Frustrations</p>
                        <p className="text-gray-300 text-sm">Keyword-based search, unclear job requirements</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Needs</p>
                        <p className="text-gray-300 text-sm">Guidance, skill visibility, explanations</p>
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
              The strategy focused on using AI as a decision-support tool rather than a black-box judge. 
              Three core principles shaped the solution:
            </p>

            {/* Three Pillars */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Pillar 1 */}
                <div>
                  <div className="text-5xl font-bold text-primary mb-4">1</div>
                  <h4 className="text-lg font-bold mb-3">Skill-Based Matching</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Shift from job titles to skill profiles to improve relevance.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div>
                  <div className="text-5xl font-bold text-primary mb-4">2</div>
                  <h4 className="text-lg font-bold mb-3">Explain the AI</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Show users why a role is recommended instead of hiding logic behind automation.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div>
                  <div className="text-5xl font-bold text-primary mb-4">3</div>
                  <h4 className="text-lg font-bold mb-3">Support Both Sides</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Design for job seekers (mobile) and recruiters (web) as part of the same system.
                  </p>
                </div>
              </div>
            </div>

            {/* MVP Roadmap */}
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide">10-Week MVP Roadmap</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 1-2</h4>
                  <p className="text-gray-400 text-sm">Research & Definition</p>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 3-5</h4>
                  <p className="text-gray-400 text-sm">Flows & Wireframes</p>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 6-8</h4>
                  <p className="text-gray-400 text-sm">High-Fidelity Design</p>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 9-10</h4>
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
                    <p className="text-gray-600 text-xs mt-1">Add skill setup and matching flow wireframes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI & Trust */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">AI & Trust</h3>
              <div className="bg-dark-bg border border-dark-border rounded-lg p-8">
                <p className="text-gray-400 leading-relaxed mb-6">
                  Design decisions prioritized:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-300">Clear match explanations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-300">Human-readable language</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-300">Visible skill overlap</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-gray-300">User control over recommendations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-dark-bg border border-dark-border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Job Seeker Mobile App</h3>
                <p className="text-gray-500 text-sm mb-4">(AI-Enabled)</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Skill-based profile builder
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    AI job recommendations
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    "Why this match?" explanation
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Skill gap analysis
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Saved jobs and application tracking
                  </li>
                </ul>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Recruiter Web Dashboard</h3>
                <p className="text-gray-500 text-sm mb-4">(AI-Enabled)</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Candidate skill visualization
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    AI-assisted shortlist suggestions
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Match confidence indicators
                  </li>
                  <li className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-primary mt-1">•</span>
                    Application pipeline management
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
                        <p className="text-gray-600 text-xs">Skill Profile</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                    <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                      <div className="text-center px-2">
                        <p className="text-gray-600 text-xs">AI Matches</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                    <div className="aspect-[9/16] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <div className="text-center px-2">
                        <p className="text-gray-600 text-xs">Explanation</p>
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
                    <div className="aspect-[16/10] bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-8">
                      <div className="text-center">
                        <p className="text-gray-600 text-sm">Candidate Fit Overview</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        <p className="text-gray-600 text-xs">Shortlist</p>
                      </div>
                    </div>
                    <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                        <p className="text-gray-600 text-xs">Pipeline</p>
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
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">+45%</div>
                  <p className="text-gray-300 font-medium">Application Completion</p>
                  <p className="text-gray-500 text-sm mt-1">Better role relevance</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">-35%</div>
                  <p className="text-gray-300 font-medium">Search Time</p>
                  <p className="text-gray-500 text-sm mt-1">AI-assisted discovery</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">-30%</div>
                  <p className="text-gray-300 font-medium">Recruiter Screening Effort</p>
                  <p className="text-gray-500 text-sm mt-1">Smarter shortlisting</p>
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            <div>
              <h3 className="text-lg font-bold mb-6">Client Testimonial</h3>
              <div className="bg-dark-card border border-dark-border rounded-lg p-8">
                <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
                  "This approach changes how candidates and recruiters engage with the hiring process. Instead of 
                  relying on keyword matching, we can finally see real skill alignment and explain it clearly to users."
                </p>
                <p className="text-sm text-gray-500">— Head of Talent, HR Technology Firm</p>
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
                  <Brain className="text-primary" size={20} />
                </div>
                <h3 className="text-xl font-bold pt-2">Designing with AI Transparency</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                This project emphasized that AI should guide, not decide. Making recommendations understandable 
                helped users feel more confident and reduced anxiety around automated decisions.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Balancing user trust with algorithmic assistance shaped many of the design choices, from match 
                explanations to skill visualization. The key takeaway was that AI features only succeed when 
                users understand and feel in control of them.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                Future iterations could include interview preparation tools and long-term career path recommendations.
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

        {/* Key Takeaways Section */}
        <section className="py-12 md:py-20 border-b border-dark-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Takeaways</h2>
            <div className="bg-dark-card border border-dark-border rounded-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <p className="text-gray-300 leading-relaxed">Showing users why a job was recommended — not just that it was — significantly increased trust in AI-generated matches and reduced drop-off on results pages.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <p className="text-gray-300 leading-relaxed">Collaborating with the data science team early helped us design match explanations that were both technically accurate and easy for non-technical users to understand.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <p className="text-gray-300 leading-relaxed">User testing revealed that job seekers preferred fewer, higher-quality recommendations over long lists — reducing visible matches actually improved engagement.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <p className="text-gray-300 leading-relaxed">Designing the skill gap visualization helped users see career growth opportunities, which shifted the product from a job board into a career planning tool.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIJobMatchingPlatform;
