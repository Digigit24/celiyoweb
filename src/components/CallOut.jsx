import { motion } from 'framer-motion'
import SectionTag from './SectionTag'

export default function CallOut() {
  return (
    <section className="relative py-32 mesh-gradient-section">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionTag>Is this relevant to you?</SectionTag>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-10"
        >
          Built for Businesses That Have Outgrown Their Own Systems.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6 text-white/45 text-lg leading-relaxed"
        >
          <p>
            This is for founders and leadership teams running established, revenue-generating businesses — who've started to notice that growth no longer feels like momentum. It feels like weight.
          </p>
          <p>The team is strong. The clients are there. The revenue is real.</p>
          <p>But operationally, things have started to strain.</p>
          <p>
            Follow-ups depend on individual memory. Institutional knowledge lives in a few key people's heads. Data exists in a dozen places but doesn't produce clarity anywhere. And the leadership team spends more time monitoring the business than actually leading it.
          </p>
          <p className="text-white/30 text-base">
            These aren't signs of failure. They're signs that the business has outgrown its infrastructure.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-xl font-bold text-white/80"
        >
          What got you here won't get you there. What gets you there is a{' '}
          <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">system</span>.
        </motion.p>
      </div>
    </section>
  )
}
