const services = [
  {
    name: 'Signature Cut',
    price: '$45',
    desc: 'Complete haircut service with consultation, precision cutting, and professional styling.',
  },
  {
    name: 'Classic Shave',
    price: '$40',
    desc: 'Traditional straight razor shave with hot towel preparation and premium products.',
  },
  {
    name: 'Cut & Beard',
    price: '$65',
    desc: 'Comprehensive package combining haircut with beard sculpting and conditioning.',
  },
  {
    name: 'Precision Fade',
    price: '$50',
    desc: 'Expert fade work executed with technical precision and tailored to your style.',
  },
  {
    name: 'Executive Service',
    price: '$100',
    desc: 'Complete grooming experience. Haircut, shave, facial treatment, and consultation.',
  },
  {
    name: 'Edge Detail',
    price: '$25',
    desc: 'Quick precision edge-up to maintain your look between full services.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-[5%] bg-[#e8e4dc] dark:bg-[#1a1a1a]">
      <div className="text-center mb-20 reveal">
        <p className="text-sm font-medium text-gold tracking-[0.2em] uppercase mb-4">Services</p>
        <h2 className="font-serif font-semibold text-[#0d0d0d] dark:text-[#f5f5f5] mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Our Offerings
        </h2>
        <p className="text-base font-light text-[#2a2a2a] dark:text-[#a8a8a8]">
          Premium grooming tailored to perfection
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {services.map((service, i) => (
          // reveal wrapper is separate from the hover card to avoid transition conflict
          <div
            key={service.name}
            className="reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="h-full bg-white dark:bg-[#1f1f1f] p-10 border border-black/10 dark:border-white/10 hover:border-gold hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-start mb-6 pb-6 border-b border-black/10 dark:border-white/10">
                <h3 className="text-xl font-semibold text-[#0d0d0d] dark:text-[#f5f5f5]">
                  {service.name}
                </h3>
                <p className="font-serif text-2xl font-semibold text-gold">{service.price}</p>
              </div>
              <p className="text-sm font-light text-[#2a2a2a] dark:text-[#a8a8a8] leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
