'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SpeakerCard } from '@/components/speakers/speaker-card'
import { SpeakerModal } from '@/components/speakers/speaker-modal'
import { speakers } from '@/lib/data'

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<typeof speakers[0] | null>(null)

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Speakers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry experts and thought leaders who are shaping the future of data science and analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SpeakerCard
                speaker={speaker}
                onClick={() => setSelectedSpeaker(speaker)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <SpeakerModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </div>
  )
}