"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TransportBooking({ matchId }: { matchId: string }) {
  const [transportType, setTransportType] = useState("bus")
  const [pickupLocation, setPickupLocation] = useState("")

  const handleBooking = () => {
    // Here you would typically make an API call to book the transport
    console.log(`Booking ${transportType} from ${pickupLocation} for match ${matchId}`)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Book Transport</h2>
      <div className="space-y-2">
        <Label htmlFor="transport-type">favourite Transport Provider @discounted fees</Label>
        <Select value={transportType} onValueChange={setTransportType}>
          <SelectTrigger id="transport-type">
            <SelectValue placeholder="Select transport type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bus">Safe Boda</SelectItem>
            <SelectItem value="taxi">Faras</SelectItem>
            <SelectItem value="shuttle">Uber</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="pickup-location">Pickup Location</Label>
        <Input
          id="pickup-location"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          placeholder="Enter your pickup location"
        />
      </div>
      <Button onClick={handleBooking}>Book Transport</Button>
    </div>
  )
}

