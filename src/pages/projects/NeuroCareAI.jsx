import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LayoutDashboard, Brain, Search, Lightbulb, Palette, TrendingUp, BookOpen, Users, Target, Clock, Shield, ExternalLink } from 'lucide-react';
import ImagePreview from '../../components/ImagePreview';

const NeuroCareAI = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Mobile App Images - All 23 screens
  const mobileImages = [
    { src: '/nurocare-ai/mobile/Mobile Login & Onboarding.png', alt: 'Login & Onboarding', label: 'Login & Onboarding' },
    { src: '/nurocare-ai/mobile/Mobile Login & Onboarding-1.png', alt: 'Onboarding V2', label: 'Onboarding V2' },
    { src: '/nurocare-ai/mobile/Mobile Login & Onboarding-2.png', alt: 'Onboarding V3', label: 'Onboarding V3' },
    { src: '/nurocare-ai/mobile/Mobile Login & Onboarding-3.png', alt: 'Onboarding V4', label: 'Onboarding V4' },
    { src: '/nurocare-ai/mobile/Mobile Login & Onboarding-4.png', alt: 'Onboarding V5', label: 'Onboarding V5' },
    { src: '/nurocare-ai/mobile/Mobile Login & Onboarding-5.png', alt: 'Onboarding V6', label: 'Onboarding V6' },
    { src: '/nurocare-ai/mobile/Mobile Login & Onboarding-6.png', alt: 'Onboarding V7', label: 'Onboarding V7' },
    { src: '/nurocare-ai/mobile/Mobile Login & Onboarding-7.png', alt: 'Onboarding V8', label: 'Onboarding V8' },
    { src: '/nurocare-ai/mobile/Mobile Home Dashboard.png', alt: 'Home Dashboard', label: 'Home Dashboard' },
    { src: '/nurocare-ai/mobile/Mobile AI Insights.png', alt: 'AI Insights', label: 'AI Insights' },
    { src: '/nurocare-ai/mobile/Mobile App Settings.png', alt: 'App Settings', label: 'Settings' },
    { src: '/nurocare-ai/mobile/Mobile App Settings-1.png', alt: 'Settings V2', label: 'Settings V2' },
    { src: '/nurocare-ai/mobile/Mobile App Settings-2.png', alt: 'Settings V3', label: 'Settings V3' },
    { src: '/nurocare-ai/mobile/Mobile App Settings-3.png', alt: 'Settings V4', label: 'Settings V4' },
    { src: '/nurocare-ai/mobile/Mobile App Settings-4.png', alt: 'Settings V5', label: 'Settings V5' },
    { src: '/nurocare-ai/mobile/Mobile App Settings-5.png', alt: 'Settings V6', label: 'Settings V6' },
    { src: '/nurocare-ai/mobile/Mobile App Settings-6.png', alt: 'Settings V7', label: 'Settings V7' },
    { src: '/nurocare-ai/mobile/Mobile App Settings-7.png', alt: 'Settings V8', label: 'Settings V8' },
    { src: '/nurocare-ai/mobile/Mobile App Settings-8.png', alt: 'Settings V9', label: 'Settings V9' },
    { src: '/nurocare-ai/mobile/Mobile App Settings-9.png', alt: 'Settings V10', label: 'Settings V10' },
    { src: '/nurocare-ai/mobile/Mobile Empty State.png', alt: 'Empty State', label: 'Empty State' },
    { src: '/nurocare-ai/mobile/Mobile Notifications.png', alt: 'Notifications', label: 'Notifications' },
  ];

  // Web App Images - All 58 screens
  const webImages = [
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page.png', alt: 'Landing Page', label: 'Landing Page' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-1.png', alt: 'Landing V2', label: 'Landing V2' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-2.png', alt: 'Landing V3', label: 'Landing V3' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-3.png', alt: 'Landing V4', label: 'Landing V4' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-4.png', alt: 'Landing V5', label: 'Landing V5' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-5.png', alt: 'Landing V6', label: 'Landing V6' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-6.png', alt: 'Landing V7', label: 'Landing V7' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-7.png', alt: 'Landing V8', label: 'Landing V8' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-8.png', alt: 'Landing V9', label: 'Landing V9' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-9.png', alt: 'Landing V10', label: 'Landing V10' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-10.png', alt: 'Landing V11', label: 'Landing V11' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-11.png', alt: 'Landing V12', label: 'Landing V12' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-12.png', alt: 'Landing V13', label: 'Landing V13' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-13.png', alt: 'Landing V14', label: 'Landing V14' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-14.png', alt: 'Landing V15', label: 'Landing V15' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-15.png', alt: 'Landing V16', label: 'Landing V16' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-16.png', alt: 'Landing V17', label: 'Landing V17' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-17.png', alt: 'Landing V18', label: 'Landing V18' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-18.png', alt: 'Landing V19', label: 'Landing V19' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-19.png', alt: 'Landing V20', label: 'Landing V20' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-20.png', alt: 'Landing V21', label: 'Landing V21' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-21.png', alt: 'Landing V22', label: 'Landing V22' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-22.png', alt: 'Landing V23', label: 'Landing V23' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-23.png', alt: 'Landing V24', label: 'Landing V24' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-24.png', alt: 'Landing V25', label: 'Landing V25' },
    { src: '/nurocare-ai/web/NeuroCare AI Landing Page-25.png', alt: 'Landing V26', label: 'Landing V26' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard.png', alt: 'Dashboard', label: 'Dashboard' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-1.png', alt: 'Dashboard V2', label: 'Dashboard V2' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-2.png', alt: 'Dashboard V3', label: 'Dashboard V3' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-3.png', alt: 'Dashboard V4', label: 'Dashboard V4' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-4.png', alt: 'Dashboard V5', label: 'Dashboard V5' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-5.png', alt: 'Dashboard V6', label: 'Dashboard V6' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-6.png', alt: 'Dashboard V7', label: 'Dashboard V7' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-7.png', alt: 'Dashboard V8', label: 'Dashboard V8' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-8.png', alt: 'Dashboard V9', label: 'Dashboard V9' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-9.png', alt: 'Dashboard V10', label: 'Dashboard V10' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-10.png', alt: 'Dashboard V11', label: 'Dashboard V11' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-11.png', alt: 'Dashboard V12', label: 'Dashboard V12' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-12.png', alt: 'Dashboard V13', label: 'Dashboard V13' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-13.png', alt: 'Dashboard V14', label: 'Dashboard V14' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-14.png', alt: 'Dashboard V15', label: 'Dashboard V15' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-15.png', alt: 'Dashboard V16', label: 'Dashboard V16' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-16.png', alt: 'Dashboard V17', label: 'Dashboard V17' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-17.png', alt: 'Dashboard V18', label: 'Dashboard V18' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-18.png', alt: 'Dashboard V19', label: 'Dashboard V19' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-19.png', alt: 'Dashboard V20', label: 'Dashboard V20' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-20.png', alt: 'Dashboard V21', label: 'Dashboard V21' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-21.png', alt: 'Dashboard V22', label: 'Dashboard V22' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-22.png', alt: 'Dashboard V23', label: 'Dashboard V23' },
    { src: '/nurocare-ai/web/Doctor Enterprise Dashboard-23.png', alt: 'Dashboard V24', label: 'Dashboard V24' },
    { src: '/nurocare-ai/web/AI Predictive Analytics & Simulation.png', alt: 'AI Analytics', label: 'AI Analytics' },
    { src: '/nurocare-ai/web/NeuroCare UI Design System Foundation.png', alt: 'Design System', label: 'Design System' },
    { src: '/nurocare-ai/web/NeuroCare UI Design System Foundation-1.png', alt: 'Design System V2', label: 'Design System V2' },
    { src: '/nurocare-ai/web/NeuroCare UI Design System Foundation-2.png', alt: 'Design System V3', label: 'Design System V3' },
    { src: '/nurocare-ai/web/NeuroCare UI Design System Foundation-3.png', alt: 'Design System V4', label: 'Design System V4' },
    { src: '/nurocare-ai/web/NeuroCare UI Design System Foundation-4.png', alt: 'Design System V5', label: 'Design System V5' },
    { src: '/nurocare-ai/web/NeuroCare UI Design System Foundation-5.png', alt: 'Design System V6', label: 'Design System V6' },
    { src: '/nurocare-ai/web/NeuroCare UI Design System Foundation-6.png', alt: 'Design System V7', label: 'Design System V7' },
  ];

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
                  NeuroCare AI
                </h1>
                
                <p className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
                  Reimagining Preventive Healthcare Through AI
                </p>

                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  A dual-sided digital healthcare platform designed to streamline patient access, optimize 
                  provider workflows, and introduce predictive health intelligence through AI-driven insights.
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                  <a 
                    href="https://neurocare-ai.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    View Live Prototype
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href="https://www.figma.com/proto/iYndT7d63qjBZArZOAbQJX/NuroCare-AI?node-id=0-1&t=IpV2KyeQrTx5S3Uz-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    Figma Design
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href="https://miro.com/app/board/uXjVG8jqe08=/?share_link_id=539599379571" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    Miro Mindmap
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href="https://www.notion.so/NeuroCare-AI-Smart-Healthcare-Access-Platform-Product-Design-Case-Study-9ec207818ab848e393d34f2e8717844b?source=copy_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    Notion Case Study
                    <ExternalLink size={18} />
                  </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">ROLE</div>
                    <div className="text-white font-medium">Lead Product Designer</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">DURATION</div>
                    <div className="text-white font-medium">12 Weeks</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">PLATFORM</div>
                    <div className="text-white font-medium">Web + Mobile</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">TOOLS</div>
                    <div className="text-white font-medium">Figma, Miro, Notion</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Hero Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-dark-border">
                  <img 
                    src="/nurocare-ai/web/NeuroCare AI Landing Page-2.png" 
                    alt="NeuroCare AI Landing Page"
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section id="challenge" className="py-12 md:py-20 border-b border-dark-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">01. The Challenge</h2>

            <div className="mb-8">
              <p className="text-2xl font-semibold text-gray-200 mb-6">
                Healthcare access remains fragmented, slow, and reactive.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Patients Struggle */}
              <div className="bg-dark-card border border-dark-border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Users className="text-primary" size={24} />
                  Patients struggle with:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Long appointment wait times</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Poor visibility into doctor availability</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Lack of proactive health monitoring</p>
                  </div>
                </div>
              </div>

              {/* Providers Face */}
              <div className="bg-dark-card border border-dark-border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="text-primary" size={24} />
                  Clinics and providers face:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Manual scheduling inefficiencies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Overloaded administrative workflows</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">Limited patient data insights</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunity */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">The Opportunity</h3>
              <p className="text-gray-300 mb-4">
                Design a two-sided healthcare ecosystem that:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Target className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-300">Reduces operational friction</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-300">Improves patient engagement</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-300">Introduces AI-driven preventive care</p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="text-primary flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-300">Scales across clinics and health networks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="bg-dark-card py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">02. Research & Insights</h2>

            {/* Research Methods */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">Research Methods</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">18</div>
                  <p className="text-gray-300 text-sm">User Interviews (Patients & Caregivers)</p>
                </div>
                <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <p className="text-gray-300 text-sm">Clinic Admin Stakeholder Workshops</p>
                </div>
                <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <p className="text-gray-300 text-sm">Competitive Analysis of Telehealth Platforms</p>
                </div>
                <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <LayoutDashboard className="text-primary" size={24} />
                  </div>
                  <p className="text-gray-300 text-sm">Workflow Mapping for Multi-Clinic Systems</p>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">Key Insights</h3>
              <div className="space-y-6">
                <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-3">1. Booking Friction is Emotional</h4>
                  <p className="text-gray-300">
                    Patients feel anxiety when navigating unclear healthcare systems.
                  </p>
                </div>
                <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-3">2. Clinics Operate on Manual Workflows</h4>
                  <p className="text-gray-300">
                    Appointment management and triaging rely heavily on spreadsheets and phone calls.
                  </p>
                </div>
                <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-3">3. Preventive Care is Largely Reactive</h4>
                  <p className="text-gray-300">
                    Patients only engage after symptoms appear — not before.
                  </p>
                </div>
              </div>
            </div>

            {/* Persona Highlight */}
            <div className="bg-dark-bg border border-dark-border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6">Persona Highlight</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-primary mb-3">Elderly Patients & Caregivers</h4>
                  <p className="text-gray-300 mb-4">
                    Require clarity, larger touch targets, and simplified flows.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-3">Admin Staff</h4>
                  <p className="text-gray-300 mb-4">
                    Require high-density dashboards and bulk operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section id="strategy" className="py-12 md:py-20 border-b border-dark-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">03. The Strategy</h2>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              We approached this as a <span className="text-white font-semibold">system design challenge</span>, 
              not just an interface redesign.
            </p>

            {/* Strategic Pillars */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide">Strategic Pillars</h3>
              <div className="bg-dark-card border border-dark-border rounded-lg p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-5xl font-bold text-primary mb-4">1</div>
                    <h4 className="text-lg font-bold mb-3">Reduce Cognitive Load</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Clear booking flow, guided steps, AI-assisted doctor matching.
                    </p>
                  </div>

                  <div>
                    <div className="text-5xl font-bold text-primary mb-4">2</div>
                    <h4 className="text-lg font-bold mb-3">Increase Operational Visibility</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Real-time availability dashboards and automated scheduling logic.
                    </p>
                  </div>

                  <div>
                    <div className="text-5xl font-bold text-primary mb-4">3</div>
                    <h4 className="text-lg font-bold mb-3">Introduce Preventive Intelligence</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      AI-driven risk scoring and wearable health data integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MVP Roadmap */}
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide">12-Week MVP Roadmap</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Weeks 1-2</h4>
                  <p className="text-gray-400 text-sm">Discovery, research synthesis, information architecture</p>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Weeks 3-6</h4>
                  <p className="text-gray-400 text-sm">Core booking flow, dashboard wireframes, usability validation</p>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Weeks 7-9</h4>
                  <p className="text-gray-400 text-sm">AI health insights module, data visualization refinement</p>
                </div>

                <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                  <div className="h-1 bg-primary rounded-full mb-4"></div>
                  <h4 className="font-bold mb-2">Weeks 10-12</h4>
                  <p className="text-gray-400 text-sm">Design system scaling, accessibility testing, developer handoff</p>
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
            </div>

            <h3 className="text-2xl font-bold mb-8">Product Ecosystem Overview</h3>
            <p className="text-gray-300 mb-12">NeuroCare AI consists of:</p>

            {/* Mobile App Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">1. Patient Mobile App (iOS + Android)</h3>
                  <p className="text-gray-400 text-sm">Designed for accessibility and clarity</p>
                </div>
              </div>

              {/* Core Features */}
              <div className="bg-dark-bg border border-dark-border rounded-lg p-8 mb-8">
                <h4 className="text-lg font-bold mb-4">Core Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300 text-sm">AI-powered symptom checker</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300 text-sm">Smart doctor matching</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300 text-sm">Appointment booking & tracking</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300 text-sm">Health insights dashboard</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300 text-sm">Wearable data integration</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300 text-sm">Push notifications for follow-ups</p>
                  </div>
                </div>
              </div>

              {/* UX Decisions */}
              <div className="bg-dark-bg border border-dark-border rounded-lg p-8 mb-8">
                <h4 className="text-lg font-bold mb-4">UX Decisions</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-gray-300 text-sm">Bottom-tab navigation for thumb-zone comfort</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-gray-300 text-sm">Card-based modular health summaries</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-gray-300 text-sm">Progressive disclosure for complex medical data</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-gray-300 text-sm">WCAG AA compliant contrast system</p>
                  </div>
                </div>
              </div>

              {/* Mobile Screens Preview */}
              <ImagePreview images={mobileImages} title="Mobile App Screens" />
            </div>

            {/* Web Dashboard Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">2. Clinic Web Dashboard</h3>
                  <p className="text-gray-400 text-sm">Designed for operational efficiency and high-density data interaction</p>
                </div>
              </div>

              {/* Core Features */}
              <div className="bg-dark-bg border border-dark-border rounded-lg p-8 mb-8">
                <h4 className="text-lg font-bold mb-4">Core Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300 text-sm">Real-time appointment calendar</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300 text-sm">Multi-provider management</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300 text-sm">Patient records overview</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300 text-sm">Predictive no-show risk indicator</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <p className="text-gray-300 text-sm">AI workload balancing insights</p>
                  </div>
                </div>
              </div>

              {/* UX Decisions */}
              <div className="bg-dark-bg border border-dark-border rounded-lg p-8 mb-8">
                <h4 className="text-lg font-bold mb-4">UX Decisions</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-gray-300 text-sm">Left-sidebar navigation for scalability</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-gray-300 text-sm">Advanced filtering and bulk actions</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-gray-300 text-sm">Data-heavy but structured visualization</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-gray-300 text-sm">Role-based access control</p>
                  </div>
                </div>
              </div>

              {/* Web Screens Preview */}
              <ImagePreview images={webImages} title="Web Dashboard Screens" />
            </div>

            {/* Design System */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Design System Foundation</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                  <h4 className="font-bold mb-3">Spacing & Layout</h4>
                  <p className="text-gray-400 text-sm mb-2">8px spacing scale</p>
                  <p className="text-gray-400 text-sm">12px radius system</p>
                </div>
                <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                  <h4 className="font-bold mb-3">Color System</h4>
                  <p className="text-gray-400 text-sm mb-2">Teal-to-mint medical gradient</p>
                  <p className="text-gray-400 text-sm">Dual theme support (Light + Dark)</p>
                </div>
                <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
                  <h4 className="font-bold mb-3">Components</h4>
                  <p className="text-gray-400 text-sm mb-2">Modular component library</p>
                  <p className="text-gray-400 text-sm">Accessible typography scale</p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-dark-border">
                <img 
                  src="/src/assets/nurocare-ai/Web app screens/04-Design-System.png" 
                  alt="Design System"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-12 md:py-20 border-b border-dark-border">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">05. Projected Impact</h2>

            <p className="text-gray-400 mb-8">
              Based on usability validation and stakeholder projections:
            </p>

            {/* Metrics Card */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">+38%</div>
                  <p className="text-gray-300 font-medium">Faster Booking Completion</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">-42%</div>
                  <p className="text-gray-300 font-medium">Reduction in Manual Admin Tasks</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">+29%</div>
                  <p className="text-gray-300 font-medium">Increase in Preventive Checkups</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3">+35%</div>
                  <p className="text-gray-300 font-medium">Patient Satisfaction Score</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection Section */}
        <section id="reflection" className="bg-dark-card py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Reflection</h2>
            
            <div className="bg-dark-bg border border-dark-border rounded-lg p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Designing NeuroCare AI required balancing:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Emotional sensitivity of healthcare</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Operational complexity of clinics</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Scalability for enterprise health networks</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                The biggest takeaway was designing not just screens, but a{' '}
                <span className="text-white font-semibold">healthcare intelligence ecosystem</span> that bridges 
                reactive care and preventive decision-making.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                This project reinforced the importance of:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-gray-300">Designing for multiple user roles</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-gray-300">Translating complex data into clarity</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-gray-300">Leading cross-functional collaboration</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-gray-300">Building scalable design systems early</p>
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
      </div>
    </div>
  );
};

export default NeuroCareAI;
