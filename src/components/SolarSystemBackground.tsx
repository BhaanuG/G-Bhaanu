import { motion } from 'motion/react';

export function SolarSystemBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#000814] via-[#001d3d] to-[#000814]">
      {/* Stars */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
          animate={{
            opacity: [null, Math.random() * 0.3 + 0.2, null],
            scale: [1, Math.random() * 0.5 + 0.8, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Central Sun */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 40px rgba(251, 191, 36, 0.5)',
              '0 0 60px rgba(251, 191, 36, 0.8)',
              '0 0 40px rgba(251, 191, 36, 0.5)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          {/* Sun glow */}
          <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-30 blur-xl" />
        </motion.div>

        {/* Orbit 1 - Small fast planet */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{ width: 240, height: 240, marginLeft: -120, marginTop: -120 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute right-0 top-1/2 w-3 h-3 rounded-full bg-blue-400 -mt-1.5 shadow-lg shadow-blue-400/50" />
          {/* Orbit ring */}
          <div className="absolute inset-0 rounded-full border border-white/10" />
        </motion.div>

        {/* Orbit 2 - Medium planet with ring */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{ width: 400, height: 400, marginLeft: -200, marginTop: -200 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute right-0 top-1/2 -mt-2.5">
            <div className="relative w-5 h-5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-purple-400/50">
              {/* Planet ring */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-2 border border-purple-300/30 rounded-full" />
            </div>
          </div>
          {/* Orbit ring */}
          <div className="absolute inset-0 rounded-full border border-white/10" />
        </motion.div>

        {/* Orbit 3 - Large slow planet */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{ width: 560, height: 560, marginLeft: -280, marginTop: -280 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute right-0 top-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 -mt-2 shadow-lg shadow-green-400/50" />
          {/* Orbit ring */}
          <div className="absolute inset-0 rounded-full border border-white/10" />
        </motion.div>

        {/* Orbit 4 - Red planet */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{ width: 720, height: 720, marginLeft: -360, marginTop: -360 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute right-0 top-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-red-500 to-orange-600 -mt-1.5 shadow-lg shadow-red-500/50" />
          {/* Orbit ring */}
          <div className="absolute inset-0 rounded-full border border-white/10" />
        </motion.div>

        {/* Orbit 5 - Outer ice planet */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{ width: 880, height: 880, marginLeft: -440, marginTop: -440 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute right-0 top-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-300 to-blue-300 -mt-1.5 shadow-lg shadow-cyan-300/50" />
          {/* Orbit ring */}
          <div className="absolute inset-0 rounded-full border border-white/10" />
        </motion.div>

        {/* Comet */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{ width: 1200, height: 1200, marginLeft: -600, marginTop: -600 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute right-0 top-1/2 -mt-1">
            <div className="relative w-2 h-2 rounded-full bg-white shadow-lg shadow-white/50">
              {/* Comet tail */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-white/80 to-transparent -translate-x-12" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}