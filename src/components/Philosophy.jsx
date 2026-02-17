import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import { useTheme } from '../context/ThemeContext'

export default function Philosophy() {
  const { isDark } = useTheme()

  return (
    <section className="relative py-32 mesh-gradient-dark overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full
                        bg-gradient-to-br from-primary-600/[0.04] to-amber-500/[0.02] blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        <SectionTag>What we believe</SectionTag>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-primary-900'} leading-tight mb-12`}
        >
          The Best Businesses Aren't the Ones That Work the Hardest.{' '}
          <span className={`${isDark ? 'text-white/50' : 'text-primary-900/50'}`}>They're the Ones With the Best Systems.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-2 mb-10"
        >
          {[
            'Effort without infrastructure creates burnout.',
            'Growth without systems creates chaos.',
            'Revenue without clarity creates fragility.',
          ].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className={`text-xl ${isDark ? 'text-white/50' : 'text-primary-900/60'} font-light`}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`${isDark ? 'text-white/40' : 'text-primary-900/50'} text-lg leading-relaxed max-w-2xl`}
        >
          We believe every serious business deserves an operating layer that matches its ambition — one that organizes knowledge, automates execution, sharpens conversion, and gives leadership the visibility to lead with confidence instead of anxiety.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`${isDark ? 'text-white/60' : 'text-primary-900/70'} text-lg font-semibold mt-6`}
        >
          That's what we build. That's all we do.
        </motion.p>
      </div>
    </section>
  )
}
