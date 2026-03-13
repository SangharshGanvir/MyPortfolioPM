import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Link 
      to={project.link} 
      className="group card cursor-pointer overflow-hidden"
    >
      <div className="image-wrapper aspect-video mb-4">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="space-y-3">
        {project.domain && (
          <span className="text-[10px] md:text-xs text-primary/80 font-medium uppercase tracking-wider">{project.domain}</span>
        )}
        {!project.domain && (
          <span className="text-[10px] md:text-xs text-primary/80 font-medium uppercase tracking-wider">{project.category}</span>
        )}
        
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {project.role && (
          <p className="text-xs text-gray-500">Role: {project.role}</p>
        )}
        
        <p className="text-gray-400 line-clamp-2">
          {project.description}
        </p>

        {project.impact && (
          <p className="text-xs text-gray-500">
            <span className="text-gray-400 font-medium">Impact:</span> {project.impact}
          </p>
        )}
        
        {project.metric && !project.impact && (
          <p className="text-sm text-gray-500 italic">
            {project.metric}
          </p>
        )}
        
        <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-medium">View Case Study</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
