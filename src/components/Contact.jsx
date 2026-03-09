import visitImg from '../visuals/visit.png'

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact and Visit" className="py-32 px-[5%] bg-[#e8e4dc] dark:bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Info — slides in from left */}
        <div className="reveal-left text-center md:text-left">
          <h2 className="font-serif font-semibold text-[#0d0d0d] dark:text-[#f5f5f5] mb-12"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Info
          </h2>

          <div className="mb-10">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Hours</p>
            <p className="text-base font-light text-[#2a2a2a] dark:text-[#a8a8a8] leading-loose">
              Monday – Friday: 10:00 AM – 8:00 PM<br />
              Saturday: 9:00 AM – 6:00 PM<br />
              Sunday: Closed<br />
              Appointments only
              
            </p>
          </div>

          <div className="mb-10">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Location</p>
            <p className="text-base font-light text-[#2a2a2a] dark:text-[#a8a8a8] leading-loose">
              
              Based in: San Jose<br />
            </p>
          </div>

          <div className="mb-10">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Contact</p>
            <p className="text-base font-light text-[#2a2a2a] dark:text-[#a8a8a8] leading-loose">
              Phone:  +1 408-644-8210<br />
              Email: andywrd2003@gmail.com
            </p>
          </div>

          <div className="border-t-2 md:border-t-0 md:border-l-2 border-gold pt-4 md:pt-0 md:pl-6 space-y-3 text-center md:text-left">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">Reminder</p>
            {[
              'Please message me for the address prior to your appointment.',
              'Feel free to head directly to the front door at your scheduled time.',
              'Please only book appointments you are certain you can attend on time.',
              'Arrive 5 minutes before your appointment time.',
              'Appointments for clients more than 10 minutes late will be cancelled and rescheduled.',
              'If your preferred time is unavailable or you need an urgent appointment, message me directly — I will do my best to accommodate you.',
            ].map((note, i) => (
              <p key={i} className="text-sm font-light text-[#2a2a2a] dark:text-[#a8a8a8] leading-relaxed">
                {note}
              </p>
            ))}
          </div>
        </div>

        {/* Visit image — slides in from right */}
        <div className="reveal-right hidden lg:block">
          <div className="border-2 border-black/10 dark:border-white/10 overflow-hidden h-full">
            <img
              src={visitImg}
              alt="P The Barber shop location in San Jose, CA"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
