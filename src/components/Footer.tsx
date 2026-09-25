import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t-2 border-gold bg-gradient-to-br from-navy to-violet py-10 text-paper/70">
      <div className="section-container flex flex-col gap-4 text-[13px] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base text-paper">{profile.name}</p>
          <p className="mt-1">{profile.role}</p>
          <p className="mt-1">{profile.location}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper"
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-paper">
            Email
          </a>
        </div>
        <p>© {year} {profile.name}</p>
      </div>
    </footer>
  );
}
