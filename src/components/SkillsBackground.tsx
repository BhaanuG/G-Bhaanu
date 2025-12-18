import { motion } from 'motion/react';

// 🧠 SKILLS — "Energy Core / Neural Space"
// Smooth gradient with pulsing light in center
export function SkillsBackground() {
  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000814, #001d3d, #000814)'
      }}
    >
      {/* Central pulsing energy core */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent)',
          boxShadow: '0 0 100px rgba(168, 85, 247, 0.3)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Soft glowing rings emanating from center */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/10"
          style={{
            width: `${(i + 1) * 150}px`,
            height: `${(i + 1) * 150}px`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Energy pulses radiating outward */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-purple-400/20"
          style={{
            width: '100px',
            height: '100px',
          }}
          animate={{
            scale: [1, 8, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 1,
          }}
        />
      ))}

      {/* Light pulses - radial */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        return (
          <motion.div
            key={`light-${i}`}
            className="absolute left-1/2 top-1/2 w-1 h-32 origin-bottom"
            style={{
              background: 'linear-gradient(to top, rgba(168, 85, 247, 0.3), transparent)',
              transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        );
      })}

      {/* Energy particles floating */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`energy-particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: 'radial-gradient(circle, #a855f7, #7c3aed)',
            boxShadow: '0 0 8px rgba(168, 85, 247, 0.6)',
          }}
          animate={{
            y: [0, Math.random() * -50 - 20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Ambient glow layers */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15), transparent)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08), transparent)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* NO STARS - clean energy field */}
    </div>
  );
}