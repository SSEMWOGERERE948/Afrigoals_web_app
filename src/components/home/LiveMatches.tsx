import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function LiveMatches() {
  const matches = [
    {
      id: 1,
      homeTeam: 'Al Ahly',
      awayTeam: 'Zamalek',
      score: '2 - 1',
      time: '65\'',
      league: 'Egyptian Premier League'
    },
    {
      id: 2,
      homeTeam: 'Mamelodi Sundowns',
      awayTeam: 'Kaizer Chiefs',
      score: '0 - 0',
      time: '32\'',
      league: 'South African Premier Division'
    },
    {
      id: 3,
      homeTeam: 'TP Mazembe',
      awayTeam: 'AS Vita Club',
      score: '1 - 0',
      time: '78\'',
      league: 'DR Congo Ligue 1'
    }
  ]

  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Live Matches</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {matches.map((match) => (
          <SwiperSlide key={match.id}>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-sm text-gray-600 mb-2">{match.league}</div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-semibold">{match.homeTeam}</div>
                <div className="text-xl font-bold">{match.score}</div>
                <div className="text-lg font-semibold">{match.awayTeam}</div>
              </div>
              <div className="text-center">
                <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">
                  LIVE {match.time}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}