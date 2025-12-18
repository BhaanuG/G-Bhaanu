import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { EducationBackground } from './EducationBackground';

export function Education() {
  const educationData = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering',
      institution: 'KL University',
      location: 'Vaddeswaram',
      period: '2024 – 2028',
      status: 'In Progress',
      icon: '🎓',
      color: 'from-[#4CC9F0] to-[#0E3A84]',
    },
    {
      degree: 'Intermediate (MPC)',
      field: 'Mathematics, Physics, Chemistry',
      institution: 'MGM Jr College',
      location: 'Srikalahasti',
      period: '2022 – 2024',
      score: '782/1000',
      icon: '📚',
      color: 'from-[#0E3A84] to-[#1E3C72]',
    },
    {
      degree: 'SSC (10th Class)',
      field: 'Secondary School Certificate',
      institution: 'Z.P. High School',
      location: 'Urandur',
      period: 'Completed in 2022',
      score: '412/600',
      icon: '📖',
      color: 'from-[#1E3C72] to-[#2A5298]',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 pt-20 relative overflow-hidden">
      <EducationBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4CC9F0]/10 border border-[#4CC9F0]/30 mb-4"
          >
            <GraduationCap className="text-[#4CC9F0]" size={20} />
            <span className="text-[#4CC9F0]">Education</span>
          </motion.div>
          <h2 className="text-white mb-4">Academic Journey</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            My educational path from school to university, building a strong foundation in technology and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index + 0.2, type: 'spring' }}
                  className="text-6xl mb-6 text-center"
                >
                  {edu.icon}
                </motion.div>

                {/* Status Badge */}
                {edu.status && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 * index + 0.4 }}
                    className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#4CC9F0]/20 text-[#4CC9F0] border border-[#4CC9F0]/30"
                  >
                    {edu.status}
                  </motion.div>
                )}

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-white mb-2">{edu.degree}</h3>
                  <p className="text-[#4CC9F0] mb-4">{edu.field}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-white/70">
                      <GraduationCap size={18} className="text-[#4CC9F0]" />
                      <span>{edu.institution}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white/70">
                      <MapPin size={18} className="text-[#4CC9F0]" />
                      <span>{edu.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white/70">
                      <Calendar size={18} className="text-[#4CC9F0]" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                {/* Score Badge */}
                {edu.score && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index + 0.6 }}
                    className="mt-auto pt-4 border-t border-[#4CC9F0]/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/70">
                        <Award size={18} className="text-[#4CC9F0]" />
                        <span>Score</span>
                      </div>
                      <span className="text-white">{edu.score}</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}