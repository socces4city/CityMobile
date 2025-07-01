import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shuffle, RotateCcw } from 'lucide-react'
import { TarotCard, getRandomCard, getRandomCards } from '../data/tarot'

type SpreadType = 'single' | 'three' | 'celtic'

export default function Tarot() {
  const [drawnCards, setDrawnCards] = useState<TarotCard[]>([])
  const [isReversed, setIsReversed] = useState<boolean[]>([])
  const [spreadType, setSpreadType] = useState<SpreadType>('single')
  const [isDrawing, setIsDrawing] = useState(false)

  const drawCards = async () => {
    setIsDrawing(true)
    setDrawnCards([])
    setIsReversed([])

    // Simulate card shuffling delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const cardCount = spreadType === 'single' ? 1 : spreadType === 'three' ? 3 : 10
    const cards = getRandomCards(cardCount)
    const reversed = cards.map(() => Math.random() > 0.7) // 30% chance of reversed

    setDrawnCards(cards)
    setIsReversed(reversed)
    setIsDrawing(false)
  }

  const resetReading = () => {
    setDrawnCards([])
    setIsReversed([])
  }

  const getSpreadPositions = () => {
    switch (spreadType) {
      case 'three':
        return ['Past', 'Present', 'Future']
      case 'celtic':
        return [
          'Present Situation',
          'Challenge',
          'Distant Past',
          'Possible Outcome',
          'Crown',
          'Immediate Future',
          'Your Approach',
          'External Influences',
          'Inner Emotions',
          'Final Outcome'
        ]
      default:
        return ['Your Reading']
    }
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
          Tarot Reading
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Let the ancient wisdom of the tarot guide you. Choose your spread and draw your cards 
          to receive insights into your past, present, and future.
        </p>
      </motion.div>

      {/* Spread Selection */}
      <div className="mb-8">
        <h3 className="text-xl font-elegant mb-4 text-center text-mystical-200">
          Choose Your Spread
        </h3>
        <div className="flex justify-center space-x-4">
          {[
            { type: 'single' as SpreadType, name: 'Single Card', desc: 'Quick insight' },
            { type: 'three' as SpreadType, name: 'Three Card', desc: 'Past, Present, Future' },
            { type: 'celtic' as SpreadType, name: 'Celtic Cross', desc: 'Comprehensive reading' }
          ].map((spread) => (
            <button
              key={spread.type}
              onClick={() => setSpreadType(spread.type)}
              className={`mystical-card p-4 transition-all duration-300 ${
                spreadType === spread.type
                  ? 'border-mystical-400 bg-mystical-800/40'
                  : 'hover:border-mystical-500/50'
              }`}
            >
              <div className="text-center">
                <h4 className="font-semibold text-mystical-200">{spread.name}</h4>
                <p className="text-sm text-gray-400">{spread.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mb-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={drawCards}
          disabled={isDrawing}
          className="cosmic-button flex items-center space-x-2"
        >
          <Shuffle className="h-5 w-5" />
          <span>{isDrawing ? 'Drawing Cards...' : 'Draw Cards'}</span>
        </motion.button>

        {drawnCards.length > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetReading}
            className="bg-cosmic-600 hover:bg-cosmic-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
          >
            <RotateCcw className="h-5 w-5" />
            <span>New Reading</span>
          </motion.button>
        )}
      </div>

      {/* Loading Animation */}
      {isDrawing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Shuffle className="h-12 w-12 text-mystical-400" />
          </motion.div>
          <p className="text-mystical-300 mt-2">Shuffling the cosmic deck...</p>
        </motion.div>
      )}

      {/* Cards Display */}
      <AnimatePresence>
        {drawnCards.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`grid gap-8 mb-12 ${
              spreadType === 'single' ? 'grid-cols-1 max-w-md mx-auto' :
              spreadType === 'three' ? 'grid-cols-1 md:grid-cols-3' :
              'grid-cols-2 md:grid-cols-5 lg:grid-cols-5'
            }`}
          >
            {drawnCards.map((card, index) => (
              <motion.div
                key={`${card.id}-${index}`}
                initial={{ opacity: 0, rotateY: 180, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="mystical-card text-center"
                style={{
                  transform: isReversed[index] ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              >
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-mystical-300 mb-2">
                    {getSpreadPositions()[index]}
                  </h4>
                  <div className={`w-32 h-48 mx-auto bg-gradient-to-br from-mystical-800 to-cosmic-900 rounded-lg border-2 border-mystical-500/50 flex items-center justify-center relative overflow-hidden ${
                    isReversed[index] ? 'border-red-500/50' : ''
                  }`}>
                    <div className="absolute inset-0 bg-gradient-mystical opacity-20"></div>
                    <div className="text-center z-10">
                      <div className="text-mystical-200 font-mystical text-lg mb-2">
                        {card.name}
                      </div>
                      {card.suit && (
                        <div className="text-mystical-400 text-sm">
                          {card.suit}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <h3 className={`text-lg font-elegant font-semibold mb-2 ${
                  isReversed[index] ? 'text-red-300' : 'text-mystical-200'
                }`}>
                  {card.name} {isReversed[index] ? '(Reversed)' : ''}
                </h3>

                <div className="text-left space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-mystical-300 mb-1">Keywords:</h4>
                    <p className="text-xs text-gray-400">
                      {card.keywords.join(', ')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-mystical-300 mb-1">Meaning:</h4>
                    <p className="text-xs text-gray-300">
                      {isReversed[index] ? card.reversed : card.upright}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-mystical-300 mb-1">Description:</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reading Interpretation */}
      {drawnCards.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mystical-card max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-elegant font-semibold mb-4 text-mystical-200 text-center">
            Your Reading Interpretation
          </h3>
          <div className="text-gray-300 leading-relaxed space-y-4">
            {spreadType === 'single' && (
              <p>
                This single card represents the energy surrounding your current situation. 
                Reflect on how the {drawnCards[0].name} relates to your question and let its 
                wisdom guide your next steps.
              </p>
            )}
            {spreadType === 'three' && (
              <div>
                <p className="mb-4">
                  This three-card spread reveals the progression of your journey:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Past:</strong> The foundation that brought you here</li>
                  <li><strong>Present:</strong> Your current situation and energies</li>
                  <li><strong>Future:</strong> The likely outcome based on current path</li>
                </ul>
              </div>
            )}
            {spreadType === 'celtic' && (
              <div>
                <p className="mb-4">
                  The Celtic Cross provides a comprehensive view of your situation:
                </p>
                <p>
                  This ancient spread reveals not only what surrounds you now, but also 
                  the underlying currents, your inner thoughts, and the ultimate outcome 
                  of your current path. Pay special attention to how the cards interact 
                  with each other to form a complete picture.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}