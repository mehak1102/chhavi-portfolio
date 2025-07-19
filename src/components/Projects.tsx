// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ExternalLink, Github, X, Code, Filter, Star, Calendar, Users } from 'lucide-react';

// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   fullDescription: string;
//   technologies: string[];
//   liveDemo: string;
//   github?: string;
//   image: string;
//   category: string;
//   featured: boolean;
//   stats?: {
//     stars?: number;
//     users?: string;
//     date?: string;
//   };
// }

// const Projects: React.FC = () => {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [filter, setFilter] = useState('All');

//   const projects: Project[] = [
//     {
//       id: 1,
//       title: 'PrepWise – AI Mock Interview Tool',
//       description: 'AI-powered mock interview platform with real-time feedback and performance analytics',
//       fullDescription: 'PrepWise is an innovative AI-powered mock interview platform that revolutionizes job preparation. It features real-time AI feedback, customizable interview scenarios, comprehensive performance analytics, industry-specific questions, and personalized improvement recommendations. The platform uses advanced machine learning to simulate realistic interview experiences.',
//       technologies: ['React', 'Node.js', 'AI/ML', 'MongoDB', 'Socket.io', 'TensorFlow'],
//       liveDemo: 'https://prepwise-demo.vercel.app',
//       github: 'https://github.com/chhavichandna/prepwise',
//       image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'AI/ML',
//       featured: true,
//       stats: { stars: 45, users: '1.2K', date: '2024' }
//     },
//     {
//       id: 2,
//       title: 'QuickStay – Hotel Booking App',
//       description: 'Modern hotel booking platform with seamless user experience and real-time availability',
//       fullDescription: 'QuickStay is a comprehensive hotel booking platform offering intuitive search, advanced filtering, real-time availability, secure payment processing, user reviews, and booking management. Built with modern technologies for optimal performance and user experience.',
//       technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind'],
//       liveDemo: 'https://quickstay-demo.vercel.app',
//       github: 'https://github.com/chhavichandna/quickstay',
//       image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'Web App',
//       featured: true,
//       stats: { stars: 38, users: '850', date: '2024' }
//     },
//     {
//       id: 3,
//       title: 'CartLY – E-commerce Platform',
//       description: 'Full-featured e-commerce solution with modern design and comprehensive features',
//       fullDescription: 'CartLY is a complete e-commerce solution featuring product catalog, shopping cart, user authentication, payment processing, order management, inventory tracking, and admin dashboard. Built for scalability and performance.',
//       technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'PayPal API', 'JWT'],
//       liveDemo: 'https://cartly-demo.vercel.app',
//       github: 'https://github.com/chhavichandna/cartly',
//       image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'E-commerce',
//       featured: true,
//       stats: { stars: 52, users: '2.1K', date: '2024' }
//     },
//     {
//       id: 4,
//       title: 'Snake Game – Retro Gaming',
//       description: 'Classic snake game with modern graphics, smooth animations, and multiple difficulty levels',
//       fullDescription: 'A nostalgic recreation of the classic Snake game featuring modern graphics, smooth animations, high score tracking, responsive controls, multiple difficulty levels, power-ups, and leaderboard system.',
//       technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Local Storage', 'Web Audio API'],
//       liveDemo: 'https://snake-game-demo.vercel.app',
//       github: 'https://github.com/chhavichandna/snake-game',
//       image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'Game',
//       featured: false,
//       stats: { stars: 28, users: '500', date: '2024' }
//     },
//     {
//       id: 5,
//       title: 'Rock-Paper-Scissors Game',
//       description: 'Interactive game with AI opponent, animations, and comprehensive score tracking',
//       fullDescription: 'An engaging Rock-Paper-Scissors game featuring intelligent AI opponent, animated gameplay, comprehensive score tracking, multiple game modes, sound effects, and smooth transitions.',
//       technologies: ['JavaScript', 'CSS3', 'HTML5', 'Animation API', 'Web Audio'],
//       liveDemo: 'https://rps-game-demo.vercel.app',
//       github: 'https://github.com/chhavichandna/rps-game',
//       image: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'Game',
//       featured: false,
//       stats: { stars: 22, users: '350', date: '2024' }
//     },
//     {
//       id: 6,
//       title: 'Tic Tac Toe Game',
//       description: 'Classic strategy game with multiplayer support and customizable themes',
//       fullDescription: 'A beautifully designed Tic Tac Toe game supporting both single-player (vs AI) and multiplayer modes. Features winning animations, game statistics, customizable themes, and difficulty levels.',
//       technologies: ['React', 'CSS3', 'JavaScript', 'Context API', 'Framer Motion'],
//       liveDemo: 'https://tictactoe-demo.vercel.app',
//       github: 'https://github.com/chhavichandna/tictactoe',
//       image: 'https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'Game',
//       featured: false,
//       stats: { stars: 19, users: '280', date: '2024' }
//     },
//     {
//       id: 7,
//       title: 'Note-Making Web Application',
//       description: 'Feature-rich note-taking app with cloud sync and collaborative features',
//       fullDescription: 'A comprehensive note-taking application with rich text editing, categorization, advanced search functionality, cloud synchronization, collaborative features, and offline support. Perfect for students and professionals.',
//       technologies: ['React', 'Firebase', 'Rich Text Editor', 'PWA', 'Service Workers'],
//       liveDemo: 'https://notes-app-demo.vercel.app',
//       github: 'https://github.com/chhavichandna/notes-app',
//       image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'Productivity',
//       featured: false,
//       stats: { stars: 31, users: '650', date: '2024' }
//     },
//     {
//       id: 8,
//       title: "Photographer's Blog",
//       description: 'Elegant blog platform designed specifically for photography enthusiasts',
//       fullDescription: 'A stunning blog platform designed for photographers to showcase their work, share stories, and connect with their audience. Features image galleries, SEO optimization, social sharing, and responsive design.',
//       technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Vercel', 'Image Optimization'],
//       liveDemo: 'https://photo-blog-demo.vercel.app',
//       github: 'https://github.com/chhavichandna/photo-blog',
//       image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'Blog',
//       featured: false,
//       stats: { stars: 26, users: '420', date: '2024' }
//     },
//     {
//       id: 9,
//       title: 'Calculator – Apple-like UI',
//       description: 'Sleek calculator with iOS-inspired design and advanced mathematical operations',
//       fullDescription: 'A beautifully crafted calculator application inspired by Apple\'s iOS design language. Features smooth animations, haptic feedback simulation, advanced mathematical operations, and memory functions.',
//       technologies: ['React', 'CSS3', 'Framer Motion', 'Math.js', 'PWA'],
//       liveDemo: 'https://calculator-demo.vercel.app',
//       github: 'https://github.com/chhavichandna/calculator',
//       image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'Utility',
//       featured: false,
//       stats: { stars: 33, users: '750', date: '2024' }
//     },
//     {
//       id: 10,
//       title: 'Amazon Clone',
//       description: 'Comprehensive e-commerce platform replicating Amazon\'s core features',
//       fullDescription: 'A comprehensive e-commerce platform replicating Amazon\'s core features including product search, user authentication, shopping cart, order tracking, payment processing, and seller dashboard.',
//       technologies: ['React', 'Redux', 'Firebase', 'Stripe', 'Material-UI', 'Cloud Functions'],
//       liveDemo: 'https://amazon-clone-demo.vercel.app',
//       github: 'https://github.com/chhavichandna/amazon-clone',
//       image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'E-commerce',
//       featured: true,
//       stats: { stars: 67, users: '3.2K', date: '2024' }
//     },
//     {
//       id: 11,
//       title: 'Zomato Clone',
//       description: 'Feature-rich food delivery app with restaurant discovery and real-time tracking',
//       fullDescription: 'A feature-rich food delivery application inspired by Zomato, including restaurant discovery, menu browsing, order placement, real-time tracking, user reviews, and payment integration.',
//       technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Socket.io'],
//       liveDemo: 'https://zomato-clone-demo.vercel.app',
//       github: 'https://github.com/chhavichandna/zomato-clone',
//       image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'Mobile App',
//       featured: true,
//       stats: { stars: 41, users: '1.8K', date: '2024' }
//     },
//   ];

