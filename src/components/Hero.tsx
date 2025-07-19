// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

// const Hero: React.FC = () => {
//   const [displayText, setDisplayText] = useState('');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const fullText = "Hi, I'm Chhavi Chandna";

//   useEffect(() => {
//     if (currentIndex < fullText.length) {
//       const timeout = setTimeout(() => {
//         setDisplayText(prev => prev + fullText[currentIndex]);
//         setCurrentIndex(prev => prev + 1);
//       }, 100);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentIndex, fullText]);

//   const scrollToAbout = () => {
//     const aboutSection = document.querySelector('#about');
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const downloadResume = () => {
//     // Create a dummy PDF download
//     const link = document.createElement('a');
//     link.href = '/resume.pdf';
//     link.download = 'Chhavi_Chandna_Resume.pdf';
//     link.click();
//   };

//   return (
//     <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
//       </div>

//       {/* Floating Elements */}
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-4 h-4 bg-purple-400 rounded-full opacity-20"
//           animate={{
//             y: [0, -100, 0],
//             x: [0, 50, 0],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: 6 + i,
//             repeat: Infinity,
//             delay: i * 0.5,
//           }}
//           style={{
//             left: `${10 + i * 15}%`,
//             top: `${20 + i * 10}%`,
//           }}
//         />
//       ))}

//       <div className="container relative z-10 px-6 mx-auto text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto"
//         >
//           {/* Profile Image */}
//           <motion.div
//             initial={{ scale: 0, rotate: -180 }}
//             animate={{ scale: 1, rotate: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="relative w-32 h-32 mx-auto mb-8"
//           >
//             <div className="w-full h-full p-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400">
//               <img
//                 src="/public/image.png"
//                 alt="Chhavi Chandna"
//                 className="object-cover w-full h-full rounded-full"
//                 onError={(e) => {
//                   // Fallback to a gradient circle if image fails to load
//                   e.currentTarget.style.display = 'none';
//                   e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white text-2xl font-bold">CC</div>';
//                 }}
//               />
//             </div>
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               className="absolute border-2 border-purple-400 rounded-full -inset-4 opacity-30"
//             />
//           </motion.div>

//           {/* Typewriter Text */}
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//             className="mb-4 text-5xl font-bold text-white md:text-7xl"
//           >
//             {displayText}
//             <motion.span
//               animate={{ opacity: [1, 0] }}
//               transition={{ duration: 0.8, repeat: Infinity }}
//               className="text-purple-400"
//             >
//               |
//             </motion.span>
//           </motion.h1>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 2 }}
//             className="mb-6 text-2xl text-purple-300 md:text-3xl"
//           >
//             Web Developer
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 2.5 }}
//             className="max-w-2xl mx-auto mb-8 text-lg text-gray-300"
//           >
//             Passionate about creating elegant, user-friendly applications with modern technologies
//           </motion.p>

//           {/* Action Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 3 }}
//             className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={downloadResume}
//               className="flex items-center px-8 py-3 space-x-2 font-semibold text-white transition-shadow duration-300 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg"
//             >
//               <Download size={20} />
//               <span>Download Resume</span>
//             </motion.button>

//             <div className="flex space-x-4">
//               <motion.a
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 href="https://github.com/chhavichandna"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 text-white transition-colors duration-300 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
//               >
//                 <Github size={24} />
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 href="https://www.linkedin.com/in/chhavichandna/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 text-white transition-colors duration-300 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
//               >
//                 <Linkedin size={24} />
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 href="mailto:chhavichandna@gmail.com"
//                 className="p-3 text-white transition-colors duration-300 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
//               >
//                 <Mail size={24} />
//               </motion.a>
//             </div>
//           </motion.div>

//           {/* Scroll Indicator */}
//           <motion.button
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 4 }}
//             onClick={scrollToAbout}
//             className="transition-colors duration-300 text-white/70 hover:text-white"
//           >
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="flex flex-col items-center"
//             >
//               <span className="mb-2 text-sm">Scroll to explore</span>
//               <ChevronDown size={24} />
//             </motion.div>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { ChevronDown, Github, Linkedin, Mail, Phone, Download, ArrowRight } from 'lucide-react';

// const Hero: React.FC = () => {
//   const scrollToAbout = () => {
//     document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0">
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-white rounded-full opacity-30"
//             animate={{
//               y: [0, -100, 0],
//               x: [0, 50, 0],
//               opacity: [0.3, 0.8, 0.3],
//             }}
//             transition={{
//               duration: 6 + i,
//               repeat: Infinity,
//               delay: i * 0.5,
//             }}
//             style={{
//               left: `${10 + i * 12}%`,
//               top: `${20 + i * 8}%`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="container relative z-10 px-4 mx-auto">
//         <div className="grid items-center min-h-screen gap-12 py-20 lg:grid-cols-2">
//           {/* Left Content */}
//           <motion.div
//             className="order-2 text-center lg:text-left lg:order-1"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//               className="mb-6"
//             >
//               <span className="inline-block px-4 py-2 text-sm font-medium text-purple-300 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
//                 👋 Hello, I'm
//               </span>
//             </motion.div>

