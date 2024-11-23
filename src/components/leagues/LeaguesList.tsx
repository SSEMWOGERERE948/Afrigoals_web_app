export default function LeaguesList() {
  const followingLeagues = [
    { name: 'Uganda Premier League', logo: '/images/upl.jpeg' },
    { name: 'Fufa Big League', logo: '/images/fufa-big-league.jpg' },
    { name: 'Uganda Cup', logo: '/images/uganda_cup.png' }
  ]

  const suggestedLeagues = [
    { name: 'Fufa Women Elite League', logo: '/images/Fufa Women Elite League.png' },
    { name: 'Fufa Women Super League', logo: '/images/Fufa Women Super League.jpg' },
    { name: 'CECAFA', logo: '/images/CECAFA.jpg' }
  ]

  return (
    <div className="space-y-8">
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Following</h2>
          <button className="text-green-600 font-medium">EDIT</button>
        </div>
        <div className="space-y-4">
          {followingLeagues.map((league) => (
            <div key={league.name} className="flex items-center space-x-4 bg-white p-4 rounded-lg">
              <img src={league.logo} alt={league.name} className="w-8 h-8" />
              <span className="font-medium">{league.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Suggested</h2>
        <div className="space-y-4">
          {suggestedLeagues.map((league) => (
            <div key={league.name} className="flex items-center space-x-4 bg-white p-4 rounded-lg">
              <img src={league.logo} alt={league.name} className="w-8 h-8" />
              <span className="font-medium">{league.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}