//   const categories = ['All', 'AI/ML', 'Web App', 'E-commerce', 'Game', 'Productivity', 'Blog', 'Utility', 'Mobile App'];

//   const filteredProjects = filter === 'All' 
//     ? projects 
//     : projects.filter(project => project.category === filter);

//   const featuredProjects = projects.filter(project => project.featured);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       },
//     },
//   };

//   return (
//     <section id="projects" className="py-20 transition-all duration-500 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
//       <div className="container px-6 mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-16 text-center"
//         >
//           <motion.div
//             initial={{ scale: 0, rotate: -180 }}
//             whileInView={{ scale: 1, rotate: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
//           >
//             <Code className="text-white" size={32} />
//           </motion.div>
          
//           <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text">
//             Featured Projects
//           </h2>
//           <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 dark:text-gray-400">
//             A showcase of my recent work and creative projects that demonstrate my skills and passion for development
//           </p>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-3 mb-8">
//             {categories.map((category) => (
//               <motion.button
//                 key={category}
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setFilter(category)}
//                 className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
//                   filter === category
//                     ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl'
//                     : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg'
//                 }`}
//               >
//                 <Filter size={16} />
//                 <span>{category}</span>
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Featured Projects Section */}
//         {filter === 'All' && (
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mb-16"
//           >
//             <h3 className="mb-8 text-2xl font-bold text-center text-gray-800 dark:text-white">
//               🌟 Featured Projects
//             </h3>
//             <div className="grid max-w-6xl gap-8 mx-auto lg:grid-cols-2">
//               {featuredProjects.slice(0, 4).map((project) => (
//                 <motion.div
//                   key={project.id}
//                   whileHover={{ y: -10, scale: 1.02 }}
//                   onClick={() => setSelectedProject(project)}
//                   className="overflow-hidden transition-all duration-500 border shadow-2xl cursor-pointer bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl hover:shadow-3xl group border-gray-200/50 dark:border-gray-700/50"
//                 >
//                   <div className="relative h-64 overflow-hidden">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                     <div className="absolute top-4 right-4">
//                       <span className="px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
//                         FEATURED
//                       </span>
//                     </div>
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <div className="flex items-center justify-between text-white">
//                         <div className="flex items-center space-x-4">
//                           {project.stats?.stars && (
//                             <div className="flex items-center space-x-1">
//                               <Star size={16} className="text-yellow-400" />
//                               <span className="text-sm">{project.stats.stars}</span>
//                             </div>
//                           )}
//                           {project.stats?.users && (
//                             <div className="flex items-center space-x-1">
//                               <Users size={16} />
//                               <span className="text-sm">{project.stats.users}</span>
//                             </div>
//                           )}
//                         </div>
//                         <div className="flex space-x-2">
//                           <motion.a
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             href={project.liveDemo}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             onClick={(e) => e.stopPropagation()}
//                             className="p-2 transition-colors duration-200 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
//                           >
//                             <ExternalLink size={16} />
//                           </motion.a>
//                           {project.github && (
//                             <motion.a
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.9 }}
//                               href={project.github}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               onClick={(e) => e.stopPropagation()}
//                               className="p-2 transition-colors duration-200 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
//                             >
//                               <Github size={16} />
//                             </motion.a>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <h3 className="mb-3 text-xl font-bold text-gray-800 transition-colors duration-300 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
//                       {project.title}
//                     </h3>
//                     <p className="mb-4 text-gray-600 dark:text-gray-400 line-clamp-2">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.slice(0, 4).map((tech, index) => (
//                         <span
//                           key={index}
//                           className="px-3 py-1 text-xs font-medium text-purple-700 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 dark:text-purple-300"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                       {project.technologies.length > 4 && (
//                         <span className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-400">
//                           +{project.technologies.length - 4}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* All Projects Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {filteredProjects.map((project) => (
//             <motion.div
//               key={project.id}
//               variants={itemVariants}
//               whileHover={{ y: -10, scale: 1.02 }}
//               onClick={() => setSelectedProject(project)}
//               className="overflow-hidden transition-all duration-500 border shadow-xl cursor-pointer bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl hover:shadow-2xl group border-gray-200/50 dark:border-gray-700/50"
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100" />
//                 {project.featured && (
//                   <div className="absolute top-3 right-3">
//                     <span className="px-2 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r from-yellow-400 to-orange-400">
//                       ⭐ FEATURED
//                     </span>
//                   </div>
//                 )}
//                 <div className="absolute transition-opacity duration-300 opacity-0 bottom-3 left-3 right-3 group-hover:opacity-100">
//                   <div className="flex space-x-2">
//                     <motion.a
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       href={project.liveDemo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       onClick={(e) => e.stopPropagation()}
//                       className="flex items-center px-3 py-1 space-x-1 text-sm text-white transition-colors duration-200 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
//                     >
//                       <ExternalLink size={14} />
//                       <span>Live</span>
//                     </motion.a>
//                     {project.github && (
//                       <motion.a
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         onClick={(e) => e.stopPropagation()}
//                         className="flex items-center px-3 py-1 space-x-1 text-sm text-white transition-colors duration-200 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
//                       >
//                         <Github size={14} />
//                         <span>Code</span>
//                       </motion.a>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="mb-2 text-lg font-bold text-gray-800 transition-colors duration-300 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
//                   {project.title}
//                 </h3>
//                 <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
//                   {project.description}
//                 </p>
                
//                 {/* Project Stats */}
//                 {project.stats && (
//                   <div className="flex items-center justify-between mb-4 text-xs text-gray-500 dark:text-gray-400">
//                     <div className="flex items-center space-x-3">
//                       {project.stats.stars && (
//                         <div className="flex items-center space-x-1">
//                           <Star size={12} className="text-yellow-500" />
//                           <span>{project.stats.stars}</span>
//                         </div>
//                       )}
//                       {project.stats.users && (
//                         <div className="flex items-center space-x-1">
//                           <Users size={12} />
//                           <span>{project.stats.users}</span>
//                         </div>
//                       )}
//                     </div>
//                     {project.stats.date && (
//                       <div className="flex items-center space-x-1">
//                         <Calendar size={12} />
//                         <span>{project.stats.date}</span>
//                       </div>
//                     )}
//                   </div>
//                 )}
                
//                 <div className="flex flex-wrap gap-1">
//                   {project.technologies.slice(0, 3).map((tech, index) => (
//                     <span
//                       key={index}
//                       className="px-2 py-1 text-xs font-medium text-purple-700 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 dark:text-purple-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                   {project.technologies.length > 3 && (
//                     <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-400">
//                       +{project.technologies.length - 3}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Project Modal */}
//         <AnimatePresence>
//           {selectedProject && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//               onClick={() => setSelectedProject(null)}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0, y: 50 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.9, opacity: 0, y: 50 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//                 onClick={(e) => e.stopPropagation()}
//                 className="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-3xl"
//               >
//                 <div className="relative">
//                   <img
//                     src={selectedProject.image}
//                     alt={selectedProject.title}
//                     className="object-cover w-full h-80"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                   <motion.button
//                     whileHover={{ scale: 1.1, rotate: 90 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => setSelectedProject(null)}
//                     className="absolute p-3 text-white transition-colors duration-200 rounded-full top-6 right-6 bg-white/20 backdrop-blur-sm hover:bg-white/30"
//                   >
//                     <X size={24} />
//                   </motion.button>
                  
//                   {selectedProject.featured && (
//                     <div className="absolute top-6 left-6">
//                       <span className="px-4 py-2 text-sm font-bold text-white rounded-full bg-gradient-to-r from-yellow-400 to-orange-400">
//                         ⭐ FEATURED PROJECT
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-8">
//                   <div className="flex items-start justify-between mb-6">
//                     <div>
//                       <h3 className="mb-2 text-3xl font-bold text-gray-800 dark:text-white">
//                         {selectedProject.title}
//                       </h3>
//                       <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
//                         <span className="px-3 py-1 font-medium text-purple-700 bg-purple-100 rounded-full dark:bg-purple-900/30 dark:text-purple-300">
//                           {selectedProject.category}
//                         </span>
//                         {selectedProject.stats && (
//                           <>
//                             {selectedProject.stats.stars && (
//                               <div className="flex items-center space-x-1">
//                                 <Star size={16} className="text-yellow-500" />
//                                 <span>{selectedProject.stats.stars} stars</span>
//                               </div>
//                             )}
//                             {selectedProject.stats.users && (
//                               <div className="flex items-center space-x-1">
//                                 <Users size={16} />
//                                 <span>{selectedProject.stats.users} users</span>
//                               </div>
//                             )}
//                           </>
//                         )}
//                       </div>
//                     </div>
//                   </div>
                  
//                   <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
//                     {selectedProject.fullDescription}
//                   </p>

//                   <div className="mb-8">
//                     <h4 className="flex items-center mb-4 space-x-2 text-xl font-semibold text-gray-800 dark:text-white">
//                       <Code size={20} />
//                       <span>Technologies Used</span>
//                     </h4>
//                     <div className="flex flex-wrap gap-3">
//                       {selectedProject.technologies.map((tech, index) => (
//                         <motion.span
//                           key={index}
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: index * 0.1, duration: 0.3 }}
//                           className="px-4 py-2 font-medium text-purple-700 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 dark:text-purple-300"
//                         >
//                           {tech}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-4 sm:flex-row">
//                     <motion.a
//                       whileHover={{ scale: 1.05, y: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                       href={selectedProject.liveDemo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl hover:shadow-2xl"
//                     >
//                       <ExternalLink size={20} />
//                       <span>View Live Demo</span>
//                     </motion.a>
                    
