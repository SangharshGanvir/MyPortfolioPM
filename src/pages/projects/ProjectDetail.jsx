import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Clock, Wrench } from 'lucide-react';
import { projects } from '../../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
        <Link to="/work" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={20} />
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-dark-card border-b border-dark-border py-12">
        <div className="container-custom">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Work
          </Link>

          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="flex-1">
              <span className="text-primary font-medium mb-4 block">{project.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-gray-400 mb-8">{project.shortDescription}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 lg:min-w-[400px]">
              <div className="card">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Users size={18} />
                  <span className="text-sm">Role</span>
                </div>
                <p className="font-semibold">{project.role}</p>
              </div>
              <div className="card">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Clock size={18} />
                  <span className="text-sm">Timeline</span>
                </div>
                <p className="font-semibold">{project.timeline}</p>
              </div>
              <div className="card">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Users size={18} />
                  <span className="text-sm">Team</span>
                </div>
                <p className="font-semibold">{project.team}</p>
              </div>
              <div className="card">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Wrench size={18} />
                  <span className="text-sm">Tools</span>
                </div>
                <p className="font-semibold">{project.tools.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="container-custom py-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              01
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{project.challenge.title}</h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            {project.challenge.description}
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {project.challenge.goal}
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Key Issues Identified</h3>
            {project.challenge.keyIssues.map((issue, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-500 text-lg">✕</span>
                </div>
                <p className="text-gray-400">{issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="bg-dark-card border-y border-dark-border py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                02
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{project.research.title}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {project.research.methods.map((method, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-bold mb-3">{method.name}</h3>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </div>
              ))}
            </div>

            <div className="card bg-dark-bg border-primary/30">
              <h3 className="text-xl font-bold mb-4">Persona Insight: {project.research.persona.type}</h3>
              <p className="text-gray-300 italic text-lg">
                "{project.research.persona.quote}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="container-custom py-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              03
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{project.strategy.title}</h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            {project.strategy.description}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {project.strategy.pillars.map((pillar, index) => (
              <div key={index} className="card">
                <div className="text-3xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-gray-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="bg-dark-card border-y border-dark-border py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                04
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{project.design.title}</h2>
            </div>

            <div className="space-y-8">
              {project.design.deliverables.map((deliverable, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-bold mb-3">{deliverable.name}</h3>
                  <p className="text-gray-400">{deliverable.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="container-custom py-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              05
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{project.impact.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {project.impact.metrics.map((metric, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="font-semibold mb-2">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </div>
            ))}
          </div>

          <div className="card bg-dark-bg border-primary/30">
            <div className="flex items-start gap-4">
              <TrendingUp className="text-primary flex-shrink-0 mt-1" size={32} />
              <div>
                <p className="text-gray-300 text-lg italic mb-4">
                  "{project.impact.testimonial.quote}"
                </p>
                <p className="text-gray-400">
                  — {project.impact.testimonial.author}, {project.impact.testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-card border-t border-dark-border py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in similar results?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help transform your product vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link to="/work" className="btn-secondary">
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
