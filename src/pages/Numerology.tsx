import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator } from 'lucide-react'

export default function Numerology() {
  const [birthDate, setBirthDate] = useState('')
  const [fullName, setFullName] = useState('')
  const [results, setResults] = useState<any>(null)

  const calculate = () => {
    // Simple numerology calculation
    const lifePathNumber = birthDate.split('-').join('').split('').reduce((sum, digit) => sum + parseInt(digit), 0)
    const destiny = fullName.toLowerCase().replace(/[^a-z]/g, '').split('').reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0)
    
    setResults({
      lifePath: ((lifePathNumber - 1) % 9) + 1,
      destiny: ((destiny - 1) % 9) + 1
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-mystical font-bold mb-4 glow-text">
          Numerology Reading
        </h1>
        <p className="text-lg text-gray-300">
          Discover the mystical significance of numbers in your life.
        </p>
      </motion.div>

      <div className="mystical-card max-w-md mx-auto mb-8">
        <div className="space-y-4">
          <div>
            <label className="block text-mystical-200 mb-2">Birth Date</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full p-3 bg-cosmic-800 border border-mystical-500 rounded-lg text-white"
            />
          </div>
          <div>
            <label className="block text-mystical-200 mb-2">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full p-3 bg-cosmic-800 border border-mystical-500 rounded-lg text-white"
            />
          </div>
          <button
            onClick={calculate}
            disabled={!birthDate || !fullName}
            className="cosmic-button w-full flex items-center justify-center space-x-2"
          >
            <Calculator className="h-5 w-5" />
            <span>Calculate Numbers</span>
          </button>
        </div>
      </div>

      {results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mystical-card"
        >
          <h3 className="text-2xl font-elegant text-mystical-200 text-center mb-6">
            Your Numbers
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-mystical-400 mb-2">
                {results.lifePath}
              </div>
              <h4 className="text-lg text-mystical-200 mb-2">Life Path Number</h4>
              <p className="text-gray-300 text-sm">
                Your life's journey and purpose
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-mystical-400 mb-2">
                {results.destiny}
              </div>
              <h4 className="text-lg text-mystical-200 mb-2">Destiny Number</h4>
              <p className="text-gray-300 text-sm">
                Your life's mission and goals
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}