'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

interface TeamMember {
  name: string
  role: string
  image: string
  description: string
}

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all group">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <CardContent className="p-6 text-center">
          <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
          <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
          <p className="text-muted-foreground text-sm">{member.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}