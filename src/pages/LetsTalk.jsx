import { Mail, Linkedin, Twitter, MapPin, Info } from 'lucide-react';

const LetsTalk = () => {
  return (
    <div className="container-custom py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-center leading-tight">
          Let's build something impactful together.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 text-center mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
          Whether you're exploring a collaboration, discussing a product challenge, or just want to connect — I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-3">Email</h3>
              <a 
                href="mailto:sangharshganvir88@gmail.com"
                className="text-xl text-white hover:text-primary transition-colors inline-flex items-center gap-2 group"
              >
                sangharshganvir88@gmail.com
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-3">Socials</h3>
              <div className="space-y-2">
                <a 
                  href="https://www.linkedin.com/in/sangharsh-ganvir-724162221" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors block"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-sm text-gray-400 uppercase tracking-wide mb-3">Location</h3>
              <div className="flex items-center gap-2 text-white">
                <MapPin size={20} className="text-primary" />
                <span>Nagpur, MH, India</span>
              </div>
            </div>

            {/* FAQ */}
            <div className="card">
              <div className="flex items-start gap-3 mb-4">
                <Info className="text-primary flex-shrink-0 mt-1" size={20} />
                <h3 className="text-lg font-bold">Collaboration FAQ</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">What types of projects do you take on?</h4>
                  <p className="text-gray-400 text-sm">
                    I specialize in enterprise product design, UX strategy, and complex digital systems. 
                    I focus on scalable products rather than small brochure websites.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">Availability</h4>
                  <p className="text-gray-400 text-sm">
                    Currently open to new opportunities and select consulting engagements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Send a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>

              <p className="text-xs text-gray-500 text-center">
                This site is protected by reCAPTCHA and the Google Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
