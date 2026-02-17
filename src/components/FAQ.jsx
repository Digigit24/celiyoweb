import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionTag from './SectionTag'
import { useTheme } from '../context/ThemeContext'

const faqs = [
  {
    question: '"Our team isn\'t technical."',
    answer: "They don't need to be. Every system we build is designed for the people who use it — not the people who built it. If your team can navigate a smartphone, they can operate this.",
  },
  {
    question: '"We\'re not sure it applies to our industry."',
    answer: "We've deployed this framework across financial services, real estate, healthcare, consulting, education, IT services, and import/export. The architecture adapts. The principles of operational clarity, conversion, and knowledge management are universal.",
  },
  {
    question: '"We can\'t afford a long implementation timeline."',
    answer: 'The core system is live within four weeks. Most clients observe measurable improvements within the first two weeks. This is designed as a sprint, not a consulting engagement.',
  },
  {
    question: '"How does this compare to just hiring more people?"',
    answer: "One system deployment eliminates 30+ hours of manual weekly work and produces results no individual hire can replicate — 24/7 availability, zero follow-up gaps, instant knowledge access, and real-time intelligence. The system doesn't take sick days, doesn't need managing, and improves over time instead of plateauing.",
  },
  {
    question: '"What if it doesn\'t deliver results?"',
    answer: "Begin with the complimentary growth audit. We'll show you exactly where the gaps are and what the system would address. If it's not a fit — we'll tell you. We'd rather build a reputation for honesty than close a deal that shouldn't have been closed.",
  },
]

function FAQItem({ faq, isOpen, onToggle, isDark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-2xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-6 text-left cursor-pointer
                   ${isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-black/[0.02]'} transition-colors duration-200`}
      >
        <span className={`${isDark ? 'text-white/70' : 'text-primary-900/80'} font-semibold text-base pr-4`}>{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className={`w-5 h-5 ${isDark ? 'text-white/30' : 'text-primary-900/40'} shrink-0`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <p className={`${isDark ? 'text-white/40' : 'text-primary-900/50'} text-sm leading-relaxed`}>{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const { isDark } = useTheme()

  return (
    <section className="relative py-32 mesh-gradient-section">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionTag>Common questions, direct answers</SectionTag>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-primary-900'} leading-tight mb-12`}
        >
          Addressing the Practical Concerns.
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
