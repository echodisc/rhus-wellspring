import FadeInOnScroll from "./FadeInOnScroll";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image?: string;
}

const items: TimelineItem[] = [
  {
    year: "2020",
    title: "Læreruddannet & Yoga",
    description: "Uddannet fra Den Frie Lærerskole. 100 timers yogauddannelse hos Simon Krohn.",
  },
  {
    year: "2022",
    title: "Yoga i Rishikesh, Indien",
    description: "200 timers yogainstruktøruddannelse i Rishikesh, Indien — en transformerende oplevelse.",
    image: "/images/yoga-ved-Ganges-1024x768.jpg",
  },
  {
    year: "2024",
    title: "Kropsterapeut & Breathwork",
    description: "Uddannet kropsterapeut fra Totum. Kursus i Kenshô Breathwork & Traume Terapi. Myofascial Release & Deep Tissue massagekursus.",
    image: "/images/kropsterapibillede.jpg",
  },
  {
    year: "2025",
    title: "Fordybelse i anatomi",
    description: "Patologi, yogaanatomikursus ved Nanna Hofman, anatomi & fysiologi ved Karsten Munk Akademiet.",
  },
];

const TimelineSection = () => (
  <section className="py-16 md:py-24 bg-mottled-sage">
    <div className="container mx-auto px-4 max-w-3xl">
      <FadeInOnScroll>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-14">
          Min uddannelsesrejse
        </h2>
      </FadeInOnScroll>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {items.map((item, i) => (
          <FadeInOnScroll key={i} delay={i * 120}>
            <div className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}>
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-2 z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="text-sm font-semibold text-accent">{item.year}</span>
                <h3 className="font-serif text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mt-4 rounded-xl w-full max-w-xs object-cover aspect-[4/3] shadow-md"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;
