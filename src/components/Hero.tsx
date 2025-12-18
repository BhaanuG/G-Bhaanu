import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { SpaceBackground } from './SpaceBackground';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <SpaceBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4CC9F0]/10 border border-[#4CC9F0]/30 mb-8"
            >
              <Sparkles className="text-[#4CC9F0]" size={20} />
              <span className="text-[#4CC9F0]">Welcome to My Portfolio</span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white mb-6 text-6xl sm:text-7xl md:text-8xl"
            style={{ fontWeight: 700 }}
          >
            Hi, I'm <span className="bg-gradient-to-r from-[#4CC9F0] to-[#60d5ff] bg-clip-text text-transparent" style={{ fontWeight: 800 }}>Gali Bhaanu</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/90 mb-8 max-w-3xl mx-auto"
          >
            AI & Cloud Enthusiast | CSE Student | Generative AI Learner
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/70 mb-6 max-w-2xl mx-auto"
          >
            Driven by curiosity for space, powered by code and innovation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white/60 mb-12"
          >
            I'm currently pursuing B.Tech in Computer Science & Engineering (2024–2028) at KL University.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-gradient-to-r from-[#1E3C72] to-[#2A5298] text-white rounded-lg hover:shadow-lg hover:shadow-[#4CC9F0]/20 transition-all cursor-pointer"
            >
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('projects')}
              className="px-8 py-3 border border-[#4CC9F0]/30 text-white rounded-lg hover:bg-[#4CC9F0]/10 transition-all cursor-pointer"
            >
              View Projects
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}