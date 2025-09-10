'use client'

import { motion } from 'framer-motion'
import { sponsors } from '@/lib/data'

export function SponsorCarousel() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Sponsors</h2>
          <p className="text-xl text-muted-foreground">
            Proudly supported by industry-leading organizations
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8"
          >
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-md flex items-center justify-center grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain p-4"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}