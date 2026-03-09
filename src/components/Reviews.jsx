import review1 from '../visuals/review1.jpg'
import review2 from '../visuals/review2.jpg'
import review3 from '../visuals/review3.jpg'
import review4 from '../visuals/review4.jpg'
import review5 from '../visuals/review5.jpg'
import review6 from '../visuals/review6.jpg'

const reviews = [review1, review2, review3, review4, review5, review6]

export default function Reviews() {
  return (
    <section id="reviews" aria-label="Customer Reviews" className="py-32 px-[5%] bg-[#f5f5f5] dark:bg-[#0d0d0d]">
      <div className="text-center mb-16 reveal">
        <p className="text-sm font-medium text-gold tracking-[0.2em] uppercase mb-4">Reviews</p>
        <h2
          className="font-serif font-semibold text-[#0d0d0d] dark:text-[#f5f5f5] mb-4"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          What Clients Say
        </h2>
        <p className="text-base font-light text-[#2a2a2a] dark:text-[#a8a8a8]">
          Don't take my word for it — here are satisfied customers
        </p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 max-w-[1200px] mx-auto">
        {reviews.map((src, i) => (
          <div
            key={i}
            className="reveal break-inside-avoid mb-8"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="overflow-hidden border-4 border-black/10 dark:border-white/10 hover:border-gold hover:shadow-xl transition-all duration-300 rounded-sm">
              <img
                src={src}
                alt={`Customer review ${i + 1}`}
                className="w-full h-auto block"
                style={{ marginBottom: '-150px', clipPath: 'inset(0 0 100px 0)' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
