const services = [
  {
    name: "Men's Haircut",
    price: '$40',
    duration: '30 mins',
    desc: 'Include fade/taper with clippers on the side, with trim and layered/textured on top.',
  },
  {
    name: "Men's Haircut + Beard",
    price: '$50',
    duration: '45 mins',
    desc: 'Regular haircut + Beard trim, beard fade/taper and beard lineup.',
  },
  {
    name: "Men's Haircut + Eyebrows",
    price: '$45',
    duration: '30 mins',
    desc: 'Include men’s regular haircut plus eyebrows clean up/line up.',
  },
  {
    name: 'Long Scissor Haircut',
    price: '$45',
    duration: '30 mins',
    desc: 'Any scissor haircut with hair longer than 8 inches. (Layers, wolf cut, layered mullet, etc.)',
  },
]

export default function Services() {
  return (
    <section id="services" aria-label="Services" className="py-32 px-[5%] bg-[#e8e4dc] dark:bg-[#1a1a1a]">
      <div className="text-center mb-20 reveal">
        <p className="text-sm font-medium text-gold tracking-[0.2em] uppercase mb-4">Services</p>
        <h2 className="font-serif font-semibold text-[#0d0d0d] dark:text-[#f5f5f5] mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          My Offerings
        </h2>
        <p className="text-base font-light text-[#2a2a2a] dark:text-[#a8a8a8]">
          Premium grooming tailored to perfection
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[900px] mx-auto mb-16">
        {services.map((service, i) => (
          <div
            key={i}
            className="reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="h-full bg-white dark:bg-[#1f1f1f] p-10 border border-black/10 dark:border-white/10 hover:border-gold hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 pb-6 border-b border-black/10 dark:border-white/10 gap-1 sm:gap-0">
                <h3 className="text-xl font-semibold text-[#0d0d0d] dark:text-[#f5f5f5]">
                  {service.name}
                </h3>
                <p className="font-serif text-2xl font-semibold text-gold">{service.price}</p>
              </div>
              <p className="text-sm font-light text-[#2a2a2a] dark:text-[#a8a8a8] leading-relaxed mb-6">
                {service.desc}
              </p>
              <p className="text-xs font-medium text-[#2a2a2a]/50 dark:text-[#a8a8a8]/50 tracking-widest uppercase">
                {service.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center reveal">
        <a
          href="https://pthebarber.square.site/"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-12 py-4 text-sm font-medium tracking-widest border border-[#0d0d0d] dark:border-[#f5f5f5] bg-[#0d0d0d] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#0d0d0d] hover:bg-gold hover:border-gold hover:text-[#0d0d0d] dark:hover:bg-gold dark:hover:border-gold dark:hover:text-[#0d0d0d] transition-all duration-300"
        >
          BOOK NOW
        </a>
      </div>
    </section>
  )
}
