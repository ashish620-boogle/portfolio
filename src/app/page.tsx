import Card from "@/components/Card";
import Navigation from "@/components/Navigation";
import SectionHeading from "@/components/SectionHeading";
import {
  about,
  achievements,
  contact,
  education,
  experience,
  hero,
  projects,
  publications,
  skills,
  socialLinks,
} from "@/lib/constants";

export default function Home() {
  return (
    <div id="top">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />

      <main id="main">
        <section className="pt-16 md:pt-24 pb-16">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="reveal">
                <p className="text-xs uppercase tracking-[0.4em] text-muted">
                  Portfolio
                </p>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink mt-4">
                  {hero.name}
                </h1>
                <p className="font-body text-lg md:text-xl text-muted mt-4">
                  {hero.title}
                </p>
                <p className="font-body text-base md:text-lg text-ink/80 mt-6 leading-relaxed">
                  {hero.intro}
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a href="#projects" className="btn-primary">
                    View Projects
                  </a>
                  <a href="#contact" className="btn-ghost">
                    Contact
                  </a>
                </div>
              </div>
              <div className="relative h-72 md:h-96 rounded-3xl border border-line overflow-hidden shadow-soft reveal">
                <div className="orb" />
                <div className="glow-ring" />
                <div className="relative z-10 h-full w-full flex items-center justify-center">
                  <img
                    src="/profile-placeholder.svg"
                    alt="Profile placeholder"
                    className="h-48 w-48 md:h-56 md:w-56 rounded-full border border-line bg-mist object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-16">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <SectionHeading
              title="About"
              subtitle="A quick snapshot of my background and interests."
            />
            <Card>
              <p className="font-body text-base md:text-lg leading-relaxed text-ink/80">
                {about.summary}
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-ink/80 mt-6">
                {about.educationHighlight}
              </p>
            </Card>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-16">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <SectionHeading title="Projects" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project, index) => (
                <Card key={project.title}>
                  <img
                    src={`/project-${index + 1}.svg`}
                    alt={`${project.title} placeholder`}
                    className="h-40 w-full rounded-2xl border border-line object-cover"
                  />
                  <div className="mt-5">
                    <h3 className="font-display text-xl md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mt-2">
                      {project.date}
                    </p>
                    <p className="font-body text-sm md:text-base mt-4 leading-relaxed text-ink/80">
                      {project.summary}
                    </p>
                    {project.links.length ? (
                      <div className="flex flex-wrap gap-3 mt-6">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                            aria-label={`Open ${project.title} ${link.label}`}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-16">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <SectionHeading title="Contact" />
            <Card className="max-w-3xl">
              <p className="font-body text-base md:text-lg">
                Email:{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
                >
                  {contact.email}
                </a>{" "}
                |{" "}
                <a
                  href={`mailto:${contact.emailAlt}`}
                  className="font-semibold hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
                >
                  {contact.emailAlt}
                </a>
              </p>
              <p className="font-body text-base md:text-lg mt-2">
                Phone:{" "}
                <a
                  href={`tel:${contact.phone}`}
                  className="font-semibold hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
                >
                  {contact.phone}
                </a>
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm font-body text-muted">
          <span>Built with Next.js, TypeScript, and Tailwind CSS.</span>
          <span>Minimal system - optimized for clarity.</span>
        </div>
      </footer>
    </div>
  );
}
