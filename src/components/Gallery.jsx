const items = ['✂️', '💈', '🪒', '✂️', '💈', '🪒']

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-[5%] bg-[#e8e4dc] dark:bg-[#1a1a1a]">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {items.map((icon, i) => (
          // reveal wrapper separate from hover card
          <div
            key={i}
            className="reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="aspect-square bg-white dark:bg-[#1f1f1f] border border-black/10 dark:border-white/10 overflow-hidden cursor-pointer hover:scale-[1.03] hover:shadow-xl transition-all duration-300 flex items-center justify-center text-5xl opacity-20">
              {icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
