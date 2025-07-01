import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Home from './pages/Home'
import Tarot from './pages/Tarot'
import Runes from './pages/Runes'
import IChing from './pages/IChing'
import Numerology from './pages/Numerology'
import CrystalBall from './pages/CrystalBall'
import Astrology from './pages/Astrology'

function App() {
  return (
    <div className="min-h-screen bg-gradient-starry text-white">
      <div className="starry-bg min-h-screen">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-8"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarot" element={<Tarot />} />
            <Route path="/runes" element={<Runes />} />
            <Route path="/iching" element={<IChing />} />
            <Route path="/numerology" element={<Numerology />} />
            <Route path="/crystal-ball" element={<CrystalBall />} />
            <Route path="/astrology" element={<Astrology />} />
          </Routes>
        </motion.main>
      </div>
    </div>
  )
}

export default App