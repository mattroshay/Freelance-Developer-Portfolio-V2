import { motion } from 'motion/react';

export function AnimatedBackground() {
  // Generate random positions and delays for floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 10,
    duration: Math.random() * 20 + 15,
  }));

  const geometricShapes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 150 + 50,
    delay: Math.random() * 5,
    duration: Math.random() * 30 + 20,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, transparent 0%, rgba(255, 122, 0, 0.1) 1px, transparent 1px),
              linear-gradient(0deg, transparent 0%, rgba(255, 122, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-primary/80 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: ['-10vh', '110vh'],
            x: ['-5vw', '5vw', '-5vw'],
            opacity: [0, 1, 0.8, 0.6, 0],
            scale: [0.5, 1, 0.8, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Geometric Shapes */}
      {geometricShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute border border-primary/20 rounded-full"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Pulsing Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/12 to-[rgba(255,151,64,0.12)] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[rgba(204,97,0,0.12)] to-[rgba(255,179,107,0.16)] rounded-full blur-3xl"
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />

      {/* Flowing Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <motion.path
          d="M100,200 Q300,100 500,200 T900,200"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.path
          d="M200,800 Q400,700 600,800 T1000,800"
          stroke="url(#gradient2)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff7a00" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff7a00" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff9b40" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff9b40" stopOpacity="1" />
            <stop offset="100%" stopColor="#ff9b40" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Circuit-like Connection Points */}
      <motion.div
        className="absolute top-1/3 left-1/5 w-2 h-2 rounded-full"
        style={{
          backgroundColor: "#ff7a00",
          boxShadow: "0 0 10px rgba(255, 122, 0, 0.3)",
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [1, 1.5, 1],
          boxShadow: [
            '0 0 10px rgba(255, 122, 0, 0.3)',
            '0 0 20px rgba(255, 122, 0, 0.7)',
            '0 0 10px rgba(255, 122, 0, 0.3)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 rounded-full"
        style={{
          backgroundColor: "#ff9b40",
          boxShadow: "0 0 8px rgba(255, 155, 64, 0.4)",
        }}
        animate={{
          opacity: [0.4, 0.9, 0.4],
          scale: [1, 1.3, 1],
          boxShadow: [
            '0 0 8px rgba(255, 155, 64, 0.4)',
            '0 0 16px rgba(255, 155, 64, 0.8)',
            '0 0 8px rgba(255, 155, 64, 0.4)',
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-2/3 left-1/3 w-1 h-1 rounded-full"
        style={{
          backgroundColor: "#ffb36b",
          boxShadow: "0 0 6px rgba(255, 179, 107, 0.5)",
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.8, 1],
          boxShadow: [
            '0 0 6px rgba(255, 179, 107, 0.5)',
            '0 0 12px rgba(255, 179, 107, 0.9)',
            '0 0 6px rgba(255, 179, 107, 0.5)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* Scanning Line Effect */}
      <motion.div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        animate={{
          top: ['-2px', '100%'],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
