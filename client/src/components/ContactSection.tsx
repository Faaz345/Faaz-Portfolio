import { motion } from "framer-motion";
import { useState } from "react";
import { 
  RiTerminalBoxLine, 
  RiMapPinLine, 
  RiPhoneLine, 
  RiMailLine, 
  RiLinkedinBoxLine, 
  RiGithubFill, 
  RiLinkedinFill, 
  RiMailFill, 
  RiPhoneFill,
  RiSendPlaneFill
} from "react-icons/ri";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    // You would display a success toast here
  };

  return (
    <section id="contact" className="py-20 bg-black bg-opacity-50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="terminal-header mb-8"
        >
          <h2 className="text-3xl font-bold text-primary font-space mb-2">contact<span className="cursor"></span></h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-background rounded-lg p-6 border border-primary/30 mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <RiTerminalBoxLine className="text-primary mr-2" /> Contact Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <RiMapPinLine className="text-primary mr-3 mt-1 text-xl" />
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-300">Mumbai, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <RiPhoneLine className="text-primary mr-3 mt-1 text-xl" />
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-gray-300">+91-8756978802</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <RiMailLine className="text-primary mr-3 mt-1 text-xl" />
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-300">faaz.siddiqui345@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <RiLinkedinBoxLine className="text-primary mr-3 mt-1 text-xl" />
                  <div>
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <a href="https://linkedin.com/in/faaz-siddiqui-425365153" className="text-gray-300 hover:text-primary">
                      linkedin.com/in/faaz-siddiqui-425365153
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <RiGithubFill className="text-primary mr-3 mt-1 text-xl" />
                  <div>
                    <h4 className="text-white font-medium">GitHub</h4>
                    <a href="https://github.com/Faaz345" className="text-gray-300 hover:text-primary">
                      github.com/Faaz345
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <motion.a 
                href="https://linkedin.com/in/faaz-siddiqui-425365153" 
                target="_blank"
                className="bg-background p-4 rounded-full border border-primary/30 text-primary hover:text-primary/80 transition-all hover:border-primary"
                whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.9 }}
              >
                <RiLinkedinFill className="text-xl" />
              </motion.a>
              <motion.a 
                href="https://github.com/Faaz345" 
                target="_blank"
                className="bg-background p-4 rounded-full border border-primary/30 text-primary hover:text-primary/80 transition-all hover:border-primary"
                whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.9 }}
              >
                <RiGithubFill className="text-xl" />
              </motion.a>
              <motion.a 
                href="mailto:faaz.siddiqui345@gmail.com"
                className="bg-background p-4 rounded-full border border-primary/30 text-primary hover:text-primary/80 transition-all hover:border-primary"
                whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.9 }}
              >
                <RiMailFill className="text-xl" />
              </motion.a>
              <motion.a 
                href="tel:+918756978802"
                className="bg-background p-4 rounded-full border border-primary/30 text-primary hover:text-primary/80 transition-all hover:border-primary"
                whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.9 }}
              >
                <RiPhoneFill className="text-xl" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form 
              className="bg-background rounded-lg p-6 border border-primary/30"
              onSubmit={handleSubmit}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <RiTerminalBoxLine className="text-primary mr-2" /> Send Me a Message
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black bg-opacity-60 border border-primary/30 rounded p-3 text-gray-300 focus:outline-none focus:border-primary transition"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black bg-opacity-60 border border-primary/30 rounded p-3 text-gray-300 focus:outline-none focus:border-primary transition"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black bg-opacity-60 border border-primary/30 rounded p-3 text-gray-300 focus:outline-none focus:border-primary transition"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black bg-opacity-60 border border-primary/30 rounded p-3 text-gray-300 focus:outline-none focus:border-primary transition"
                    required
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-primary text-black py-3 rounded font-medium hover:bg-primary/80 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RiSendPlaneFill className="mr-2" /> Send Message
                </motion.button>
                
                <p className="text-gray-400 text-sm text-center mt-2">
                  I'll get back to you as soon as possible!
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
