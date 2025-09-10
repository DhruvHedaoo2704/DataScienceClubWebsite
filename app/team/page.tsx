'use client'

import { motion } from 'framer-motion'
import { TeamSection } from '@/components/team/team-section'
import { teamMembers } from '@/lib/data'

export default function Team() {
  const teamSections = [
    { title: 'Faculty Leadership', members: teamMembers.faculty, key: 'faculty' },
    { title: 'Event Management', members: teamMembers.eventManagement, key: 'eventManagement' },
    { title: 'Technical Team', members: teamMembers.technical, key: 'technical' },
    { title: 'Public Relations', members: teamMembers.pr, key: 'pr' },
    { title: 'Social Media', members: teamMembers.socialMedia, key: 'socialMedia' },
    { title: 'Human Resources', members: teamMembers.hr, key: 'hr' },
    { title: 'Design Team', members: teamMembers.design, key: 'design' }
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The dedicated professionals working tirelessly to bring you an exceptional conference experience.
          </p>
        </motion.div>

        <div className="space-y-16">
          {teamSections.map((section, index) => (
            <TeamSection
              key={section.key}
              title={section.title}
              members={section.members}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}