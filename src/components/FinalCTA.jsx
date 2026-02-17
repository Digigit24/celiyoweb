import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function FinalCTA() {
  const { isDark } = useTheme()

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px]
                        bg-gradient-to-b from-primary-600/[0.08] via-primary-600/[0.03] to-transparent
                        blur-[80px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-primary-900'} leading-tight mb-8`}
        >
          The Right Infrastructure Changes Everything.{' '}
          <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
            Start With a Conversation.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`${isDark ? 'text-white/40' : 'text-primary-900/50'} text-lg leading-relaxed mb-4`}
        >
          The most common thing we hear from new clients is: <em className={`${isDark ? 'text-white/50' : 'text-primary-900/60'}`}>"I wish we'd done this a year ago."</em>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`${isDark ? 'text-white/35' : 'text-primary-900/45'} text-base leading-relaxed mb-12`}
        >
          A free growth audit takes 15 minutes. You'll receive an honest assessment of your operational gaps, your biggest conversion leaks, and where intelligent infrastructure would make the most impact.
          <br /><br />
          No pressure. No obligations. Just clarity.
        </motion.p>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl p-10 border-beam-wrapper inline-block"
        >
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white
                       bg-gradient-to-r from-primary-600 to-primary-500
                       shadow-[0_0_40px_rgba(91,33,182,0.35)]
                       hover:shadow-[0_0_60px_rgba(91,33,182,0.45)]
                       transition-shadow duration-300 cursor-pointer"
          >
            Request Your Free Growth Audit
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
          <p className={`text-xs ${isDark ? 'text-white/25' : 'text-primary-900/35'} mt-4`}>
            15 minutes · No cost · Actionable insights — guaranteed
          </p>
        </motion.div>

        {/* Scarcity note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`text-xs ${isDark ? 'text-white/20' : 'text-primary-900/30'} mt-10 max-w-md mx-auto`}
        >
          We onboard a limited number of clients each month to maintain implementation quality.
          Current availability is visible during the audit booking process.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 glass-card rounded-2xl p-5 inline-block max-w-lg"
        >
          <p className={`text-xs ${isDark ? 'text-white/25' : 'text-primary-900/35'} italic`}>
            Our commitment: if the growth audit doesn't surface at least three insights you hadn't considered before, we'll follow up with a detailed operational report at no charge.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
