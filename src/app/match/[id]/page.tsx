"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { SoccerField } from "@/components/soccer-field"
import { TicketBooking } from "@/components/ticket-booking"
import { TransportBooking } from "@/components/transport-booking"
import { StadiumMap } from "@/components/stadium-map"

export default function MatchDetails({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("lineup")

  // Mock data for teams and players
  const homeTeam = {
    name: "Vipers",
    players: [
      { name: "John Doe", shirtNumber: 1, position: "GK", image: "/images/allan.jpeg" },
      { name: "Jane Smith", shirtNumber: 2, position: "DEF", image: "/images/allan.jpeg" },
      { name: "Mike Johnson", shirtNumber: 3, position: "DEF", image: "/images/allan.jpeg" },
      { name: "Sarah Brown", shirtNumber: 4, position: "DEF", image: "/images/allan.jpeg" },
      { name: "Tom Wilson", shirtNumber: 5, position: "DEF", image: "/images/allan.jpeg" },
      { name: "Emily Davis", shirtNumber: 6, position: "MID", image: "/images/allan.jpeg" },
      { name: "Chris Lee", shirtNumber: 7, position: "MID", image: "/images/allan.jpeg" },
      { name: "Alex Taylor", shirtNumber: 8, position: "MID", image: "/images/allan.jpeg" },
      { name: "Sam White", shirtNumber: 9, position: "MID", image: "/images/allan.jpeg" },
      { name: "Pat Green", shirtNumber: 10, position: "FWD", image: "/images/allan.jpeg" },
      { name: "Jordan Black", shirtNumber: 11, position: "FWD", image: "/images/allan.jpeg" },
    ]
  }

  const awayTeam = {
    name: "Sc Villa",
    players: [
      { name: "Bob Johnson", shirtNumber: 1, position: "GK", image: "/images/allan.jpeg" },
      { name: "Alice Brown", shirtNumber: 2, position: "DEF", image: "/images/allan.jpeg" },
      { name: "Charlie Davis", shirtNumber: 3, position: "DEF", image: "/images/allan.jpeg" },
      { name: "David Wilson", shirtNumber: 4, position: "DEF", image: "/images/allan.jpeg" },
      { name: "Eva Martinez", shirtNumber: 5, position: "DEF", image: "/images/allan.jpeg" },
      { name: "Frank Thomas", shirtNumber: 6, position: "MID", image: "/images/allan.jpeg" },
      { name: "Grace Lee", shirtNumber: 7, position: "MID", image: "/images/allan.jpeg" },
      { name: "Henry Clark", shirtNumber: 8, position: "MID", image: "/images/allan.jpeg" },
      { name: "Ivy Robinson", shirtNumber: 9, position: "MID", image: "/images/allan.jpeg" },
      { name: "Jack Wright", shirtNumber: 10, position: "FWD", image: "/images/allan.jpeg" },
      { name: "Kate Brown", shirtNumber: 11, position: "FWD", image: "/images/allan.jpeg" },
    ]
  }

  const teams = [
    { name: "Vipers", gd: 0, points: 0, logo: "/images/vipers.jpeg" },
    { name: "KCCA", gd: 0, points: 0, logo: "/images/kcca.png" },
    { name: "Maroons", gd: 0, points: 0, logo: "/images/maroons.png" },
    { name: "URA", gd: 0, points: 0, logo: "/images/ura.png" },
    { name: "Express", gd: 0, points: 0, logo: "/images/express.png" },
    { name: "Wakiso Giants", gd: 0, points: 0, logo: "/images/wakiso.png" },
    { name: "Gaddafi", gd: 0, points: 0, logo: "/images/gaddafi.png" },
    { name: "Busoga", gd: 0, points: 0, logo: "/images/busoga.png" },
    { name: "Sc Villa", gd: 0, points: 0, logo: "/images/villa_logo.png" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Match Score Section */}
      <div className="bg-white p-6">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 relative">
              <Image
                src="/images/vipers.jpeg"
                alt="Vipers"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-lg">Vipers</span>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">0 - 0</div>
            <div className="text-gray-600">Full time</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 relative">
              <Image
                src="/images/villa_logo.png"
                alt="Sc Villa"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-lg">Sc Villa</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <Tabs defaultValue="lineup" className="w-full">
        <TabsList className="w-full justify-start rounded-none border-b bg-white h-12 overflow-x-auto">
          <TabsTrigger value="facts">Facts</TabsTrigger>
          <TabsTrigger value="lineup">Lineup</TabsTrigger>
          <TabsTrigger value="table">Table</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
          <TabsTrigger value="transport">Transport</TabsTrigger>
          <TabsTrigger value="map">Map</TabsTrigger>
        </TabsList>
        <TabsContent value="lineup" className="m-0">
          <div className="bg-white p-4">
            <SoccerField homeTeam={homeTeam} awayTeam={awayTeam} />
          </div>
        </TabsContent>
        <TabsContent value="table" className="m-0">
          <div className="bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr className="text-sm text-gray-600">
                    <th className="py-3 px-4 text-left">PL</th>
                    <th className="py-3 px-4 text-left">Team</th>
                    <th className="py-3 px-4 text-center">GD</th>
                    <th className="py-3 px-4 text-center">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team, index) => (
                    <tr
                      key={team.name}
                      className={cn(
                        "border-b last:border-0",
                        index === 0 && "bg-gray-50"
                      )}
                    >
                      <td className="py-3 px-4">{index + 1}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 relative">
                            <Image
                              src={team.logo}
                              alt={team.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          {team.name}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">+{team.gd}</td>
                      <td className="py-3 px-4 text-center">{team.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="tickets" className="m-0">
          <div className="bg-white p-4">
            <TicketBooking matchId={params.id} />
          </div>
        </TabsContent>
        <TabsContent value="transport" className="m-0">
          <div className="bg-white p-4">
            <TransportBooking matchId={params.id} />
          </div>
        </TabsContent>
        <TabsContent value="map" className="m-0">
          <div className="bg-white p-4">
            <StadiumMap matchId={params.id} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

