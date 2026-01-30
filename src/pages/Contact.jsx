import { Download, Linkedin, Twitter, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const skills = {
    software: [
      'Figma', 'Sketch', 'Adobe XD', 'Jira', 'Confluence', 
      'Miro', 'Notion', 'Mixpanel', 'Google Analytics'
    ],
    methodologies: [
      'Agile/Scrum', 'Design Thinking', 'Lean UX', 
      'OKRs', 'User Story Mapping', 'A/B Testing'
    ]
  };

  const processSteps = [
    {
      title: 'Discovery',
      subtitle: 'User Research & Stakeholder Interviews',
      description: 'Uncovering the \'why\' before defining the \'what\'. I facilitate workshops and synthesize qualitative data to align business goals with user needs.',
      icon: '🔍'
    },
    {
      title: 'Strategy',
      subtitle: 'Roadmapping & Sprint Planning',
      description: 'Translating insights into actionable milestones. I define MVPs, prioritize backlogs based on ROI, and set clear success metrics.',
      icon: '💡'
    },
    {
      title: 'Execution',
      subtitle: 'Agile Management & Backlog Grooming',
      description: 'Keeping the team unblocked and focused. I lead daily stand-ups, manage scope creep, and ensure design-dev handoff is seamless.',
      icon: '⚡'
    },
    {
      title: 'Delivery',
      subtitle: 'QA & Product Launch',
      description: 'Ensuring quality at scale. I oversee UAT, coordinate release schedules, and gather post-launch feedback for the next iteration.',
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
            My operational framework ensures clarity, agility, and user-centric outcomes from day one.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="card">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <h4 className="text-primary font-medium mb-4">{step.subtitle}</h4>
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
      <section className="bg-dark-card border-t border-dark-border py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to optimize your product lifecycle?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Whether you have a question about my process, want to discuss a potential collaboration, 
              or just want to say hi, I'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                    "Alex transformed our chaotic roadmap into a clear strategic vision. 
                    A true leader in the UX space."
                  </p>
                  <p className="text-sm text-gray-500">
                    — Sarah Jenkins, VP of Product
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
