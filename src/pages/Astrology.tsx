import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Calendar } from 'lucide-react'

interface ZodiacSign {
  name: string
  symbol: string
  element: string
  dates: string
  traits: string[]
  horoscope: string
}

const zodiacSigns: ZodiacSign[] = [
  {
    name: "Aries",
    symbol: "♈",
    element: "Fire",
    dates: "March 21 - April 19",
    traits: ["Energetic", "Bold", "Independent", "Pioneering"],
    horoscope: "Your fiery energy is leading you toward new adventures. Trust your instincts and take bold action."
  },
  {
    name: "Taurus",
    symbol: "♉",
    element: "Earth",
    dates: "April 20 - May 20",
    traits: ["Practical", "Reliable", "Patient", "Determined"],
    horoscope: "Stability and comfort are your focus now. Take time to appreciate the beauty around you."
  },
  {
    name: "Gemini",
    symbol: "♊",
    element: "Air",
    dates: "May 21 - June 20",
    traits: ["Curious", "Adaptable", "Communicative", "Witty"],
    horoscope: "Communication flows freely. New connections and learning opportunities await you."
  },
  {
    name: "Cancer",
    symbol: "♋",
    element: "Water",
    dates: "June 21 - July 22",
    traits: ["Intuitive", "Nurturing", "Emotional", "Protective"],
    horoscope: "Your emotional wisdom guides you. Trust your intuition and care for those close to you."
  },
  {
    name: "Leo",
    symbol: "♌",
    element: "Fire",
    dates: "July 23 - August 22",
    traits: ["Confident", "Creative", "Generous", "Dramatic"],
    horoscope: "Your natural magnetism shines bright. Express your creativity and lead with confidence."
  },
  {
    name: "Virgo",
    symbol: "♍",
    element: "Earth",
    dates: "August 23 - September 22",
    traits: ["Analytical", "Practical", "Helpful", "Perfectionist"],
    horoscope: "Attention to detail serves you well. Focus on organization and helping others succeed."
  },
  {
    name: "Libra",
    symbol: "♎",
    element: "Air",
    dates: "September 23 - October 22",
    traits: ["Harmonious", "Diplomatic", "Social", "Fair"],
    horoscope: "Balance and harmony are your themes. Seek beauty and fairness in all your dealings."
  },
  {
    name: "Scorpio",
    symbol: "♏",
    element: "Water",
    dates: "October 23 - November 21",
    traits: ["Intense", "Mysterious", "Transformative", "Passionate"],
    horoscope: "Deep transformation is occurring. Embrace change and trust your powerful intuition."
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    element: "Fire",
    dates: "November 22 - December 21",
    traits: ["Adventurous", "Optimistic", "Philosophical", "Free-spirited"],
    horoscope: "Adventure calls to you. Expand your horizons through travel, learning, or new experiences."
  },
  {
    name: "Capricorn",
    symbol: "♑",
    element: "Earth",
    dates: "December 22 - January 19",
    traits: ["Ambitious", "Disciplined", "Responsible", "Patient"],
    horoscope: "Your hard work is paying off. Stay focused on your goals and climb steadily toward success."
  },
  {
    name: "Aquarius",
    symbol: "♒",
    element: "Air",
    dates: "January 20 - February 18",
    traits: ["Independent", "Innovative", "Humanitarian", "Eccentric"],
    horoscope: "Your unique perspective brings innovation. Focus on humanitarian causes and future possibilities."
  },
  {
    name: "Pisces",
    symbol: "♓",
    element: "Water",
    dates: "February 19 - March 20",
    traits: ["Intuitive", "Compassionate", "Artistic", "Dreamy"],
    horoscope: "Your intuitive gifts are heightened. Trust your dreams and express your creativity freely."
  }
]

export default function Astrology() {
  const [birthDate, setBirthDate] = useState('')
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null)

  const findZodiacSign = () => {
    if (!birthDate) return

    const [year, month, day] = birthDate.split('-').map(Number)
    const date = new Date(year, month - 1, day)
    const monthDay = month * 100 + day

    // Simplified zodiac date ranges
    if ((monthDay >= 321 && monthDay <= 331) || (monthDay >= 401 && monthDay <= 419)) {
      setSelectedSign(zodiacSigns.find(sign => sign.name === "Aries")!)
    } else if (monthDay >= 420 && monthDay <= 520) {
      setSelectedSign(zodiacSigns.find(sign => sign.name === "Taurus")!)
    } else if (monthDay >= 521 && monthDay <= 620) {
      setSelectedSign(zodiacSigns.find(sign => sign.name === "Gemini")!)
    } else if (monthDay >= 621 && monthDay <= 722) {
      setSelectedSign(zodiacSigns.find(sign => sign.name === "Cancer")!)
    } else if (monthDay >= 723 && monthDay <= 822) {
      setSelectedSign(zodiacSigns.find(sign => sign.name === "Leo")!)
    } else if (monthDay >= 823 && monthDay <= 922) {
      setSelectedSign(zodiacSigns.find(sign => sign.name === "Virgo")!)
    } else if (monthDay >= 923 && monthDay <= 1022) {
      setSelectedSign(zodiacSigns.find(sign => sign.name === "Libra")!)
    } else if (monthDay >= 1023 && monthDay <= 1121) {
      setSelectedSign(zodiacSigns.find(sign => sign.name === "Scorpio")!)
    } else if (monthDay >= 1122 && monthDay <= 1221) {
      setSelectedSign(zodiacSigns.find(sign => sign.name === "Sagittarius")!)
    } else if ((monthDay >= 1222 && monthDay <= 1231) || (monthDay >= 101 && monthDay <= 119)) {
      setSelectedSign(zodiacSigns.find(sign => sign.name === "Capricorn")!)
    } else if (monthDay >= 120 && monthDay <= 218) {
      setSelectedSign(zodiacSigns.find(sign => sign.name === "Aquarius")!)
    } else {
      setSelectedSign(zodiacSigns.find(sign => sign.name === "Pisces")!)
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-mystical font-bold mb-4 glow-text">
          Astrological Reading
        </h1>
        <p className="text-lg text-gray-300">
          Discover your cosmic blueprint through the wisdom of the stars and planets.
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
          <button
            onClick={findZodiacSign}
            disabled={!birthDate}
            className="cosmic-button w-full flex items-center justify-center space-x-2"
          >
            <Star className="h-5 w-5" />
            <span>Find My Sign</span>
          </button>
        </div>
      </div>

      {selectedSign && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mystical-card"
        >
          <div className="text-center mb-8">
            <div className="text-8xl text-mystical-400 mb-4">
              {selectedSign.symbol}
            </div>
            <h2 className="text-3xl font-elegant font-bold text-mystical-200 mb-2">
              {selectedSign.name}
            </h2>
            <p className="text-mystical-300 mb-2">{selectedSign.dates}</p>
            <div className="inline-block px-4 py-2 bg-mystical-800/50 rounded-full text-mystical-300">
              {selectedSign.element} Sign
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-elegant font-semibold mb-4 text-mystical-200">
                Key Traits
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedSign.traits.map((trait, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cosmic-700/50 rounded-full text-sm text-gray-300"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-elegant font-semibold mb-4 text-mystical-200">
                Today's Guidance
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {selectedSign.horoscope}
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-mystical-900/30 rounded-lg text-center">
            <h3 className="text-lg font-elegant font-semibold mb-2 text-mystical-200">
              Cosmic Message
            </h3>
            <p className="text-gray-300">
              The stars have aligned to bring you this message. Trust in the cosmic flow 
              and remember that you are connected to the infinite wisdom of the universe.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}