import { experience } from "@/data/experience";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where the work happened"
            description="Platforms with real members, real partners, and real money moving through the interface."
          />
        </Reveal>

        <ol className="mt-16 divide-y divide-line border-y border-line">
          {experience.map((item, index) => (
            <li key={item.company}>
              <Reveal delay={index * 70}>
              <article className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <p className="text-[12px] tracking-[0.16em] text-ink-faint uppercase">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-ink">{item.company}</h3>
                  <p className="mt-1 text-sm text-accent">{item.role}</p>
                  <p className="mt-1 text-sm text-ink-faint">{item.location}</p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-[16px] leading-7 text-ink-muted">{item.summary}</p>
                  {item.highlights.length > 0 ? (
                    <ul className="mt-5 space-y-3">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-[15px] leading-7 text-ink"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
