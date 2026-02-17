import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import CeliyoLogo from './CeliyoLogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? 'bg-[#0B0A1A]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
              : 'bg-white/70 backdrop-blur-xl border-b border-black/[0.06] shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <CeliyoLogo className="w-10 h-5" white={isDark} />
              <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-primary-900'}`}>
                Celiyo
              </span>
              <span className={`hidden sm:block text-[11px] font-light tracking-wide ${isDark ? 'text-white/30' : 'text-primary-900/30'}`}>
                by The Digitech Solutions
              </span>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl transition-all duration-300 cursor-pointer ${
                  isDark
                    ? 'bg-white/[0.06] border border-white/10 text-white/70 hover:text-white hover:bg-white/[0.1]'
                    : 'bg-black/[0.04] border border-black/[0.06] text-primary-700 hover:bg-black/[0.08]'
                }`}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isDark ? (
                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Sun className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Moon className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Desktop CTA */}
              <motion.a
                href="#audit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
                           transition-all duration-300 cursor-pointer ${
                  isDark
                    ? 'bg-white/[0.06] border border-white/10 text-white/90 hover:bg-white/[0.1] hover:border-white/20 hover:text-white'
                    : 'bg-primary-600 border border-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                Request a Growth Audit
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>

              {/* Mobile menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-2 transition-colors cursor-pointer ${isDark ? 'text-white/70 hover:text-white' : 'text-primary-700 hover:text-primary-900'}`}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-18 z-40 p-4 md:hidden"
          >
            <div className="glass-card rounded-2xl p-6">
              <a
                href="#audit"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-medium
                           bg-primary-600 text-white"
              >
                Request a Growth Audit
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
