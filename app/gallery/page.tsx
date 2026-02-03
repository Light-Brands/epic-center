'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { VideoReel } from '@/components/video/VideoReel'

export default function GalleryPage() {
  return (
    <div className="relative w-full h-[100dvh] bg-black">
      {/* Prev / Next overlay */}
      <Link
        href="/technology/data"
        className="absolute top-5 left-5 z-30 flex items-center gap-2
                   text-white/60 hover:text-white transition-colors
                   font-accent text-xs uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4" />
        Data & Intelligence
      </Link>

      <Link
        href="/team"
        className="absolute top-5 right-5 z-30 flex items-center gap-2
                   text-white/60 hover:text-white transition-colors
                   font-accent text-xs uppercase tracking-widest"
      >
        Team
        <ArrowRight className="w-4 h-4" />
      </Link>

      <VideoReel />
    </div>
  )
}
