"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TicketBooking({ matchId }: { matchId: string }) {
  const [quantity, setQuantity] = useState(1)
  const [ticketType, setTicketType] = useState("general")

  const handleBooking = () => {
    // Here you would typically make an API call to book the tickets
    console.log(`Booking ${quantity} ${ticketType} tickets for match ${matchId}`)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Book Tickets</h2>
      <div className="space-y-2">
        <Label htmlFor="ticket-type">Ticket Type</Label>
        <Select value={ticketType} onValueChange={setTicketType}>
          <SelectTrigger id="ticket-type">
            <SelectValue placeholder="Select ticket type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Admission</SelectItem>
            <SelectItem value="vip">VIP</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="quantity">Quantity</Label>
        <Input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <Button onClick={handleBooking}>Book Tickets</Button>
    </div>
  )
}

