import { motion } from 'motion/react';

// 💻 PROJECTS — "Deep Space Lab / Innovation Zone"
// Very dark space with floating particles and ISS-style space station
export function ProjectsBackground() {
  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000814, #001d3d, #000814)'
      }}
    >
      {/* Subtle grid (space coordinates) */}
      <div className="absolute inset-0 opacity-[0.03]">
        {[...Array(20)].map((_, i) => (
          <div
            key={`grid-v-${i}`}
            className="absolute top-0 h-full w-px bg-cyan-400"
            style={{ left: `${i * 5}%` }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`grid-h-${i}`}
            className="absolute left-0 w-full h-px bg-cyan-400"
            style={{ top: `${i * 5}%` }}
          />
        ))}
      </div>

      {/* Floating code symbols */}
      {[...Array(15)].map((_, i) => {
        const symbols = ['{', '}', '<', '>', '/', '(', ')', '[', ']', ';', ':', '=', '+', '-', '*'];
        const symbol = symbols[i % symbols.length];
        return (
          <motion.div
            key={`code-${i}`}
            className="absolute text-cyan-400/15 font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 16}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {symbol}
          </motion.div>
        );
      })}

      {/* Floating particles - drift effect */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            boxShadow: '0 0 4px rgba(34, 211, 238, 0.3)',
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Larger glowing particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`glow-particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'radial-gradient(circle, #22d3ee, #0891b2)',
            boxShadow: '0 0 12px rgba(34, 211, 238, 0.6)',
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Data stream lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          style={{
            left: '0%',
            top: `${20 + i * 15}%`,
            width: '100%',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Scanline effect */}
      <motion.div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Corner accent glows */}
      <div 
        className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-5"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
      />
      <div 
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-5"
        style={{ background: 'radial-gradient(circle, #0891b2, transparent)' }}
      />

      {/* Minimal stars - very subtle */}
      {[...Array(40)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute w-px h-px bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Realistic ISS-style Space Station Moving in Elliptical Orbit */}
      <motion.div
        className="absolute left-0 top-0"
        animate={{
          x: [
            '-15vw', '5vw', '20vw', '40vw', '60vw', '80vw', '95vw', '105vw', 
            '105vw', '95vw', '80vw', '60vw', '40vw', '20vw', '5vw', '-15vw'
          ],
          y: [
            '50vh', '20vh', '5vh', '-5vh', '0vh', '10vh', '25vh', '45vh', 
            '65vh', '85vh', '95vh', '100vh', '95vh', '80vh', '65vh', '50vh'
          ],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* ISS-inspired Space Station - Enhanced Realistic Design */}
        <div className="relative w-96 h-48 scale-110">
          {/* Main Central Truss (Backbone) */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-3 rounded-sm"
            style={{
              background: 'linear-gradient(180deg, #94a3b8, #64748b, #475569)',
              boxShadow: '0 3px 6px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Truss structural segments */}
            {[...Array(12)].map((_, i) => (
              <div
                key={`truss-segment-${i}`}
                className="absolute w-px h-4 bg-slate-600/50"
                style={{
                  left: `${i * 8.33}%`,
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              />
            ))}
            
            {/* Truss connector nodes */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`connector-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-slate-500"
                style={{
                  left: `${i * 20}%`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 3px rgba(100, 116, 139, 0.6)',
                }}
              />
            ))}
          </div>

          {/* Left Solar Array (Port) - Larger and more detailed */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 -translate-x-28">
            {/* Solar panel support beam */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-slate-500 to-slate-600 rounded-sm" />
            
            <div className="flex gap-0.5">
              {[...Array(10)].map((_, i) => (
                <div
                  key={`left-solar-${i}`}
                  className="relative w-2.5 h-32"
                  style={{
                    background: 'linear-gradient(180deg, #1e3a8a 0%, #1e40af 20%, #2563eb 50%, #1e40af 80%, #1e3a8a 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.4)',
                    boxShadow: 'inset 0 0 4px rgba(147, 197, 253, 0.3), 0 2px 4px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Solar cell grid pattern */}
                  <div className="w-full h-full relative">
                    {[...Array(8)].map((_, j) => (
                      <div
                        key={`h-grid-${j}`}
                        className="absolute w-full h-px bg-blue-900/30"
                        style={{ top: `${(j + 1) * 11.11}%` }}
                      />
                    ))}
                    <div className="absolute left-1/2 top-0 w-px h-full bg-blue-900/30" />
                  </div>
                  
                  {/* Subtle reflective highlights */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-transparent"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 80% 30%, 0 30%)' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Solar Array (Starboard) - Larger and more detailed */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 translate-x-28">
            {/* Solar panel support beam */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-slate-600 to-slate-500 rounded-sm" />
            
            <div className="flex gap-0.5">
              {[...Array(10)].map((_, i) => (
                <div
                  key={`right-solar-${i}`}
                  className="relative w-2.5 h-32"
                  style={{
                    background: 'linear-gradient(180deg, #1e3a8a 0%, #1e40af 20%, #2563eb 50%, #1e40af 80%, #1e3a8a 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.4)',
                    boxShadow: 'inset 0 0 4px rgba(147, 197, 253, 0.3), 0 2px 4px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Solar cell grid pattern */}
                  <div className="w-full h-full relative">
                    {[...Array(8)].map((_, j) => (
                      <div
                        key={`h-grid-${j}`}
                        className="absolute w-full h-px bg-blue-900/30"
                        style={{ top: `${(j + 1) * 11.11}%` }}
                      />
                    ))}
                    <div className="absolute left-1/2 top-0 w-px h-full bg-blue-900/30" />
                  </div>
                  
                  {/* Subtle reflective highlights */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-bl from-blue-200/10 to-transparent"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30%, 20% 30%)' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Central Habitation Modules */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Unity Node (Center) */}
            <div 
              className="relative w-8 h-8 rounded-sm"
              style={{
                background: 'linear-gradient(135deg, #f1f5f9, #cbd5e1, #94a3b8)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(255, 255, 255, 0.3)',
              }}
            >
              {/* Central docking port */}
              <div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #64748b, #475569)',
                  boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.6)',
                }}
              />
            </div>

            {/* Destiny Lab Module (Right) */}
            <div 
              className="absolute left-full top-1/2 -translate-y-1/2 ml-0.5 w-28 h-7 rounded-full"
              style={{
                background: 'linear-gradient(180deg, #f8fafc, #e2e8f0, #cbd5e1, #94a3b8)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4), inset 0 -2px 6px rgba(0, 0, 0, 0.2)',
              }}
            >
              {/* Module windows */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`destiny-window-${i}`}
                  className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400"
                  style={{
                    left: `${15 + i * 17}%`,
                    boxShadow: '0 0 10px rgba(34, 211, 238, 0.9), inset -1px -1px 3px rgba(0, 0, 0, 0.4)',
                    border: '1px solid #94a3b8',
                  }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}

              {/* Module segment lines */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={`destiny-line-${i}`}
                  className="absolute h-full w-px bg-slate-400/40"
                  style={{ left: `${(i + 1) * 20}%` }}
                />
              ))}
              
              {/* USA Flag decal */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[6px] font-bold text-slate-600">
                NASA
              </div>
            </div>

            {/* Zarya Module (Left) */}
            <div 
              className="absolute right-full top-1/2 -translate-y-1/2 mr-0.5 w-24 h-6 rounded-full"
              style={{
                background: 'linear-gradient(180deg, #e2e8f0, #cbd5e1, #94a3b8)',
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              {/* Windows */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`zarya-window-${i}`}
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-400"
                  style={{
                    left: `${25 + i * 25}%`,
                    boxShadow: '0 0 8px rgba(251, 146, 60, 0.9)',
                  }}
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.6,
                  }}
                />
              ))}
              
              {/* Russian flag colors */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-px">
                <div className="w-2 h-px bg-white/40" />
                <div className="w-2 h-px bg-blue-600/40" />
                <div className="w-2 h-px bg-red-600/40" />
              </div>
            </div>

            {/* Columbus Module (Top) */}
            <div 
              className="absolute left-1/2 bottom-full -translate-x-1/2 mb-0.5 w-16 h-5 rounded-full"
              style={{
                background: 'linear-gradient(180deg, #f1f5f9, #cbd5e1, #94a3b8)',
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.4)',
              }}
            >
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300"
                style={{
                  boxShadow: '0 0 6px rgba(103, 232, 249, 0.8)',
                }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              />
            </div>

            {/* Kibo Module (Bottom) */}
            <div 
              className="absolute left-1/2 top-full -translate-x-1/2 mt-0.5 w-16 h-5 rounded-full"
              style={{
                background: 'linear-gradient(180deg, #e2e8f0, #94a3b8)',
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.4)',
              }}
            >
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-red-400"
                style={{
                  boxShadow: '0 0 6px rgba(248, 113, 113, 0.8)',
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
            </div>
          </div>

          {/* Communication Dishes - Enhanced */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`comm-dish-${i}`}
              className="absolute"
              style={{
                left: i === 0 ? '20%' : i === 1 ? '50%' : '80%',
                top: i === 1 ? '-8%' : '10%',
              }}
            >
              {/* Antenna mast */}
              <div className="w-0.5 h-10 bg-gradient-to-b from-slate-400 to-slate-600 mx-auto rounded-sm" />
              {/* Dish */}
              <div 
                className="relative w-4 h-3 rounded-t-full bg-gradient-to-b from-slate-200 to-slate-600 mx-auto"
                style={{
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                }}
              >
                {/* Dish receiver */}
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500"
                  style={{ boxShadow: '0 0 4px rgba(249, 115, 22, 0.8)' }}
                />
              </div>
              {/* Signal waves */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -top-4"
                animate={{
                  scale: [0.5, 2.5],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
              >
                <div className="w-6 h-6 rounded-full border-2 border-cyan-400/50" />
              </motion.div>
            </div>
          ))}

          {/* Radiator Panels - Enhanced */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`radiator-${i}`}
              className="absolute top-1/2"
              style={{
                left: i < 2 ? `${15 + i * 10}%` : `${60 + (i - 2) * 10}%`,
                transform: `translateY(${i % 2 === 0 ? '-140%' : '140%'})`,
              }}
            >
              <div 
                className="w-10 h-4 rounded-sm"
                style={{
                  background: 'linear-gradient(180deg, #475569, #64748b, #475569)',
                  border: '1px solid rgba(148, 163, 184, 0.4)',
                  boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 2px 4px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Radiator panel lines */}
                {[...Array(3)].map((_, j) => (
                  <div
                    key={`rad-panel-${j}`}
                    className="absolute h-full w-px bg-slate-600/60"
                    style={{ left: `${(j + 1) * 25}%` }}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Robotic Arm (Canadarm2) */}
          <motion.div
            className="absolute left-1/2 top-1/2 origin-left"
            style={{
              transform: 'translate(-50%, -50%) translateY(-20px)',
            }}
            animate={{
              rotate: [0, 15, -10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="flex items-center">
              {/* Arm segments */}
              <div className="w-16 h-1 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 rounded-sm">
                {/* Joint */}
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-600"
                  style={{ boxShadow: '0 0 4px rgba(100, 116, 139, 0.6)' }}
                />
              </div>
              {/* End effector */}
              <div 
                className="w-2 h-2 rounded-sm bg-slate-500"
                style={{ boxShadow: '0 0 6px rgba(34, 211, 238, 0.4)' }}
              />
            </div>
          </motion.div>

          {/* Navigation and Position Lights */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`nav-light-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                left: `${15 + i * 14}%`,
                top: i % 2 === 0 ? '15%' : '85%',
                background: i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#22c55e' : '#3b82f6',
                boxShadow: `0 0 8px ${i % 3 === 0 ? '#ef4444' : i % 3 === 1 ? '#22c55e' : '#3b82f6'}`,
              }}
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5 + (i * 0.2),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Enhanced Motion trail with particles */}
        <motion.div
          className="absolute right-full top-1/2 -translate-y-1/2 w-40 h-1 blur-md"
          style={{
            background: 'linear-gradient(to left, rgba(34, 211, 238, 0.5), rgba(59, 130, 246, 0.2), transparent)',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        
        {/* Trailing particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`trail-particle-${i}`}
            className="absolute right-full top-1/2 w-1 h-1 rounded-full bg-cyan-400"
            style={{
              boxShadow: '0 0 6px rgba(34, 211, 238, 0.8)',
            }}
            animate={{
              x: [-10 - i * 15, -50 - i * 15],
              y: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 20],
              opacity: [0.8, 0],
              scale: [1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}