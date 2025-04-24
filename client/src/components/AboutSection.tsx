import { motion } from "framer-motion";
import { RiLinkedinFill, RiGithubFill, RiMailLine } from "react-icons/ri";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black bg-opacity-50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="terminal-header mb-8"
        >
          <h2 className="text-3xl font-bold text-primary font-space mb-2">about<span className="cursor"></span></h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-background border border-primary/40 p-6 rounded-lg shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-xs text-primary/50 opacity-50 font-mono">
                ~/about/personal_info.json
              </div>
              <pre className="text-gray-300 font-mono text-sm">
<span className="text-purple-400">{'{'}</span>
  <span className="text-yellow-300">"name"</span>: <span className="text-green-300">"Faaz Siddiqui"</span>,
  <span className="text-yellow-300">"education"</span>: <span className="text-green-300">"B.Tech in Computer Science"</span>,
  <span className="text-yellow-300">"university"</span>: <span className="text-green-300">"Amity University Mumbai"</span>,
  <span className="text-yellow-300">"year"</span>: <span className="text-blue-300">2022</span> - <span className="text-blue-300">Present</span>,
  <span className="text-yellow-300">"achievements"</span>: <span className="text-green-300">"Among top 5% of batch"</span>,
  <span className="text-yellow-300">"location"</span>: <span className="text-green-300">"Mumbai, India"</span>,
  <span className="text-yellow-300">"interests"</span>: [
    <span className="text-green-300">"AI/ML"</span>,
    <span className="text-green-300">"Full-stack Development"</span>,
    <span className="text-green-300">"Data Science"</span>
  ]
<span className="text-purple-400">{'}'}</span>
              </pre>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-primary mb-4">Profile Summary</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Final-year B.Tech Computer Science student with strong skills in Python, Java, and machine learning. Experienced in full-stack development and AI projects, with hands-on work in real-world applications and freelance client solutions.
            </p>
            
            <h3 className="text-xl font-bold text-primary mb-4">Education</h3>
            <div className="mb-6 border-l-2 border-primary pl-4">
              <h4 className="text-white font-medium">B.Tech in Computer Science and Engineering</h4>
              <p className="text-primary">Amity University Mumbai</p>
              <p className="text-gray-400">2022 – Present | Among the top 5% of the batch</p>
              <p className="text-gray-300 mt-2">Relevant Coursework: DSA, DBMS, OS, CN, ML, AI, Software Engineering</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="https://linkedin.com/in/faaz-siddiqui-425365153" 
                target="_blank" 
                className="inline-flex items-center text-primary hover:text-primary/80"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <RiLinkedinFill className="mr-2" /> LinkedIn
              </motion.a>
              <motion.a 
                href="https://github.com/Faaz345" 
                target="_blank" 
                className="inline-flex items-center text-primary hover:text-primary/80"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <RiGithubFill className="mr-2" /> GitHub
              </motion.a>
              <motion.a 
                href="mailto:faaz.siddiqui345@gmail.com" 
                className="inline-flex items-center text-primary hover:text-primary/80"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <RiMailLine className="mr-2" /> Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
