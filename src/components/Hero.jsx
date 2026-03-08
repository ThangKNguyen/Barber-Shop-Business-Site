export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 px-[5%] bg-[#f5f5f5] dark:bg-[#0d0d0d]">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="hero-text">
          <h1 className="font-serif font-semibold leading-[1.1] mb-8 text-[#0d0d0d] dark:text-[#f5f5f5]"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}>
            Precision.<br />
            <span className="text-gold italic">Craftsmanship.</span><br />
            Excellence.
          </h1>
          <p className="text-lg font-light text-[#2a2a2a] dark:text-[#a8a8a8] leading-relaxed mb-12 max-w-[500px]">
            Where traditional barbering meets refined technique. Every cut executed with
            meticulous attention to detail and uncompromising quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => scrollTo('contact')}
              className="px-10 py-4 text-sm font-medium tracking-widest border border-[#0d0d0d] dark:border-[#f5f5f5] bg-[#0d0d0d] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#0d0d0d] hover:bg-gold hover:border-gold hover:text-[#0d0d0d] transition-all duration-300"
            >
              SCHEDULE APPOINTMENT
            </button>
            <a
              href="https://instagram.com/p__thebarber"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-4 text-sm font-medium tracking-widest border border-[#0d0d0d] dark:border-[#f5f5f5] bg-transparent text-[#0d0d0d] dark:text-[#f5f5f5] hover:bg-[#0d0d0d] dark:hover:bg-[#f5f5f5] hover:text-[#f5f5f5] dark:hover:text-[#0d0d0d] transition-all duration-300 text-center"
            >
              VIEW WORK
            </a>
          </div>
        </div>

        <div className="aspect-[4/5] bg-[#e8e4dc] dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 flex items-center justify-center text-8xl opacity-15 order-first lg:order-last">
          ✂️
        </div>
      </div>
    </section>
  )
}
