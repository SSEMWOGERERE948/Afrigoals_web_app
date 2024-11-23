import LeaguesList from '@/components/leagues/LeaguesList'
import SearchBar from '@/components/leagues/SearchBar'

export default function LeaguesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">LEAGUES</h1>
      <SearchBar />
      <LeaguesList />
    </div>
  )
}