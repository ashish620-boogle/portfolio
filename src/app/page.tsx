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
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
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
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold transition-colors ${
                        index === 0
                          ? "bg-accent text-white hover:bg-accentDark"
                          : "border border-line text-ink hover:border-ink"
                      }`}
                      aria-label={`Open ${link.label}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <Card className="bg-mist">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Focus Areas
                </p>
                <h2 className="font-display text-2xl md:text-3xl mt-4">
                  Building real-time XR systems and grounded AI pipelines.
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-muted">
                  <li>Current: DRDO - Real-time multi-user simulation</li>
                  <li>Research: GenAI, NLP, IoT security, AR/VR</li>
                  <li>Stack: Python, C#, Unity, TensorFlow, LangChain</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-20">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <SectionHeading
              title="About"
              subtitle="Focused on real-time XR systems and production-ready AI pipelines."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <p className="font-body text-base md:text-lg leading-relaxed text-ink/80">
                  {about.summary}
                </p>
              </Card>
              <Card>
                <p className="font-body text-base md:text-lg leading-relaxed text-ink/80">
                  {about.educationHighlight}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["AR/VR", "GenAI", "NLP", "Time-series", "Unity"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-ink text-mist text-xs font-semibold uppercase tracking-[0.2em] rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="py-16 md:py-20">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <SectionHeading title="Experience" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {experience.map((item) => (
                <Card key={item.company}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="font-display text-xl md:text-2xl">
                      {item.role}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                      {item.dates}
                    </span>
                  </div>
                  <p className="font-body font-semibold mt-2">{item.company}</p>
                  <p className="text-sm font-body text-muted mt-1">
                    {item.location}
                  </p>
                  <ul className="mt-4 space-y-2 font-body text-sm md:text-base leading-relaxed text-ink/80">
                    {item.highlights.map((line) => (
                      <li key={line}>- {line}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-canvas text-ink text-xs font-semibold uppercase tracking-[0.2em] rounded-full border border-line"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 md:py-20">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <SectionHeading title="Projects" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.title}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="font-display text-xl md:text-2xl">
                      {project.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                      {project.date}
                    </span>
                  </div>
                  <p className="font-body text-sm md:text-base mt-4 leading-relaxed text-ink/80">
                    {project.summary}
                  </p>
                  <ul className="mt-4 space-y-2 font-body text-sm md:text-base leading-relaxed text-ink/80">
                    {project.bullets.map((line) => (
                      <li key={line}>- {line}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-canvas text-ink text-xs font-semibold uppercase tracking-[0.2em] rounded-full border border-line"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.links.length ? (
                    <div className="flex flex-wrap gap-3 mt-6">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] border border-line text-ink hover:border-ink"
                          aria-label={`Open ${project.title} ${link.label}`}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="py-16 md:py-20">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <SectionHeading title="Publications" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {publications.map((paper) => (
                <Card key={paper.title}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="font-display text-xl md:text-2xl">
                      {paper.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] bg-canvas text-ink px-3 py-1 rounded-full border border-line">
                      {paper.status}
                    </span>
                  </div>
                  <p className="font-body font-semibold mt-2">{paper.venue}</p>
                  <p className="font-body text-sm md:text-base mt-4 leading-relaxed text-ink/80">
                    {paper.summary}
                  </p>
                  {paper.links.length ? (
                    <div className="flex flex-wrap gap-3 mt-6">
                      {paper.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] border border-line text-ink hover:border-ink"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 md:py-20">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <SectionHeading title="Skills" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((group) => (
                <Card key={group.title}>
                  <h3 className="font-display text-xl md:text-2xl">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2 font-body text-sm md:text-base leading-relaxed text-ink/80">
                    {group.items.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-16 md:py-20">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <SectionHeading title="Education" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {education.map((item) => (
                <Card key={item.degree}>
                  <h3 className="font-display text-xl md:text-2xl">
                    {item.degree}
                  </h3>
                  <p className="font-body font-semibold mt-2">{item.institute}</p>
                  <p className="font-body text-muted mt-2">{item.score}</p>
                  <p className="font-body text-sm mt-2 uppercase tracking-[0.2em] text-muted">
                    {item.year}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="py-16 md:py-20">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <SectionHeading title="Achievements" />
            <Card className="max-w-4xl">
              <ul className="space-y-3 font-body text-sm md:text-base leading-relaxed text-ink/80">
                {achievements.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-20">
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
                    className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold border border-line text-ink hover:border-ink"
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