//                     {selectedProject.github && (
//                       <motion.a
//                         whileHover={{ scale: 1.05, y: -2 }}
//                         whileTap={{ scale: 0.95 }}
//                         href={selectedProject.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-gray-800 transition-all duration-300 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-2xl hover:bg-gray-300 dark:hover:bg-gray-600"
//                       >
//                         <Github size={20} />
//                         <span>View Source Code</span>
//                       </motion.a>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter, X, Star, Users, Calendar, Code, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  liveDemo: string;
  github: string;
  featured: boolean;
  stats: {
    stars: number;
    users: string;
    date: string;
  };
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'PrepWise',
      description: 'AI-powered mock interview platform with real-time feedback',
      longDescription: 'PrepWise is an advanced AI-powered mock interview platform that helps candidates prepare for technical and behavioral interviews. Features include real-time feedback, performance analytics, personalized improvement suggestions, and comprehensive interview simulation.',
      image: 'https://images.unsplash.com/photo-1718241905462-56e7b9f722f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFpfGVufDB8fDB8fHww&w=500',
      technologies: ['React', 'Node.js', 'AI/ML', 'MongoDB', 'Express'],
      category: 'web',
      liveDemo: 'https://ai-mock-interview-iwzy.vercel.app/',
      github: 'https://github.com/chhavichandna/PrepWise',
      featured: true,
      stats: { stars: 45, users: '2.1K', date: '2024' }
    },
    {
      id: 2,
      title: 'QuickStay',
      description: 'Modern booking platform for accommodations worldwide',
      longDescription: 'QuickStay is a comprehensive booking platform that allows users to find and book accommodations worldwide. Features include advanced search filters, real-time availability, secure payments, user reviews, and interactive maps.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
      category: 'web',
      liveDemo: 'https://quick-stay-beta.vercel.app/',
      github: 'https://github.com/chhavichandna/QuickStay',
      featured: true,
      stats: { stars: 38, users: '1.8K', date: '2024' }
    },
    {
      id: 3,
      title: 'CartLY',
      description: 'Full-featured e-commerce platform with modern UI',
      longDescription: 'CartLY is a modern e-commerce solution with features like product catalog, shopping cart, user authentication, order management, payment integration, and admin dashboard. Built with scalability and performance in mind.',
      image: 'https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      category: 'web',
      liveDemo: 'https://cartly-1.onrender.com/',
      github: 'https://github.com/chhavichandna/CartLY',
      featured: true,
      stats: { stars: 52, users: '3.2K', date: '2024' }
    },
    {
      id: 4,
      title: 'Snake Game',
      description: 'Classic retro snake game with modern UI and smooth gameplay',
      longDescription: 'A modern take on the classic Snake game with smooth animations, high score tracking, responsive design, and multiple difficulty levels. Built with vanilla JavaScript and HTML5 Canvas for optimal performance.',
      image: 'https://images.unsplash.com/photo-1642056446459-1f10774273f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25ha2UlMjBnYW1lfGVufDB8fDB8fHww&w=500',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas'],
      category: 'game',
      liveDemo: 'https://snake-game-smoky-six.vercel.app/',
      github: 'https://github.com/chhavichandna/Snake-Game',
      featured: false,
      stats: { stars: 23, users: '890', date: '2024' }
    },
    {
      id: 5,
      title: 'Rock-Paper-Scissors',
      description: 'Interactive rock paper scissors game with animations',
      longDescription: 'An engaging Rock Paper Scissors game with animated gameplay, score tracking, multiple difficulty levels, and beautiful UI. Features smooth animations and responsive design for all devices.',
      image: 'https://plus.unsplash.com/premium_photo-1690479511777-2cfaa9ef8309?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9jayUyMHBhcGVyJTIwc2Npc3NvcnN8ZW58MHx8MHx8fDA%3D&w=500',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      category: 'game',
      liveDemo: 'https://github-rock-paper-scissors-game.vercel.app/',
      github: 'https://github.com/chhavichandna/Rock-Paper-Scissors-Game',
      featured: false,
      stats: { stars: 18, users: '654', date: '2024' }
    },
    {
      id: 6,
      title: 'Tic Tac Toe',
      description: 'Classic tic tac toe game with AI opponent',
      longDescription: 'A beautifully designed Tic Tac Toe game featuring both player vs player and player vs AI modes. Includes win detection, game statistics, smooth animations, and responsive design.',
      image: 'https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGljJTIwdGFjJTIwdG9lfGVufDB8fDB8fHww&w=500',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      category: 'game',
      liveDemo: 'https://tic-tac-toe-7vyl.vercel.app/',
      github: 'https://github.com/chhavichandna/Tic-Tac-Toe-Game',
      featured: false,
      stats: { stars: 15, users: '432', date: '2024' }
    },
    {
      id: 7,
      title: 'Note-Making App',
      description: 'Feature-rich note-taking application with cloud sync',
      longDescription: 'A comprehensive note-taking application with features like rich text editing, categories, search functionality, cloud sync, and collaborative editing. Perfect for organizing thoughts and ideas.',
      image: 'https://plus.unsplash.com/premium_photo-1674675646542-918d5d991621?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm90ZXMlMjBtYWtpbmd8ZW58MHx8MHx8fDA%3D&w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'web',
      liveDemo: 'https://note-making-appmocha-theta.vercel.app/',
      github: 'https://github.com/chhavichandna/Note-Making-Web-Application',
      featured: false,
      stats: { stars: 31, users: '1.2K', date: '2024' }
    },
    {
      id: 8,
      title: "Photographer's Blog",
      description: 'Beautiful photography showcase blog with gallery features',
      longDescription: 'A stunning photography blog platform with gallery features, blog posts, contact forms, responsive design, and image optimization. Perfect for photographers to showcase their work and connect with clients.',
      image: 'https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&w=500',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      category: 'web',
      liveDemo: 'https://photography-s-blog.vercel.app/',
      github: 'https://github.com/chhavichandna/Photographers-Blog',
      featured: false,
      stats: { stars: 27, users: '987', date: '2024' }
    },
    {
      id: 9,
      title: 'Calculator',
      description: 'Apple-inspired calculator with smooth animations',
      longDescription: 'A beautifully designed calculator app inspired by Apple\'s design language. Features smooth animations, responsive design, scientific functions, and all standard calculator operations with a premium feel.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbGN1bGF0b3J8ZW58MHx8MHx8fDA%3D&w=500',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
      category: 'web',
      liveDemo: 'https://apple-calculator-alpha.vercel.app/',
      github: 'https://github.com/chhavichandna/Calculator',
      featured: false,
      stats: { stars: 19, users: '743', date: '2024' }
    },
    {
      id: 10,
      title: 'Amazon Clone',
      description: 'E-commerce platform inspired by Amazon with full functionality',
      longDescription: 'A comprehensive e-commerce clone featuring product listings, shopping cart, user authentication, order management, payment integration, and admin panel. Built to demonstrate full-stack development skills.',
      image: 'https://images.unsplash.com/photo-1648091855145-73b112984e19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D&w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'web',
      liveDemo: 'https://amazon-clone-6tuz.vercel.app/',
      github: 'https://github.com/chhavichandna/Amazon-clone',
      featured: false,
      stats: { stars: 41, users: '2.5K', date: '2024' }
    },
    {
      id: 11,
      title: 'Zomato Clone',
      description: 'Food delivery platform clone with restaurant listings',
      longDescription: 'A food delivery platform clone with restaurant listings, menu browsing, cart functionality, order tracking, user reviews, and payment integration. Features responsive design and modern UI/UX.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Maps API'],
      category: 'web',
      liveDemo: 'https://zomato-clone-anwq.vercel.app/',
      github: 'https://github.com/chhavichandna/Zomato-clone',
      featured: false,
      stats: { stars: 35, users: '1.9K', date: '2024' }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'game', name: 'Games', count: projects.filter(p => p.category === 'game').length },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
            My <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Projects</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Showcasing my latest work in web development, from full-stack applications to interactive games
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              <Star className="text-yellow-500" size={24} />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Featured Projects
              </h3>
              <Star className="text-yellow-500" size={24} />
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-lg cursor-pointer group dark:bg-gray-800 rounded-2xl hover:shadow-2xl dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute flex items-center px-3 py-1 space-x-1 text-sm font-semibold text-white rounded-full top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500">
                    <Star size={14} />
                    <span>Featured</span>
                  </div>
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-800 transition-colors dark:text-white group-hover:text-purple-600">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full dark:bg-purple-900 dark:text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star size={14} />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{project.stats.users}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-purple-600 transition-colors bg-purple-100 rounded-lg dark:bg-purple-900 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe size={16} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 transition-colors bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
              whileHover={{ scale: filter === category.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter size={18} />
              <span>{category.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                filter === category.id 
                  ? 'bg-white/20' 
                  : 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-lg cursor-pointer group dark:bg-gray-800 rounded-2xl hover:shadow-2xl dark:border-gray-700"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute flex items-center px-3 py-1 space-x-1 text-sm font-semibold text-white rounded-full top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500">
                      <Star size={14} />
                      <span>Featured</span>
                    </div>
                  )}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-800 transition-colors dark:text-white group-hover:text-purple-600">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full dark:bg-purple-900 dark:text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star size={14} />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{project.stats.users}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-purple-600 transition-colors bg-purple-100 rounded-lg dark:bg-purple-900 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe size={16} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 transition-colors bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="object-cover w-full h-64 md:h-80"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute p-2 text-white transition-colors rounded-full top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  >
                    <X size={24} />
                  </button>
                  {selectedProject.featured && (
                    <div className="absolute flex items-center px-4 py-2 space-x-2 font-semibold text-white rounded-full top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500">
                      <Star size={16} />
                      <span>Featured Project</span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex flex-col mb-6 md:flex-row md:items-center md:justify-between">
                    <h3 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white md:mb-0">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star size={16} />
                        <span>{selectedProject.stats.stars} stars</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{selectedProject.stats.users} users</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{selectedProject.stats.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="flex items-center mb-3 space-x-2 text-lg font-semibold text-gray-800 dark:text-white">
                      <Code size={20} />
                      <span>Technologies Used</span>
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 font-medium text-purple-600 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 dark:text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:from-purple-600 hover:to-pink-600 hover:scale-105"
                    >
                      <ExternalLink size={20} />
                      <span>View Live Demo</span>
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-gray-700 transition-all duration-300 border-2 border-gray-300 dark:border-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105"
                    >
                      <Github size={20} />
                      <span>View Source Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;