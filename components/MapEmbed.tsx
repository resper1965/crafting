'use client'

import { useState } from 'react'

interface MapEmbedProps {
  address: string
  className?: string
}

export default function MapEmbed({ address, className = '' }: MapEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  
  // Codificar endereço para URL do Google Maps Embed
  const encodedAddress = encodeURIComponent(address)
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}&q=${encodedAddress}`
  
  // Fallback: usar iframe sem API key (funciona, mas com limitações)
  const fallbackUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`
  
  return (
    <div className={`relative w-full h-[400px] rounded-sm overflow-hidden border border-crafting-verde/10 ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-crafting-grafite">
          <div className="text-crafting-cinzaAlvo/60 font-light text-sm">Carregando mapa...</div>
        </div>
      )}
      <iframe
        src={fallbackUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoading(false)}
        className="absolute inset-0"
        title="Localização Crafting Solutions"
      />
    </div>
  )
}
