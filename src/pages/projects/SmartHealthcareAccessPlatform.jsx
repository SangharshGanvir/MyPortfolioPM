import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LayoutDashboard, Brain, Search, Lightbulb, Palette, TrendingUp, BookOpen, Clock, XCircle, Users } from 'lucide-react';

const SmartHealthcareAccessPlatform = () => {
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
                  Smart Healthcare Access Platform
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  A dual-sided digital ecosystem connecting patients via Mobile App and clinical staff 
                  via Web App to streamline access and scheduling.
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
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">TIMELINE</div>
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
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-200 via-orange-100 to-pink-100 rounded-2xl overflow-hidden flex items-center justify-center p-8">
                  {/* Placeholder for laptop mockup image */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <LayoutDashboard className="text-gray-400 mx-auto mb-4" size={64} />
                      <p className="text-gray-600 font-medium">Hero Image Placeholder</p>
                      <p className="text-gray-500 text-sm mt-2">Add laptop mockup image here</p>
                      <p className="text-gray-400 text-xs mt-1">(Dashboard screenshot on laptop)</p>
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
                  The core challenge was solving a two-sided problem: fragmented access for patients and 
                  manual, overwhelming scheduling for staff. Patients faced significant stress due to the 
                  unpredictability of booking essential care, while administrative teams were buried under 
                  high call volumes.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  The objective was to dismantle these barriers, creating a unified platform that reduces 
                  administrative friction for staff and empowers patients to access care without the anxiety 
                  of endless hold times.
                </p>
              </div>

              {/* Right Column - Key Issues */}
              <div className="bg-dark-card border border-dark-border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6">Key Issues Identified</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="text-red-400" size={18} />
                    </div>
                    <p className="text-gray-300">Long wait times for booking</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <XCircle className="text-red-400" size={18} />
                    </div>
                    <p className="text-gray-300">Missed appointments & confusion</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="text-red-400" size={18} />
                    </div>
                    <p className="text-gray-300">High workload for staff</p>
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
                  Conducted mixed-method research with 30 participants to uncover the emotional journey 
                  of seeking medical help.
                </p>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Data Analysis</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Analyzed current system logs to pinpoint peak congestion times and high drop-off points 
                  in digital flows.
                </p>
              </div>

              <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Competitive Audit</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Benchmarked against leading telehealth providers to identify best practices for 
                  accessibility and speed.
                </p>
              </div>
            </div>

            {/* Persona Insight Card */}
            <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6">
                  Persona Insight: "Elderly Patients & Caregivers"
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left - Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="text-center p-8">
                      <Users className="text-gray-500 mx-auto mb-3" size={48} />
                      <p className="text-gray-500 text-sm">Persona Image</p>
                      <p className="text-gray-600 text-xs mt-1">Add elderly patient photo here</p>
                    </div>
                  </div>

                  {/* Right - Quote and Tags */}
                  <div>
                    <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
                      "I need to know immediately if a doctor is available. I don't have the tech skills to 
                      navigate complex menus, and neither does my mom."
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-dark-card border border-dark-border rounded-full text-xs text-gray-400">
                        Digital Confidence
                      </span>
                      <span className="px-3 py-1 bg-dark-card border border-dark-border rounded-full text-xs text-gray-400">
                        Visibility
                      </span>
                      <span className="px-3 py-1 bg-dark-card border border-dark-border rounded-full text-xs text-gray-400">
                        Family Support
                      </span>
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
              To address the critical pain points, we focused on building trust through clarity. The strategy 
              was built upon three core pillars designed to empower users regardless of their technical proficiency:
            </p>

            {/* Three Pillars */}
            <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Pillar 1 */}
                <div>
                  <div className="text-5xl font-bold text-primary mb-4">1</div>
                  <h4 className="text-lg font-bold mb-3">Reduce Cognitive Load</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Simplifying interfaces to present only the most critical actions at any given time.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div>
                  <div className="text-5xl font-bold text-primary mb-4">2</div>
                  <h4 className="text-lg font-bold mb-3">Make Availability Visible</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Making system status and doctor schedules transparent to eliminate guessing games.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div>
                  <div className="text-5xl font-bold text-primary mb-4">3</div>
                  <h4 className="text-lg font-bold mb-3">Support Multiple Roles</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Enabling multi-profile management for family members managing care for others, plus staff tools.
                  </p>
                </div>
              </div>
            </div>

            {/* MVP Roadmap */}
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide">12-Week MVP Roadmap</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {/* Week 1-2 */}
                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 1-2</h4>
                  <p className="text-gray-400 text-sm">Research & Definition</p>
                </div>

                {/* Week 3-6 */}
                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 3-6</h4>
                  <p className="text-gray-400 text-sm">Wireframing & Testing</p>
                </div>

                {/* Week 7-10 */}
                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 7-10</h4>
                  <p className="text-gray-400 text-sm">High-Fidelity Design</p>
                </div>

                {/* Week 11-12 */}
                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Week 11-12</h4>
                  <p className="text-gray-400 text-sm">Prototyping & Handover</p>
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

            {/* Wireframes */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Low Fidelity Wireframe */}
              <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center p-8">
                  <div className="text-center">
                    <Palette className="text-gray-500 mx-auto mb-3" size={48} />
                    <p className="text-gray-500 text-sm">Low-fidelity</p>
                    <p className="text-gray-500 text-sm">Inform Process</p>
                    <p className="text-gray-600 text-xs mt-2">Add wireframe image</p>
                  </div>
                </div>
              </div>

              {/* Key Features Wireframe */}
              <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center p-8">
                  <div className="text-center">
                    <LayoutDashboard className="text-gray-400 mx-auto mb-3" size={48} />
                    <p className="text-gray-600 text-sm">Component wireframe</p>
                    <p className="text-gray-500 text-xs mt-2">Add wireframe image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Sections */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Accessibility & Trust</h3>
                <p className="text-gray-400 leading-relaxed">
                  We prioritized WCAG 2.1 compliance, ensuring high contrast and screen reader compatibility. 
                  Trust markers were placed at key decision points.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <p className="text-gray-400 leading-relaxed">
                  Designed robust flows for Doctor Search, Real-time Availability checks, and Family Profiles 
                  to support caregiver scenarios.
                </p>
              </div>
            </div>

            {/* Final Deliverables */}
            <h3 className="text-xl font-bold mb-8">Final Deliverables</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Patient App */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                    <Users className="text-primary" size={18} />
                  </div>
                  <h4 className="text-lg font-bold">Patient App</h4>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  Focused on quick discovery and simplified booking flows for patients on the go.
                </p>
                
                {/* Mobile Mockups */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                    <div className="aspect-[9/16] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <div className="text-center">
                        <Search className="text-gray-500 mx-auto mb-2" size={24} />
                        <p className="text-gray-600 text-xs">Mobile Screen 1</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                    <div className="aspect-[9/16] bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center">
                      <div className="text-center">
                        <Clock className="text-gray-400 mx-auto mb-2" size={24} />
                        <p className="text-gray-600 text-xs">Mobile Screen 2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Staff Web Dashboard */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                    <LayoutDashboard className="text-primary" size={18} />
                  </div>
                  <h4 className="text-lg font-bold">Staff Web Dashboard</h4>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  A comprehensive view for scheduling, patient queue management, and resource allocation.
                </p>
                
                {/* Desktop Mockup */}
                <div className="bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                  <div className="aspect-[16/10] bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center p-8">
                    <div className="text-center">
                      <LayoutDashboard className="text-gray-400 mx-auto mb-3" size={48} />
                      <p className="text-gray-600 text-sm">Dashboard Mockup</p>
                      <p className="text-gray-500 text-xs mt-1">Add laptop/desktop image</p>
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
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">92%</div>
                  <p className="text-gray-300 font-medium">Completion Rates</p>
                  <p className="text-gray-500 text-sm mt-1">Self-service booking</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">-40%</div>
                  <p className="text-gray-300 font-medium">Reduced No-shows</p>
                  <p className="text-gray-500 text-sm mt-1">With reminders</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">-30%</div>
                  <p className="text-gray-300 font-medium">Reduced Call Volume</p>
                  <p className="text-gray-500 text-sm mt-1">Staff efficiency</p>
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            <div>
              <h3 className="text-lg font-bold mb-6">Client Testimonial</h3>
              <div className="bg-dark-card border border-dark-border rounded-lg p-8">
                <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
                  "The new platform concept completely changes how we think about patient engagement. Moving away 
                  from phone dependency towards a trusted digital hub is exactly what our community needs."
                </p>
                <p className="text-sm text-gray-500">— Sarah Jenkins, Operations Manager</p>
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
                  <Lightbulb className="text-primary" size={20} />
                </div>
                <h3 className="text-xl font-bold pt-2">Designing for a Two-Sided System</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8">
                This project reinforced the importance of balancing patient empathy with staff efficiency. 
                While the patient interface required simplicity and high accessibility standards, the staff 
                dashboard needed to be data-dense and actionable. Bridging these two distinct needs into a 
                cohesive system showed me that effective service design must treat internal employees with 
                the same level of care as end-users.
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

export default SmartHealthcareAccessPlatform;
