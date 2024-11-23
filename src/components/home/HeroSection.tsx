import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-green-700 to-green-900 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Experience African Football
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Follow your favorite teams, watch live matches, and stay updated with the latest news from across the continent.
          </p>
          <div className="space-x-4">
            <a 
              href="/matches" 
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full inline-block transition-colors"
            >
              Live Matches
            </a>
            <a 
              href="/tickets" 
              className="bg-white hover:bg-gray-100 text-green-700 px-8 py-3 rounded-full inline-block transition-colors"
            >
              Buy Tickets
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}