'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Clock, User } from 'lucide-react'

interface Session {
  time: string
  title: string
  speaker: string
  description: string
}

interface ScheduleItemProps {
  session: Session
  index: number
}

export function ScheduleItem({ session, index }: ScheduleItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-xl mb-2">{session.title}</CardTitle>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{session.time}</span>
              </div>
              {session.speaker && (
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{session.speaker}</span>
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{session.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}