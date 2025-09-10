import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Data Summit 2025 | Premier Data Science Conference',
  description: 'Join industry leaders, researchers, and practitioners for two days of cutting-edge insights and networking at Data Summit 2025.',
  keywords: 'data science, machine learning, AI, conference, summit, 2025',
  authors: [{ name: 'Data Summit Team' }],
  openGraph: {
    title: 'Data Summit 2025',
    description: 'The premier conference for data science professionals',
    url: 'https://datasummit2025.com',
    siteName: 'Data Summit 2025',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={['light', 'dark', 'matrix']}
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}