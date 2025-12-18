import { motion } from 'motion/react';
import { User, MapPin } from 'lucide-react';
import { SolarSystemBackground } from './SolarSystemBackground';

export function About() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 pt-20 relative overflow-hidden">
      <SolarSystemBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4CC9F0]/10 border border-[#4CC9F0]/30 mb-4"
          >
            <User className="text-[#4CC9F0]" size={20} />
            <span className="text-[#4CC9F0]">About Me</span>
          </motion.div>
          <h2 className="text-white mb-4">Get to Know Me</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm">
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="text-[#4CC9F0] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-white mb-2">Location</h3>
                  <p className="text-white/70">Srikalahasti, Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="space-y-6 text-white/80 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-white/80 mb-6 leading-relaxed"
                >
                  I am <span className="text-[#4CC9F0]">Gali Bhaanu</span> (my nickname is <span className="text-[#4CC9F0]">Sai</span>), a Computer Science and Engineering student at KL University, deeply fascinated by space exploration and futuristic technologies. I am inspired by how computing, artificial intelligence, and cloud systems power modern space missions—from satellite data processing to autonomous exploration systems.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-white/80 mb-6 leading-relaxed"
                >
                  I enjoy learning how AI, data systems, and simulations can be applied to solve complex problems in space science. Alongside my academic journey, I build projects that reflect my curiosity for innovation, interactivity, and intelligent systems.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-white/80 leading-relaxed"
                >
                  My long-term goal is to contribute to technologies that support space research, satellite systems, and next-generation exploration.
                </motion.p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm text-center"
              >
                <div className="text-4xl mb-3">🎓</div>
                <div className="text-white/90 mb-1">B.Tech CSE</div>
                <div className="text-white/60">KL University</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm text-center"
              >
                <div className="text-4xl mb-3">⚡</div>
                <div className="text-white/90 mb-1">AI Enthusiast</div>
                <div className="text-white/60">Gen AI Focus</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm text-center"
              >
                <div className="text-4xl mb-3">☁️</div>
                <div className="text-white/90 mb-1">Cloud Learner</div>
                <div className="text-white/60">Oracle Certified</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm text-center"
              >
                <div className="text-4xl mb-3">🌐</div>
                <div className="text-white/90 mb-1">Web Developer</div>
                <div className="text-white/60">Frontend Developer</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}