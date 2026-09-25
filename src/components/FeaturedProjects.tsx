import SectionHeading from "@/components/SectionHeading";
import ProjectsExplorer from "@/components/ProjectsExplorer";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section-container py-20 md:py-28">
      <SectionHeading
        kicker="Featured Projects"
        title="Applications I've built, and one I've tested in depth"
        description="RentFlow is the central case study: one application, built and independently tested. The projects below round out the range of what I've worked on, from blockchain to internal tooling."
      />
      <ProjectsExplorer />
    </section>
  );
}
