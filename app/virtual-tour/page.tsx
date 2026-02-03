'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { Footer } from '@/components/layout'
import { PropertyGallery } from '@/components/gallery/PropertyGallery'

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function VirtualTourPage() {
  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-500" />
            <div className="inline-flex items-center gap-2.5">
              <Play className="w-3.5 h-3.5 text-secondary-600" />
              <p className="font-accent text-sm uppercase tracking-[0.3em] text-secondary-600">
                Virtual Tour
              </p>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-4">
            Explore the Property
          </h2>

          <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
            Take an immersive tour of Rancho Paraiso Oasis — a 15-room luxury jungle compound
            in Akumal, Riviera Maya. Browse the full video walkthrough, property reels, and
            115-photo gallery.
          </p>
        </motion.section>

        {/* YouTube Video Embed */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="mb-16"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-neutral-900/15 border border-neutral-200/50">
            <iframe
              src="https://www.youtube.com/embed/tzPCRxYmrfY?si=59AA_x0VoVHQRdAN"
              title="Rancho Paraiso Oasis — Virtual Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.section>
      </div>

      {/* Property Gallery (Videos + Photos) */}
      <PropertyGallery />

      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Page Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/properties/riviera-maya-jungle-estate" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">The Property</span>
          </Link>
          <Link href="/technology">
            <Button variant="primary">
              The Platform
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
