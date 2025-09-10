'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { BarChart, Users, Lightbulb } from 'lucide-react'

export function AboutSection() {
  const { ref, controls } = useScrollAnimation()

  const features = [
    {
      icon: BarChart,
      title: 'Data-Driven Insights',
      description: 'Learn from industry experts about the latest trends in data science and analytics.'
    },
    {
      icon: Users,
      title: 'Network & Collaborate',
      description: 'Connect with like-minded professionals and build lasting relationships.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Showcase',
      description: 'Discover groundbreaking technologies and methodologies shaping the future.'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Data Summit 2025</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for the most comprehensive data science conference of the year. 
            Two days of keynotes, workshops, and networking opportunities with the brightest minds in data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.6, delay: index * 0.2 } 
                }
              }}
              className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}