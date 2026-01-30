import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Award, Users } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects } from '../data/projects';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="container-custom py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-primary font-medium uppercase tracking-wide">Available for New Projects</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Sangharsh<br />
              <span className="text-gray-500">G Ganvir.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Senior UX Project Manager bridging the gap between{' '}
              <span className="font-semibold text-white">design vision</span> and{' '}
              <span className="font-semibold text-white">technical execution</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/work" className="btn-primary inline-flex items-center gap-2">
                View Selected Works
                <ArrowRight size={20} />
              </Link>
              <a 
                href="/resume.pdf" 
                download
                className="btn-secondary"
              >
                Download CV
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">9+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
              </div>
              
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Projects Delivered</div>
              </div>
              
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">F500</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Client Portfolio</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-transparent border border-dark-border">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
                alt="Sangharsh G Ganvir"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Certification Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-dark-card/90 backdrop-blur-md border border-dark-border rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Certified Scrum Master</div>
                  <div className="text-xs text-gray-400">Specialized in Agile transformations for enterprise design teams.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Leadership Section */}
      <section className="bg-dark-card border-y border-dark-border py-20">
        <div className="container-custom">
          <h2 className="section-title">Strategic Leadership</h2>
          <p className="section-subtitle">Orchestrating complexity into clarity.</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Briefcase className="text-primary" />
                Methodology
              </h3>
              <p className="text-gray-400 leading-relaxed">
                My approach combines Agile best practices with deep user-centered design principles. 
                I specialize in leading cross-functional teams to deliver complex digital products, 
                ensuring business goals are met without compromising the user experience.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Users className="text-primary" />
                Collaboration
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Effective project management is 90% communication. I build transparent workflows 
                that bridge the language barrier between creative designers and engineering teams, 
                fostering an environment of trust and rapid iteration.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-primary" />
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Agile/Scrum', 'Stakeholder Management', 'UX Strategy', 'Team Leadership', 
                'Product Roadmapping', 'Design Systems', 'User Research', 'Data Analytics'].map((skill) => (
                <div key={skill} className="card text-center">
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container-custom py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-xl text-gray-400">A selection of recent leadership engagements.</p>
          </div>
          
          <Link 
            to="/work" 
            className="hidden md:flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
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
