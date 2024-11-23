import React from 'react'

export const SoccerField: React.FC = () => {
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
    </div>
  )
}

