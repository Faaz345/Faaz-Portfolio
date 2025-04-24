import { motion } from "framer-motion";
import { 
  RiTerminalBoxLine, 
  RiComputerLine, 
  RiUserLine, 
  RiDatabase2Line, 
  RiSpam2Line, 
  RiHome4Line, 
  RiGithubFill, 
  RiExternalLinkLine 
} from "react-icons/ri";

const projects = [
  {
    id: 1,
    title: "Mindigenous.ai",
    icon: <RiTerminalBoxLine className="text-3xl" />,
    date: "Jan 2025 - Present",
    description: "Built an AI platform to convert natural language prompts into working full-stack applications",
    technologies: ["Flask", "AI Models", "Frontend"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    id: 2,
    title: "Campus AR Navigation",
    icon: <RiComputerLine className="text-3xl" />,
    date: "Aug 2023 - Dec 2023",
    description: "Indoor AR guidance system for navigating college buildings with real-time updates",
    technologies: ["AR", "Python", "JavaScript"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    id: 3,
    title: "Face Recognition Login System",
    icon: <RiUserLine className="text-3xl" />,
    date: "Feb 2025 - Mar 2025",
    description: "Login system with Python & OpenCV for facial authentication with secure access",
    technologies: ["Python", "OpenCV", "ML"],
    githubLink: "#",
    demoLink: "#"
  },

  {
    id: 4,
    title: "Email Spam Detection",
    icon: <RiSpam2Line className="text-3xl" />,
    date: "2024",
    description: "Built ML models using Scikit-learn with focus on preprocessing and model accuracy",
    technologies: ["Python", "ML", "NLP"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    id: 5,
    title: "House Price Prediction",
    icon: <RiHome4Line className="text-3xl" />,
    date: "2024",
    description: "ML model with Scikit-learn and Pandas focused on feature engineering and accuracy",
    technologies: ["Python", "ML", "Pandas"],
    githubLink: "#",
    demoLink: "#",
    demoText: "Report"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <motion.div 
      className="project-card rounded-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 255, 0, 0.1)" }}
    >
      <div className="mb-4 text-primary">
        {project.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-2">{project.date}</p>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-background border border-primary/30 rounded text-primary text-xs">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a href={project.githubLink} className="text-primary hover:text-primary/80 flex items-center">
          <RiGithubFill className="mr-1" /> Code
        </a>
        <a href={project.demoLink} className="text-primary hover:text-primary/80 flex items-center">
          <RiExternalLinkLine className="mr-1" /> {project.demoText || "Demo"}
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-black bg-opacity-50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="terminal-header mb-8"
        >
          <h2 className="text-3xl font-bold text-primary font-space mb-2">projects<span className="cursor"></span></h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
