import { HeroSection } from '@/components/home/hero-section'
import { AboutSection } from '@/components/home/about-section'
import { KnowledgeHub } from '@/components/home/knowledge-hub'
import { SponsorCarousel } from '@/components/home/sponsor-carousel'
import { GallerySection } from '@/components/home/gallery-section'
import { BlogSection } from '@/components/home/blog-section'

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <KnowledgeHub />
      <SponsorCarousel />
      <GallerySection />
      <BlogSection />
    </div>
  )
}