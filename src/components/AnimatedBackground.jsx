import { useTheme } from '../context/ThemeContext'

export default function AnimatedBackground() {
  const { isDark } = useTheme()

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated blobs — purple + orange from logo */}
      <div className={`absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] animate-blob ${
        isDark ? 'bg-purple-600/[0.07]' : 'bg-purple-500/[0.04]'
      }`} />
      <div className={`absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] animate-blob animation-delay-2000 ${
        isDark ? 'bg-amber-500/[0.05]' : 'bg-amber-400/[0.03]'
      }`} />
      <div className={`absolute bottom-[-10%] left-[30%] w-[550px] h-[550px] rounded-full blur-[120px] animate-blob animation-delay-4000 ${
        isDark ? 'bg-violet-500/[0.06]' : 'bg-violet-400/[0.03]'
      }`} />

      {/* Subtle grid */}
      <div
        className={`absolute inset-0 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}
        style={{
          backgroundImage: isDark
            ? `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  )
}
