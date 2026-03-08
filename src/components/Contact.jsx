export default function Contact() {
  return (
    <section id="contact" className="py-32 px-[5%] bg-[#e8e4dc] dark:bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Info — slides in from left */}
        <div className="reveal-left">
          <h2 className="font-serif font-semibold text-[#0d0d0d] dark:text-[#f5f5f5] mb-12"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Visit Us
          </h2>

          <div className="mb-10">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Hours</p>
            <p className="text-base font-light text-[#2a2a2a] dark:text-[#a8a8a8] leading-loose">
              Monday – Friday: 10:00 AM – 7:00 PM<br />
              Saturday: 9:00 AM – 6:00 PM<br />
              Sunday: Closed
            </p>
          </div>

          <div className="mb-10">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Location</p>
            <p className="text-base font-light text-[#2a2a2a] dark:text-[#a8a8a8] leading-loose">
              [Your Address]<br />
              [City, State ZIP]
            </p>
          </div>

          <div className="mb-10">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Contact</p>
            <p className="text-base font-light text-[#2a2a2a] dark:text-[#a8a8a8] leading-loose">
              Phone: [Your Phone]<br />
              Email: [Your Email]
            </p>
          </div>
        </div>

        {/* Form — slides in from right */}
        <div className="reveal-right">
          <div className="bg-white dark:bg-[#1f1f1f] p-12 border border-black/10 dark:border-white/10">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-8">
                <label className="block text-sm font-medium tracking-wide text-[#0d0d0d] dark:text-[#f5f5f5] mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-4 bg-[#e8e4dc] dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 text-[#0d0d0d] dark:text-[#f5f5f5] font-sans text-base focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium tracking-wide text-[#0d0d0d] dark:text-[#f5f5f5] mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-4 bg-[#e8e4dc] dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 text-[#0d0d0d] dark:text-[#f5f5f5] font-sans text-base focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium tracking-wide text-[#0d0d0d] dark:text-[#f5f5f5] mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-[#e8e4dc] dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 text-[#0d0d0d] dark:text-[#f5f5f5] font-sans text-base focus:outline-none focus:border-gold transition-colors duration-300 resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-sm font-medium tracking-widest border border-[#0d0d0d] dark:border-[#f5f5f5] bg-[#0d0d0d] dark:bg-[#f5f5f5] text-[#f5f5f5] dark:text-[#0d0d0d] hover:bg-gold hover:border-gold hover:text-[#0d0d0d] dark:hover:text-[#0d0d0d] transition-all duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
