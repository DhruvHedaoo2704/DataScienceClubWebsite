'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

interface SpeakerModalProps {
  speaker: Speaker | null
  onClose: () => void
}

export function SpeakerModal({ speaker, onClose }: SpeakerModalProps) {
  if (!speaker) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative p-6 md:p-8">
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full aspect-square object-cover rounded-xl mb-6"
                />
                
                <div className="flex space-x-4">
                  <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                  <a href={speaker.twitter} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                  </a>
                  <a href={speaker.website} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Website
                    </Button>
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{speaker.name}</h2>
                  <p className="text-lg text-muted-foreground">{speaker.title}</p>
                </div>

                <div className="prose prose-gray dark:prose-invert">
                  <p>{speaker.bio}</p>
                </div>

                <div className="aspect-video">
                  <iframe
                    src={speaker.videoUrl}
                    title={`${speaker.name} presentation`}
                    className="w-full h-full rounded-lg"
                    allow="autoplay; fullscreen; picture-in-picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}