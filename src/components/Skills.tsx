import { motion } from 'motion/react';
import { Brain, Cloud, Code, MessageSquare } from 'lucide-react';
import { SkillsBackground } from './SkillsBackground';

export function Skills() {
  const skillCategories = [
    {
      title: 'Generative AI',
      icon: Brain,
      skills: [
        { name: 'AI Prompt Engineering', level: 90 },
        { name: 'Oracle AI Vector Search', level: 75 },
        { name: 'Generative AI Concepts', level: 88 },
      ],
      color: '#4CC9F0',
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: [
        { name: 'Oracle Cloud Infrastructure', level: 65 },
        { name: 'Cloud Services', level: 70 },
        { name: 'AI Foundations', level: 87 },
      ],
      color: '#0E3A84',
    },
    {
      title: 'Programming & Tools',
      icon: Code,
      skills: [
        { name: 'Python', level: 75 },
        { name: 'JavaScript', level: 78 },
        { name: 'Web Development', level: 60 },
      ],
      color: '#4CC9F0',
    },
    {
      title: 'Soft Skills',
      icon: MessageSquare,
      skills: [
        { name: 'Communication (CEFR B1)', level: 85 },
        { name: 'Leadership & Volunteering', level: 95 },
        { name: 'Problem Solving', level: 88 },
      ],
      color: '#0E3A84',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 pt-20 relative overflow-hidden">
      <SkillsBackground />
      
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
            <Brain className="text-[#4CC9F0]" size={20} />
            <span className="text-[#4CC9F0]">Skills</span>
          </motion.div>
          <h2 className="text-white mb-4">Technical Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 * categoryIndex }}
              className="p-6 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 * categoryIndex + 0.2 }}
                >
                  <category.icon className="text-[#4CC9F0]" size={28} />
                </motion.div>
                <h3 className="text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-[#4CC9F0]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#0A1A3F]/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.2 * categoryIndex + 0.1 * skillIndex + 0.4,
                          ease: 'easeOut',
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${category.color}, #1E3C72)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-6 rounded-xl bg-gradient-to-r from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm">
            <p className="text-white/80">
              🚀 Continuously learning and expanding my skillset in AI, Cloud, and Web Technologies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}