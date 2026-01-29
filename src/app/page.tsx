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
  const stats = [
    { label: "Years of Study", value: "6+" },
    { label: "Publications", value: "4" },
    { label: "Projects Shipped", value: "12+" },
    { label: "CGPA (M.Tech)", value: "8.74" },
  ];

  return (
    <div id="top">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />

      <main id="main">
        <section className="pt-16 md:pt-24 pb-12">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div className="reveal">
                <div className="flex flex-wrap gap-2">
                  <span className="chip">GenAI</span>
                  <span className="chip">AR/VR</span>
                  <span className="chip">XR Systems</span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.03] tracking-tight text-ink mt-6">
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
                  <a href="#more" className="btn-ghost">
                    More Details
                  </a>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="bg-mist reveal">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    Now
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl mt-4">
                    Building real-time XR systems and grounded AI pipelines.
                  </h2>
                  <ul className="mt-5 space-y-3 text-sm text-muted">
                    <li>Current: DRDO - Multi-user wargaming simulation</li>
                    <li>Research: GenAI, NLP, IoT security, AR/VR</li>
                    <li>Stack: Python, C#, Unity, TensorFlow, LangChain</li>
                  </ul>
                </Card>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <Card key={stat.label} className="glass float">
                      <p className="text-xs uppercase tracking-[0.25em] text-muted">
                        {stat.label}
                      </p>
                      <p className="font-display text-2xl mt-4">
                        {stat.value}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <div className="section-divider mt-16" />
          </div>
        </section>

        <section id="about" className="py-12 md:py-16">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] items-start">
              <SectionHeading
                title="About"
                subtitle="Focused on real-time XR systems and production-ready AI pipelines."
              />
              <Card>
                <p className="font-body text-base md:text-lg leading-relaxed text-ink/80">
                  {about.summary}
                </p>
                <p className="font-body text-base md:text-lg leading-relaxed text-ink/80 mt-6">
                  {about.educationHighlight}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["AR/VR", "GenAI", "NLP", "Time-series", "Unity"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-canvas text-ink text-xs font-semibold uppercase tracking-[0.2em] rounded-full border border-line"
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

        <section id="projects" className="py-12 md:py-16">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <SectionHeading title="Selected Projects" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.slice(0, 3).map((project) => (
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
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.slice(0, 4).map((tech) => (
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
                          className="btn-ghost"
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

        <section id="more" className="py-12 md:py-16">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
            <SectionHeading
              title="More"
              subtitle="Expanded details: experience, publications, skills, education, achievements, and contact."
            />
            <details className="group border border-line rounded-3xl bg-mist/70 p-6 md:p-8">
              <summary className="cursor-pointer list-none font-body text-sm uppercase tracking-[0.25em] text-muted flex items-center justify-between">
                <span>Open detailed sections</span>
                <span className="text-ink group-open:rotate-180 transition-transform">
                  ▾
                </span>
              </summary>
              <div className="mt-8 space-y-16">
                <section id="experience">
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
                        <p className="font-body font-semibold mt-2">
                          {item.company}
                        </p>
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
                </section>

                <section id="publications">
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
                        <p className="font-body font-semibold mt-2">
                          {paper.venue}
                        </p>
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
                                className="btn-ghost"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </Card>
                    ))}
                  </div>
                </section>

                <section id="skills">
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
                </section>

                <section id="education">
                  <SectionHeading title="Education" />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {education.map((item) => (
                      <Card key={item.degree}>
                        <h3 className="font-display text-xl md:text-2xl">
                          {item.degree}
                        </h3>
                        <p className="font-body font-semibold mt-2">
                          {item.institute}
                        </p>
                        <p className="font-body text-muted mt-2">
                          {item.score}
                        </p>
                        <p className="font-body text-sm mt-2 uppercase tracking-[0.2em] text-muted">
                          {item.year}
                        </p>
                      </Card>
                    ))}
                  </div>
                </section>

                <section id="achievements">
                  <SectionHeading title="Achievements" />
                  <Card className="max-w-4xl">
                    <ul className="space-y-3 font-body text-sm md:text-base leading-relaxed text-ink/80">
                      {achievements.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </Card>
                </section>

                <section id="contact">
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
                </section>
              </div>
            </details>
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
