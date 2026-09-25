import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-gold-50/40 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading kicker="Skills" title="Technical toolkit" tone="gold" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-line bg-paper p-5">
              <h3 className="font-mono text-[12px] uppercase tracking-wide text-navy">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
