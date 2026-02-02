'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const VIDEOS = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/videos/video${i + 1}.mp4`,
}))

export function VideoSlider() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const [activeIndex, setActiveIndex] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [dims, setDims] = useState({ cardW: 220, focusedW: 340, gap: 20 })

  // Drag state
  const dragState = useRef({ startX: 0, isDragging: false, startTime: 0 })

  // Measure container + responsive card sizes
  useEffect(() => {
    const measure = () => {
      if (trackRef.current?.parentElement) {
        setContainerWidth(trackRef.current.parentElement.clientWidth)
      }
      const w = window.innerWidth
      if (w < 480) {
        setDims({ cardW: 80, focusedW: 200, gap: 10 })
      } else if (w < 640) {
        setDims({ cardW: 120, focusedW: 250, gap: 12 })
      } else if (w < 1024) {
        setDims({ cardW: 180, focusedW: 310, gap: 16 })
      } else {
        setDims({ cardW: 220, focusedW: 340, gap: 20 })
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const focusedH = Math.round(dims.focusedW * (16 / 9))

  // Compute the translateX so the active card is centered
  const getTranslateX = useCallback(() => {
    if (!containerWidth) return 0

    // Sum widths of all cards before the active one
    let offset = 0
    for (let i = 0; i < activeIndex; i++) {
      offset += dims.cardW + dims.gap
    }
    // Center the active card: shift by half container minus half active card width
    offset -= (containerWidth / 2) - (dims.focusedW / 2)

    return -offset
  }, [activeIndex, containerWidth, dims])

  // Autoplay only the focused video
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === activeIndex && isInView) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [activeIndex, isInView])

  const go = (dir: 'prev' | 'next') => {
    setActiveIndex((cur) =>
      dir === 'prev' ? Math.max(0, cur - 1) : Math.min(VIDEOS.length - 1, cur + 1)
    )
  }

  // Touch / mouse drag handling
  const onPointerDown = (e: React.PointerEvent) => {
    dragState.current = { startX: e.clientX, isDragging: true, startTime: Date.now() }
  }

  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragState.current.isDragging) return
    dragState.current.isDragging = false

    const dx = e.clientX - dragState.current.startX
    const dt = Date.now() - dragState.current.startTime
    const velocity = Math.abs(dx) / dt // px per ms

    // Swipe threshold: 50px or fast flick
    if (Math.abs(dx) > 50 || velocity > 0.3) {
      if (dx > 0) go('prev')
      else go('next')
    }
  }

  return (
    <section ref={sectionRef} className="py-16 md:py-32 bg-canvas-muted relative overflow-hidden">
      {/* Subtle warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-secondary-500/5 blur-[120px] pointer-events-none" />

      <div className="w-full sm:w-[70vw] mx-auto relative">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-10 bg-gradient-to-r from-secondary-400 to-secondary-600" />
              <p className="font-accent text-xs uppercase tracking-[0.25em] text-secondary-600">The Property</p>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-neutral-900">
              Riviera Maya Jungle Estate
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go('prev')}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-sm
                         flex items-center justify-center text-neutral-600 hover:text-primary-800
                         hover:border-neutral-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go('next')}
              disabled={activeIndex === VIDEOS.length - 1}
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-sm
                         flex items-center justify-center text-neutral-600 hover:text-primary-800
                         hover:border-neutral-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Carousel viewport — fixed height so switching cards never shifts layout */}
      <div
        className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ height: focusedH, touchAction: 'pan-y' }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={(e) => { if (dragState.current.isDragging) onPointerUp(e) }}
      >
        {/* Track */}
        <div
          ref={trackRef}
          className="absolute inset-y-0 flex items-center transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{
            gap: `${dims.gap}px`,
            transform: `translateX(${getTranslateX()}px)`,
          }}
        >
          {VIDEOS.map((video, index) => {
            const isFocused = index === activeIndex
            return (
              <div
                key={video.id}
                className="flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ width: isFocused ? dims.focusedW : dims.cardW }}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className="relative rounded-2xl overflow-hidden bg-neutral-900 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    aspectRatio: '9 / 16',
                    opacity: isFocused ? 1 : 0.45,
                    boxShadow: isFocused
                      ? '0 25px 60px -12px rgba(0,0,0,0.3)'
                      : '0 8px 24px -8px rgba(0,0,0,0.12)',
                  }}
                >
                  <video
                    ref={(el) => { videoRefs.current[index] = el }}
                    src={video.src}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    loop
                    muted
                    playsInline
                    preload={index <= 2 ? 'auto' : 'metadata'}
                  />

                  {/* Counter badge */}
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm transition-opacity duration-300"
                    style={{ opacity: isFocused ? 1 : 0 }}
                  >
                    <span className="text-white/80 text-[10px] font-medium tabular-nums">
                      {index + 1} / {VIDEOS.length}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Progress dots */}
      <div className="w-full sm:w-[70vw] mx-auto mt-6">
        <div className="flex items-center justify-center gap-1.5">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-6 h-2 bg-secondary-500'
                  : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to video ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
