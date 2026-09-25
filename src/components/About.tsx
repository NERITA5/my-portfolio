import SectionHeading from "@/components/SectionHeading";
import { aboutText } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-container py-20 md:py-28">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading kicker="About" title="I build. I test. I improve." tone="navy" />
        <div className="max-w-prose space-y-5">
          {aboutText.map((p, i) => (
            <p key={i} className="text-[15.5px] leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
