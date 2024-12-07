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
  formation: keyof typeof STANDARD_FORMATIONS;
}

interface SoccerFieldProps {
  homeTeam: Team;
  awayTeam: Team;
}

interface FormationConfig {
  name: string;
  positions: {
    DEF: number;
    MID: number;
    FWD: number;
  };
  description?: string;
}

const STANDARD_FORMATIONS: { [key: string]: FormationConfig } = {
  "4-4-2": {
    name: "4-4-2",
    positions: {
      DEF: 4,
      MID: 4,
      FWD: 2
    },
    description: "Classic balanced formation with two strikers"
  },
  "4-3-3": {
    name: "4-3-3",
    positions: {
      DEF: 4,
      MID: 3,
      FWD: 3
    },
    description: "Attacking formation with three forwards"
  },
  "4-2-3-1": {
    name: "4-2-3-1",
    positions: {
      DEF: 4,
      MID: 5,
      FWD: 1
    },
    description: "Modern formation with double pivot"
  },
  "3-5-2": {
    name: "3-5-2",
    positions: {
      DEF: 3,
      MID: 5,
      FWD: 2
    },
    description: "Formation with wing-backs and three center-backs"
  },
  "3-4-3": {
    name: "3-4-3",
    positions: {
      DEF: 3,
      MID: 4,
      FWD: 3
    },
    description: "Attacking formation with three forwards and back three"
  },
  "5-3-2": {
    name: "5-3-2",
    positions: {
      DEF: 5,
      MID: 3,
      FWD: 2
    },
    description: "Defensive formation with five at the back"
  },
  "4-5-1": {
    name: "4-5-1",
    positions: {
      DEF: 4,
      MID: 5,
      FWD: 1
    },
    description: "Defensive formation with packed midfield"
  }
};

const calculateHorizontalPosition = (index: number, total: number) => {
  return `${(index / total) * 100}%`;
};

export const SoccerField: React.FC<SoccerFieldProps> = ({ homeTeam, awayTeam }) => {
  const getFormationConfig = (formationKey: keyof typeof STANDARD_FORMATIONS): FormationConfig => {
    return STANDARD_FORMATIONS[formationKey];
  };

  const getPositionCoordinates = (
    position: string,
    index: number,
    isHomeTeam: boolean,
    formation: FormationConfig
  ) => {
    const getMidfielderPosition = (index: number, total: number) => {
      if (total === 5) {
        if (index < 2) {
          return {
            top: isHomeTeam ? '70%' : '30%',
            left: calculateHorizontalPosition(index, 2)
          };
        }
        return {
          top: isHomeTeam ? '60%' : '40%',
          left: calculateHorizontalPosition(index - 2, 3)
        };
      }
      
      return {
        top: isHomeTeam ? '65%' : '35%',
        left: calculateHorizontalPosition(index, total)
      };
    };

    const positions = {
      GK: {
        top: isHomeTeam ? '90%' : '10%',
        left: '50%'
      },
      DEF: {
        top: isHomeTeam ? '75%' : '25%',
        left: calculateHorizontalPosition(index, formation.positions.DEF)
      },
      MID: getMidfielderPosition(index, formation.positions.MID),
      FWD: {
        top: isHomeTeam ? '55%' : '45%',
        left: calculateHorizontalPosition(index, formation.positions.FWD)
      }
    };

    return positions[position as keyof typeof positions] || positions.GK;
  };

  const renderPlayer = (player: Player, isHomeTeam: boolean, index: number) => {
    const positions = {
      GK: { 
        top: isHomeTeam ? '90%' : '10%', 
        left: '50%' 
      },
      DEF: { 
        top: isHomeTeam ? '75%' : '25%',
        left: (index: number, total: number) => {
          if (total === 4) return `${20 + index * 20}%`
          if (total === 3) return `${25 + index * 25}%`
          return '50%'
        }
      },
      MID: { 
        top: isHomeTeam ? '65%' : '35%',
        left: (index: number, total: number) => {
          if (total === 3) return `${25 + index * 25}%`
          if (total === 4) return `${20 + index * 20}%`
          return '50%'
        }
      },
      FWD: { 
        top: isHomeTeam ? '55%' : '45%',
        left: (index: number, total: number) => {
          if (total === 3) return `${25 + index * 25}%`
          if (total === 2) return `${33 + index * 33}%`
          if (total === 1) return '50%'
          return '50%'
        }
      },
    }

    const positionKey = player.position as keyof typeof positions
    const positionPlayers = homeTeam.players.filter(p => p.position === player.position).length
    const left = typeof positions[positionKey].left === 'function' 
      ? positions[positionKey].left(index, positionPlayers)
      : positions[positionKey].left
    
    const { top } = positions[positionKey]
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