//             <motion.h1
//               className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.6 }}
//             >
//               <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
//                 Chhavi Chandna
//               </span>
//             </motion.h1>

//             <motion.div
//               className="mb-8 text-xl text-purple-200 md:text-2xl lg:text-3xl"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//             >
//               <motion.span
//                 className="inline-block"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1, duration: 0.8 }}
//               >
//                 Full Stack Web Developer
//               </motion.span>
//             </motion.div>

//             <motion.p
//               className="max-w-2xl mb-8 text-lg leading-relaxed text-purple-100"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8, duration: 0.6 }}
//             >
//               Passionate about creating elegant, user-friendly applications with modern technologies.
//               Specializing in React, Node.js, and full-stack development with a focus on exceptional user experiences.
//             </motion.p>

//             {/* Stats */}
//             <motion.div
//               className="grid max-w-md grid-cols-3 gap-6 mx-auto mb-8 lg:mx-0"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.6 }}
//             >
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-white">11+</div>
//                 <div className="text-sm text-purple-300">Projects</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-white">2+</div>
//                 <div className="text-sm text-purple-300">Years Exp</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-white">100%</div>
//                 <div className="text-sm text-purple-300">Satisfaction</div>
//               </div>
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div
//               className="flex flex-col justify-center gap-4 mb-8 sm:flex-row lg:justify-start"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2, duration: 0.6 }}
//             >
//               <button
//                 onClick={scrollToAbout}
//                 className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full shadow-lg group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 hover:shadow-xl"
//               >
//                 Learn More
//                 <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
//               </button>
//               <a
//                 href="/resume.pdf"
//                 download
//                 className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 border-2 rounded-full group border-white/30 hover:bg-white/10 hover:scale-105"
//               >
//                 <Download size={20} />
//                 Download Resume
//               </a>
//             </motion.div>

//             {/* Social Links */}
//             <motion.div
//               className="flex flex-wrap justify-center gap-4 lg:justify-start"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.4, duration: 0.6 }}
//             >
//               <a
//                 href="https://github.com/chhavichandna"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-4 py-2 text-white transition-all duration-300 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105"
//               >
//                 <Github size={18} />
//                 <span className="hidden sm:inline">GitHub</span>
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/chhavichandna/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-4 py-2 text-white transition-all duration-300 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105"
//               >
//                 <Linkedin size={18} />
//                 <span className="hidden sm:inline">LinkedIn</span>
//               </a>
//               <a
//                 href="mailto:chhavichandna@gmail.com"
//                 className="flex items-center gap-2 px-4 py-2 text-white transition-all duration-300 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105"
//               >
//                 <Mail size={18} />
//                 <span className="hidden sm:inline">Email</span>
//               </a>
//               <a
//                 href="tel:+917292089318"
//                 className="flex items-center gap-2 px-4 py-2 text-white transition-all duration-300 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105"
//               >
//                 <Phone size={18} />
//                 <span className="hidden sm:inline">Call</span>
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Profile Image */}
//           <motion.div
//             className="flex justify-center order-1 lg:justify-end lg:order-2"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <div className="relative">
//               <motion.div
//                 className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {/* Main Image */}
//                 <div className="relative z-10 w-full h-full overflow-hidden border-4 rounded-full shadow-2xl border-white/20">
//                   <img
//                     src="/image.png"
//                     alt="Chhavi Chandna"
//                     className="object-cover object-center w-full h-full scale-110"
//                   />
//                 </div>
                
//                 {/* Decorative Elements */}
//                 <motion.div
//                   className="absolute w-24 h-24 rounded-full -top-6 -right-6 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20"
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 />
//                 <motion.div
//                   className="absolute w-20 h-20 rounded-full -bottom-6 -left-6 bg-gradient-to-r from-blue-400 to-purple-400 opacity-20"
//                   animate={{ rotate: -360 }}
//                   transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//                 />
                
