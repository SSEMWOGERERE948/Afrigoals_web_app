"use client"

import { useState } from "react"
import { Home, Newspaper, Trophy, Heart, ShoppingBag, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function BottomNavigation() {
  const [active, setActive] = useState("shop")

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t h-16 px-4">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-6 gap-1 h-full">
          <NavButton
            icon={<Home className="h-5 w-5" />}
            label="Matches"
            isActive={active === "matches"}
            onClick={() => setActive("matches")}
          />
          <NavButton
            icon={<Newspaper className="h-5 w-5" />}
            label="News"
            isActive={active === "news"}
            onClick={() => setActive("news")}
          />
          <NavButton
            icon={<Trophy className="h-5 w-5" />}
            label="Leagues"
            isActive={active === "leagues"}
            onClick={() => setActive("leagues")}
          />
          <NavButton
            icon={<Heart className="h-5 w-5" />}
            label="Favourite"
            isActive={active === "favourite"}
            onClick={() => setActive("favourite")}
          />
          <NavButton
            icon={<ShoppingBag className="h-5 w-5" />}
            label="Shop"
            isActive={active === "shop"}
            onClick={() => setActive("shop")}
          />
          <NavButton
            icon={<Menu className="h-5 w-5" />}
            label="More"
            isActive={active === "more"}
            onClick={() => setActive("more")}
          />
        </div>
      </div>
    </nav>
  )
}

interface NavButtonProps {
  icon: React.ReactNode
  label: string
  isActive: boolean
  onClick: () => void
}

function NavButton({ icon, label, isActive, onClick }: NavButtonProps) {
  return (
    <Button
      variant="ghost"
      className={`flex flex-col items-center justify-center h-full space-y-1 ${
        isActive ? "text-primary" : "text-muted-foreground"
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Button>
  )
}

