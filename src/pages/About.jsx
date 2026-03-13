import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb, Handshake } from 'lucide-react';

const About = () => {
  return (
    <div className="container-custom py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">About Me</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-12 leading-relaxed">
          I'm a Senior Product Designer and UX Lead focused on solving complex product challenges. Over the past 9+ years, I've worked across healthcare, fintech, and enterprise platforms—helping teams turn complicated systems into clear, usable digital experiences.
          <br /><br />
          I enjoy working at the intersection of product strategy, user experience, and engineering to build solutions that are practical, scalable, and meaningful for real users.
        </p>

        <div className="space-y-8 md:space-y-12">
          <div className="card">
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <Target className="text-primary" />
              My Mission
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              My goal is to help teams design products that are both useful for people and practical for businesses to build. I focus on simplifying complex systems and aligning user needs with business goals.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              With over nine years of experience, I've led product design initiatives across enterprise platforms, analytics systems, and mobile applications. My work often involves translating complex requirements into clear product direction and guiding teams from early ideas to shipped solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I believe great products emerge when design, engineering, and product strategy work together from the start.
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <Users className="text-primary" />
              Leadership Philosophy
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I believe strong design leadership starts with clarity and trust. My role is often to bring alignment across designers, engineers, and product leaders so teams can move forward with confidence.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              I enjoy facilitating discussions, running collaborative workshops, and helping teams turn complex ideas into actionable product decisions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Mentoring designers and supporting collaborative environments is also an important part of my work. Great design outcomes happen when every team member feels empowered to contribute.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3">
                <Handshake className="text-primary" />
                How I Work With Teams
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Great product design happens through collaboration. I work closely with cross-functional teams to translate product ideas into practical, scalable solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold mb-3">Working with Product Managers</h3>
                <p className="text-gray-400 leading-relaxed">
                  I collaborate closely with product managers to define the right problems to solve and translate product strategy into clear design direction.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-3">Working with Engineers</h3>
                <p className="text-gray-400 leading-relaxed">
                  I partner with engineers early in the design process to ensure solutions are technically feasible and efficient to implement.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-3">Working with Stakeholders</h3>
                <p className="text-gray-400 leading-relaxed">
                  I facilitate workshops and discussions that help teams align on priorities, trade-offs, and product decisions.
                </p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-3">Mentoring Designers</h3>
                <p className="text-gray-400 leading-relaxed">
                  I enjoy mentoring designers and helping teams build stronger design practices and collaborative workflows.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
              <Lightbulb className="text-primary" />
              What I Bring
            </h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Experience designing complex enterprise and platform-based products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Ability to lead end-to-end product design from discovery to delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Strong collaboration with product managers, engineers, and stakeholders</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Expertise in building scalable design systems and UX frameworks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Data-informed decision making through research and product metrics</span>
              </li>
            </ul>
          </div>

          <div className="text-center pt-8">
            <Link 
              to="/work" 
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium text-lg"
            >
              Explore Case Studies
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
