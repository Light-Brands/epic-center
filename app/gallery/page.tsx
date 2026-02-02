'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { VideoReel } from '@/components/video/VideoReel'

export default function GalleryPage() {
  return (
    <div className="relative w-full h-[100dvh] bg-black">
      {/* Back button overlaid on reel */}
      <Link
        href="/properties/riviera-maya-jungle-estate"
        className="absolute top-5 left-5 z-30 flex items-center gap-2
                   text-white/60 hover:text-white transition-colors
                   font-accent text-xs uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      <VideoReel />
    </div>
  )
}
