'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Expand, Camera } from 'lucide-react'
import { VideoSlider } from '@/components/video/VideoSlider'

// ─────────────────────────────────────────────────────────────
// Image data
// ─────────────────────────────────────────────────────────────
const TOTAL_IMAGES = 115
const BATCH_SIZE = 12

const images = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
  id: i + 1,
  thumb: `/gallery-optimized/thumbs/Rancho-Paraiso-Oasis-Akumal-${i + 1}.webp`,
  full: `/gallery-optimized/full/Rancho-Paraiso-Oasis-Akumal-${i + 1}.webp`,
  alt: `Rancho Paraiso Oasis - View ${i + 1}`,
}))

// ─────────────────────────────────────────────────────────────
// Animation variants (matching site patterns)
// ─────────────────────────────────────────────────────────────
const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}


// ─────────────────────────────────────────────────────────────
// Lightbox Component
// ─────────────────────────────────────────────────────────────
function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const img = images[index]
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const [imgLoaded, setImgLoaded] = useState(false)

  // Reset load state when image changes
  useEffect(() => {
    setImgLoaded(false)
  }, [index])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  // Preload neighbors
  useEffect(() => {
    const preload = (idx: number) => {
      if (idx >= 0 && idx < TOTAL_IMAGES) {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.as = 'image'
        link.href = images[idx].full
        document.head.appendChild(link)
      }
    }
    preload(index - 1)
    preload(index + 1)
  }, [index])

  // Touch / swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return
    const dx = e.changedTouches[0].clientX - touchStart.current.x
    const dy = e.changedTouches[0].clientY - touchStart.current.y
    touchStart.current = null
    // Only count horizontal swipes (ignore vertical scroll)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      dx > 0 ? onPrev() : onNext()
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-8 py-4 bg-gradient-to-b from-black/50 to-transparent">
        <span className="font-accent text-xs sm:text-sm text-white/70 tracking-wider tabular-nums">
          {index + 1} <span className="text-white/40 mx-1">/</span> {TOTAL_IMAGES}
        </span>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all duration-200"
          aria-label="Close gallery"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Image container */}
      <div
        className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-16 py-20"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={img.id}
            className="relative w-full h-full max-w-5xl max-h-[80vh]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Loading shimmer */}
            {!imgLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-white/60 animate-spin" />
              </div>
            )}
            <Image
              src={img.full}
              alt={img.alt}
              fill
              className={`object-contain transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
              onLoad={() => setImgLoaded(true)}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        disabled={index === 0}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white disabled:opacity-20 disabled:pointer-events-none transition-all duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        disabled={index === TOTAL_IMAGES - 1}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white disabled:opacity-20 disabled:pointer-events-none transition-all duration-200"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-0.5 bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-secondary-400 to-accent-400"
          initial={false}
          animate={{ width: `${((index + 1) / TOTAL_IMAGES) * 100}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// Unified Property Showcase (Videos + Gallery)
// ─────────────────────────────────────────────────────────────
export function PropertyGallery() {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 })

  const visible = images.slice(0, visibleCount)
  const hasMore = visibleCount < TOTAL_IMAGES
  const remaining = TOTAL_IMAGES - visibleCount

  const showMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, TOTAL_IMAGES))
  }, [])

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
  }, [])
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null && prev < TOTAL_IMAGES - 1 ? prev + 1 : prev
    )
  }, [])

  return (
    <>
      <section
        ref={sectionRef}
        className="py-16 sm:py-24 md:py-32 bg-canvas-muted relative overflow-hidden"
      >
        {/* Decorative warm glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-secondary-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-500/5 blur-[120px] pointer-events-none" />

        {/* ── Section Header ── */}
        <motion.div
          className="w-full sm:w-[70vw] mx-auto px-5 sm:px-0 text-center mb-10 sm:mb-14"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={sectionFade}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary-500" />
            <div className="inline-flex items-center gap-2.5">
              <Camera className="w-3.5 h-3.5 text-secondary-600" />
              <p className="font-accent text-sm uppercase tracking-[0.3em] text-secondary-600">
                The Property
              </p>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary-500" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-neutral-900 mb-4">
            Rancho Paraiso Oasis
          </h2>

          <p className="text-base sm:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            A 15-room luxury jungle compound in Akumal, Riviera Maya, where clinical
            excellence meets natural paradise.
          </p>
        </motion.div>

        {/* ── Video Reels ── */}
        <div className="mb-16 sm:mb-24">
          <VideoSlider />
        </div>

        {/* ── Photo Gallery ── */}
        <div className="w-full sm:w-[70vw] mx-auto px-5 sm:px-0 relative">
          {/* Sub-header */}
          <motion.div
            className="flex items-center justify-between mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-accent text-xs uppercase tracking-[0.2em] text-neutral-400">
              Photo Gallery
              <span className="ml-2 text-neutral-300 font-mono tabular-nums">{TOTAL_IMAGES} photos</span>
            </p>
          </motion.div>

          {/* Image Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
          >
            {visible.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: (idx % BATCH_SIZE) * 0.04,
                }}
              >
                <button
                  onClick={() => openLightbox(idx)}
                  className="group relative block w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-canvas-emphasis focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2"
                  aria-label={`View photo ${img.id}`}
                >
                  <Image
                    src={img.thumb}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 23vw, 17vw"
                    loading="lazy"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Expand icon on hover */}
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm">
                    <Expand className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-800" />
                  </div>

                  {/* Subtle border on hover */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-500 pointer-events-none" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {hasMore && (
            <motion.div
              className="mt-10 sm:mt-14 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={showMore}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-neutral-200 bg-white hover:bg-canvas-subtle hover:border-neutral-300 hover:shadow-card transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <span className="font-accent text-xs sm:text-sm uppercase tracking-[0.15em] text-neutral-700 group-hover:text-primary-800 transition-colors duration-300">
                  Show More Photos
                </span>
                <span className="font-mono text-xs text-neutral-400 tabular-nums">
                  +{remaining > BATCH_SIZE ? BATCH_SIZE : remaining}
                </span>
              </button>

              <p className="mt-4 text-xs text-neutral-400 font-accent tracking-wide">
                {visibleCount} of {TOTAL_IMAGES} shown
              </p>
            </motion.div>
          )}

          {/* All loaded indicator */}
          {!hasMore && visibleCount > BATCH_SIZE && (
            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="inline-flex items-center gap-3 text-neutral-400 text-sm">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-neutral-300" />
                All {TOTAL_IMAGES} photos loaded
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-neutral-300" />
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Lightbox Portal ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  )
}
