import Card from "@/components/Card";
import Navigation from "@/components/Navigation";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import {
  about,
  contact,
  hero,
  projects,
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
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
              <Card>
                <ContactForm />
              </Card>
              <Card>
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
                <div className="flex flex-wrap gap-3 mt-6">
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
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-10">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm font-body text-muted">
          <div className="flex items-center gap-4">
            <a href="#" className="btn-ghost">
              Back to top
            </a>
            <span>© 2026 Ashish Kumar. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="btn-ghost"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5ZM0 8h5v16H0V8Zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.4 0 6.4 3.6 6.4 8.2V24h-5v-7.3c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V24h-5V8Z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="btn-ghost"
            >
              <span className="sr-only">GitHub</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.45 3.44 10.07 8.21 11.7.6.12.82-.27.82-.6 0-.3-.01-1.1-.02-2.16-3.34.75-4.04-1.66-4.04-1.66-.55-1.4-1.35-1.77-1.35-1.77-1.1-.78.08-.77.08-.77 1.22.09 1.86 1.28 1.86 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.81.42-1.35.76-1.66-2.66-.31-5.46-1.36-5.46-6.06 0-1.34.46-2.44 1.22-3.3-.12-.31-.53-1.55.12-3.22 0 0 1-.33 3.3 1.26a11.2 11.2 0 0 1 6 0c2.3-1.59 3.3-1.26 3.3-1.26.65 1.67.24 2.91.12 3.22.76.86 1.22 1.96 1.22 3.3 0 4.71-2.8 5.74-5.47 6.05.43.39.81 1.15.81 2.32 0 1.67-.02 3.01-.02 3.42 0 .33.22.72.82.6 4.77-1.63 8.21-6.25 8.21-11.7C24 5.5 18.63 0 12 0Z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="btn-ghost"
            >
              <span className="sr-only">Twitter</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M23.95 4.57c-.88.4-1.82.67-2.81.8a4.9 4.9 0 0 0 2.15-2.72c-.95.58-2 .99-3.13 1.22a4.84 4.84 0 0 0-8.26 4.42A13.72 13.72 0 0 1 1.64 3.16a4.92 4.92 0 0 0 1.5 6.47c-.77-.02-1.5-.24-2.13-.6v.06c0 2.38 1.66 4.37 3.86 4.83-.4.12-.84.18-1.28.18-.3 0-.6-.03-.88-.08.6 1.95 2.32 3.36 4.36 3.4A9.7 9.7 0 0 1 0 19.54 13.66 13.66 0 0 0 7.55 22c9.06 0 14-7.6 14-14.2 0-.22 0-.43-.02-.64.96-.7 1.8-1.56 2.46-2.56Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
