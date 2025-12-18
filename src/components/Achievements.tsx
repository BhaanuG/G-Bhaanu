import { motion } from 'motion/react';
import { Trophy, Star } from 'lucide-react';
import { AchievementsBackground } from './AchievementsBackground';

export function Achievements() {
  const achievements = [
    {
      title: 'Multiple Oracle AI Certifications',
      description: 'Completed multiple Oracle AI certifications during B.Tech first year',
      icon: '☁️',
    },
    {
      title: 'Cambridge Linguaskill Excellence',
      description: 'Scored high in Cambridge Linguaskill (Reading: C1, Writing: B2)',
      icon: '🗣️',
    },
    {
      title: 'National Youth Program Participation',
      description: 'Participated in national youth programs (VBYLD 2026)',
      icon: '🇮🇳',
    },
    {
      title: 'NSS Service Activity',
      description: 'NSS Service Activity Certificate (DAAN UTSAV – 2025)',
      icon: '🤝',
    },
    {
      title: 'Advanced AI + 3D Projects',
      description: 'Built advanced AI + 3D interaction projects using cutting-edge technologies',
      icon: '✨',
    },
    {
      title: 'Early Achiever',
      description: 'Demonstrating exceptional commitment to learning and skill development from first year',
      icon: '🚀',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 pt-20 relative overflow-hidden">
      <AchievementsBackground />
      
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
            <Trophy className="text-[#4CC9F0]" size={20} />
            <span className="text-[#4CC9F0]">Achievements</span>
          </motion.div>
          <h2 className="text-white mb-4">Key Milestones</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                rotateY: 5,
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4CC9F0] to-[#0E3A84] rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
              
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm h-full">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 * index + 0.2,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  className="text-4xl mb-4"
                >
                  {achievement.icon}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
                >
                  <h3 className="text-white mb-3 flex items-start gap-2">
                    <Star className="text-[#4CC9F0] flex-shrink-0 mt-1" size={20} />
                    <span>{achievement.title}</span>
                  </h3>
                  <p className="text-white/70">{achievement.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}