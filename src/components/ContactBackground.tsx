import { motion } from 'motion/react';

// 📞 CONTACT — "Mission Control / Earth Base"
// Calm, grounded, clear with grid lines and radar pulse
export function ContactBackground() {
  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000814, #001d3d, #000814)'
      }}
    >
      {/* Clean grid lines - mission control style */}
      <div className="absolute inset-0 opacity-[0.08]">
        {[...Array(12)].map((_, i) => (
          <div
            key={`grid-v-${i}`}
            className="absolute top-0 h-full w-px bg-green-400"
            style={{ left: `${(i + 1) * 8.33}%` }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`grid-h-${i}`}
            className="absolute left-0 w-full h-px bg-green-400"
            style={{ top: `${(i + 1) * 8.33}%` }}
          />
        ))}
      </div>

      {/* Radar pulse - center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Radar circles */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`radar-circle-${i}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-400/20"
            style={{
              width: `${(i + 1) * 100}px`,
              height: `${(i + 1) * 100}px`,
            }}
          />
        ))}

        {/* Rotating radar sweep */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-48 h-px origin-left"
          style={{
            background: 'linear-gradient(to right, rgba(74, 222, 128, 0.6), transparent)',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Center radar dot */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-green-400"
          style={{
            boxShadow: '0 0 15px rgba(74, 222, 128, 0.8)',
          }}
        />
      </div>

      {/* Pulsing radar wave */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-green-400/30"
          style={{
            width: '80px',
            height: '80px',
          }}
          animate={{
            scale: [1, 5, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.3,
          }}
        />
      ))}

      {/* Clean minimal icons */}
      {[...Array(4)].map((_, i) => {
        const icons = ['📡', '🛰️', '📨', '🌐'];
        return (
          <motion.div
            key={`icon-${i}`}
            className="absolute text-4xl opacity-[0.04]"
            style={{
              left: `${20 + i * 20}%`,
              top: `${25 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          >
            {icons[i]}
          </motion.div>
        );
      })}

      {/* Signal indicators - corner markers */}
      {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position, i) => {
        const positionStyles = {
          'top-left': { top: '20px', left: '20px' },
          'top-right': { top: '20px', right: '20px' },
          'bottom-left': { bottom: '20px', left: '20px' },
          'bottom-right': { bottom: '20px', right: '20px' },
        };

        return (
          <motion.div
            key={position}
            className="absolute"
            style={positionStyles[position]}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <div className="w-8 h-8 border-t-2 border-l-2 border-green-400/30" 
                 style={
                   position === 'top-right' ? { borderLeft: 'none', borderRight: '2px solid rgba(74, 222, 128, 0.3)' } :
                   position === 'bottom-left' ? { borderTop: 'none', borderBottom: '2px solid rgba(74, 222, 128, 0.3)' } :
                   position === 'bottom-right' ? { borderTop: 'none', borderLeft: 'none', borderBottom: '2px solid rgba(74, 222, 128, 0.3)', borderRight: '2px solid rgba(74, 222, 128, 0.3)' } :
                   {}
                 }
            />
          </motion.div>
        );
      })}

      {/* Minimal stars - almost none */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-px h-px bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Data transmission lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`transmission-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-green-400/15 to-transparent"
          style={{
            left: '0%',
            top: `${30 + i * 20}%`,
            width: '100%',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.2,
          }}
        />
      ))}

      {/* Bottom gradient - grounded feel */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1/3 opacity-30"
        style={{
          background: 'linear-gradient(to top, rgba(5, 46, 46, 0.5), transparent)',
        }}
      />

      {/* Subtle Earth-tone glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, #059669, transparent)',
        }}
      />
    </div>
  );
}