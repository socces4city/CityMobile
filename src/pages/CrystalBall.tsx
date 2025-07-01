import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, RotateCcw } from 'lucide-react'

const visions = [
  "A golden path appears before you, leading to unexpected opportunities and prosperity.",
  "Mists part to reveal a crossroads where you must choose between comfort and growth.",
  "Ancient symbols swirl, speaking of wisdom gained through patience and perseverance.",
  "A bridge materializes over troubled waters, suggesting harmony will soon return.",
  "Shooting stars illuminate your vision, indicating that your wishes may soon manifest.",
  "A garden blooms in the crystal depths, symbolizing new relationships and creative endeavors.",
  "Clockwork gears turn slowly, reminding you that timing is everything in your current situation.",
  "A lighthouse beam pierces the darkness, offering guidance through uncertain times ahead."
]

export default function CrystalBall() {
  const [currentVision, setCurrentVision] = useState('')
  const [isGazing, setIsGazing] = useState(false)

  const gazeIntoCrystal = async () => {
    setIsGazing(true)
    setCurrentVision('')

    await new Promise(resolve => setTimeout(resolve, 3000))

    const randomVision = visions[Math.floor(Math.random() * visions.length)]
    setCurrentVision(randomVision)
    setIsGazing(false)
  }

  const clearVision = () => {
    setCurrentVision('')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-mystical font-bold mb-4 glow-text">
          Crystal Ball Scrying
        </h1>
        <p className="text-lg text-gray-300">
          Peer into the ethereal realm and receive visions of what may come to pass.
        </p>
      </motion.div>

      <div className="text-center mb-12">
        <motion.div
          animate={{ 
            scale: isGazing ? [1, 1.1, 1] : 1,
            opacity: isGazing ? [0.7, 1, 0.7] : 1
          }}
          transition={{ duration: 2, repeat: isGazing ? Infinity : 0 }}
          className="relative inline-block"
        >
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full border-4 border-mystical-400/50 flex items-center justify-center backdrop-blur-sm">
            <div className="w-48 h-48 bg-gradient-to-br from-white/10 to-transparent rounded-full flex items-center justify-center">
              {isGazing ? (
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-4xl text-mystical-300"
                >
                  ✧
                </motion.div>
              ) : (
                <Eye className="h-8 w-8 text-mystical-400/50" />
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center space-x-4 mb-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={gazeIntoCrystal}
          disabled={isGazing}
          className="cosmic-button flex items-center space-x-2"
        >
          <Eye className="h-5 w-5" />
          <span>{isGazing ? 'Gazing into the void...' : 'Gaze into Crystal'}</span>
        </motion.button>

        {currentVision && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearVision}
            className="bg-cosmic-600 hover:bg-cosmic-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
          >
            <RotateCcw className="h-5 w-5" />
            <span>Clear Vision</span>
          </motion.button>
        )}
      </div>

      {currentVision && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mystical-card text-center"
        >
          <h3 className="text-2xl font-elegant font-semibold mb-6 text-mystical-200">
            Your Vision
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-6 italic">
            "{currentVision}"
          </p>
          <p className="text-sm text-mystical-300">
            Meditate on this vision and let its meaning unfold in your consciousness.
          </p>
        </motion.div>
      )}
    </div>
  )
}