"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

interface MatchesListProps {
  searchQuery: string;
  selectedDate: Date | undefined;
}

export default function MatchesList({ searchQuery, selectedDate }: MatchesListProps) {
  const router = useRouter();

  const matches = [
    {
      league: {
        name: "StarTimes Uganda Premier League",
        logo: "/images/upl.jpeg", // League logo
      },
      matches: [
        {
          id: "1",
          homeTeam: { name: "Maroons", logo: "/images/maroons.jpeg" },
          awayTeam: { name: "Wakiso Giants", logo: "/images/wakiso_giants.jpeg" },
          time: "17:30",
        },
        {
          id: "2",
          homeTeam: { name: "KCCA", logo: "/images/kcca.png" },
          awayTeam: { name: "Gaddafi", logo: "/images/gaddafi.jpeg" },
          time: "18:00",
        },
        {
          id: "3",
          homeTeam: { name: "URA", logo: "/images/ura.png" },
          awayTeam: { name: "Busoga", logo: "/images/busoga.jpg" },
          time: "18:00",
        },
        {
          id: "4",
          homeTeam: { name: "Express", logo: "/images/express.jpeg" },
          awayTeam: { name: "Mbarara", logo: "/images/mbarara.png" },
          time: "18:30",
        },
        {
          id: "5",
          homeTeam: { name: "Vipers", logo: "/images/vipers.jpeg" },
          awayTeam: { name: "Sc Villa", logo: "/images/villa_logo.png" },
          time: "18:30",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {matches.map((leagueData) => (
        <div key={leagueData.league.name}>
          {/* League Logo and Name */}
          <div className="flex items-center space-x-2 mb-4">
            <img
              src={leagueData.league.logo}
              alt={leagueData.league.name}
              className="w-6 h-6"
            />
            <h2 className="font-semibold">{leagueData.league.name}</h2>
          </div>

          {/* Match Cards */}
          <div className="space-y-3">
            {leagueData.matches.map((match) => (
              <Card
                key={match.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => router.push(`/match/${match.id}`)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    {/* Home Team */}
                    <div className="flex items-center space-x-2">
                      <img
                        src={match.homeTeam.logo}
                        alt={match.homeTeam.name}
                        className="w-6 h-6"
                      />
                      <span className="font-medium">{match.homeTeam.name}</span>
                    </div>

                    {/* Match Time */}
                    <span className="text-sm text-muted-foreground">{match.time}</span>

                    {/* Away Team */}
                    <div className="flex items-center space-x-2">
                      <img
                        src={match.awayTeam.logo}
                        alt={match.awayTeam.name}
                        className="w-6 h-6"
                      />
                      <span className="font-medium">{match.awayTeam.name}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
