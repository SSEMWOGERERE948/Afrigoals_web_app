"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export function PerformanceDashboard() {
  const [selectedTeam, setSelectedTeam] = useState("")

  // This would typically come from an API call based on the selected team
  const performanceData = [
    { name: 'Goals', value: 30 },
    { name: 'Assists', value: 20 },
    { name: 'Clean Sheets', value: 10 },
    { name: 'Wins', value: 15 },
    { name: 'Draws', value: 5 },
    { name: 'Losses', value: 5 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Dashboard</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Select value={selectedTeam} onValueChange={setSelectedTeam}>
            <SelectTrigger>
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
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

