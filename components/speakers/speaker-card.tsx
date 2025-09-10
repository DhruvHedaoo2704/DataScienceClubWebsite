'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

interface Speaker {
  id: string
  name: string
  title: string
  image: string
  bio: string
  videoUrl: string
  linkedin: string
  twitter: string
  website: string
}

interface SpeakerCardProps {
  speaker: Speaker
  onClick: () => void
}

export function SpeakerCard({ speaker, onClick }: SpeakerCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all group">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">Click to learn more</p>
            </div>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-1">{speaker.name}</h3>
          <p className="text-muted-foreground text-sm">{speaker.title}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}