import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const transfers = [
  {
    id: 1,
    player: "Allan Okello",
    date: "18/9/2023",
    image: "/images/allan.jpeg",
    fromTeam: {
      name: "Kcca",
      logo: "/images/kcca.png",
    },
    toTeam: {
      name: "Vipers",
      logo: "/images/vipers.jpeg",
    }
  },
  {
    id: 2,
    player: "Ssali Alpha",
    date: "18/9/2023",
    image: "/images/sali.jpg",
    fromTeam: {
      name: "Proline",
      logo: "/images/proline.jpeg",
    },
    toTeam: {
      name: "Express",
      logo: "/images/express.jpeg",
    }
  },
  {
    id: 3,
    player: "Joshua Lubwama",
    date: "18/9/2023",
    image: "/images/joshua.jpeg",
    fromTeam: {
      name: "Wakiso Giants",
      logo: "/images/wakiso giants.jpeg",
    },
    toTeam: {
      name: "URA",
      logo: "/images/ura.png",
    }
  }
]

export function TransfersView() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">All Transfers</h2>
      {transfers.map((transfer) => (
        <Card key={transfer.id}>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image
                  src={transfer.image}
                  alt={transfer.player}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{transfer.player}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <Image
                    src={transfer.fromTeam.logo}
                    alt={transfer.fromTeam.name}
                    width={24}
                    height={24}
                  />
                  <ArrowRight className="h-4 w-4" />
                  <Image
                    src={transfer.toTeam.logo}
                    alt={transfer.toTeam.name}
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{transfer.date}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

