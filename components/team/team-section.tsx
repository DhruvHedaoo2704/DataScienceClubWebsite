'use client'

import { motion } from 'framer-motion'
import { TeamMemberCard } from './team-member-card'

interface TeamMember {
  name: string
  role: string
  image: string
  description: string
}

interface TeamSectionProps {
  title: string
  members: TeamMember[]
  delay?: number
}

export function TeamSection({ title, members, delay = 0 }: TeamSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="mb-16"
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <TeamMemberCard
            key={`${member.name}-${index}`}
            member={member}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  )
}