"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function LeaguesList() {
  const allLeagues: { id: string; name: string; logo: string }[] = [
    { id: "upl", name: "StarTimes Uganda Premier League", logo: "/images/upl.jpeg" },
    { id: "big-league", name: "Fufa Big League", logo: "/images/fufa_big_league.jpeg" },
    { id: "regional-league", name: "Regional Leagues", logo: "/images/regional_league.jpeg" },
    { id: "women-super-league", name: "Fufa Women Super League", logo: "/images/women_super_league.jpeg" },
  ];

  const [followedLeagues, setFollowedLeagues] = useState<
    { id: string; name: string; logo: string }[]
  >([
    { id: "upl", name: "StarTimes Uganda Premier League", logo: "/images/upl.jpeg" },
  ]);

  const followLeague = (league: { id: string; name: string; logo: string }) => {
    if (!followedLeagues.some((l) => l.id === league.id)) {
      setFollowedLeagues([...followedLeagues, league]);
    }
  };

  const unfollowLeague = (leagueId: string) => {
    setFollowedLeagues(followedLeagues.filter((league) => league.id !== leagueId));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-4">Manage Followed Leagues</h1>

      <div>
        <h2 className="text-xl font-semibold mb-2">Leagues You Follow</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {followedLeagues.map((league) => (
            <Card key={league.id} className="relative">
              <CardContent className="p-4 flex items-center space-x-4">
                <img
                  src={league.logo}
                  alt={league.name}
                  className="w-12 h-12 rounded-md"
                />
                <span className="font-medium">{league.name}</span>
                <button
                  onClick={() => unfollowLeague(league.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  Unfollow
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Available Leagues</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allLeagues.map((league) => (
            <Card
              key={league.id}
              className={`cursor-pointer hover:bg-gray-50 ${
                followedLeagues.some((l) => l.id === league.id) ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => followLeague(league)}
            >
              <CardContent className="p-4 flex items-center space-x-4">
                <img
                  src={league.logo}
                  alt={league.name}
                  className="w-12 h-12 rounded-md"
                />
                <span className="font-medium">{league.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
