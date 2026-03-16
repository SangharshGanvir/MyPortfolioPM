import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Award, Users } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import FadeInSection from '../components/FadeInSection';
import { featuredProjects } from '../data/projects';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero">
        <div className="container-custom py-12 md:py-20 lg:py-32">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 md:mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm text-primary font-medium uppercase tracking-wide">Available for New Projects</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Sr. Product Designer<br />
              <span className="text-gray-500">& UX Lead</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              I help teams turn complex product challenges into simple, scalable digital experiences. My work focuses on aligning user needs, business goals, and technology to deliver products that people can actually use and teams can successfully ship.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
              <Link to="/work" className="btn-primary inline-flex items-center justify-center gap-2">
                View Selected Work
                <ArrowRight size={20} />
              </Link>
              <a 
                href="/sangharsh_ganvir.pdf" 
                download
                className="btn-secondary text-center"
              >
                Download CV
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">9+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Years</div>
                <div className="text-[10px] sm:text-xs text-gray-500 mt-1">Designing complex digital products</div>
              </div>
              
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Deliveries</div>
                <div className="text-[10px] sm:text-xs text-gray-500 mt-1">Products, platforms & design systems</div>
              </div>
              
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">Enterprise</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Work</div>
                <div className="text-[10px] sm:text-xs text-gray-500 mt-1">Healthcare, FinTech & AI platforms</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative max-w-xs sm:max-w-sm mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0">
            <div className="aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-transparent border border-dark-border group cursor-pointer">
              <img 
                src="/hero-image.jpeg" 
                alt="Sangharsh G Ganvir - Sr. Product Designer & UX Lead"
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            
            {/* Certification Badge */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-dark-card/90 backdrop-blur-md border border-dark-border rounded-lg md:rounded-xl p-3 md:p-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={16} />
                </div>
                <div>
                  <div className="font-semibold text-white text-xs md:text-sm">Product & UX Strategist</div>
                  <div className="text-[10px] md:text-xs text-gray-400 line-clamp-2">Aligning design vision, business strategy, and scalable enterprise products.</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Strategic Leadership Section */}
      <section className="gradient-section bg-dark-card border-y border-dark-border section-padding">
        <div className="container-custom">
          <FadeInSection>
            <h2 className="heading-xl text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">Design Leadership & Product Strategy</h2>
            <p className="section-subtitle text-lg md:text-xl lg:text-2xl mb-8 md:mb-12">Aligning user experience, business goals, and technology to build scalable digital products.</p>
          </FadeInSection>
          
          <FadeInSection delay={100}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                <Briefcase className="text-primary" />
                Methodology
              </h3>
              <p className="text-gray-400 leading-relaxed">
                My work blends product thinking with human-centered design. I collaborate closely with product managers, engineers, and stakeholders to translate complex requirements into clear product direction and usable experiences.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                <Users className="text-primary" />
                Collaboration
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Strong products are built through collaboration. I create transparent workflows that help designers, engineers, and stakeholders stay aligned while moving quickly from ideas to validated solutions.
              </p>
            </div>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <div className="mt-8 md:mt-12">
              <h3 className="text-lg md:text-xl font-bold mb-6">Core Competencies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { title: 'Product & UX Strategy', desc: 'Define product direction by aligning user needs, business goals, and technical constraints.' },
                { title: 'Stakeholder Alignment', desc: 'Facilitate alignment between product, engineering, and leadership teams.' },
                { title: 'Product Roadmapping', desc: 'Plan and prioritize product initiatives that drive measurable outcomes.' },
                { title: 'Design Systems Architecture', desc: 'Build scalable design systems that improve consistency and development speed.' },
                { title: 'User Research & Insights', desc: 'Use qualitative and quantitative research to inform product decisions.' },
                { title: 'Data-Driven Product Design', desc: 'Leverage analytics and product metrics to continuously improve experiences.' },
                { title: 'Design Team Leadership', desc: 'Mentor designers and guide teams toward impactful solutions.' },
              ].map((skill) => (
                <div key={skill.title} className="card text-center">
                  <span className="text-xs md:text-sm font-medium block mb-1">{skill.title}</span>
                  <span className="text-[10px] md:text-xs text-gray-500 leading-tight block">{skill.desc}</span>
                </div>
              ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section Divider */}
      <div className="container-custom"><div className="border-t border-white/[0.06]"></div></div>

      {/* How I Work Section */}
      <section className="container-custom section-padding">
        <FadeInSection>
          <h2 className="heading-xl text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">How I Work</h2>
          <p className="section-subtitle text-lg md:text-xl lg:text-2xl mb-8 md:mb-12">A practical approach to solving product problems through collaboration, experimentation, and continuous learning.</p>
        </FadeInSection>
        
        <FadeInSection delay={100}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="card">
            <div className="text-3xl font-bold text-primary mb-4">01</div>
            <h3 className="text-lg font-bold mb-3">Understand the Problem</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Before designing screens, I focus on understanding the real problem. This includes stakeholder discussions, reviewing product data, and observing how users currently complete tasks.
            </p>
          </div>

          <div className="card">
            <div className="text-3xl font-bold text-primary mb-4">02</div>
            <h3 className="text-lg font-bold mb-3">Start Simple</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I begin with simple ideas and validate them early. Quick sketches and low-fidelity prototypes help teams explore direction before investing in polished design.
            </p>
          </div>

          <div className="card">
            <div className="text-3xl font-bold text-primary mb-4">03</div>
            <h3 className="text-lg font-bold mb-3">Design with Constraints</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every product operates within real constraints. I work closely with engineering and product teams to find solutions that balance usability, business goals, and technical feasibility.
            </p>
          </div>

          <div className="card">
            <div className="text-3xl font-bold text-primary mb-4">04</div>
            <h3 className="text-lg font-bold mb-3">Iterate with Feedback</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Design improves through iteration. I use feedback from users, teams, and product metrics to refine solutions and continuously improve the experience.
            </p>
          </div>
          </div>
        </FadeInSection>
      </section>

      {/* Section Divider */}
      <div className="container-custom"><div className="border-t border-white/[0.06]"></div></div>

      {/* Featured Projects Section */}
      <section className="container-custom section-padding">
        <FadeInSection>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4">
            <div>
              <h2 className="heading-xl text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4">Featured Projects</h2>
              <p className="body-text text-base md:text-xl">Selected product design projects focused on solving complex problems and delivering measurable outcomes.</p>
            </div>
          
          <Link 
            to="/work" 
            className="hidden md:flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium whitespace-nowrap"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
          </div>
        </FadeInSection>
        
        <FadeInSection delay={100}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          </div>
        </FadeInSection>
        
        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
