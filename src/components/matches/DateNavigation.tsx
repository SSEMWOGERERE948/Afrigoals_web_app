"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { format, addDays, subDays, isSameDay } from 'date-fns'

interface DateNavigationProps {
  selectedDate: Date | undefined
  onDateChange: (date: Date) => void
}

export default function DateNavigation({ selectedDate, onDateChange }: DateNavigationProps) {
  const [dates, setDates] = useState<Date[]>([])

  useEffect(() => {
    if (selectedDate) {
      const newDates = [
        subDays(selectedDate, 1),
        selectedDate,
        addDays(selectedDate, 1),
        addDays(selectedDate, 2),
      ]
      setDates(newDates)
    }
  }, [selectedDate])

  const handlePrevious = () => {
    if (selectedDate) {
      onDateChange(subDays(selectedDate, 1))
    }
  }

  const handleNext = () => {
    if (selectedDate) {
      onDateChange(addDays(selectedDate, 1))
    }
  }

  return (
    <div className="flex items-center justify-between mb-6 border-b">
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrevious}
        aria-label="Previous date"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="flex space-x-6">
        {dates.map((date, index) => (
          <Button
            key={date.toISOString()}
            variant="ghost"
            className={`pb-2 px-1 ${
              selectedDate && isSameDay(date, selectedDate)
                ? 'border-b-2 border-primary text-primary'
                : 'text-muted-foreground'
            }`}
            onClick={() => onDateChange(date)}
            aria-pressed={selectedDate && isSameDay(date, selectedDate)}
          >
            {index === 0 && 'Yesterday'}
            {index === 1 && 'Today'}
            {index === 2 && 'Tomorrow'}
            {index === 3 && format(date, 'EEE dd')}
          </Button>
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleNext}
        aria-label="Next date"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

