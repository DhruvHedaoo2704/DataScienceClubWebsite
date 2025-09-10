'use client'

import { motion } from 'framer-motion'
import { RegistrationForm } from '@/components/register/registration-form'

export default function Register() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Us at Data Summit 2025</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't miss this opportunity to learn, network, and advance your career in data science.
          </p>
        </motion.div>

        <RegistrationForm />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 p-6 bg-card rounded-xl border border-border"
        >
          <h3 className="text-2xl font-semibold mb-4">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-medium mb-2">Full Access</h4>
              <p className="text-muted-foreground">All keynotes, workshops, and networking events</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Materials</h4>
              <p className="text-muted-foreground">Conference swag, slides, and exclusive resources</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Networking</h4>
              <p className="text-muted-foreground">Coffee breaks, meals, and evening reception</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}