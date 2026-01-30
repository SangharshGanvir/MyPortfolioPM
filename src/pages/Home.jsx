import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Award, Users } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects } from '../data/projects';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="container-custom py-12 md:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 xl:gap-24 items-center">
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
              Bridging design vision and technical execution to build scalable enterprise products.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-12">
              <Link to="/work" className="btn-primary inline-flex items-center justify-center gap-2">
                View Selected Work
                <ArrowRight size={20} />
              </Link>
              <a 
                href="/resume.pdf" 
                download
                className="btn-secondary text-center"
              >
                Download CV
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">9+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
              </div>
              
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Projects Delivered</div>
              </div>
              
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">Enterprise</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Client Portfolio</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative max-w-sm sm:max-w-md mx-auto lg:mx-0 mt-8 lg:mt-0">
            <div className="aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-transparent border border-dark-border group cursor-pointer">
              <img 
                src="/hero-image.jpeg" 
                alt="Sangharsh G Ganvir"
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
                  <div className="font-semibold text-white text-xs md:text-sm">Certified Scrum Master</div>
                  <div className="text-[10px] md:text-xs text-gray-400 line-clamp-2">Specialized in Agile transformations for enterprise design teams.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Leadership Section */}
      <section className="bg-dark-card border-y border-dark-border py-12 md:py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Strategic Leadership</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-12">Orchestrating complexity into clarity.</p>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                <Briefcase className="text-primary" />
                Methodology
              </h3>
              <p className="text-gray-400 leading-relaxed">
                My approach combines Agile best practices with deep user-centered design principles. 
                I lead cross-functional teams to deliver scalable digital products that align business 
                goals with real user needs—without compromising usability or quality.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                <Users className="text-primary" />
                Collaboration
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Effective design leadership is rooted in communication. I build transparent workflows 
                that bridge designers, engineers, and stakeholders, fostering trust, alignment, and rapid iteration.
              </p>
            </div>
          </div>
          
          <div className="mt-8 md:mt-12">
            <h3 className="text-lg md:text-xl font-bold mb-6">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {['UX Strategy', 'Stakeholder Management', 'Product Roadmapping', 'Design Systems', 
                'User Research', 'Team Leadership', 'Data-Informed Design'].map((skill) => (
                <div key={skill} className="card text-center">
                  <span className="text-xs md:text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container-custom py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Featured Projects</h2>
            <p className="text-base md:text-xl text-gray-400">A selection of recent leadership engagements.</p>
          </div>
          
          <Link 
            to="/work" 
            className="hidden md:flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium whitespace-nowrap"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
