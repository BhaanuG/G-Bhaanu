import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export function Navigation({ activePage, setActivePage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A3F]/90 backdrop-blur-lg border-b border-[#4CC9F0]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer flex items-center gap-3"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#4CC9F0] to-[#0E3A84] flex items-center justify-center">
              <span className="text-white">GB</span>
            </div>
            <span className="text-white text-xl">Gali Bhaanu</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activePage === item.id
                    ? 'bg-[#4CC9F0]/20 text-[#4CC9F0]'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                  activePage === item.id
                    ? 'bg-[#4CC9F0]/20 text-[#4CC9F0]'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}