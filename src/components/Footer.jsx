import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import CeliyoLogo from './CeliyoLogo'

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer className={`relative py-16 border-t ${isDark ? 'border-white/[0.04]' : 'border-black/[0.04]'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <CeliyoLogo className="w-8 h-4" white={isDark} />
              <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-primary-900'}`}>
                Celiyo<span className="text-primary-500">.</span>
              </span>
              <span className={`text-[11px] ${isDark ? 'text-white/20' : 'text-primary-900/30'} font-light`}>by The Digitech Solutions</span>
            </div>
            <p className={`text-sm ${isDark ? 'text-white/30' : 'text-primary-900/40'}`}>
              AI-Powered Business Infrastructure · Pune, India
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <div className={`flex items-center gap-3 text-sm ${isDark ? 'text-white/30' : 'text-primary-900/40'}`}>
              <MapPin className={`w-4 h-4 ${isDark ? 'text-white/20' : 'text-primary-900/30'} shrink-0`} />
              Pune, Maharashtra
            </div>
            <div className={`flex items-center gap-3 text-sm ${isDark ? 'text-white/30' : 'text-primary-900/40'}`}>
              <Mail className={`w-4 h-4 ${isDark ? 'text-white/20' : 'text-primary-900/30'} shrink-0`} />
              hello@celiyo.com
            </div>
            <div className={`flex items-center gap-3 text-sm ${isDark ? 'text-white/30' : 'text-primary-900/40'}`}>
              <Phone className={`w-4 h-4 ${isDark ? 'text-white/20' : 'text-primary-900/30'} shrink-0`} />
              Contact via Growth Audit
            </div>
          </div>

          {/* Tagline */}
          <div className="md:text-right">
            <p className={`text-sm ${isDark ? 'text-white/40' : 'text-primary-900/50'} italic mb-4`}>
              Intelligent systems for serious businesses.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className={`mt-12 pt-8 border-t ${isDark ? 'border-white/[0.04]' : 'border-black/[0.04]'} text-center`}>
          <p className={`text-xs ${isDark ? 'text-white/15' : 'text-primary-900/25'}`}>
            &copy; {new Date().getFullYear()} Celiyo — The Digitech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
