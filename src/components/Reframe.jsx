import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionTag from './SectionTag'

export default function Reframe() {
  return (
    <section className="relative py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionTag>A different way to think about growth</SectionTag>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-10"
        >
          The Bottleneck Isn't Marketing.{' '}
          <span className="text-white/50">It's the Machinery Behind It.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6 text-white/45 text-lg leading-relaxed"
        >
          <p>
            Most agencies will point to your ads, your website, or your content as the problem. And sometimes, they're partially right.
          </p>
          <p>
            But in our experience working with 50+ businesses, the deeper issue is almost always the same:
          </p>
          <p className="text-white/60 font-medium text-xl">
            The leads are coming in — but the system behind them can't keep up.
          </p>
          <p>
            Follow-ups are inconsistent. Qualification is manual. Conversion depends on individuals, not processes. Knowledge is siloed. Decisions are slow because data is scattered.
          </p>
          <p>
            <span className="text-white/60 font-semibold">The result:</span> revenue that should be growing faster stays flat, and the team works harder without proportional results.
          </p>
          <p>
            This isn't a marketing problem. It's an infrastructure gap. And infrastructure is what we build.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <motion.a
            href="#audit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white
                       bg-gradient-to-r from-blue-600 to-blue-500
                       shadow-[0_0_30px_rgba(59,130,246,0.3)]
                       hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]
                       transition-shadow duration-300 cursor-pointer"
          >
            Request Your Free Growth Audit
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
          <p className="text-xs text-white/25 mt-3">
            We'll identify the specific operational gaps limiting your growth.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
