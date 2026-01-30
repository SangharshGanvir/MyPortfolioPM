import { Download, Linkedin, Twitter, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const skills = {
    software: [
      'Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 
      'Jira', 'Confluence', 'Miro', 'Notion', 'Google Analytics'
    ],
    methodologies: [
      'Agile / Scrum', 'Design Thinking', 'Lean UX', 
      'OKRs', 'User Story Mapping', 'A/B Testing'
    ]
  };

  const processSteps = [
    {
      title: 'Discovery',
      description: 'I begin by understanding business goals and real user problems through research, stakeholder interviews, and workflow analysis—defining the "why" before the "what."',
      icon: '🔍'
    },
    {
      title: 'Strategy',
      description: 'Insights are translated into product roadmaps, MVPs, and measurable success metrics that balance user needs with business priorities.',
      icon: '💡'
    },
    {
      title: 'Execution',
      description: 'I guide teams through iterative design and delivery, ensuring seamless collaboration between design and development while managing scope and quality.',
      icon: '⚡'
    },
    {
      title: 'Delivery',
      description: 'I oversee QA, coordinate launches, and gather post-launch feedback to inform future improvements and scalability.',
      icon: '🚀'
    }
  ];

  return (
    <div>
      {/* Process Section */}
      <section className="bg-dark-card border-b border-dark-border py-20">
        <div className="container-custom">
          <h1 className="section-title">How I Lead Projects</h1>
          <p className="section-subtitle">
            Ensuring clarity, agility, and user-centric outcomes from day one.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="card">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container-custom py-20">
        <h2 className="section-title">The Toolkit</h2>
        <p className="section-subtitle">
          A blend of technical proficiency and human-centric leadership.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Software & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.software.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-sm font-medium hover:border-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Methodologies & Leadership</h3>
            <div className="flex flex-wrap gap-3">
              {skills.methodologies.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-sm font-medium hover:border-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-dark-card border-t border-dark-border py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16">
              Ready to optimize your product lifecycle?
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
              <a 
                href="/resume.pdf" 
                download
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download CV (PDF)
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <Linkedin size={20} />
                View LinkedIn Profile
              </a>
            </div>

            <div className="card max-w-xl mx-auto">
              <div className="flex items-start gap-4 text-left">
                <MessageSquare className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-gray-300 italic mb-2">
                    "Sangharsh transformed complex workflows into intuitive experiences. 
                    A true leader in UX."
                  </p>
                  <p className="text-sm text-gray-500">
                    — Product Director
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center gap-6">
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:alex@example.com"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
