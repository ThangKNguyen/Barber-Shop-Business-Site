import { Scissors } from 'lucide-react'
import { GiComb } from 'react-icons/gi'

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="pt-16 pb-8 px-[5%] bg-[#f5f5f5] dark:bg-[#0d0d0d] border-t border-black/10 dark:border-white/10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 mb-12">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="font-serif text-[1.6rem] text-[#0d0d0d] dark:text-[#f5f5f5] mb-6 flex items-center gap-2 justify-center md:justify-start">
            <Scissors size={16} strokeWidth={1.5} className="text-gold" />
            P The Barber
            <GiComb size={16} />
          </h3>
          <p className="font-light text-[#2a2a2a] dark:text-[#a8a8a8] leading-loose">
            Quality grooming with precision and attention to detail. <br/>
            Good service and a clean cut every time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-sm font-semibold text-[#0d0d0d] dark:text-[#f5f5f5] tracking-wide mb-6 uppercase">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: 'Gallery', id: 'gallery' },
              { label: 'Reviews', id: 'reviews' },
              { label: 'Contact', id: 'contact' },
            ].map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="font-light text-[#2a2a2a] dark:text-[#a8a8a8] hover:text-gold transition-colors duration-300 bg-transparent border-none cursor-pointer"
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="https://instagram.com/p__thebarber"
                target="_blank"
                rel="noreferrer"
                className="font-light text-[#2a2a2a] dark:text-[#a8a8a8] hover:text-gold transition-colors duration-300"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-center md:text-left">
          <h4 className="text-sm font-semibold text-[#0d0d0d] dark:text-[#f5f5f5] tracking-wide mb-6 uppercase">
            Services
          </h4>
          <ul className="space-y-3">
            {['Haircuts', 'Shaves', 'Beard Grooming'].map((s) => (
              <li key={s}>
                <button
                  onClick={() => scrollTo('services')}
                  className="font-light text-[#2a2a2a] dark:text-[#a8a8a8] hover:text-gold transition-colors duration-300 bg-transparent border-none cursor-pointer"
                >
                  {s}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo('contact')}
                className="font-light text-[#2a2a2a] dark:text-[#a8a8a8] hover:text-gold transition-colors duration-300 bg-transparent border-none cursor-pointer"
              >
                Book Now
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-black/10 dark:border-white/10 text-sm font-light text-[#2a2a2a] dark:text-[#a8a8a8]">
        <p>© 2026 P The Barber | Built by{' '}
          <a
            href="https://thangknguyen.com"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gold transition-colors duration-300"
          >
            Thang Nguyen
          </a>
        </p>
      </div>
    </footer>
  )
}
