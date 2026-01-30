import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="container-custom py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">About Me</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-12 leading-relaxed">
          Passionate about creating seamless user experiences through strategic design leadership.
        </p>

        <div className="space-y-8 md:space-y-12">
          <div className="card">
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <Target className="text-primary" />
              My Mission
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a Senior Product Designer and UX Lead with over 9 years of experience bridging 
              the gap between design vision and technical execution.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              My approach blends Agile delivery with strong user-centered design principles to 
              create enterprise products that meet business objectives without compromising usability.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I've led cross-functional teams across complex domains including ERP platforms, 
              analytics systems, and mobile applications—delivering scalable, future-ready solutions.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <Users className="text-primary" />
              Leadership Philosophy
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I believe effective leadership is built on clarity and trust. My role is to create 
              alignment between designers, engineers, and stakeholders through transparent processes 
              and shared goals.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm passionate about mentoring designers and fostering collaborative environments 
              where every voice contributes to better outcomes.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <Lightbulb className="text-primary" />
              What I Bring
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Deep experience in enterprise product design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Proven ability to lead complex projects end-to-end</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Strong stakeholder and client communication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Expertise in building and scaling design systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Data-informed decision making</span>
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
