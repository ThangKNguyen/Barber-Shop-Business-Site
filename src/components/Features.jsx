import { Scissors, Wrench, Focus, Clock } from 'lucide-react'

const features = [
  {
    icon: Scissors,
    title: 'Expert Technique',
    text: 'Years of experience delivering consistent, quality results',
  },
  {
    icon: Wrench,
    title: 'Premium Tools',
    text: 'Professional-grade equipment for superior precision',
  },
  {
    icon: Focus,
    title: 'Attention to Detail',
    text: 'Meticulous care in every aspect of service',
  },
  {
    icon: Clock,
    title: 'Time Efficient',
    text: 'Respect for your schedule without compromising quality',
  },
]

export default function Features() {
  return (
    <section aria-label="Why Choose Us" className="py-32 px-[5%] bg-[#f5f5f5] dark:bg-[#0d0d0d]">
      <div className="text-center reveal">
        <p className="text-sm font-medium text-gold tracking-[0.2em] uppercase mb-4">Why Choose Us</p>
        <h2 className="font-serif font-semibold text-[#0d0d0d] dark:text-[#f5f5f5]"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          Excellence in Detail
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 max-w-[1200px] mx-auto mt-16">
        {features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="reveal text-center"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="w-[60px] h-[60px] mx-auto mb-6 flex items-center justify-center border border-gold rounded-full">
                <Icon size={24} className="text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-[#0d0d0d] dark:text-[#f5f5f5] mb-3">
                {feature.title}
              </h3>
              <p className="text-sm font-light text-[#2a2a2a] dark:text-[#a8a8a8] leading-relaxed">
                {feature.text}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
