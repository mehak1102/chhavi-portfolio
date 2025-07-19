import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin, BookOpen, Trophy, Star } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science - Computer Science',
      institution: 'Institute of Information Technology and Management',
      location: 'Delhi, India',
      period: '2023 – Present',
      cgpa: '8.01',
      status: 'current',
      description: 'Pursuing comprehensive computer science education with focus on software development, algorithms, and modern programming practices.',
      highlights: [
        'Data Structures & Algorithms',
        'Software Engineering Principles',
        'Database Management Systems',
        'Web Development Technologies',
        'Object-Oriented Programming'
      ],
      achievements: [
        'Consistent academic performance with 8.01 CGPA',
        'Active participation in coding competitions',
        'Member of Computer Science Society'
      ]
    },
    {
      degree: 'Web Development Certification',
      institution: 'Coding Blocks',
      location: 'Delhi, India',
      period: '2024',
      cgpa: 'Completed with Excellence',
      status: 'completed',
      description: 'Intensive full-stack web development program covering modern technologies and industry best practices.',
      highlights: [
        'Frontend: React, Next.js, HTML5, CSS3, JavaScript',
        'Backend: Node.js, Express.js, MongoDB',
        'Tools: Git, Firebase, Deployment strategies',
        'Project-based learning approach',
        'Industry mentorship program'
      ],
      achievements: [
        'Built 11+ full-stack applications',
        'Completed capstone project with 95% score',
        'Received excellence certificate'
      ]
    },
    {
      degree: 'Senior Secondary Education',
      institution: 'Mahashay Chunni Lal Saraswati Bal Mandir',
      location: 'Delhi, India',
      period: '2021 – 2022',
      cgpa: '8.33',
      status: 'completed',
      description: 'Completed higher secondary education with focus on Science stream, building strong foundation in Mathematics and Computer Science.',
      highlights: [
        'Science Stream (PCM + Computer Science)',
        'Mathematics & Physics Excellence',
        'Computer Science Fundamentals',
        'Analytical Problem Solving'
      ],
      achievements: [
        'Achieved 8.33 CGPA in final examinations',
        'School topper in Computer Science',
        'Participated in inter-school coding competitions'
      ]
    },
    {
      degree: 'Secondary Education',
      institution: 'Mahashay Chunni Lal Saraswati Bal Mandir',
      location: 'Delhi, India',
      period: '2019 – 2020',
      cgpa: '8.10',
      status: 'completed',
      description: 'Completed secondary education with strong academic performance and early interest in technology and programming.',
      highlights: [
        'Strong foundation in core subjects',
        'Introduction to Computer Programming',
        'Mathematics & Science Excellence',
        'Leadership and teamwork skills'
      ],
      achievements: [
        'Secured 8.10 CGPA in board examinations',
        'Class representative for 2 consecutive years',
        'Winner of school science exhibition'
      ]
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
        ease: "easeOut"
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 transition-all duration-500">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6"
          >
            <BookOpen className="text-white" size={32} />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic path and continuous learning journey in technology and computer science
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-blue-600 to-indigo-600 rounded-full shadow-lg" />
            <div className="absolute left-7 top-0 bottom-0 w-3 bg-gradient-to-b from-purple-600/20 via-blue-600/20 to-indigo-600/20 rounded-full blur-sm" />

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start mb-16 last:mb-0"
              >
                {/* Enhanced Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl ${
                    edu.status === 'current'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                      : 'bg-gradient-to-r from-gray-500 to-gray-700'
                  }`}
                >
                  <GraduationCap className="text-white" size={24} />
                  
                  {/* Pulsing effect for current education */}
                  {edu.status === 'current' && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                    />
                  )}
                </motion.div>

                {/* Enhanced Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="ml-8 flex-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl hover:shadow-3xl border border-gray-200/50 dark:border-gray-700/50 group"
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        {edu.status === 'current' && (
                          <motion.span
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg"
                          >
                            CURRENT
                          </motion.span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 font-semibold mb-2">
                        <BookOpen size={18} />
                        <span className="text-lg">{edu.institution}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-3">
                        <MapPin size={16} />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full">
                        <Calendar size={16} className="text-purple-600 dark:text-purple-400" />
                        <span className="text-sm font-medium text-purple-700 dark:text-purple-300">{edu.period}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 px-4 py-2 rounded-full">
                        <Award size={16} className="text-yellow-600 dark:text-yellow-400" />
                        <span className="text-sm font-medium text-yellow-700 dark:text-yellow-300">CGPA: {edu.cgpa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="flex items-center space-x-2 text-lg font-semibold text-gray-800 dark:text-white mb-4">
                      <Star className="text-yellow-500" size={20} />
                      <span>Key Highlights</span>
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="flex items-center space-x-2 text-lg font-semibold text-gray-800 dark:text-white mb-4">
                      <Trophy className="text-purple-600" size={20} />
                      <span>Achievements</span>
                    </h4>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          className="flex items-start space-x-3 p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
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

export default Education;