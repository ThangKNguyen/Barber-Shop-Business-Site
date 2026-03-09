export default function Socials() {
  return (
    <section className="py-32 px-[5%] bg-[#f5f5f5] dark:bg-[#0d0d0d] text-center">
      <div className="reveal">
        <h2 className="font-serif font-semibold text-[#0d0d0d] dark:text-[#f5f5f5] mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Follow the Journey
        </h2>
        <p className="text-2xl font-light text-gold tracking-wide mb-12">
          @p__thebarber
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://instagram.com/p__thebarber"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-4 text-sm font-medium tracking-widest border border-[#0d0d0d] dark:border-[#f5f5f5] bg-[#0d0d0d] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#0d0d0d] hover:bg-gold hover:border-gold hover:text-[#0d0d0d] dark:hover:bg-gold dark:hover:border-gold dark:hover:text-[#0d0d0d] transition-all duration-300"
          >
            VIEW INSTAGRAM
          </a>
          <a
            href="https://www.tiktok.com/@p__thebarber"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-4 text-sm font-medium tracking-widest border border-[#0d0d0d] dark:border-[#f5f5f5] bg-[#0d0d0d] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#0d0d0d] hover:bg-gold hover:border-gold hover:text-[#0d0d0d] dark:hover:bg-gold dark:hover:border-gold dark:hover:text-[#0d0d0d] transition-all duration-300"
          >
            VIEW TIKTOK
          </a>
        </div>
      </div>
    </section>
  )
}