//                 {/* Floating Skills */}
//                 <motion.div
//                   className="absolute px-3 py-2 text-sm text-white border rounded-full -top-4 left-8 bg-white/10 backdrop-blur-sm border-white/20"
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                 >
//                   React
//                 </motion.div>
//                 <motion.div
//                   className="absolute px-3 py-2 text-sm text-white border rounded-full top-16 -right-8 bg-white/10 backdrop-blur-sm border-white/20"
//                   animate={{ y: [0, 10, 0] }}
//                   transition={{ duration: 4, repeat: Infinity, delay: 1 }}
//                 >
//                   Node.js
//                 </motion.div>
//                 <motion.div
//                   className="absolute px-3 py-2 text-sm text-white border rounded-full -bottom-4 right-12 bg-white/10 backdrop-blur-sm border-white/20"
//                   animate={{ y: [0, -8, 0] }}
//                   transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
//                 >
//                   MongoDB
//                 </motion.div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute transform -translate-x-1/2 cursor-pointer bottom-8 left-1/2"
//         onClick={scrollToAbout}
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <div className="flex flex-col items-center gap-2">
//           <span className="text-sm text-white/60">Scroll Down</span>
//           <ChevronDown className="transition-colors text-white/60 hover:text-white" size={32} />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;









import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone, Download, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden lg:px-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
</div>

      {/* Floating Dots */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            animate={{ y: [0, -100, 0], x: [0, 50, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.5 }}
            style={{ left: `${10 + i * 12}%`, top: `${20 + i * 8}%` }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center min-h-screen gap-12 py-20 lg:grid-cols-2">
          {/* LEFT Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 shadow-lg bg-white/5 backdrop-blur-sm rounded-2xl">
              <motion.div className="mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <span className="inline-block px-4 py-2 text-sm font-medium text-purple-300 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
                  👋 Hello, I'm
                </span>
              </motion.div>

              <motion.h1
                className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
                  Chhavi Chandna
                </span>
              </motion.h1>

              <motion.div className="mb-6 text-xl text-purple-200 md:text-2xl lg:text-3xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                Full Stack Web Developer
              </motion.div>

              <motion.p
                className="max-w-2xl mb-8 text-lg leading-relaxed text-purple-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Passionate about creating elegant, user-friendly applications with modern technologies. Specializing in React, Node.js, and full-stack development with a focus on exceptional user experiences.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="grid max-w-md grid-cols-3 gap-6 mx-auto mb-8 lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                {[
                  { label: 'Projects', value: '11+' },
                  { label: 'Years Exp', value: '2+' },
                  { label: 'Satisfaction', value: '100%' },
                ].map((stat, i) => (
                  <div className="text-center" key={i}>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-purple-300">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col justify-center gap-4 mb-8 sm:flex-row lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <button
                  onClick={scrollToAbout}
                  className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full shadow-lg group bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105"
                >
                  Learn More
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 border-2 rounded-full group border-white/30 hover:bg-white/10 hover:scale-105"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                className="flex flex-wrap justify-center gap-4 lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                {[
                  { icon: <Github size={18} />, label: 'GitHub', link: 'https://github.com/chhavichandna' },
                  { icon: <Linkedin size={18} />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/chhavichandna/' },
                  { icon: <Mail size={18} />, label: 'Email', link: 'mailto:chhavichandna@gmail.com' },
                  { icon: <Phone size={18} />, label: 'Call', link: 'tel:+917292089318' },
                ].map(({ icon, label, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-white transition-all duration-300 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105"
                  >
                    {icon}
                    <span className="hidden sm:inline">{label}</span>
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT Image */}
          <motion.div
            className="flex justify-center order-1 lg:justify-end lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <div className="relative z-10 w-full h-full overflow-hidden border-4 rounded-full shadow-2xl border-white/20">
                  <img
                    src="/image.png"
                    alt="Chhavi Chandna"
                    className="object-cover object-[top] w-full h-full scale-110"
                  />
                </div>

                {/* Animated Blobs */}
                <motion.div className="absolute w-24 h-24 rounded-full -top-6 -right-6 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
                <motion.div className="absolute w-20 h-20 rounded-full -bottom-6 -left-6 bg-gradient-to-r from-blue-400 to-purple-400 opacity-20" animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} />

                {/* Skills */}
                <motion.div className="absolute px-3 py-2 text-sm text-white border rounded-full -top-4 left-8 bg-white/10 backdrop-blur-sm border-white/20" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                  React
                </motion.div>
                <motion.div className="absolute px-3 py-2 text-sm text-white border rounded-full top-16 -right-8 bg-white/10 backdrop-blur-sm border-white/20" animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
                  Node.js
                </motion.div>
                <motion.div className="absolute px-3 py-2 text-sm text-white border rounded-full -bottom-4 right-12 bg-white/10 backdrop-blur-sm border-white/20" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}>
                  MongoDB
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down */}
      <motion.div
        className="absolute transform -translate-x-1/2 cursor-pointer bottom-8 left-1/2"
        // onClick={scrollToAbout}
          onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/60">Scroll Down</span>
          <ChevronDown className="transition-colors text-white/60 hover:text-white" size={32} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;



