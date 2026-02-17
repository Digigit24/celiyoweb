import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function SectionTag({ children }) {
  const { isDark } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase
                 backdrop-blur-sm mb-6 ${
        isDark
          ? 'border border-white/10 bg-white/[0.03] text-purple-300/80'
          : 'border border-primary-200/60 bg-primary-50/50 text-primary-600'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-purple-400/60' : 'bg-primary-500'}`} />
      {children}
    </motion.div>
  )
}
