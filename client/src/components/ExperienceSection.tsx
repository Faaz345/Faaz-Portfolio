import { motion } from "framer-motion";
import { 
  RiTerminalBoxLine, 
  RiCheckboxCircleLine,
  RiExternalLinkLine
} from "react-icons/ri";

const workExperiences = [
  {
    id: 1,
    company: "Fiverr",
    title: "Freelance AI & Software Developer",
    period: "Oct 2022 – Sep 2024",
    responsibilities: [
      "Built AI solutions and full-stack web apps for international clients",
      "Delivered predictive tools, automation scripts, and full deployments",
      "Used Flask, Git, and ML models; practiced Agile workflows"
    ]
  },
  {
    id: 2,
    company: "Ignitech",
    title: "AI/ML Intern",
    period: "Aug 2021 – Sep 2021",
    responsibilities: [
      "Built, trained, and validated ML models",
      "Participated in debugging and code optimization",
      "Worked in Agile with peer collaboration and data preprocessing"
    ]
  }
];

const tools = [
  "Python", "Flask", "Git", "ML Models", "Agile", "VS Code", "Pandas", "SQL"
];

const methodologies = [
  "Agile Development", 
  "Version Control with Git", 
  "CI/CD Pipelines", 
  "Test-Driven Development"
];

const collaboration = [
  "Remote Team Collaboration", 
  "Client Communication", 
  "Code Reviews"
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="terminal-header mb-8"
        >
          <h2 className="text-3xl font-bold text-primary font-space mb-2">experience<span className="cursor"></span></h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {workExperiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                <h4 className="text-primary font-medium mb-2">{exp.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {exp.id === 1 && (
                  <a 
                    href="https://www.fiverr.com/s/ZmG1k3a" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center mt-3 text-primary hover:text-primary/80 transition-colors border border-primary/30 px-3 py-1 rounded"
                  >
                    <RiExternalLinkLine className="mr-2" /> View my Fiverr profile
                  </a>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="bg-background rounded-lg p-6 border border-primary/30 h-fit"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <RiTerminalBoxLine className="text-primary mr-2" /> Work Environment
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-primary font-medium mb-2">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <motion.span 
                      key={index}
                      className="px-2 py-1 bg-black bg-opacity-60 rounded text-gray-300 text-sm border border-primary/20"
                      whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-primary font-medium mb-2">Development Methodologies</h4>
                <div className="space-y-2">
                  {methodologies.map((method, index) => (
                    <div key={index} className="flex items-center">
                      <RiCheckboxCircleLine className="text-primary mr-2" />
                      <span className="text-gray-300">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-primary font-medium mb-2">Collaboration</h4>
                <div className="space-y-2">
                  {collaboration.map((collab, index) => (
                    <div key={index} className="flex items-center">
                      <RiCheckboxCircleLine className="text-primary mr-2" />
                      <span className="text-gray-300">{collab}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
