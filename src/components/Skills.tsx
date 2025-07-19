import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  GitBranch,
  Palette,
  Smartphone,
  Globe,
  Zap,
  Star,
  TrendingUp
} from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={28} />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 88, icon: '⚡' },
        { name: 'React', level: 85, icon: '⚛️' },
        { name: 'Next.js', level: 80, icon: '🚀' },
        { name: 'Tailwind CSS', level: 92, icon: '💨' },
        { name: 'Bootstrap', level: 85, icon: '📱' }
      ],
      description: 'Creating beautiful, responsive, and interactive user interfaces'
    },
    {
      title: 'Backend Development',
      icon: <Server size={28} />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 82, icon: '🟢' },
        { name: 'MongoDB', level: 78, icon: '🍃' },
        { name: 'REST APIs', level: 85, icon: '🔗' },
        { name: 'Express.js', level: 80, icon: '🚂' },
        { name: 'SSR', level: 75, icon: '⚡' }
      ],
      description: 'Building robust server-side applications and APIs'
    },
    {
      title: 'Tools & DevOps',
      icon: <GitBranch size={28} />,
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'Git', level: 88, icon: '📝' },
        { name: 'Firebase', level: 82, icon: '🔥' },
        { name: 'Vercel', level: 85, icon: '▲' },
        { name: 'EmailJS', level: 80, icon: '📧' },
        { name: 'Deployment', level: 83, icon: '🚀' }
      ],
      description: 'Version control, deployment, and development workflow'
    },
    {
      title: 'Design & Others',
      icon: <Palette size={28} />,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Responsive Design', level: 90, icon: '📱' },
        { name: 'UI/UX Design', level: 75, icon: '🎨' },
        { name: 'DSA', level: 70, icon: '🧮' },
        { name: 'Security Basics', level: 72, icon: '🔒' },
        { name: 'Performance', level: 78, icon: '⚡' }
      ],
      description: 'Design principles, algorithms, and best practices'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10 transition-all duration-500">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6"
          >
            <Zap className="text-white" size={32} />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring innovative ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl`
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg'
              }`}
            >
              <motion.div
                animate={{ rotate: activeCategory === index ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {category.icon}
              </motion.div>
              <span className="hidden sm:inline">{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-3xl p-8 mb-8 text-white text-center`}
            >
              <div className="flex items-center justify-center space-x-4 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  {skillCategories[activeCategory].icon}
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>
              <p className="text-lg opacity-90">
                {skillCategories[activeCategory].description}
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h4 className="font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-500" size={16} />
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{ x: [-10, 10, -10] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-white/30 rounded-full"
                        />
                      </motion.div>
                    </div>
                    
                    {/* Skill Level Indicator */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: skillIndex * 0.1 + 1, duration: 0.3 }}
                      className={`absolute -top-8 bg-gradient-to-r ${skillCategories[activeCategory].color} text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg`}
                      style={{ left: `${Math.max(0, Math.min(skill.level - 10, 85))}%` }}
                    >
                      {skill.level}%
                      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-current`} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: 'Technologies Mastered', value: '15+', icon: <Code size={24} /> },
            { label: 'Projects Completed', value: '11+', icon: <Globe size={24} /> },
            { label: 'Years Learning', value: '2+', icon: <TrendingUp size={24} /> }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white text-center shadow-2xl"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4"
              >
                {stat.icon}
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                className="text-3xl font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-sm opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;