import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Sparkles, 
  Moon, 
  Star, 
  Circle, 
  Hash, 
  Eye, 
  Sun 
} from 'lucide-react'

const divinationMethods = [
  {
    name: 'Tarot Cards',
    description: 'Ancient wisdom through symbolic cards revealing your past, present, and future.',
    icon: Sparkles,
    href: '/tarot',
    color: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Norse Runes',
    description: 'Discover guidance through the ancient Nordic alphabet of divination.',
    icon: Moon,
    href: '/runes',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'I Ching',
    description: 'The Chinese Book of Changes offers profound insights into life\'s questions.',
    icon: Circle,
    href: '/iching',
    color: 'from-green-600 to-teal-600'
  },
  {
    name: 'Numerology',
    description: 'Unlock the mystical relationship between numbers and your destiny.',
    icon: Hash,
    href: '/numerology',
    color: 'from-yellow-600 to-orange-600'
  },
  {
    name: 'Crystal Ball',
    description: 'Peer into the ethereal realm for visions of what may come to pass.',
    icon: Eye,
    href: '/crystal-ball',
    color: 'from-cyan-600 to-blue-600'
  },
  {
    name: 'Astrology',
    description: 'The stars and planets align to reveal your cosmic blueprint.',
    icon: Sun,
    href: '/astrology',
    color: 'from-red-600 to-pink-600'
  }
]

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-mystical font-bold mb-6 glow-text">
          Mystic Oracle
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Journey into the mystical realm where ancient wisdom meets modern insight. 
          Discover your destiny through time-honored divination practices.
        </p>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-mystical-400"
        >
          <Star className="h-12 w-12 mx-auto" />
        </motion.div>
      </motion.div>

      {/* Divination Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {divinationMethods.map((method, index) => (
          <motion.div
            key={method.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="mystical-card mystical-border group"
          >
            <Link to={method.href} className="block h-full">
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${method.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-elegant font-semibold mb-4 text-mystical-200">
                  {method.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {method.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-elegant font-semibold mb-6 text-mystical-200">
          Begin Your Mystical Journey
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Choose your preferred method of divination and let the cosmic forces guide you 
          towards clarity, wisdom, and enlightenment.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/tarot"
            className="cosmic-button inline-flex items-center space-x-2 text-lg"
          >
            <Sparkles className="h-5 w-5" />
            <span>Start with Tarot</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}