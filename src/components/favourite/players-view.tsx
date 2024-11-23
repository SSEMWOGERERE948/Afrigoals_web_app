import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const players = [
  {
    id: 1,
    name: "ALLAN OKELLO",
    team: "VIPERS",
    country: "UG",
    age: 23,
    image: "/images/allan.jpeg",
    color: "bg-red-600"
  },
  {
    id: 2,
    name: "SSALI ALPHA",
    team: "EXPRESS",
    country: "UG",
    age: 19,
    image: "/images/sali.jpg",
    color: "bg-red-600"
  },
  {
    id: 3,
    name: "JOHN REVITTA",
    team: "KCCA",
    country: "UG",
    age: 31,
    image: "/images/john.jpg",
    color: "bg-yellow-400"
  },
  {
    id: 4,
    name: "JOSHUA LUBWAMA",
    team: "URA",
    country: "UG",
    age: 21,
    image: "/images/joshua.jpeg",
    color: "bg-blue-700"
  }
]

export function PlayersView() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {players.map((player) => (
        <Card key={player.id} className={`${player.color} text-white`}>
          <CardContent className="p-4">
            <div className="flex items-start gap-2">
              <div className="relative w-12 h-12">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm">{player.name}</h3>
                <p className="text-xs opacity-90">COUNTRY:{player.country}</p>
                <p className="text-xs opacity-90">AGE:{player.age}yrs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

