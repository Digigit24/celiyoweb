import { motion } from 'framer-motion'
import { Database, Brain, Route, Phone, BarChart3, Cog } from 'lucide-react'
import SectionTag from './SectionTag'

const layers = [
  {
    num: '01',
    icon: Database,
    title: 'Structured CRM & Intelligent Pipeline',
    description: 'Every lead captured. Every deal visible. Every follow-up automated. Your sales team opens one view and knows exactly where every opportunity stands — who to call, what to send, and which deals need immediate attention.',
    detail: 'No spreadsheets. No guesswork. No leads falling through the cracks.',
    outcome: 'Complete pipeline visibility and zero missed follow-ups.',
  },
  {
    num: '02',
    icon: Brain,
    title: 'AI-Powered Knowledge System',
    description: "Your company's collective knowledge — SOPs, pricing logic, client protocols, training materials, operational processes — organized into a single AI-powered system anyone on your team can query in natural language.",
    detail: 'A new hire asks a question on their second day and gets the same quality answer a 5-year veteran would give.',
    outcome: 'Institutional knowledge that scales with the team, not against it.',
  },
  {
    num: '03',
    icon: Route,
    title: 'Conversion & Client Journey Automation',
    description: "Every prospect receives the right communication at the right moment — based on their behavior, not your team's bandwidth. AI-driven lead qualification, automated nurturing sequences, and intelligent journey design.",
    detail: 'Conversion happens consistently, not accidentally.',
    outcome: 'Higher conversion rates with lower operational effort.',
  },
  {
    num: '04',
    icon: Phone,
    title: 'Voice AI for Operational Communication',
    description: "AI handles the repetitive communication that consumes your team's hours — lead qualification calls, appointment confirmations, follow-up reminders, and routine client interactions.",
    detail: 'Response times drop from days to minutes. Availability extends to 24/7.',
    outcome: 'Faster response, broader reach, and no additional headcount.',
  },
  {
    num: '05',
    icon: BarChart3,
    title: 'Executive Intelligence & AI Dashboards',
    description: 'Real-time visibility into everything that matters — pipeline health, conversion bottlenecks, deal risk, team performance, revenue forecasting.',
    detail: 'AI-generated summaries and alerts replace the meetings, spreadsheets, and manual check-ins that currently consume leadership time.',
    outcome: 'Decisions made in minutes, informed by data, not status meetings.',
  },
  {
    num: '06',
    icon: Cog,
    title: 'Workflow Automation Engine',
    description: 'Lead routing, task assignment, lifecycle actions, internal notifications, approval flows — systematically automated.',
    detail: 'The repetitive operational work that currently occupies 30+ hours per week runs silently in the background, consistently and without error.',
    outcome: 'Operational consistency at scale, without micromanagement.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Layers() {
  return (
    <section className="relative py-32 mesh-gradient-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionTag>What we build inside your business</SectionTag>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6"
          >
            The AI Business Operating System —{' '}
            <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              Six Integrated Layers.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/40 text-lg leading-relaxed"
          >
            We don't implement isolated tools. We build a unified operating layer — six interconnected systems that work together to capture leads, convert clients, organize knowledge, automate operations, and surface the intelligence leadership needs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/30 text-sm mt-3"
          >
            Every layer is custom-built for your business. Nothing is templated.
          </motion.p>
        </div>

        {/* Layer Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {layers.map((layer) => {
            const Icon = layer.icon
            return (
              <motion.div
                key={layer.num}
                variants={cardVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
                className="glass-card glass-card-hover rounded-3xl p-8 border-beam-wrapper
                           transition-all duration-300 cursor-default group"
              >
                {/* Layer number & icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-white/20 tracking-widest uppercase">
                    Layer {layer.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center
                                  group-hover:border-blue-500/30 group-hover:bg-blue-500/[0.08] transition-all duration-300">
                    <Icon className="w-5 h-5 text-blue-400/60 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white/90 mb-3 group-hover:text-white transition-colors">
                  {layer.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/35 leading-relaxed mb-3">
                  {layer.description}
                </p>

                <p className="text-sm text-white/25 leading-relaxed mb-5 italic">
                  {layer.detail}
                </p>

                {/* Outcome */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400/50 mb-1">Outcome</p>
                  <p className="text-sm text-white/50 font-medium">{layer.outcome}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-card">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-amber-400" />
            <p className="text-sm text-white/50 font-medium">
              All six layers. Custom-built. Fully integrated.{' '}
              <span className="text-white/70">Deployed within four weeks.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
