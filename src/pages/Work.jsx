import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { allWorks, workCategories } from '../data/projects';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? allWorks 
    : allWorks.filter(project => project.category === activeCategory);

  return (
    <div className="container-custom py-20">
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Senior UX Project Manager
        </h1>
        <p className="text-2xl text-gray-400 max-w-3xl">
          Bridging the gap between design vision and technical execution. 9+ years delivering 
          complex digital products for enterprise and startups.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Selected Works</h2>
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

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Work;
