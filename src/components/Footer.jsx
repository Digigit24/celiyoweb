import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl font-bold tracking-tight text-white">
                Celiyo<span className="text-blue-400">.</span>
              </span>
              <span className="text-[11px] text-white/20 font-light">by The Digitech Solutions</span>
            </div>
            <p className="text-sm text-white/30">
              AI-Powered Business Infrastructure · Pune, India
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-white/30">
              <MapPin className="w-4 h-4 text-white/20 shrink-0" />
              Pune, Maharashtra
            </div>
            <div className="flex items-center gap-3 text-sm text-white/30">
              <Mail className="w-4 h-4 text-white/20 shrink-0" />
              hello@celiyo.com
            </div>
            <div className="flex items-center gap-3 text-sm text-white/30">
              <Phone className="w-4 h-4 text-white/20 shrink-0" />
              Contact via Growth Audit
            </div>
          </div>

          {/* Tagline */}
          <div className="md:text-right">
            <p className="text-sm text-white/40 italic mb-4">
              Intelligent systems for serious businesses.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-xs text-white/15">
            &copy; {new Date().getFullYear()} Celiyo — The Digitech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
