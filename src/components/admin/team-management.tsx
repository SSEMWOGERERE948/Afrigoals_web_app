"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Player {
  name: string;
  shirtNumber: number;
  position: string;
}

export function TeamManagement() {
  const [selectedTeam, setSelectedTeam] = useState("")
  const [coach, setCoach] = useState("")
  const [players, setPlayers] = useState<Player[]>([])
  const [newPlayer, setNewPlayer] = useState<Player>({ name: "", shirtNumber: 0, position: "" })

  const handleAddPlayer = () => {
    if (newPlayer.name && newPlayer.shirtNumber && newPlayer.position) {
      setPlayers([...players, newPlayer])
      setNewPlayer({ name: "", shirtNumber: 0, position: "" })
    }
  }

  const handleSave = () => {
    console.log("Saving team data:", { selectedTeam, coach, players })
    // Here you would typically make an API call to save the data
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="team-select">Select Team</Label>
          <Select value={selectedTeam} onValueChange={setSelectedTeam}>
            <SelectTrigger id="team-select">
              <SelectValue placeholder="Select a team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vipers">Vipers</SelectItem>
              <SelectItem value="kcca">KCCA</SelectItem>
              <SelectItem value="express">Express</SelectItem>
              {/* Add more teams as needed */}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="coach">Coach</Label>
          <Input
            id="coach"
            value={coach}
            onChange={(e) => setCoach(e.target.value)}
            placeholder="Enter coach name"
          />
        </div>
        <div className="space-y-2">
          <Label>Add Player</Label>
          <Input
            value={newPlayer.name}
            onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
            placeholder="Player name"
          />
          <Input
            type="number"
            value={newPlayer.shirtNumber || ""}
            onChange={(e) => setNewPlayer({ ...newPlayer, shirtNumber: parseInt(e.target.value) })}
            placeholder="Shirt number"
          />
          <Select value={newPlayer.position} onValueChange={(value) => setNewPlayer({ ...newPlayer, position: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GK">Goalkeeper</SelectItem>
              <SelectItem value="DEF">Defender</SelectItem>
              <SelectItem value="MID">Midfielder</SelectItem>
              <SelectItem value="FWD">Forward</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleAddPlayer}>Add Player</Button>
        </div>
        <div className="space-y-2">
          <Label>Players</Label>
          <ul className="list-disc pl-5">
            {players.map((player, index) => (
              <li key={index}>
                {player.name} - #{player.shirtNumber} ({player.position})
              </li>
            ))}
          </ul>
        </div>
        <Button onClick={handleSave}>Save Team Data</Button>
      </CardContent>
    </Card>
  )
}

