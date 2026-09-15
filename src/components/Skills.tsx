import { skills } from "@/data/skills";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="A senior frontend toolkit"
            description="Not a logo wall. The systems I actually ship with — interfaces, data, tenancy, and craft."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.4rem] border border-line bg-line sm:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal
              key={group.group}
              delay={index * 80}
              className="bg-bg-elevated p-8 sm:p-10"
            >
              <p className="text-[11px] tracking-[0.2em] text-accent uppercase">
                {group.group}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line-strong px-3 py-1.5 text-[13px] text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
