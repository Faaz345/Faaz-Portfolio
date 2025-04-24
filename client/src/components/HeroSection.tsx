import { motion } from "framer-motion";
import { RiTerminalLine, RiDownloadLine } from "react-icons/ri";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-32 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="w-full md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="terminal-header mb-4">
              <h3 className="text-primary text-xl font-space tracking-wider">Welcome to my terminal</h3>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              I'm <span className="text-primary">Faaz Siddiqui</span>
            </h1>
            <div className="flex items-center mb-4">
              <div className="h-1 w-16 bg-primary mr-4"></div>
              <p className="text-xl text-gray-300 font-medium font-space">Full-Stack Developer & ML Engineer</p>
            </div>
            <p className="text-gray-400 max-w-lg mb-8 leading-relaxed">
              Final-year B.Tech Computer Science student with strong skills in Python, Java, and machine learning. Experienced in full-stack development and AI projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-black font-medium rounded hover:bg-primary/80 transition duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RiTerminalLine className="mr-2" /> Contact Me
              </motion.a>
              <motion.a 
                href="Faaz_Siddiqui - Resume.pdf" 
                download 
                className="px-6 py-3 border border-primary text-primary font-medium rounded hover:bg-background hover:border-primary/80 transition duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RiDownloadLine className="mr-2" /> Download CV
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-background border-2 border-primary/40 rounded-lg p-4 shadow-lg shadow-primary/10 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500">bash -- 80x24</div>
                </div>
                <div className="font-mono text-sm">
                  <p className="mb-2"><span className="text-primary">~$</span> whoami</p>
                  <p className="mb-2 text-primary/90">faaz_siddiqui</p>
                  <p className="mb-2"><span className="text-primary">~$</span> cat about.txt</p>
                  <p className="mb-2 text-gray-300">B.Tech in Computer Science and Engineering</p>
                  <p className="mb-2 text-gray-300">Mumbai, India</p>
                  <p className="mb-2"><span className="text-primary">~$</span> ls skills/</p>
                  <p className="mb-2 text-gray-300">Python, Java, JavaScript, SQL, Flask, Django</p>
                  <p className="mb-2"><span className="text-primary">~$</span> cat contact.txt</p>
                  <p className="mb-2 text-gray-300">Faazrock345@gmail.com</p>
                  <p className="mb-2"><span className="text-primary">~$</span> <span className="cursor"></span></p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
