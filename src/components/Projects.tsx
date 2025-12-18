import { motion } from 'motion/react';
import { Code2, ExternalLink, Sparkles } from 'lucide-react';
import { ProjectsBackground } from './ProjectsBackground';

export function Projects() {
  const projects = [
    {
      title: 'EduQuest – AI Based Learning Platform',
      link: 'https://edu.manchodu.com/',
      description: 'EduQuest is a modern AI-based learning platform designed with a clean UI and structured content to help students easily navigate subjects and practice quizzes efficiently. The platform focuses on simplicity, usability, and an engaging learning experience, with academic guidance provided by Chandu Sai Pavan Santosh, an educationist.',
      features: [
        'Organized subject modules',
        'Quiz/Practice interface',
        'Fast, responsive UI',
        'Student-friendly layout',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Edu UI Frameworks'],
      icon: '📚',
    },
    {
      title: 'Gesture Controlled 3D Particle System',
      subtitle: 'AI + 3D Project',
      description: 'An interactive 3D particle engine controlled through AI-based hand gesture recognition for an immersive visual experience.',
      features: [
        'Heart, Saturn, Flower, Chaos particle templates',
        'Real-time hand detection',
        'Glow particles & physics',
        'Color customization',
      ],
      tech: ['HTML'],
      icon: '✨',
    },
    {
      title: 'Music Streaming UI Project',
      link: 'https://music.santoshchandu.com/',
      description: 'A modern music streaming interface redesigned with clean UI/UX principles. This project was primarily developed by Chandu Sai Pavan Santosh, with my contribution as a supporting helper in design refinement and implementation.',
      features: [
        'Minimal, stylish music player',
        'Smooth animations',
        'Playlist and track browsing',
        'Mobile-responsive layout',
      ],
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: '🎵',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 pt-20 relative overflow-hidden">
      <ProjectsBackground />
      
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
            <Code2 className="text-[#4CC9F0]" size={20} />
            <span className="text-[#4CC9F0]">Projects</span>
          </motion.div>
          <h2 className="text-white mb-4">My Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4CC9F0] to-[#0E3A84] rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
              
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#1E3C72]/50 to-[#2A5298]/30 border border-[#4CC9F0]/30 backdrop-blur-sm h-full flex flex-col">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * index + 0.2 }}
                  className="text-4xl mb-4"
                >
                  {project.icon}
                </motion.div>

                <h3 className="text-white mb-2">{project.title}</h3>
                {project.subtitle && (
                  <p className="text-[#4CC9F0] mb-3">{project.subtitle}</p>
                )}

                <p className="text-white/70 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-white/90 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-white/60 flex items-start gap-2">
                        <Sparkles className="text-[#4CC9F0] flex-shrink-0 mt-1" size={12} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-[#4CC9F0]/10 border border-[#4CC9F0]/30 text-[#4CC9F0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1E3C72] to-[#2A5298] text-white rounded-lg hover:shadow-lg hover:shadow-[#4CC9F0]/20 transition-all w-full justify-center"
                  >
                    <ExternalLink size={16} />
                    <span>View Live</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}