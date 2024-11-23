"use client"

import { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"

export function StadiumMap({ matchId }: { matchId: string }) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: "weekly",
      })

      const { Map } = await loader.importLibrary("maps")

      // Example coordinates (replace with actual stadium coordinates)
      const stadiumLocation = { lat: 0.3136, lng: 32.5811 }

      const map = new Map(mapRef.current as HTMLElement, {
        center: stadiumLocation,
        zoom: 15,
      })

    //   new google.maps.Marker({
    //     position: stadiumLocation,
    //     map: map,
    //     title: "Stadium Location",
    //   })
    }

    initMap()
  }, [matchId])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Stadium Location</h2>
      <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
    </div>
  )
}

