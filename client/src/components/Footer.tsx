import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-6 bg-background border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-400 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            &copy; {new Date().getFullYear()} Faaz Siddiqui. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-primary mr-2">&lt;/&gt;</span>
            <span className="text-gray-400">Designed with <span className="text-primary">♥</span> by Faaz</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
