"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { isSameDay } from 'date-fns'

interface Match {
  id: string
  homeTeam: string
  awayTeam: string
  time: string
  date: Date
}

interface League {
  league: string
  matches: Match[]
}

interface MatchesListProps {
  searchQuery: string
  selectedDate: Date | undefined
}

export default function MatchesList({ searchQuery, selectedDate }: MatchesListProps) {
  const router = useRouter()
  const matches: League[] = [
    {
      league: 'StarTimes Uganda Premier League',
      matches: [
        { id: '1', homeTeam: 'Maroons', awayTeam: 'Wakiso Giants', time: '17:30', date: new Date() },
        { id: '2', homeTeam: 'KCCA', awayTeam: 'Gaddafi', time: '18:00', date: new Date() },
        { id: '3', homeTeam: 'URA', awayTeam: 'Busoga', time: '18:00', date: new Date() },
        { id: '4', homeTeam: 'Express', awayTeam: 'Mbarara', time: '18:30', date: new Date() },
        { id: '5', homeTeam: 'Vipers', awayTeam: 'Sc Villa', time: '18:30', date: new Date() },
      ]
    }
  ]

  const filteredMatches = matches.map(league => ({
    ...league,
    matches: league.matches.filter(match => 
      (searchQuery === '' || 
       match.homeTeam.toLowerCase().includes(searchQuery.toLowerCase()) || 
       match.awayTeam.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedDate ? isSameDay(match.date, selectedDate) : true)
    )
  })).filter(league => league.matches.length > 0)

  return (
    <div className="space-y-6">
      {filteredMatches.map((league) => (
        <div key={league.league}>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="/placeholder.svg?height=24&width=24"
              alt={league.league}
              className="w-6 h-6"
            />
            <h2 className="font-semibold">{league.league}</h2>
          </div>
          <div className="space-y-3">
            {league.matches.map((match) => (
              <Card
                key={`${match.homeTeam}-${match.awayTeam}`}
                className="cursor-pointer hover:bg-accent"
                onClick={() => router.push(`/match/${match.id}`)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{match.homeTeam}</span>
                    <span className="text-sm text-muted-foreground">{match.time}</span>
                    <span className="font-medium">{match.awayTeam}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

