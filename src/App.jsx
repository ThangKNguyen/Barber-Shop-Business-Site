import { useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Instagram from './components/Instagram'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[#f5f5f5] dark:bg-[#0d0d0d] text-[#0d0d0d] dark:text-[#f5f5f5] font-sans min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <div className="w-[60px] h-px bg-gold mx-auto my-24" />
      <Services />
      <Features />
      <Gallery />
      <Instagram />
      <Contact />
      <Footer />
    </div>
  )
}
