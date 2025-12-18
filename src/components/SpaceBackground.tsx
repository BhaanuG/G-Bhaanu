import { motion } from 'motion/react';

export function SpaceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#000814] via-[#001d3d] to-[#000814]">
      {/* Twinkling stars - MORE STARS */}
      {[...Array(250)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: i % 10 === 0 ? '2px' : '1px',
            height: i % 10 === 0 ? '2px' : '1px',
            backgroundColor: i % 5 === 0 ? '#60d5ff' : '#ffffff',
            boxShadow: i % 10 === 0 ? '0 0 4px rgba(96, 213, 255, 0.8)' : '0 0 2px rgba(255, 255, 255, 0.5)',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: Math.random() * 2 + 1.5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Larger stars - MORE PROMINENT */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`bigstar-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: i % 5 === 0 ? '3px' : '2px',
            height: i % 5 === 0 ? '3px' : '2px',
            backgroundColor: i % 3 === 0 ? '#60d5ff' : '#ffffff',
            boxShadow: i % 5 === 0 ? '0 0 6px rgba(96, 213, 255, 0.9)' : '0 0 4px rgba(255, 255, 255, 0.8)',
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Shooting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
          style={{
            width: '100px',
            top: `${Math.random() * 50}%`,
            left: '-100px',
          }}
          animate={{
            left: ['0%', '120%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 8 + Math.random() * 5,
            repeat: Infinity,
            repeatDelay: 20,
          }}
        />
      ))}

      {/* Glowing dots that pulse on/off */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`glow-dot-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: i % 4 === 0 ? '6px' : i % 3 === 0 ? '5px' : '4px',
            height: i % 4 === 0 ? '6px' : i % 3 === 0 ? '5px' : '4px',
            backgroundColor: i % 3 === 0 ? '#4CC9F0' : i % 3 === 1 ? '#60d5ff' : '#a5b4fc',
            boxShadow: `0 0 ${i % 4 === 0 ? '15px' : '10px'} ${i % 3 === 0 ? '#4CC9F0' : i % 3 === 1 ? '#60d5ff' : '#a5b4fc'}`,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.2, 1.2, 0.5],
            boxShadow: [
              `0 0 0px ${i % 3 === 0 ? '#4CC9F0' : i % 3 === 1 ? '#60d5ff' : '#a5b4fc'}`,
              `0 0 ${i % 4 === 0 ? '20px' : '15px'} ${i % 3 === 0 ? '#4CC9F0' : i % 3 === 1 ? '#60d5ff' : '#a5b4fc'}`,
              `0 0 ${i % 4 === 0 ? '20px' : '15px'} ${i % 3 === 0 ? '#4CC9F0' : i % 3 === 1 ? '#60d5ff' : '#a5b4fc'}`,
              `0 0 0px ${i % 3 === 0 ? '#4CC9F0' : i % 3 === 1 ? '#60d5ff' : '#a5b4fc'}`,
            ],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            delay: Math.random() * 4,
            repeatDelay: Math.random() * 3 + 2,
          }}
        />
      ))}

      {/* Meteors traveling left to right */}
      {[...Array(4)].map((_, i) => {
        const startY = 20 + Math.random() * 60;
        const speed = 2.5 + Math.random() * 1.5;
        
        return (
          <motion.div
            key={`meteor-${i}`}
            className="absolute"
            style={{
              top: `${startY}%`,
              left: '-150px',
            }}
            animate={{
              left: ['0%', '110%'],
              opacity: [0, 1, 1, 0.5, 0],
            }}
            transition={{
              duration: speed,
              delay: i * 3.5 + Math.random() * 2,
              repeat: Infinity,
              repeatDelay: 12,
              ease: 'easeIn',
            }}
          >
            {/* Meteor head */}
            <div
              className="w-3 h-3 rounded-full"
              style={{
                background: i % 2 === 0 
                  ? 'radial-gradient(circle, #4CC9F0, #60d5ff)' 
                  : 'radial-gradient(circle, #fbbf24, #f59e0b)',
                boxShadow: `0 0 20px ${i % 2 === 0 ? '#4CC9F0' : '#fbbf24'}`,
              }}
            />
            {/* Meteor trail */}
            <motion.div
              className="absolute top-1/2 left-0 -translate-y-1/2 h-1"
              style={{
                width: '80px',
                background: i % 2 === 0
                  ? 'linear-gradient(to left, #4CC9F0, transparent)'
                  : 'linear-gradient(to left, #fbbf24, transparent)',
                transform: 'translateY(-50%) translateX(-80px)',
                boxShadow: `0 0 8px ${i % 2 === 0 ? '#4CC9F0' : '#fbbf24'}`,
              }}
              animate={{
                opacity: [0, 1, 1, 0.5, 0],
              }}
              transition={{
                duration: speed,
                delay: i * 3.5 + Math.random() * 2,
                repeat: Infinity,
                repeatDelay: 12,
              }}
            />
          </motion.div>
        );
      })}

      {/* Nebula effect - subtle colored clouds using blue-black tones */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#001d3d]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#003566]/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#001d3d]/20 rounded-full blur-3xl" />
    </div>
  );
}