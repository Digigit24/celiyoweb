import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTag from './SectionTag'

const comparisons = [
  {
    before: 'Leadership spends 8+ hours/week in status meetings',
    after: 'One dashboard. Five minutes. Complete picture.',
  },
  {
    before: 'Lead response takes 2–4 days',
    after: 'Leads receive a response in under 2 minutes',
  },
  {
    before: 'New hires take 3–4 months to become productive',
    after: 'New hires are effective within 2–3 weeks',
  },
  {
    before: 'Knowledge leaves when key employees leave',
    after: 'Knowledge lives permanently in the system',
  },
  {
    before: 'Growth creates proportionally more complexity',
    after: 'Growth compounds on top of stable infrastructure',
  },
  {
    before: 'Decisions are based on intuition and fragmented data',
    after: 'Decisions are informed by real-time intelligence',
  },
  {
    before: 'The founder operates inside the business',
    after: 'The founder leads above the business',
  },
]

export default function Shift() {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <section className="relative py-32">
      {/* Background texture for this section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
        <SectionTag>What actually changes</SectionTag>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6"
        >
          Before and After:{' '}
          <span className="text-white/50">The Operational Difference.</span>
        </motion.h2>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4 mb-12"
        >
          <button
            onClick={() => setShowAfter(false)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
              !showAfter
                ? 'bg-white/10 text-white/70 border border-white/20'
                : 'text-white/30 hover:text-white/50'
            }`}
          >
            Current State
          </button>
          <div
            onClick={() => setShowAfter(!showAfter)}
            className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 ${
              showAfter ? 'bg-blue-600' : 'bg-white/10'
            }`}
          >
            <motion.div
              animate={{ x: showAfter ? 28 : 2 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md"
            />
          </div>
          <button
            onClick={() => setShowAfter(true)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
              showAfter
                ? 'bg-gradient-to-r from-blue-600/20 to-amber-600/10 text-white border border-blue-500/30'
                : 'text-white/30 hover:text-white/50'
            }`}
          >
            After Celiyo
          </button>
        </motion.div>

        {/* Comparison Cards */}
        <div className="space-y-4">
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`glass-card rounded-2xl p-6 transition-all duration-500 ${
                showAfter
                  ? 'border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.06)]'
                  : 'border-white/[0.04]'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`mt-1 w-2 h-2 rounded-full shrink-0 transition-colors duration-500 ${
                  showAfter ? 'bg-blue-400' : 'bg-white/20'
                }`} />
                <AnimatePresence mode="wait">
                  <motion.p
                    key={showAfter ? 'after' : 'before'}
                    initial={{ opacity: 0, x: showAfter ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: showAfter ? -10 : 10 }}
                    transition={{ duration: 0.3 }}
                    className={`text-base transition-colors duration-500 ${
                      showAfter ? 'text-white/80 font-medium' : 'text-white/35'
                    }`}
                  >
                    {showAfter ? item.after : item.before}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
