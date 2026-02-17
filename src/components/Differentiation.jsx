import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import { useTheme } from '../context/ThemeContext'

export default function Differentiation() {
  const { isDark } = useTheme()

  return (
    <section className="relative py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionTag>What makes Celiyo different</SectionTag>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-primary-900'} leading-tight mb-10`}
        >
          Not an Agency. Not a Vendor.{' '}
          <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
            An Operating System for Your Business.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-8"
        >
          <p className={`${isDark ? 'text-white/40' : 'text-primary-900/50'} text-lg leading-relaxed`}>The distinction matters.</p>

          {/* Three comparison blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={`glass-card rounded-2xl p-6 ${isDark ? 'border-white/[0.04]' : 'border-black/[0.04]'}`}
            >
              <p className={`text-xs font-semibold ${isDark ? 'text-white/20' : 'text-primary-900/30'} uppercase tracking-wider mb-3`}>Agencies</p>
              <p className={`${isDark ? 'text-white/35' : 'text-primary-900/45'} text-sm leading-relaxed`}>
                Generate leads and hand them off. What happens after that is your problem.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className={`glass-card rounded-2xl p-6 ${isDark ? 'border-white/[0.04]' : 'border-black/[0.04]'}`}
            >
              <p className={`text-xs font-semibold ${isDark ? 'text-white/20' : 'text-primary-900/30'} uppercase tracking-wider mb-3`}>Software Vendors</p>
              <p className={`${isDark ? 'text-white/35' : 'text-primary-900/45'} text-sm leading-relaxed`}>
                Sell tools and send documentation. Whether you succeed with them is your problem.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className={`glass-card rounded-2xl p-6 border-primary-500/20 shadow-[0_0_40px_rgba(91,33,182,0.06)]
                         bg-gradient-to-br from-primary-500/[0.04] to-accent-500/[0.02]`}
            >
              <p className={`text-xs font-semibold ${isDark ? 'text-purple-400/60' : 'text-primary-500'} uppercase tracking-wider mb-3`}>Celiyo</p>
              <p className={`${isDark ? 'text-white/60' : 'text-primary-900/70'} text-sm leading-relaxed font-medium`}>
                Builds the complete infrastructure between "a stranger hears about you" and "a client pays you and comes back." Every step — captured, systematized, automated, and made intelligent.
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${isDark ? 'text-white/40' : 'text-primary-900/50'} text-base leading-relaxed max-w-2xl`}
          >
            We sit at the intersection of business strategy, AI implementation, and operational design. That combination is rare — and it's why our clients don't compare us to their previous agency. They compare us to the best operational decision they've ever made.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
