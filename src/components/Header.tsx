// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';
// import ThemeSwitcher from './ThemeSwitcher';

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { theme } = useTheme();

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Education', href: '#education' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled
//           ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20'
//           : 'bg-transparent'
//       }`}
//     >
//       <nav className="container px-4 py-3 mx-auto sm:px-6">
//         <div className="flex items-center justify-between">
//           {/* Logo with Profile Picture */}
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="flex items-center space-x-3"
//           >
//             <motion.div
//               whileHover={{ rotate: 5 }}
//               className="relative"
//             >
//               <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
//                 <img
//                   src="/image.png"
//                   alt="Chhavi Chandna"
//                   className="object-cover w-full h-full rounded-full"
//                   onError={(e) => {
//                     const target = e.target as HTMLImageElement;
//                     target.style.display = 'none';
//                     const parent = target.parentElement!;
//                     parent.innerHTML = '<div class="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-lg font-bold">CC</div>';
//                   }}
//                 />
//               </div>
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="absolute rounded-full -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-sm"
//               />
//             </motion.div>
//             <div className="text-xl font-bold sm:text-2xl">
//               <span className="text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text">
//                 Chhavi Chandna
//               </span>
//             </div>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="items-center hidden space-x-1 lg:flex">
//             {navItems.map((item, index) => (
//               <motion.button
//                 key={item.name}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 whileHover={{ 
//                   scale: 1.05,
//                   backgroundColor: 'rgba(139, 92, 246, 0.1)'
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => scrollToSection(item.href)}
//                 className="relative px-4 py-2 font-medium text-gray-700 transition-all duration-300 rounded-xl dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
//               >
//                 {item.name}
//                 <motion.div
//                   className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
//                   initial={{ scaleX: 0 }}
//                   whileHover={{ scaleX: 1 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>
//             ))}
//             <div className="ml-4">
//               <ThemeSwitcher />
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex items-center space-x-3 lg:hidden">
//             <ThemeSwitcher />
//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 text-gray-700 transition-colors duration-300 bg-gray-100 rounded-xl dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
//             >
//               <AnimatePresence mode="wait">
//                 {isMenuOpen ? (
//                   <motion.div
//                     key="close"
//                     initial={{ rotate: -90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: 90, opacity: 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <X size={24} />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="menu"
//                     initial={{ rotate: 90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: -90, opacity: 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <Menu size={24} />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0, y: -20 }}
//               animate={{ opacity: 1, height: 'auto', y: 0 }}
//               exit={{ opacity: 0, height: 0, y: -20 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="pt-4 pb-4 mt-4 border-t lg:hidden border-gray-200/20 dark:border-gray-700/20"
//             >
//               <div className="grid grid-cols-2 gap-2">
//                 {navItems.map((item, index) => (
//                   <motion.button
//                     key={item.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1, duration: 0.3 }}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => scrollToSection(item.href)}
//                     className="p-3 font-medium text-left text-gray-700 transition-all duration-300 rounded-xl bg-gray-50 dark:bg-gray-800 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400"
//                   >
//                     {item.name}
//                   </motion.button>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </motion.header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
// import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/10 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container px-4 py-3 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo with Profile Picture */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="w-12 h-12 overflow-hidden border-2 rounded-full shadow-lg border-purple-400/50">
                <img
                  src="/image.png"
                  alt="Chhavi Chandna"
                  className="object-cover object-top w-full h-full scale-125"
                  style={{ objectPosition: '50% 15%' }}
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20"></div>
            </div>
            <div className="text-white">
              <h1 className="text-lg font-bold text-transparent md:text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                Chhavi Chandna
              </h1>
              <p className="hidden text-xs text-purple-200 md:text-sm sm:block">Web Developer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 lg:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative font-medium transition-colors duration-200 text-white/80 hover:text-white group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
            {/* <ThemeSwitcher /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
            {/* <ThemeSwitcher /> */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white transition-colors rounded-lg hover:bg-white/10"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mt-4 border shadow-xl lg:hidden bg-white/10 backdrop-blur-md rounded-xl border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-2 p-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="px-4 py-3 font-medium text-left transition-all duration-200 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;