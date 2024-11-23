import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const teams = [
  {
    id: 1,
    name: "THE CRANES",
    logo: "/images/uganda_cranes.png",
    color: "bg-red-600"
  },
  {
    id: 2,
    name: "VIPERS",
    logo: "/images/vipers.jpeg",
    color: "bg-red-600"
  },
  {
    id: 3,
    name: "KCCA",
    logo: "/images/kcca.png",
    color: "bg-yellow-400"
  },
  {
    id: 4,
    name: "URA",
    logo: "/images/ura.png",
    color: "bg-blue-700"
  },
  {
    id: 5,
    name: "EXPRESS",
    logo: "/images/express.jpeg",
    color: "bg-red-600"
  },
  {
    id: 6,
    name: "SC VILLA",
    logo: "/images/villa_logo.png",
    color: "bg-blue-600"
  }
]

export function TeamsView() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {teams.map((team) => (
        <Card key={team.id} className={`${team.color}`}>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src={team.logo}
                alt={team.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-bold text-white">{team.name}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

