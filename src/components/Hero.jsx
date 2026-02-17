import { motion } from 'framer-motion'
import { ArrowRight, Building2, Workflow, Stethoscope, Briefcase, Monitor } from 'lucide-react'

const stats = [
  { value: '50+', label: 'Businesses Served' },
  { value: '30,000+', label: 'Workflows Automated' },
]

const industries = [
  { icon: Building2, label: 'Finance' },
  { icon: Stethoscope, label: 'Healthcare' },
  { icon: Building2, label: 'Real Estate' },
  { icon: Briefcase, label: 'Consulting' },
  { icon: Monitor, label: 'IT' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center mesh-gradient-hero pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase
                     border border-white/10 bg-white/[0.03] text-blue-300/80 backdrop-blur-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          AI-Powered Business Infrastructure · Pune, India
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mb-8"
        >
          Your Business Has Revenue.{' '}
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-amber-400 bg-clip-text text-transparent">
            What It Needs Now Is a System.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-lg text-white/50 leading-relaxed">
            Most growing businesses hit the same ceiling — not because the team isn't capable, but because the infrastructure wasn't built to scale.
          </p>
          <p className="text-base text-white/40 leading-relaxed mt-4">
            We design and deploy an AI-powered operating layer inside your company. It organizes your knowledge, automates your workflows, converts your leads faster, and gives leadership the clarity to make better decisions — without adding more people, more tools, or more complexity.
          </p>
        </motion.div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          id="audit"
          className="glass-card rounded-3xl p-8 max-w-xl mb-16 border-beam-wrapper"
        >
          <p className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-2">
            Start with a free growth audit.
          </p>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            We'll map your operations, identify what's costing you time and revenue, and show you where intelligent infrastructure can make the biggest impact.
          </p>
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
          <p className="text-xs text-white/30 mt-4">
            15 minutes. No cost. No commitment. Actionable clarity — guaranteed.
          </p>
        </motion.div>

        {/* Proof Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span className="text-sm text-white/40">{stat.label}</span>
            </div>
          ))}
          <div className="w-px h-6 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-3">
            {industries.map((ind) => (
              <span key={ind.label} className="text-xs text-white/30 font-medium">{ind.label}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
