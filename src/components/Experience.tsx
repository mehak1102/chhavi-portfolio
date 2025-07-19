import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Web Development Student',
      company: 'Coding Blocks',
      location: 'Delhi, India',
      period: '2024',
      type: 'Education',
      description: [
        'Completed comprehensive web development course covering full-stack technologies',
        'Built multiple projects using React, Node.js, and MongoDB',
        'Learned industry best practices and modern development workflows',
        'Collaborated on team projects and code reviews',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'HTML/CSS'],
      status: 'completed',
    },
    {
      title: 'Computer Science Student',
      company: 'Institute of Information Technology and Management',
      location: 'Delhi, India',
      period: '2023 - Present',
      type: 'Education',
      description: [
        'Pursuing Bachelor of Science in Computer Science',
        'Maintaining CGPA of 8.01 with focus on software development',
        'Active participation in coding competitions and hackathons',
        'Working on various academic and personal projects',
      ],
      technologies: ['DSA', 'Programming', 'Software Engineering', 'Database Systems'],
      status: 'current',
    },
    {
      title: 'Self-Taught Developer',
      company: 'Personal Projects',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Development',
      description: [
        'Built 11+ full-stack web applications and games',
        'Implemented modern UI/UX designs with responsive layouts',
        'Integrated third-party APIs and services',
        'Deployed applications on various platforms',
      ],
      technologies: ['React', 'Next.js', 'Firebase', 'Tailwind CSS', 'Vercel'],
      status: 'current',
    },
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Experience & Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My learning journey and development experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
                    exp.status === 'current'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                      : 'bg-gradient-to-r from-gray-400 to-gray-600'
                  } shadow-lg`}
                >
                  <Briefcase className="text-white" size={24} />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="ml-8 flex-1 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 mb-1">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      exp.type === 'Education' 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                        : 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                    }`}>
                      {exp.type}
                    </span>
                    {exp.status === 'current' && (
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;