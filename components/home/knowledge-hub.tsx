'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Mic, Wrench, GraduationCap } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export function KnowledgeHub() {
  const { ref, controls } = useScrollAnimation()

  const sections = [
    {
      icon: Mic,
      title: "Speaker's Corner",
      description: "Exclusive interviews and insights from our keynote speakers",
      content: "Get an inside look at the minds shaping the future of data science through candid conversations and expert perspectives."
    },
    {
      icon: Wrench,
      title: "Toolbox",
      description: "Essential tools and frameworks for modern data professionals",
      content: "Discover the latest libraries, platforms, and methodologies that are revolutionizing how we work with data."
    },
    {
      icon: GraduationCap,
      title: "Beginner's Track",
      description: "Foundation courses for those starting their data journey",
      content: "Whether you're new to data science or looking to refresh your fundamentals, we've got you covered with comprehensive learning paths."
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-muted/50">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Knowledge Hub</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive resource center designed to enhance your learning experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
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
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <section.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{section.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}