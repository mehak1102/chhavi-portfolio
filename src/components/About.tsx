import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                Hi, I'm <span className="font-semibold text-purple-600 dark:text-purple-400">Chhavi Chandna</span> — 
                a creative and passionate web developer. My foundation spans HTML, CSS, JavaScript, Bootstrap, 
                Node.js, MongoDB, Tailwind, React, Next.js, Vapi, Firebase, and Google Gemini.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                I'm a graduate from <span className="font-semibold text-blue-600 dark:text-blue-400">Coding Blocks</span> and 
                passionate about building elegant, user-friendly applications that make a difference in people's lives.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <div className="flex items-center space-x-2 bg-purple-100 dark:bg-purple-900 px-4 py-2 rounded-full">
                  <Code className="text-purple-600 dark:text-purple-400" size={20} />
                  <span className="text-purple-700 dark:text-purple-300 font-medium">Clean Code</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full">
                  <Lightbulb className="text-blue-600 dark:text-blue-400" size={20} />
                  <span className="text-blue-700 dark:text-blue-300 font-medium">Innovation</span>
                </div>
                <div className="flex items-center space-x-2 bg-pink-100 dark:bg-pink-900 px-4 py-2 rounded-full">
                  <Heart className="text-pink-600 dark:text-pink-400" size={20} />
                  <span className="text-pink-700 dark:text-pink-300 font-medium">Passion</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">What I Do</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Frontend Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Backend Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>API Integration</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-purple-300 rounded-full opacity-30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-blue-300 rounded-full opacity-30"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;