import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shuffle, RotateCcw } from 'lucide-react'

interface Rune {
  name: string
  symbol: string
  meaning: string
  description: string
  element: string
}

const runes: Rune[] = [
  {
    name: "Fehu",
    symbol: "ᚠ",
    meaning: "Wealth, abundance, prosperity, new beginnings",
    description: "Fehu represents moveable wealth and possessions. It suggests new opportunities and the power to achieve prosperity through effort.",
    element: "Fire"
  },
  {
    name: "Uruz",
    symbol: "ᚢ",
    meaning: "Strength, vitality, primal force, healing",
    description: "Uruz symbolizes raw strength and primal energy. It represents healing, determination, and the power to overcome challenges.",
    element: "Earth"
  },
  {
    name: "Thurisaz",
    symbol: "ᚦ",
    meaning: "Protection, conflict, catalyst, breakthrough",
    description: "Thurisaz represents protective force and conflict. It can indicate necessary destruction before new growth.",
    element: "Fire"
  },
  {
    name: "Ansuz",
    symbol: "ᚨ",
    meaning: "Communication, divine inspiration, wisdom, revelation",
    description: "Ansuz is the rune of communication and divine inspiration. It represents wisdom, learning, and spiritual guidance.",
    element: "Air"
  },
  {
    name: "Raidho",
    symbol: "ᚱ",
    meaning: "Journey, travel, quest, rhythm",
    description: "Raidho represents journeys both physical and spiritual. It suggests movement toward a goal with proper preparation.",
    element: "Air"
  },
  {
    name: "Kenaz",
    symbol: "ᚲ",
    meaning: "Knowledge, creativity, inspiration, enlightenment",
    description: "Kenaz is the rune of knowledge and creativity. It represents the torch of learning and artistic inspiration.",
    element: "Fire"
  },
  {
    name: "Gebo",
    symbol: "ᚷ",
    meaning: "Gift, exchange, partnership, balance",
    description: "Gebo represents gifts and exchanges. It symbolizes partnerships, contracts, and the balance of giving and receiving.",
    element: "Air"
  },
  {
    name: "Wunjo",
    symbol: "ᚹ",
    meaning: "Joy, harmony, fellowship, prosperity",
    description: "Wunjo is the rune of joy and harmony. It represents happiness, success, and harmonious relationships.",
    element: "Earth"
  }
]

export default function Runes() {
  const [drawnRunes, setDrawnRunes] = useState<Rune[]>([])
  const [isCasting, setIsCasting] = useState(false)

  const castRunes = async () => {
    setIsCasting(true)
    setDrawnRunes([])

    // Simulate rune casting delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    const shuffled = [...runes].sort(() => 0.5 - Math.random())
    setDrawnRunes(shuffled.slice(0, 3))
    setIsCasting(false)
  }

  const resetCasting = () => {
    setDrawnRunes([])
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-mystical font-bold mb-4 glow-text">
          Norse Runes
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Cast the ancient Norse runes to seek guidance from the wisdom of the Vikings. 
          Each rune carries profound meaning from the Elder Futhark alphabet.
        </p>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mb-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={castRunes}
          disabled={isCasting}
          className="cosmic-button flex items-center space-x-2"
        >
          <Shuffle className="h-5 w-5" />
          <span>{isCasting ? 'Casting Runes...' : 'Cast Runes'}</span>
        </motion.button>

        {drawnRunes.length > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetCasting}
            className="bg-cosmic-600 hover:bg-cosmic-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
          >
            <RotateCcw className="h-5 w-5" />
            <span>New Casting</span>
          </motion.button>
        )}
      </div>

      {/* Loading Animation */}
      {isCasting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-6xl text-mystical-400 mb-4"
          >
            ᚱᚢᚾᚨ
          </motion.div>
          <p className="text-mystical-300">Casting the sacred stones...</p>
        </motion.div>
      )}

      {/* Runes Display */}
      {drawnRunes.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {drawnRunes.map((rune, index) => (
            <motion.div
              key={`${rune.name}-${index}`}
              initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="mystical-card text-center"
            >
              <div className="mb-6">
                <div className="text-8xl text-mystical-400 mb-4 font-bold">
                  {rune.symbol}
                </div>
                <h3 className="text-2xl font-elegant font-semibold text-mystical-200 mb-2">
                  {rune.name}
                </h3>
                <div className="inline-block px-3 py-1 bg-mystical-800/50 rounded-full text-sm text-mystical-300">
                  {rune.element}
                </div>
              </div>

              <div className="text-left space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-mystical-300 mb-2">Meaning:</h4>
                  <p className="text-gray-300 text-sm">
                    {rune.meaning}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-mystical-300 mb-2">Wisdom:</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {rune.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Reading Interpretation */}
      {drawnRunes.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mystical-card max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-elegant font-semibold mb-4 text-mystical-200 text-center">
            Your Rune Casting Interpretation
          </h3>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              The three runes you have drawn represent the Norse concept of time and fate:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Past Influence:</strong> {drawnRunes[0]?.name} - The foundation of your current situation</li>
              <li><strong>Present Challenge:</strong> {drawnRunes[1]?.name} - What you must face or understand now</li>
              <li><strong>Future Potential:</strong> {drawnRunes[2]?.name} - The outcome if you heed the runes' wisdom</li>
            </ul>
            <p>
              Meditate on how these ancient symbols relate to your question. The runes speak of both 
              practical matters and spiritual growth, offering guidance from the wisdom of the Norse traditions.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}