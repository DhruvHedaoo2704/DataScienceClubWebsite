'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScheduleItem } from './schedule-item'
import { scheduleData } from '@/lib/data'

export function ScheduleTabs() {
  return (
    <div className="max-w-4xl mx-auto">
      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="day1" className="text-lg">Day 1 - March 25</TabsTrigger>
          <TabsTrigger value="day2" className="text-lg">Day 2 - March 26</TabsTrigger>
        </TabsList>
        
        <TabsContent value="day1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {scheduleData.day1.map((session, index) => (
              <ScheduleItem
                key={`day1-${index}`}
                session={session}
                index={index}
              />
            ))}
          </motion.div>
        </TabsContent>
        
        <TabsContent value="day2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {scheduleData.day2.map((session, index) => (
              <ScheduleItem
                key={`day2-${index}`}
                session={session}
                index={index}
              />
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}