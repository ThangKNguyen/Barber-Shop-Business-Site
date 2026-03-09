import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  const navItems = ['services', 'gallery', 'reviews', 'contact']

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#f5f5f5] dark:bg-[#0d0d0d] border-b border-black/10 dark:border-white/10 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'py-5 shadow-lg' : 'py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-[5%] flex justify-between items-center">
        <div className="font-serif text-[1.6rem] font-semibold tracking-wide">
          P The Barber
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-12 list-none">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className="text-sm font-normal tracking-widest capitalize text-[#0d0d0d] dark:text-[#f5f5f5] hover:text-gold transition-colors duration-300 relative group bg-transparent border-none cursor-pointer"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full bg-[#e8e4dc] dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 flex items-center justify-center text-xl cursor-pointer hover:bg-gold hover:border-gold hover:rotate-180 transition-all duration-300"
          >
            {theme === 'dark'
              ? <Sun size={18} strokeWidth={1.5} />
              : <Moon size={18} strokeWidth={1.5} />
            }
          </button>

          {/* Book Now — hidden on mobile */}
          <a
            href="https://pthebarber.square.site/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block px-8 py-3 bg-[#0d0d0d] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#0d0d0d] text-sm font-medium tracking-widest hover:bg-gold hover:text-[#0d0d0d] dark:hover:bg-gold dark:hover:text-[#0d0d0d] transition-all duration-300"
          >
            BOOK NOW
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer bg-transparent border-none"
          >
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-[5%] py-4 gap-1 list-none">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className="w-full text-left py-3 text-sm font-normal tracking-widest capitalize text-[#0d0d0d] dark:text-[#f5f5f5] hover:text-gold transition-colors duration-300 bg-transparent border-none cursor-pointer"
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://pthebarber.square.site/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block w-full py-3 text-center bg-[#0d0d0d] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#0d0d0d] text-sm font-medium tracking-widest hover:bg-gold hover:text-[#0d0d0d] dark:hover:bg-gold dark:hover:text-[#0d0d0d] transition-all duration-300"
            >
              BOOK NOW
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
