import { useTheme } from './context/ThemeContext'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CallOut from './components/CallOut'
import Reframe from './components/Reframe'
import Layers from './components/Layers'
import Shift from './components/Shift'
import Credibility from './components/Credibility'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Differentiation from './components/Differentiation'
import Philosophy from './components/Philosophy'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen font-inter transition-colors duration-400 ${
      isDark ? 'bg-[#0B0A1A] text-white' : 'bg-[#F2F2F2] text-[#1e1b3a]'
    }`}>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <CallOut />
        <Reframe />
        <Layers />
        <Shift />
        <Credibility />
        <Process />
        <FAQ />
        <Differentiation />
        <Philosophy />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
