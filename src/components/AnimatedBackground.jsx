import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated blobs mimicking the infinite loop logo */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/[0.07] blur-[120px] animate-blob" />
      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-amber-500/[0.05] blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[30%] w-[550px] h-[550px] rounded-full bg-blue-500/[0.06] blur-[120px] animate-blob animation-delay-4000" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  )
}
