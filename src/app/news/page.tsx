"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import { BottomNavigation } from "@/components/shop/bottom-navigation"

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">NEWS</h1>
        
        <Tabs defaultValue="transfers" className="w-full">
          <TabsList className="w-full justify-start rounded-md mb-6">
            <TabsTrigger value="for-you" className="flex-1">For you</TabsTrigger>
            <TabsTrigger value="latest" className="flex-1">Latest</TabsTrigger>
            <TabsTrigger value="transfers" className="flex-1">Transfers</TabsTrigger>
          </TabsList>

          <TabsContent value="transfers" className="space-y-6">
            <Button
              variant="outline"
              className="w-full flex items-center justify-between p-6 rounded-full text-lg"
            >
              ALL TRANSFERS
              <ArrowRight className="h-5 w-5" />
            </Button>

            <div className="space-y-6">
              <h2 className="text-xl text-gray-600">Top Transfers</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <TransferCard
                  date="18/9/2023"
                  playerName="Allan Okello"
                  playerImage="/images/allan.jpeg"
                  fromTeamLogo="/images/kcca.png"
                  toTeamLogo="/images/vipers.jpeg"
                />
                <TransferCard
                  date="18/9/2023"
                  playerName="Ssali Alpha"
                  playerImage="/images/sali.jpg"
                  fromTeamLogo="/images/proline.jpeg"
                  toTeamLogo="/images/express.jpeg"
                />
              </div>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="/images/joshua.jpeg"
                    alt="Joshua Lubwama"
                    width={400}
                    height={200}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-center">
                      Joshua Lubwama leaves the Wakiso Giants side for URA
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="for-you">
            <div className="text-center text-gray-500 py-8">
              Personalized news will appear here
            </div>
          </TabsContent>

          <TabsContent value="latest">
            <div className="text-center text-gray-500 py-8">
              Latest news will appear here
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <BottomNavigation />
    </div>
  )
}

interface TransferCardProps {
  date: string
  playerName: string
  playerImage: string
  fromTeamLogo: string
  toTeamLogo: string
}

function TransferCard({
  date,
  playerName,
  playerImage,
  fromTeamLogo,
  toTeamLogo,
}: TransferCardProps) {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="text-sm text-gray-500">{date}</div>
        <h3 className="font-semibold">{playerName}</h3>
        <div className="flex items-center gap-2">
          <Image
            src={fromTeamLogo}
            alt="From team"
            width={32}
            height={32}
            className="object-contain"
          />
          <ArrowRight className="h-4 w-4 text-gray-400" />
          <Image
            src={toTeamLogo}
            alt="To team"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <div className="relative w-20 h-20 mx-auto">
          <Image
            src={playerImage}
            alt={playerName}
            fill
            className="object-cover rounded-full"
          />
        </div>
      </CardContent>
    </Card>
  )
}

