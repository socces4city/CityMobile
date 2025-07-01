import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shuffle, RotateCcw } from 'lucide-react'

interface Hexagram {
  number: number
  name: string
  chinese: string
  meaning: string
  judgment: string
  image: string
  lines: string[]
}

const hexagrams: Hexagram[] = [
  {
    number: 1,
    name: "The Creative",
    chinese: "乾",
    meaning: "Heaven, Creative Power, Initiative",
    judgment: "The Creative works sublime success, furthering through perseverance.",
    image: "The movement of heaven is full of power. Thus the superior man makes himself strong and untiring.",
    lines: ["═══", "═══", "═══", "═══", "═══", "═══"]
  },
  {
    number: 2,
    name: "The Receptive",
    chinese: "坤",
    meaning: "Earth, Receptive Power, Devotion",
    judgment: "The Receptive brings about sublime success, furthering through the perseverance of a mare.",
    image: "The earth's condition is receptive devotion. Thus the superior man who has breadth of character carries the outer world.",
    lines: ["≡ ≡", "≡ ≡", "≡ ≡", "≡ ≡", "≡ ≡", "≡ ≡"]
  },
  {
    number: 11,
    name: "Peace",
    chinese: "泰",
    meaning: "Harmony, Peace, Union",
    judgment: "Peace. The small departs, the great approaches. Good fortune. Success.",
    image: "Heaven and earth unite: the image of Peace. Thus the ruler divides and completes the course of heaven and earth.",
    lines: ["≡ ≡", "≡ ≡", "≡ ≡", "═══", "═══", "═══"]
  },
  {
    number: 25,
    name: "Innocence",
    chinese: "無妄",
    meaning: "Natural Action, Spontaneity",
    judgment: "Innocence. Supreme success. Perseverance furthers. If someone is not as he should be, he has misfortune.",
    image: "Under heaven thunder rolls: all things attain the natural state of innocence.",
    lines: ["═══", "≡ ≡", "≡ ≡", "═══", "≡ ≡", "═══"]
  },
  {
    number: 64,
    name: "Before Completion",
    chinese: "未濟",
    meaning: "Transition, On the Verge",
    judgment: "Before Completion. Success. But if the little fox, after nearly completing the crossing, gets its tail in the water, there is nothing that would further.",
    image: "Fire over water: the image of the condition before transition. Thus the superior man is careful in the differentiation of things.",
    lines: ["≡ ≡", "═══", "≡ ≡", "═══", "≡ ≡", "═══"]
  }
]

export default function IChing() {
  const [currentHexagram, setCurrentHexagram] = useState<Hexagram | null>(null)
  const [isConsulting, setIsConsulting] = useState(false)

  const consultOracle = async () => {
    setIsConsulting(true)
    setCurrentHexagram(null)

    await new Promise(resolve => setTimeout(resolve, 2000))

    const randomHexagram = hexagrams[Math.floor(Math.random() * hexagrams.length)]
    setCurrentHexagram(randomHexagram)
    setIsConsulting(false)
  }

  const resetConsultation = () => {
    setCurrentHexagram(null)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-mystical font-bold mb-4 glow-text">
          I Ching Oracle
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Consult the ancient Chinese Book of Changes. Cast your question into the cosmic void 
          and receive wisdom through the 64 hexagrams of transformation.
        </p>
      </motion.div>

      <div className="flex justify-center space-x-4 mb-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={consultOracle}
          disabled={isConsulting}
          className="cosmic-button flex items-center space-x-2"
        >
          <Shuffle className="h-5 w-5" />
          <span>{isConsulting ? 'Consulting Oracle...' : 'Consult Oracle'}</span>
        </motion.button>

        {currentHexagram && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetConsultation}
            className="bg-cosmic-600 hover:bg-cosmic-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
          >
            <RotateCcw className="h-5 w-5" />
            <span>New Consultation</span>
          </motion.button>
        )}
      </div>

      {isConsulting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-6xl text-mystical-400 mb-4"
          >
            ☯
          </motion.div>
          <p className="text-mystical-300">Casting the yarrow stalks...</p>
        </motion.div>
      )}

      {currentHexagram && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mystical-card max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="text-6xl text-mystical-400 mb-4">
              {currentHexagram.chinese}
            </div>
            <h2 className="text-3xl font-elegant font-bold text-mystical-200 mb-2">
              {currentHexagram.number}. {currentHexagram.name}
            </h2>
            <p className="text-mystical-300">
              {currentHexagram.meaning}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-elegant font-semibold mb-4 text-mystical-200">
                Hexagram
              </h3>
              <div className="space-y-2 font-mono text-2xl text-mystical-400">
                {currentHexagram.lines.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-elegant font-semibold mb-2 text-mystical-200">
                  The Judgment
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {currentHexagram.judgment}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-elegant font-semibold mb-2 text-mystical-200">
                  The Image
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {currentHexagram.image}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-mystical-900/30 rounded-lg">
            <h3 className="text-xl font-elegant font-semibold mb-4 text-mystical-200 text-center">
              Meditation
            </h3>
            <p className="text-gray-300 leading-relaxed text-center">
              Reflect deeply on this hexagram's message. The I Ching speaks of constant change and 
              transformation. Consider how this ancient wisdom applies to your current situation 
              and the natural flow of events in your life.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}