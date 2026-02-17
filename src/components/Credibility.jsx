import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import SectionTag from './SectionTag'

const testimonials = [
  {
    quote: "I used to spend my Mondays reconstructing what happened the previous week. Now I open a single dashboard and understand more about my business in five minutes than I used to learn across five separate meetings. Celiyo gave us infrastructure we didn't know we were missing.",
    name: 'Rajesh K.',
    title: 'Founder, Real Estate Group',
    location: 'Pune',
  },
  {
    quote: "The knowledge system alone justified the entire engagement. We were facing a hiring surge and our onboarding was broken — new analysts took three months to become useful. After Celiyo built the AI knowledge layer, that dropped to under two weeks. It changed how we think about scaling.",
    name: 'Priya M.',
    title: 'CEO, Healthcare Consulting Firm',
    location: '',
  },
  {
    quote: "What I tell other founders is simple: stop hiring agencies that paint the outside of the building. Find someone who fixes the plumbing. That's what Celiyo does. Revenue is up, operational stress is down, and I'm finally doing the work I actually started this business to do.",
    name: 'Amit S.',
    title: 'Managing Director, Import/Export Business',
    location: '',
  },
]

const metrics = [
  { label: 'Lead response time', before: '4 days', after: '< 2 minutes' },
  { label: 'New hire ramp-up', before: '3–4 months', after: '2–3 weeks' },
  { label: 'Manual hours saved', before: '—', after: '30+ hrs/week' },
  { label: 'Status meeting time', before: '8+ hrs/week', after: '30 minutes' },
]

export default function Credibility() {
  return (
    <section className="relative py-32 mesh-gradient-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTag>Results from businesses like yours</SectionTag>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-16"
        >
          What Our Clients Experience.
        </motion.h2>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card rounded-3xl p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-blue-500/20 mb-6" />
              <p className="text-white/50 text-sm leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-white/80 font-semibold text-sm">{t.name}</p>
                <p className="text-white/30 text-xs mt-0.5">
                  {t.title}{t.location && ` · ${t.location}`}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 lg:p-10"
        >
          <h3 className="text-lg font-bold text-white/80 mb-8">Results Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-xs font-medium text-white/30 uppercase tracking-wider mb-3">
                  {m.label}
                </p>
                <p className="text-white/20 text-sm line-through mb-1">{m.before}</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                  {m.after}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
