'use client'

import { motion } from 'framer-motion'
import { ScheduleTabs } from '@/components/schedule/schedule-tabs'

export default function Schedule() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Event Schedule</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two packed days of keynotes, workshops, and networking sessions designed to advance your data science expertise.
          </p>
        </motion.div>

        <ScheduleTabs />
      </div>
    </div>
  )
}