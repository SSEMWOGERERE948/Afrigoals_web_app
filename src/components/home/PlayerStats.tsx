import { motion } from 'framer-motion'

export default function PlayerStats() {
  const topScorers = [
    { name: 'Mohamed Salah', team: 'Al Ahly', goals: 15 },
    { name: 'Percy Tau', team: 'Mamelodi Sundowns', goals: 12 },
    { name: 'Vincent Aboubakar', team: 'Al Nassr', goals: 11 }
  ]

  return (
    <section className="py-8 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Top Scorers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topScorers.map((player, index) => (
            <motion.div
              key={player.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-700">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{player.name}</h3>
                  <p className="text-gray-600">{player.team}</p>
                  <p className="text-green-700 font-bold mt-1">
                    {player.goals} goals
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}