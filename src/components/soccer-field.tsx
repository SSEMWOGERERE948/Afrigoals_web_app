import React from 'react'
import Image from 'next/image'

interface Player {
  name: string;
  shirtNumber: number;
  position: string;
  image: string;
}

interface Team {
  name: string;
  players: Player[];
}

interface SoccerFieldProps {
  homeTeam: Team;
  awayTeam: Team;
}

export const SoccerField: React.FC<SoccerFieldProps> = ({ homeTeam, awayTeam }) => {
  const renderPlayer = (player: Player, isHomeTeam: boolean, index: number) => {
    const positions = {
      GK: { top: isHomeTeam ? '90%' : '10%', left: '50%' },
      DEF: { 
        top: isHomeTeam ? '75%' : '25%', 
        left: `${index * 25 + 12.5}%`
      },
      MID: { 
        top: isHomeTeam ? '60%' : '40%', 
        left: `${index * 25 + 12.5}%`
      },
      FWD: { 
        top: isHomeTeam ? '40%' : '60%', 
        left: `${index * 33 + 16.5}%`
      },
    }

    const positionKey = player.position as keyof typeof positions
    const { top, left } = positions[positionKey] || { top: '50%', left: '50%' }
    const color = isHomeTeam ? 'text-blue-500' : 'text-red-500'

    return (
      <div
        key={`${player.name}-${player.shirtNumber}`}
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${color} flex flex-col items-center`}
        style={{ top, left }}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden mb-1">
          <Image
            src={player.image}
            alt={player.name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="text-xs font-bold">{player.shirtNumber}</div>
        <div className="text-xs">{player.name}</div>
      </div>
    )
  }

  const renderTeam = (team: Team, isHomeTeam: boolean) => {
    const positionOrder = ['GK', 'DEF', 'MID', 'FWD']
    return positionOrder.flatMap((position, index) => 
      team.players
        .filter(player => player.position === position)
        .map((player, playerIndex) => 
          renderPlayer(player, isHomeTeam, position === 'GK' ? 0 : playerIndex)
        )
    )
  }

  return (
    <div className="w-full aspect-[2/3] bg-green-600 relative">
      {/* Field outline */}
      <div className="absolute inset-1 border-2 border-white" />
      
      {/* Center circle */}
      <div className="absolute top-1/2 left-1/2 w-1/4 h-1/6 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full" />
      
      {/* Center line */}
      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white" />
      
      {/* Penalty areas */}
      <div className="absolute top-0 left-1/4 right-1/4 h-1/5 border-2 border-t-0 border-white" />
      <div className="absolute bottom-0 left-1/4 right-1/4 h-1/5 border-2 border-b-0 border-white" />
      
      {/* Goal areas */}
      <div className="absolute top-0 left-[38%] right-[38%] h-[8%] border-2 border-t-0 border-white" />
      <div className="absolute bottom-0 left-[38%] right-[38%] h-[8%] border-2 border-b-0 border-white" />
      
      {/* Corner arcs */}
      <div className="absolute top-0 left-0 w-[5%] h-[3%] border-r-2 border-b-2 border-white rounded-br-full" />
      <div className="absolute top-0 right-0 w-[5%] h-[3%] border-l-2 border-b-2 border-white rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-[5%] h-[3%] border-r-2 border-t-2 border-white rounded-tr-full" />
      <div className="absolute bottom-0 right-0 w-[5%] h-[3%] border-l-2 border-t-2 border-white rounded-tl-full" />
      
      {/* Penalty spots */}
      <div className="absolute top-[15%] left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2" />
      <div className="absolute bottom-[15%] left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2" />

      {/* Render players */}
      {renderTeam(homeTeam, true)}
      {renderTeam(awayTeam, false)}
    </div>
  )
}
