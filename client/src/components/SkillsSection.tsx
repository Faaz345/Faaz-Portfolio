import { motion } from "framer-motion";
import { 
  RiDatabase2Line, 
  RiCodeSSlashLine, 
  RiServerLine, 
  RiComputerLine, 
  RiWifiLine, 
  RiCloudLine, 
  RiGitBranchLine,
  RiAwardFill
} from "react-icons/ri";

const languages = [
  { name: "Python", proficiency: 90 },
  { name: "Java", proficiency: 85 },
  { name: "JavaScript", proficiency: 80 },
  { name: "SQL", proficiency: 85 },
  { name: "HTML/CSS", proficiency: 80 },
  { name: "PHP (basic)", proficiency: 60 }
];

const frameworks = [
  { name: "Flask", proficiency: 85 },
  { name: "Django (basic)", proficiency: 65 },
  { name: "Git/GitHub", proficiency: 80 },
  { name: "Linux", proficiency: 75 }
];

const libraries = [
  { name: "Pandas", proficiency: 90 },
  { name: "NumPy", proficiency: 85 },
  { name: "Scikit-learn", proficiency: 80 },
  { name: "Matplotlib", proficiency: 85 }
];

const concepts = [
  { name: "OOP", icon: <RiDatabase2Line /> },
  { name: "SDLC", icon: <RiCodeSSlashLine /> },
  { name: "REST APIs", icon: <RiServerLine /> },
  { name: "DBMS", icon: <RiDatabase2Line /> },
  { name: "OS", icon: <RiComputerLine /> },
  { name: "Networking", icon: <RiWifiLine /> },
  { name: "Basic AWS", icon: <RiCloudLine /> },
  { name: "Git Control", icon: <RiGitBranchLine /> }
];

const certifications = [
  { 
    name: "AI/ML Internship (6 Weeks)", 
    issuer: "Hands-on ML experience", 
    date: "2021" 
  }
];

const ProgressBar = ({ name, percentage }: { name: string, percentage: number }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-gray-300">{name}</span>
      <span className="text-primary">{percentage}%</span>
    </div>
    <div className="progress-bar">
      <motion.div 
        className="progress-fill"
        initial={{ width: "0%" }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="terminal-header mb-8"
        >
          <h2 className="text-3xl font-bold text-primary font-space mb-2">skills<span className="cursor"></span></h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Technical Skills</h3>
            
            {/* Languages */}
            <div className="mb-8">
              <h4 className="text-xl font-medium text-white mb-4">Languages</h4>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <ProgressBar key={index} name={lang.name} percentage={lang.proficiency} />
                ))}
              </div>
            </div>
            
            {/* Frameworks/Tools */}
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Frameworks/Tools</h4>
              <div className="space-y-4">
                {frameworks.map((framework, index) => (
                  <ProgressBar key={index} name={framework.name} percentage={framework.proficiency} />
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* ML Libraries */}
            <div className="mb-8">
              <h4 className="text-xl font-medium text-white mb-4">Libraries</h4>
              <div className="space-y-4">
                {libraries.map((lib, index) => (
                  <ProgressBar key={index} name={lib.name} percentage={lib.proficiency} />
                ))}
              </div>
            </div>
            
            {/* Concepts & Cloud */}
            <div>
              <h4 className="text-xl font-medium text-white mb-4">Concepts & Cloud</h4>
              <div className="grid grid-cols-2 gap-4">
                {concepts.map((concept, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-background/60 p-3 rounded border border-primary/30 flex items-center"
                    whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
                  >
                    <span className="text-primary mr-2 text-lg">{concept.icon}</span>
                    <span className="text-gray-300">{concept.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-xl font-medium text-white mb-4">Certifications</h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-background/60 p-4 rounded border border-primary/30"
                    whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
                  >
                    <div className="flex items-center">
                      <RiAwardFill className="text-primary mr-3 text-xl" />
                      <div>
                        <h5 className="text-white font-medium">{cert.name}</h5>
                        <p className="text-gray-400 text-sm">{cert.issuer} | {cert.date}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
