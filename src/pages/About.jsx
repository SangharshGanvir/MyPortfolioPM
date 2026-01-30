import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="container-custom py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">
          Passionate about creating seamless user experiences through strategic leadership.
        </p>

        <div className="space-y-12">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Target className="text-primary" />
              My Mission
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              As a Senior UX Project Manager with over 9 years of experience, I specialize in 
              bridging the gap between design vision and technical execution. My approach combines 
              Agile best practices with deep user-centered design principles to deliver complex 
              digital products that meet business goals without compromising user experience.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I've had the privilege of working with Fortune 500 companies and innovative startups, 
              leading cross-functional teams to deliver over 50 successful projects across FinTech, 
              HealthTech, and enterprise software domains.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Users className="text-primary" />
              Leadership Philosophy
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I believe effective project management is 90% communication. My leadership style 
              focuses on building transparent workflows that bridge the language barrier between 
              creative designers and engineering teams, fostering an environment of trust and 
              rapid iteration.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm passionate about mentoring junior team members and creating inclusive environments 
              where every voice is heard and valued.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Lightbulb className="text-primary" />
              What I Bring
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Deep expertise in Agile/Scrum methodologies and design thinking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Proven track record of delivering complex projects on time and within budget</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Strong stakeholder management and executive communication skills</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Experience building and scaling design systems across multiple product lines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Data-driven approach to decision making with tools like Mixpanel and Google Analytics</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <Link 
              to="/work" 
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium text-lg"
            >
              View My Work
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
