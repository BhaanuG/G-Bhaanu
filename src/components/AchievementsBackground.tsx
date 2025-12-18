import { motion } from 'motion/react';

// 🏆 ACHIEVEMENTS — "Meteor Shower / Shooting Stars Theme"
// Space theme with shooting stars and meteors streaking across the sky with ENHANCED ANIMATIONS
export function AchievementsBackground() {
  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000814, #001d3d, #000814)'
      }}
    >
      {/* Deep space stars background - MORE VISIBLE */}
      {[...Array(200)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: i % 8 === 0 ? '3px' : i % 5 === 0 ? '2px' : '1px',
            height: i % 8 === 0 ? '3px' : i % 5 === 0 ? '2px' : '1px',
            backgroundColor: i % 4 === 0 ? '#fbbf24' : i % 4 === 1 ? '#fef3c7' : i % 4 === 2 ? '#a5b4fc' : '#ffffff',
            boxShadow: i % 8 === 0 ? '0 0 8px rgba(251, 191, 36, 0.8)' : '0 0 4px rgba(255, 255, 255, 0.5)',
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 2 + 1.5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Medium Shooting Stars - MORE VISIBLE */}
      {[...Array(25)].map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const angle = Math.random() * 90 - 45;
        const distance = 60 + Math.random() * 100;
        const duration = 1 + Math.random() * 2;
        const delay = Math.random() * 10;
        
        // Calculate movement vector
        const moveX = Math.cos((angle * Math.PI) / 180) * distance;
        const moveY = Math.sin((angle * Math.PI) / 180) * distance;
        // Calculate trail angle (should point opposite to movement direction)
        const trailAngle = Math.atan2(moveY, moveX) * (180 / Math.PI);
        
        return (
          <motion.div
            key={`small-meteor-${i}`}
            className="absolute"
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, moveX],
              y: [0, moveY],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              repeatDelay: 8,
              ease: 'easeIn',
            }}
          >
            {/* Small meteor head */}
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: 'radial-gradient(circle, #ffffff, #fbbf24)',
                boxShadow: '0 0 8px #fbbf24',
              }}
            />
            {/* Small meteor trail - Fixed rotation */}
            <div
              className="absolute top-1/2 left-1/2 -translate-y-1/2 h-0.5"
              style={{
                width: '30px',
                background: 'linear-gradient(to left, rgba(251, 191, 36, 0.8), transparent)',
                transform: `translateY(-50%) translateX(-100%) rotate(${-trailAngle}deg)`,
                transformOrigin: 'right center',
              }}
            />
          </motion.div>
        );
      })}

      {/* Glowing star particles - achievement sparkle effect - MORE PROMINENT */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: Math.random() * 3,
            repeatDelay: 2,
          }}
        >
          {/* 4-point star - LARGER */}
          <div className="relative w-4 h-4">
            <div 
              className="absolute inset-0 rotate-0"
              style={{
                background: i % 2 === 0 ? '#fbbf24' : '#ffffff',
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                filter: `drop-shadow(0 0 10px ${i % 2 === 0 ? '#fbbf24' : '#ffffff'})`,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* NEW: Pulsing Trophy Glow Effects */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`trophy-glow-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            width: '150px',
            height: '150px',
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(251, 191, 36, 0.15), transparent)'
              : 'radial-gradient(circle, rgba(165, 180, 252, 0.15), transparent)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* NEW: Radial Light Beams from center */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`beam-${i}`}
          className="absolute left-1/2 top-1/2 origin-left"
          style={{
            width: '400px',
            height: '2px',
            background: 'linear-gradient(to right, rgba(251, 191, 36, 0.6), transparent)',
            transform: `rotate(${i * 60}deg)`,
            filter: 'blur(1px)',
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scaleX: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Distant galaxy/nebula glow - BRIGHTER */}
      <motion.div
        className="absolute left-1/4 top-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, #a855f7, transparent)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute right-1/4 bottom-1/3 w-[450px] h-[450px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, #f59e0b, transparent)',
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.2, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      {/* Trophy constellation - connect stars - MORE VISIBLE */}
      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="200" height="200" viewBox="0 0 200 200">
        {/* Trophy outline made of connected stars */}
        <motion.g
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          {/* Trophy cup outline */}
          <line x1="80" y1="60" x2="120" y2="60" stroke="#fbbf24" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 4px #fbbf24)' }} />
          <line x1="120" y1="60" x2="130" y2="100" stroke="#fbbf24" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 4px #fbbf24)' }} />
          <line x1="130" y1="100" x2="110" y2="120" stroke="#fbbf24" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 4px #fbbf24)' }} />
          <line x1="110" y1="120" x2="90" y2="120" stroke="#fbbf24" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 4px #fbbf24)' }} />
          <line x1="90" y1="120" x2="70" y2="100" stroke="#fbbf24" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 4px #fbbf24)' }} />
          <line x1="70" y1="100" x2="80" y2="60" stroke="#fbbf24" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 4px #fbbf24)' }} />
          <line x1="90" y1="120" x2="90" y2="140" stroke="#fbbf24" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 4px #fbbf24)' }} />
          <line x1="110" y1="120" x2="110" y2="140" stroke="#fbbf24" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 4px #fbbf24)' }} />
          <line x1="75" y1="140" x2="125" y2="140" stroke="#fbbf24" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 4px #fbbf24)' }} />
          
          {/* Star points at vertices - LARGER AND MORE ANIMATED */}
          {[[80, 60], [120, 60], [130, 100], [110, 120], [90, 120], [70, 100], [90, 140], [110, 140], [100, 140]].map(([cx, cy], i) => (
            <motion.circle 
              key={i} 
              cx={cx} 
              cy={cy} 
              r="3" 
              fill="#fbbf24" 
              style={{ filter: 'drop-shadow(0 0 8px #fbbf24)' }}
              animate={{
                r: [3, 4, 3],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.g>
      </svg>

      {/* NEW: Orbiting achievement medals */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`medal-${i}`}
          className="absolute left-1/2 top-1/2"
          style={{
            width: `${300 + i * 50}px`,
            height: `${300 + i * 50}px`,
            marginLeft: `${-(150 + i * 25)}px`,
            marginTop: `${-(150 + i * 25)}px`,
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div
            className="absolute right-0 top-1/2 w-4 h-4 rounded-full"
            style={{
              background: i % 3 === 0 
                ? 'radial-gradient(circle, #fbbf24, #f59e0b)'
                : i % 3 === 1
                ? 'radial-gradient(circle, #a5b4fc, #818cf8)'
                : 'radial-gradient(circle, #fef3c7, #fbbf24)',
              boxShadow: `0 0 15px ${i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#a5b4fc' : '#fef3c7'}`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}