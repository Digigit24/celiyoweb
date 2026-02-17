import { motion } from 'framer-motion'

export default function SectionTag({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase
                 border border-white/10 bg-white/[0.03] text-blue-300/80 backdrop-blur-sm mb-6"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
      {children}
    </motion.div>
  )
}
