import { motion, useScroll, useTransform } from 'motion/react';

// 📜 CERTIFICATIONS — "Constellation / Achievement Sky"
// Starry sky with constellation lines + Dual Vertical Rocket Scroll Indicators
export function CertificationsBackground() {
  // Define constellation nodes
  const constellationNodes = [
    { x: 20, y: 20 },
    { x: 35, y: 15 },
    { x: 50, y: 25 },
    { x: 65, y: 18 },
    { x: 80, y: 30 },
    { x: 25, y: 60 },
    { x: 45, y: 55 },
    { x: 60, y: 65 },
    { x: 75, y: 58 },
    { x: 30, y: 85 },
    { x: 55, y: 80 },
    { x: 70, y: 88 },
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [5, 6], [6, 7], [7, 8],
    [9, 10], [10, 11],
    [1, 6], [2, 7], [3, 8],
  ];

  // Scroll progress for rocket movement
  const { scrollYProgress } = useScroll();
  
  // Map scroll progress to rocket position (bottom to top) with smoother motion
  const rocketY = useTransform(scrollYProgress, [0, 1], ['90%', '10%']);
  
  // Rotation effect while scrolling for dynamic feel
  const rocketRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, -5, 0]);
  
  // Flame intensity based on scroll
  const flameScale = useTransform(scrollYProgress, 
    [0, 0.1, 0.2, 0.8, 0.9, 1], 
    [1, 1.4, 1.2, 1.2, 1.4, 1]
  );

  // Rocket Component
  const Rocket = ({ side }: { side: 'left' | 'right' }) => (
    <motion.div
      className={`fixed ${side === 'right' ? 'right-2' : 'left-2'} z-50`}
      style={{ 
        top: rocketY,
        translateY: '-50%',
        rotate: side === 'right' ? rocketRotate : useTransform(rocketRotate, (v) => -v),
      }}
    >
      {/* Rocket */}
      <div className="relative">
        {/* Rocket Body */}
        <div className="relative w-16 h-32">
          {/* Nose Cone */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: '24px solid transparent',
              borderRight: '24px solid transparent',
              borderBottom: '32px solid #f8fafc',
              filter: 'drop-shadow(0 0 8px rgba(248, 250, 252, 0.3))',
            }}
          />
          
          {/* Main Body - Upper Section */}
          <div 
            className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-20 rounded-b-md"
            style={{
              background: 'linear-gradient(180deg, #f8fafc, #e2e8f0, #cbd5e1)',
              boxShadow: 'inset -2px 0 4px rgba(0, 0, 0, 0.2), inset 2px 0 4px rgba(255, 255, 255, 0.3)',
            }}
          >
            {/* Body panels detail */}
            <div className="absolute inset-0">
              <div className="absolute left-1/2 top-0 w-px h-full bg-slate-400/30" />
              <div className="absolute left-0 top-1/3 w-full h-px bg-slate-400/30" />
              <div className="absolute left-0 top-2/3 w-full h-px bg-slate-400/30" />
            </div>
          </div>
          
          {/* Window */}
          <div 
            className="absolute top-12 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-500"
            style={{
              boxShadow: '0 0 12px rgba(34, 211, 238, 0.6), inset -2px -2px 4px rgba(0, 0, 0, 0.3)',
              border: '2px solid #94a3b8',
            }}
          />
          
          {/* USA Text Decal */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[8px] font-bold text-slate-600">
            ISRO
          </div>
          
          {/* Left Fin */}
          <div 
            className="absolute bottom-0 left-0 w-0 h-0"
            style={{
              borderTop: '10px solid transparent',
              borderBottom: '12px solid transparent',
              borderRight: '16px solid #64748b',
              filter: 'drop-shadow(-2px 2px 3px rgba(0, 0, 0, 0.3))',
            }}
          />
          
          {/* Right Fin */}
          <div 
            className="absolute bottom-0 right-0 w-0 h-0"
            style={{
              borderTop: '10px solid transparent',
              borderBottom: '12px solid transparent',
              borderLeft: '16px solid #64748b',
              filter: 'drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.3))',
            }}
          />

          {/* Red Stripe Detail */}
          <div 
            className="absolute top-10 left-1/2 -translate-x-1/2 w-12 h-1 bg-red-600"
            style={{
              clipPath: 'polygon(10% 0%, 90% 0%, 85% 100%, 15% 100%)',
            }}
          />
          <div 
            className="absolute top-24 left-1/2 -translate-x-1/2 w-12 h-1 bg-red-600"
            style={{
              clipPath: 'polygon(10% 0%, 90% 0%, 85% 100%, 15% 100%)',
            }}
          />

          {/* Thruster Nozzles */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 flex gap-1 translate-y-2">
            <div 
              className="w-3 h-4 rounded-b-full bg-gradient-to-b from-slate-600 to-slate-800"
              style={{
                boxShadow: 'inset 0 -2px 4px rgba(0, 0, 0, 0.5)',
              }}
            />
            <div 
              className="w-3 h-4 rounded-b-full bg-gradient-to-b from-slate-600 to-slate-800"
              style={{
                boxShadow: 'inset 0 -2px 4px rgba(0, 0, 0, 0.5)',
              }}
            />
          </div>
        </div>

        {/* Animated Flame - Pulses and Flickers */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: '100%',
            marginTop: '8px',
            scale: flameScale,
          }}
        >
          {/* Main Flame Body */}
          <motion.div
            className="relative"
            animate={{
              scaleY: [1, 1.3, 0.9, 1.2, 1],
              scaleX: [1, 0.95, 1.05, 0.98, 1],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Outer Flame - Orange */}
            <div 
              className="relative w-8 h-16"
              style={{
                background: 'linear-gradient(to bottom, #ff6b00, #ff9500, transparent)',
                clipPath: 'polygon(50% 100%, 0% 0%, 20% 0%, 50% 60%, 80% 0%, 100% 0%)',
                filter: 'blur(2px)',
              }}
            />
            
            {/* Middle Flame - Yellow */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-12"
              style={{
                background: 'linear-gradient(to bottom, #ffaa00, #ffdd00, transparent)',
                clipPath: 'polygon(50% 100%, 10% 0%, 30% 0%, 50% 60%, 70% 0%, 90% 0%)',
                filter: 'blur(1px)',
              }}
              animate={{
                opacity: [0.8, 1, 0.7, 1],
              }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
              }}
            />
            
            {/* Core Flame - White/Blue */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-8"
              style={{
                background: 'linear-gradient(to bottom, #ffffff, #6ef3ff, transparent)',
                clipPath: 'polygon(50% 80%, 20% 0%, 50% 40%, 80% 0%)',
              }}
              animate={{
                opacity: [1, 0.8, 1, 0.9],
                scaleY: [1, 1.2, 0.95, 1],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
              }}
            />
          </motion.div>
          
          {/* Flickering Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`flame-particle-${i}`}
              className="absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
              style={{
                top: `${12 + i * 6}px`,
                background: i % 2 === 0 ? '#ff9500' : '#ffdd00',
                boxShadow: `0 0 4px ${i % 2 === 0 ? '#ff9500' : '#ffdd00'}`,
              }}
              animate={{
                opacity: [1, 0.3, 0],
                y: [0, 15],
                x: [0, (Math.random() - 0.5) * 8],
                scale: [1, 0.5],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.08,
              }}
            />
          ))}

          {/* Glow Effect */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full blur-xl"
            style={{
              background: 'radial-gradient(circle, rgba(255, 149, 0, 0.4), transparent)',
            }}
          />
        </motion.div>

        {/* Smoke Trail */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-16 rounded-full blur-md"
          style={{
            top: '100%',
            marginTop: '24px',
            background: 'linear-gradient(to bottom, rgba(156, 163, 175, 0.4), transparent)',
          }}
          animate={{
            opacity: [0.4, 0.2, 0.4],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );

  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000814, #001d3d, #000814)'
      }}
    >
      {/* Constellation connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {connections.map(([start, end], i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${constellationNodes[start].x}%`}
            y1={`${constellationNodes[start].y}%`}
            x2={`${constellationNodes[end].x}%`}
            y2={`${constellationNodes[end].y}%`}
            stroke="url(#goldGradient)"
            strokeWidth="1"
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        <defs>
          <linearGradient id="goldGradient">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Constellation nodes - glowing points */}
      {constellationNodes.map((node, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            background: i % 3 === 0 ? 
              'radial-gradient(circle, #fbbf24, #f59e0b)' : 
              'radial-gradient(circle, #22d3ee, #06b6d4)',
            boxShadow: i % 3 === 0 ? 
              '0 0 15px rgba(251, 191, 36, 0.6)' : 
              '0 0 15px rgba(34, 211, 238, 0.6)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Slow moving sparkles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: i % 5 === 0 ? '3px' : '2px',
            height: i % 5 === 0 ? '3px' : '2px',
            background: i % 2 === 0 ? '#fbbf24' : '#22d3ee',
            boxShadow: i % 2 === 0 ? 
              '0 0 8px rgba(251, 191, 36, 0.8)' : 
              '0 0 8px rgba(34, 211, 238, 0.8)',
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Starry sky background */}
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: i % 8 === 0 ? '2px' : '1px',
            height: i % 8 === 0 ? '2px' : '1px',
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Subtle gold/cyan glow in corners */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #fbbf24, transparent)' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #22d3ee, transparent)' }}
      />

      {/* Dual Vertical Rocket Scroll Indicators */}
      <Rocket side="left" />
      <Rocket side="right" />
    </div>
  );
}