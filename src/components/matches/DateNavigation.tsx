"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function DateNavigation() {
  const dates = ['Yesterday', 'Today', 'Tomorrow', 'Thu 16']
  const [selectedIndex, setSelectedIndex] = useState(1) // Default to 'Today'

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < dates.length - 1 ? prev + 1 : prev))
  }

  return (
    <div className="flex items-center justify-between mb-6 border-b">
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrevious}
        disabled={selectedIndex === 0}
        aria-label="Previous date"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="flex space-x-6">
        {dates.map((date, index) => (
          <Button
            key={date}
            variant="ghost"
            className={`pb-2 px-1 ${
              index === selectedIndex
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground'
            }`}
            onClick={() => setSelectedIndex(index)}
            aria-pressed={index === selectedIndex}
          >
            {date}
          </Button>
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleNext}
        disabled={selectedIndex === dates.length - 1}
        aria-label="Next date"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

