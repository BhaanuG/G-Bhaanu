import { motion } from 'motion/react';
import { Award, CheckCircle, Calendar, Shield } from 'lucide-react';
import { CertificationsBackground } from './CertificationsBackground';

export function Certifications() {
  const certifications = [
    {
      title: 'Oracle AI Vector Search',
      issuer: 'Oracle',
      type: 'Certified Professional',
      category: 'AI & Machine Learning',
      icon: '🎯',
      color: 'from-[#4CC9F0] to-[#0E3A84]',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025',
      issuer: 'Oracle',
      type: 'AI Foundations Associate',
      category: 'Cloud Computing',
      icon: '☁️',
      color: 'from-[#0E3A84] to-[#1E3C72]',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025',
      issuer: 'Oracle',
      type: 'Generative AI Professional',
      category: 'Generative AI',
      icon: '🤖',
      color: 'from-[#1E3C72] to-[#2A5298]',
    },
    {
      title: 'Cambridge English Linguaskill',
      issuer: 'Cambridge Assessment',
      type: ' Common European Framework of Reference (CEFR) Level is "B1" and Average Score is "157"',
      averageScore: '157',
      category: 'Language Proficiency',
      details: [
        'Listening: A2 (131)',
        'Reading: C1 (180+)',
        'Speaking: B1 (147)',
        'Writing: B2 (166)',
      ],
      icon: '🗣️',
      color: 'from-[#4CC9F0] to-[#0E3A84]',
    },
    {
      title: 'Generative AI Mastermind',
      issuer: 'Outskill by Vaibhav Sisinty',
      type: 'Completion Certificate',
      category: 'Professional Development',
      icon: '🧠',
      color: 'from-[#0E3A84] to-[#1E3C72]',
    },
    {
      title: 'Viksit Bharat Young Leaders Dialogue',
      issuer: 'Ministry of Youth Affairs & Sports, Govt. of India',
      type: 'Certificate of Participation',
      category: 'Leadership & Youth Development',
      year: '2025',
      icon: '🇮🇳',
      color: 'from-[#1E3C72] to-[#2A5298]',
    },
    {
      title: 'NSS Service Activity',
      issuer: 'KL University NSS Cell',
      type: 'DAAN UTSAV 2025',
      category: 'Social Service',
      location: 'Shine Ananda Saranalayam',
      certId: 'G BHAANU (2400030952)',
      icon: '🤝',
      color: 'from-[#4CC9F0] to-[#0E3A84]',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 pt-20 relative overflow-hidden">
      <CertificationsBackground />
      
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
            <Award className="text-[#4CC9F0]" size={20} />
            <span className="text-[#4CC9F0]">Certifications</span>
          </motion.div>
          <h2 className="text-white mb-4">Professional Certifications</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in AI, Cloud, and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Animated glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

              <div className="relative h-full p-6 rounded-xl bg-gradient-to-br from-[#1E3C72]/60 to-[#2A5298]/40 border border-[#4CC9F0]/30 backdrop-blur-sm flex flex-col">
                {/* Header with Icon and Category */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index + 0.2, type: 'spring' }}
                    className="text-5xl"
                  >
                    {cert.icon}
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                  >
                    <Shield className="text-[#4CC9F0]" size={20} />
                  </motion.div>
                </div>

                {/* Certificate Title */}
                <h3 className="text-white mb-2">{cert.title}</h3>
                
                {/* Type Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#4CC9F0]/20 text-[#4CC9F0] border border-[#4CC9F0]/30">
                    {cert.type}
                  </span>
                </div>

                {/* Issuer */}
                <p className="text-white/80 mb-2">{cert.issuer}</p>
                
                {/* Category */}
                <p className="text-white/60 mb-4">{cert.category}</p>

                {/* Additional Details */}
                {cert.details && (
                  <div className="space-y-2 mb-4">
                    {cert.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/70">
                        <CheckCircle className="text-[#4CC9F0] flex-shrink-0" size={14} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer Info */}
                <div className="mt-auto pt-4 border-t border-[#4CC9F0]/20 space-y-2">
                  {cert.date && (
                    <div className="flex items-center gap-2 text-white/60">
                      <Calendar size={14} className="text-[#4CC9F0]" />
                      <span>{cert.date}</span>
                    </div>
                  )}
                  
                  {cert.year && (
                    <div className="flex items-center gap-2 text-white/60">
                      <Calendar size={14} className="text-[#4CC9F0]" />
                      <span>{cert.year}</span>
                    </div>
                  )}
                  
                  {cert.location && (
                    <div className="text-white/60">
                      📍 {cert.location}
                    </div>
                  )}
                  
                  {cert.certId && (
                    <div className="text-white/60">
                      ID: {cert.certId}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm text-center">
            <div className="text-3xl text-[#4CC9F0] mb-2">3</div>
            <div className="text-white/70">Oracle Certifications</div>
          </div>
          
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm text-center">
            <div className="text-3xl text-[#4CC9F0] mb-2">C1</div>
            <div className="text-white/70">Reading Level</div>
          </div>
          
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm text-center">
            <div className="text-3xl text-[#4CC9F0] mb-2">7</div>
            <div className="text-white/70">Total Certifications</div>
          </div>
          
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm text-center">
            <div className="text-3xl text-[#4CC9F0] mb-2">2025</div>
            <div className="text-white/70">Active Year</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}