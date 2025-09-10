'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { blogPosts } from '@/lib/data'
import { Calendar, User } from 'lucide-react'

export function BlogSection() {
  const { ref, controls } = useScrollAnimation()

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Behind the Scenes</h2>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest news and preparations for the summit
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    transition: { duration: 0.6, delay: index * 0.2 } 
                  }
                }}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <Card className={`w-full max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.content}</p>
                  </CardContent>
                </Card>

                <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}