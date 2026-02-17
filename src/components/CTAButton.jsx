import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTAButton({ children, variant = 'primary', className = '' }) {
  if (variant === 'primary') {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white
                   bg-gradient-to-r from-blue-600 to-blue-500
                   shadow-[0_0_30px_rgba(59,130,246,0.3)]
                   hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]
                   transition-shadow duration-300 cursor-pointer ${className}`}
      >
        {children}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </motion.button>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold
                 glass-card text-white/90 hover:text-white
                 hover:border-white/20 transition-all duration-300 cursor-pointer ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.button>
  )
}
