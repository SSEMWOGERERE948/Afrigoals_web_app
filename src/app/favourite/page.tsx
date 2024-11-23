"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { TransfersView } from "@/components/favourite/transfers-view"
import { PlayersView } from "@/components/favourite/players-view"
import { TeamsView } from "@/components/favourite/teams-view"
import { BottomNavigation } from "@/components/shop/bottom-navigation"

export default function FavouritePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Favourite</h1>
        <Tabs defaultValue="teams" className="w-full">
          <TabsList className="w-full justify-start rounded-md mb-6">
            <TabsTrigger value="teams" className="flex-1">Teams</TabsTrigger>
            <TabsTrigger value="players" className="flex-1">Players</TabsTrigger>
            <TabsTrigger value="transfers" className="flex-1">Transfers</TabsTrigger>
          </TabsList>
          <TabsContent value="transfers" className="m-0">
            <TransfersView />
          </TabsContent>
          <TabsContent value="players" className="m-0">
            <PlayersView />
          </TabsContent>
          <TabsContent value="teams" className="m-0">
            <TeamsView />
          </TabsContent>
        </Tabs>
      </div>
      <BottomNavigation />
    </div>
  )
}
