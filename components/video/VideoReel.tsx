'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Play, Pause, ChevronUp, ChevronDown } from 'lucide-react'

const VIDEOS = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/videos/video${i + 1}.mp4`,
}))

export function VideoReel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const controlsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isScrolling = useRef(false)

  // Auto-hide controls
  const resetControlsTimer = useCallback(() => {
    setShowControls(true)
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current)
    controlsTimeout.current = setTimeout(() => setShowControls(false), 3000)
  }, [])

  useEffect(() => {
    resetControlsTimer()
    return () => { if (controlsTimeout.current) clearTimeout(controlsTimeout.current) }
  }, [resetControlsTimer])

  // Intersection Observer for autoplay
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    videoRefs.current.forEach((video, index) => {
      if (!video) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
              setActiveIndex(index)
              if (!isPaused) {
                video.play().catch(() => {})
              }
            } else {
              video.pause()
            }
          })
        },
        { threshold: 0.7 }
      )

      observer.observe(video)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [isPaused])

  // Track progress of active video
  useEffect(() => {
    const video = videoRefs.current[activeIndex]
    if (!video) return

    const onTimeUpdate = () => {
      if (video.duration) {
        setProgress(video.currentTime / video.duration)
      }
    }

    const onEnded = () => {
      // Auto-advance to next video
      if (activeIndex < VIDEOS.length - 1) {
        scrollToIndex(activeIndex + 1)
      } else {
        // Loop back to first
        scrollToIndex(0)
      }
    }

    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
    }
  }, [activeIndex])

  // Apply mute state to all videos
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) video.muted = isMuted
    })
  }, [isMuted])

  const scrollToIndex = (index: number) => {
    const container = containerRef.current
    if (!container) return
    isScrolling.current = true
    const target = container.children[index] as HTMLElement
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => { isScrolling.current = false }, 600)
    }
  }

  const togglePlay = () => {
    const video = videoRefs.current[activeIndex]
    if (!video) return

    if (video.paused) {
      video.play().catch(() => {})
      setIsPaused(false)
    } else {
      video.pause()
      setIsPaused(true)
    }
    resetControlsTimer()
  }

  const toggleMute = () => {
    setIsMuted((m) => !m)
    resetControlsTimer()
  }

  const goUp = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1)
    resetControlsTimer()
  }

  const goDown = () => {
    if (activeIndex < VIDEOS.length - 1) scrollToIndex(activeIndex + 1)
    resetControlsTimer()
  }

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'k') { e.preventDefault(); goUp() }
      if (e.key === 'ArrowDown' || e.key === 'j') { e.preventDefault(); goDown() }
      if (e.key === ' ') { e.preventDefault(); togglePlay() }
      if (e.key === 'm') { toggleMute() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIndex, isPaused])

  return (
    <div
      className="relative w-full h-[100dvh] bg-black overflow-hidden"
      onMouseMove={resetControlsTimer}
      onTouchStart={resetControlsTimer}
    >
      {/* Scroll container */}
      <div
        ref={containerRef}
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory scrollbar-none"
      >
        {VIDEOS.map((video, index) => (
          <div
            key={video.id}
            className="relative w-full h-[100dvh] snap-start snap-always flex items-center justify-center"
          >
            <video
              ref={(el) => { videoRefs.current[index] = el }}
              src={video.src}
              className="absolute inset-0 w-full h-full object-contain bg-black"
              loop={false}
              muted={isMuted}
              playsInline
              preload={index <= 1 ? 'auto' : 'metadata'}
              onClick={() => { togglePlay(); resetControlsTimer() }}
            />

            {/* Gradient overlays for UI legibility */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Pause icon flash */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          >
            <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top bar - counter + title */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-0 inset-x-0 z-20 pt-[env(safe-area-inset-top)]"
          >
            {/* Segmented progress bar */}
            <div className="flex gap-[3px] px-4 pt-4 pb-2">
              {VIDEOS.map((_, i) => (
                <div key={i} className="flex-1 h-[2.5px] rounded-full bg-white/25 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-white transition-all duration-200"
                    style={{
                      width:
                        i < activeIndex ? '100%' :
                        i === activeIndex ? `${progress * 100}%` :
                        '0%',
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between px-5 py-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4A63B] to-[#1F483A] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white tracking-tight">TE</span>
                </div>
                <div>
                  <p className="text-white text-[13px] font-semibold leading-tight">The Property</p>
                  <p className="text-white/50 text-[11px] leading-tight">Rancho Paraiso Oasis</p>
                </div>
              </div>
              <span className="text-white/40 text-xs tabular-nums font-medium tracking-wide">
                {activeIndex + 1}/{VIDEOS.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right-side controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
            className="absolute right-4 bottom-28 z-20 flex flex-col items-center gap-5"
          >
            {/* Mute / Unmute */}
            <button
              onClick={toggleMute}
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/10
                         flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            {/* Play / Pause */}
            <button
              onClick={togglePlay}
              className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/10
                         flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label={isPaused ? 'Play' : 'Pause'}
            >
              {isPaused ? <Play className="w-5 h-5 ml-0.5" /> : <Pause className="w-5 h-5" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation arrows (desktop) */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 flex-col gap-2"
          >
            <button
              onClick={goUp}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10
                         flex items-center justify-center text-white
                         hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
              aria-label="Previous video"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <button
              onClick={goDown}
              disabled={activeIndex === VIDEOS.length - 1}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10
                         flex items-center justify-center text-white
                         hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
              aria-label="Next video"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom bar - scroll hint + keyboard hint */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-0 inset-x-0 z-20 pb-[env(safe-area-inset-bottom)]"
          >
            <div className="flex items-center justify-center gap-4 px-5 py-4">
              <p className="text-white/30 text-[11px] tracking-wider uppercase hidden md:block">
                Scroll or press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 text-[10px] font-mono">J</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 text-[10px] font-mono ml-0.5">K</kbd> to navigate
                &nbsp;&middot;&nbsp;
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 text-[10px] font-mono">Space</kbd> play/pause
                &nbsp;&middot;&nbsp;
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 text-[10px] font-mono">M</kbd> mute
              </p>
              <p className="text-white/30 text-[11px] tracking-wider uppercase md:hidden">
                Swipe to browse &middot; Tap to pause
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
