import { motion } from 'framer-motion'
import { Search, Wrench, Cable, TrendingUp } from 'lucide-react'
import SectionTag from './SectionTag'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Growth Audit',
    badge: 'Complimentary',
    description: "A focused 15-minute session where we map your current workflows, identify revenue leaks, and assess where intelligent infrastructure would create the highest impact. You receive clear, actionable insights — regardless of whether we work together.",
  },
  {
    num: '02',
    icon: Wrench,
    title: 'Architecture & Build',
    badge: null,
    description: "We design and construct the complete operating system — CRM, knowledge base, automation layers, funnel architecture, and intelligence dashboards. Everything is custom-built around your workflows, not a template. Your team continues operating normally while we build in parallel.",
  },
  {
    num: '03',
    icon: Cable,
    title: 'Integration & Training',
    badge: null,
    description: "Every system is connected, tested, and validated. Your team receives practical training — not theory, but hands-on sessions tailored to their daily workflows. The transition is seamless because we've engineered it to be.",
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Ongoing Optimization',
    badge: null,
    description: "Once live, the system continuously improves. We refine automations, expand AI capabilities, optimize conversion paths, and reduce friction on an ongoing basis. The infrastructure evolves as your business does.",
  },
]

export default function Process() {
  return (
    <section className="relative py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionTag>How we work</SectionTag>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-16"
        >
          From First Conversation to Live System —{' '}
          <span className="text-white/50">In Four Weeks.</span>
        </motion.h2>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-blue-500/10 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-3xl p-8 md:ml-16 relative group"
                >
                  {/* Step indicator (connected to line) */}
                  <div className="hidden md:flex absolute -left-16 top-8 w-12 h-12 rounded-xl
                                  bg-[#0B1120] border border-white/10 items-center justify-center
                                  group-hover:border-blue-500/30 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-blue-400/50 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="md:hidden w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-blue-400/60" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-mono text-white/20 tracking-widest">{step.num}</span>
                        {step.badge && (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400/70 border border-amber-500/20">
                            {step.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white/90">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-white/40 text-sm leading-relaxed md:pl-14 pl-0">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-white/30 italic max-w-xl mx-auto">
            Zero technical expertise required from your team. Zero operational disruption.
            We manage 100% of the build and integration.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
