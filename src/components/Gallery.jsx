import { useRef, useState } from 'react'
import work1 from '../visuals/work1.mp4'
import work2 from '../visuals/work2.mp4'
import work3 from '../visuals/work3.mp4'
import work4 from '../visuals/work4.mp4'
import work5 from '../visuals/work5.mp4'
import work6 from '../visuals/work6.mp4'

const videos = [work1, work2, work3, work4, work5, work6]

function VideoCard({ src }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [showVolume, setShowVolume] = useState(false)

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) { v.pause(); setPlaying(false) }
    else { v.play(); setPlaying(true) }
  }

  const onTimeUpdate = () => {
    const v = videoRef.current
    if (!v || !v.duration) return
    setProgress(v.currentTime / v.duration)
  }

  const onEnded = () => setPlaying(false)

  const seek = (e) => {
    const v = videoRef.current
    if (!v) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    v.currentTime = ratio * v.duration
    setProgress(ratio)
  }

  const changeVolume = (e) => {
    const v = videoRef.current
    if (!v) return
    const val = parseFloat(e.target.value)
    v.volume = val
    v.muted = val === 0
    setVolume(val)
  }

  const controlsVisible = playing || hovered

  const SpeakerIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      {volume === 0
        ? <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z"/>
        : volume < 0.5
        ? <path d="M18.5 12A4.5 4.5 0 0 0 16 7.97v8.05A4.5 4.5 0 0 0 18.5 12zM5 9v6h4l5 5V4L9 9H5z"/>
        : <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      }
    </svg>
  )

  return (
    <div
      className="relative overflow-hidden border-4 border-black/10 dark:border-white/10 hover:border-gold hover:scale-[1.03] hover:shadow-xl rounded-sm transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setShowVolume(false) }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
        className="w-full h-auto block"
      />

      {/* play/pause overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          !playing ? 'opacity-100' : hovered ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={toggle}
      >
        <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/30">
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
              <rect x="3" y="2" width="4" height="14" rx="1"/>
              <rect x="11" y="2" width="4" height="14" rx="1"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
              <polygon points="4,2 16,9 4,16"/>
            </svg>
          )}
        </div>
      </div>

      {/* bottom gradient + controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 pt-10 pb-3 px-3 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
          controlsVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* seek bar */}
        <div
          className="relative w-full h-5 flex items-center cursor-pointer mb-2"
          onClick={seek}
        >
          <div className="w-full h-[4px] bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{ width: `${progress * 100}%`, backgroundColor: '#c9a961' }}
            />
          </div>
        </div>

        {/* volume button — bottom right */}
        <div className="flex justify-end">
          <div className="relative">
            {/* vertical slider popup */}
            {showVolume && (
              <div
                className="absolute bottom-9 right-0 flex flex-col items-center gap-2 px-3 py-3 rounded-xl bg-black/70 backdrop-blur-sm border border-white/10"
                onClick={e => e.stopPropagation()}
              >
                <span className="text-white/60 text-[10px] font-medium w-6 text-center">
                  {Math.round(volume * 100)}
                </span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.02"
                  value={volume}
                  onChange={changeVolume}
                  style={{
                    writingMode: 'vertical-lr',
                    direction: 'rtl',
                    appearance: 'slider-vertical',
                    WebkitAppearance: 'slider-vertical',
                    width: '4px',
                    height: '80px',
                    cursor: 'pointer',
                    accentColor: '#c9a961',
                  }}
                />
              </div>
            )}

            <button
              onClick={e => { e.stopPropagation(); setShowVolume(v => !v) }}
              className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-black/60 transition-colors"
            >
              <SpeakerIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" aria-label="Portfolio — Recent Work" className="py-32 px-[5%] bg-[#e8e4dc] dark:bg-[#1a1a1a]">
      <div className="text-center mb-16 reveal">
        <p className="text-sm font-medium text-gold tracking-[0.2em] uppercase mb-4">Portfolio</p>
        <h2 className="font-serif font-semibold text-[#0d0d0d] dark:text-[#f5f5f5] mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Recent Work
        </h2>
        <p className="text-base font-light text-[#2a2a2a] dark:text-[#a8a8a8]">
          See the quality for yourself
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {videos.map((src, i) => (
          <div
            key={i}
            className="reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <VideoCard src={src} />
          </div>
        ))}
      </div>
    </section>
  )
}
