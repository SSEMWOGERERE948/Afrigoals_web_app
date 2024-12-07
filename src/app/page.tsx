"use client"

import { useState } from 'react'
import MatchesList from '@/components/leagues/MatchesList'
import DateNavigation from '@/components/matches/DateNavigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, CalendarIcon } from 'lucide-react'

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // Implement search logic here
    console.log('Searching for:', query)
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">AfriGoals</h1>
        <div className="flex space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Select date">
                <CalendarIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 p-2">
                <h2 className="text-lg font-semibold">Select Date</h2>
                <Calendar
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date as Date)}
                  className="rounded-md border shadow"
                />
              </div>
            </SheetContent>
          </Sheet>
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Search">
            <Search className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {isSearchOpen && (
        <div className="mb-6">
          <Input
            type="search"
            placeholder="Search matches..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full"
          />
        </div>
      )}
      <DateNavigation selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <MatchesList searchQuery={searchQuery} selectedDate={selectedDate} />
    </div>
  )
}

