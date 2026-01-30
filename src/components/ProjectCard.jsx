import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Link 
      to={project.link} 
      className="group card hover:scale-[1.02] cursor-pointer overflow-hidden"
    >
      <div className="aspect-video overflow-hidden rounded-lg mb-4">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="space-y-3">
        <span className="text-sm text-primary font-medium">{project.category}</span>
        
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 line-clamp-2">
          {project.description}
        </p>
        
        {project.metric && (
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
