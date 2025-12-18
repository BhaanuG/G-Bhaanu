import { motion } from 'motion/react';

// 🎓 EDUCATION — "Asteroid Belt Theme"
// Clean space background with animated asteroid belt
export function EducationBackground() {
  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000814, #001d3d, #000814)'
      }}
    >
      {/* Thin circular orbit lines */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`orbit-${i}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
          style={{
            width: `${(i + 1) * 150}px`,
            height: `${(i + 1) * 150}px`,
          }}
        />
      ))}

      {/* Timeline glow dots on orbits */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const radius = 225;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={`dot-${i}`}
            className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-blue-400/40"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              boxShadow: '0 0 10px rgba(96, 165, 250, 0.4)',
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        );
      })}

      {/* Very few stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-px h-px bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Additional orbital ring with slower rotation */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/10"
        style={{ width: '600px', height: '600px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      {/* Asteroid Belt - Multiple rings with many small asteroids */}
      {[...Array(5)].map((_, ringIndex) => {
        const beltRadius = 200 + ringIndex * 70;
        const numAsteroids = 30 + ringIndex * 10;
        
        return (
          <div key={`belt-${ringIndex}`}>
            {/* Belt ring path (faint guide) */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-500/5"
              style={{
                width: `${beltRadius * 2}px`,
                height: `${beltRadius * 2}px`,
              }}
            />
            
            {/* Asteroids moving along the belt */}
            {[...Array(numAsteroids)].map((_, i) => {
              const startAngle = (i / numAsteroids) * 360;
              const asteroidSize = Math.random() * 5 + 2;
              const rotationSpeed = 35 + Math.random() * 25;
              
              return (
                <motion.div
                  key={`asteroid-${ringIndex}-${i}`}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: `${asteroidSize}px`,
                    height: `${asteroidSize}px`,
                  }}
                  initial={{
                    rotate: startAngle,
                  }}
                  animate={{
                    rotate: startAngle + 360,
                  }}
                  transition={{
                    duration: rotationSpeed,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 0,
                  }}
                >
                  <div
                    style={{
                      transform: `translateX(${beltRadius}px) translateY(-50%)`,
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 4,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      {/* Asteroid rock */}
                      <div
                        className="rounded-full"
                        style={{
                          width: `${asteroidSize}px`,
                          height: `${asteroidSize}px`,
                          background: i % 4 === 0
                            ? 'radial-gradient(circle at 30% 30%, #78716c, #57534e, #44403c)'
                            : i % 4 === 1
                            ? 'radial-gradient(circle at 30% 30%, #71717a, #52525b, #3f3f46)'
                            : i % 4 === 2
                            ? 'radial-gradient(circle at 30% 30%, #6b7280, #4b5563, #374151)'
                            : 'radial-gradient(circle at 30% 30%, #a8a29e, #78716c, #57534e)',
                          boxShadow: `0 0 ${asteroidSize}px rgba(100, 116, 139, 0.3), inset -${asteroidSize / 4}px -${asteroidSize / 4}px ${asteroidSize / 2}px rgba(0, 0, 0, 0.5)`,
                          border: '1px solid rgba(120, 113, 108, 0.3)',
                        }}
                      >
                        {/* Crater details for larger asteroids */}
                        {asteroidSize > 4 && (
                          <>
                            <div
                              className="absolute rounded-full bg-black/20"
                              style={{
                                width: `${asteroidSize / 3}px`,
                                height: `${asteroidSize / 3}px`,
                                top: '20%',
                                left: '30%',
                              }}
                            />
                            <div
                              className="absolute rounded-full bg-black/15"
                              style={{
                                width: `${asteroidSize / 4}px`,
                                height: `${asteroidSize / 4}px`,
                                bottom: '25%',
                                right: '20%',
                              }}
                            />
                          </>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        );
      })}

      {/* Light Bulb - Idea/Knowledge symbol */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`bulb-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: `${60 + i * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        >
          <div className="relative w-6 h-8 opacity-15">
            {/* Bulb glass */}
            <div 
              className="w-6 h-6 rounded-full bg-gradient-to-b from-yellow-300 to-yellow-500"
              style={{
                boxShadow: '0 0 15px rgba(253, 224, 71, 0.6)',
              }}
            />
            {/* Bulb base */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-2 bg-gray-400 rounded-b-sm" />
            
            {/* Light rays */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              {[...Array(8)].map((_, j) => (
                <div
                  key={j}
                  className="absolute w-px h-3 bg-yellow-300"
                  style={{
                    transform: `rotate(${j * 45}deg)`,
                    transformOrigin: 'bottom center',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}