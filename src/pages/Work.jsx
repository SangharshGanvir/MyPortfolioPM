import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import FadeInSection from '../components/FadeInSection';
import { allWorks, workCategories } from '../data/projects';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? allWorks 
    : allWorks.filter(project => project.category === activeCategory);

  return (
    <div className="container-custom section-padding">
      <FadeInSection>
        <div className="mb-12 md:mb-16">
          <h1 className="section-title">
            Selected Work
          </h1>
          <p className="section-subtitle text-lg md:text-xl lg:text-2xl max-w-4xl">
          A curated selection of enterprise and product design projects focused on usability, 
          scalability, and measurable business impact.
          </p>
        </div>
      </FadeInSection>

      {/* Category Filter */}
      <FadeInSection delay={100}>
        <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Filter by Category</h2>
        <div className="flex flex-wrap gap-4">
          {workCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-dark-card border border-dark-border text-gray-300 hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        </div>
      </FadeInSection>

      {/* Projects Grid */}
      <FadeInSection delay={200}>
        <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        </div>
      </FadeInSection>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Work;
