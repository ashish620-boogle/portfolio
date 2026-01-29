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
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
            <div className="relative bg-cream text-ink border-4 border-ink shadow-[12px_12px_0px_0px_#000] p-6 md:p-10 lg:p-14">
              <div className="absolute -top-6 -right-6 hidden md:block w-28 h-28 bg-electric border-4 border-ink" />
              <div className="absolute -bottom-6 -left-6 hidden md:block w-20 h-20 bg-ink border-4 border-cream" />
              <h1 className="font-archivo text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[6rem] leading-[0.95] tracking-tight">
                {hero.name.toUpperCase()}
              </h1>
              <p className="font-public text-lg md:text-2xl mt-4 max-w-3xl">
                {hero.title}
              </p>
              <p className="font-public text-base md:text-lg mt-6 max-w-3xl leading-relaxed">
                {hero.intro}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-electric text-white font-public font-bold uppercase tracking-widest border-2 border-ink shadow-[6px_6px_0px_0px_#000] hover:shadow-[9px_9px_0px_0px_#000] transition-shadow focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-cream"
                    aria-label={`Open ${link.label}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 border-y-2 border-cream/40 py-4 overflow-hidden">
              <div className="marquee font-lexend text-cream uppercase tracking-[0.4em] text-xs sm:text-sm whitespace-nowrap">
                AR/VR * GENAI * DATA SCIENCE * XR NETWORKING * RAG PIPELINES *
                ANOMALY DETECTION * MULTI-USER SYSTEMS *
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
            <SectionHeading
              title="About"
              subtitle="Focused on real-time XR systems and production-ready AI pipelines."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <p className="font-public text-base md:text-lg leading-relaxed">
                  {about.summary}
                </p>
              </Card>
              <Card>
                <p className="font-public text-base md:text-lg leading-relaxed">
                  {about.educationHighlight}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["AR/VR", "GenAI", "NLP", "Time-series", "Unity"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-ink text-cream text-xs font-public font-bold uppercase tracking-widest"
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

        <section id="experience" className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
            <SectionHeading title="Experience" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {experience.map((item) => (
                <Card key={item.company}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="font-lexend text-xl md:text-2xl">
                      {item.role}
                    </h3>
                    <span className="text-xs font-public uppercase tracking-widest">
                      {item.dates}
                    </span>
                  </div>
                  <p className="font-public font-bold mt-2">{item.company}</p>
                  <p className="text-sm font-public mt-1">{item.location}</p>
                  <ul className="mt-4 space-y-2 font-public text-sm md:text-base leading-relaxed">
                    {item.highlights.map((line) => (
                      <li key={line}>- {line}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-ink text-cream text-xs font-public font-bold uppercase tracking-widest"
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

        <section id="projects" className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
            <SectionHeading title="Projects" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.title}>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="font-lexend text-xl md:text-2xl">
                      {project.title}
                    </h3>
                    <span className="text-xs font-public uppercase tracking-widest">
                      {project.date}
                    </span>
                  </div>
                  <p className="font-public text-sm md:text-base mt-4 leading-relaxed">
                    {project.summary}
                  </p>
                  <ul className="mt-4 space-y-2 font-public text-sm md:text-base leading-relaxed">
                    {project.bullets.map((line) => (
                      <li key={line}>- {line}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-ink text-cream text-xs font-public font-bold uppercase tracking-widest"
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
                          className="inline-flex items-center justify-center px-5 py-2 bg-electric text-white font-public font-bold uppercase tracking-widest border-2 border-ink shadow-[6px_6px_0px_0px_#000] hover:shadow-[9px_9px_0px_0px_#000] transition-shadow"
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

        <section id="publications" className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
            <SectionHeading title="Publications" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {publications.map((paper) => (
                <Card key={paper.title}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="font-lexend text-xl md:text-2xl">
                      {paper.title}
                    </h3>
                    <span className="text-xs font-public uppercase tracking-widest bg-ink text-cream px-3 py-1">
                      {paper.status}
                    </span>
                  </div>
                  <p className="font-public font-bold mt-2">{paper.venue}</p>
                  <p className="font-public text-sm md:text-base mt-4 leading-relaxed">
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
                          className="inline-flex items-center justify-center px-5 py-2 bg-electric text-white font-public font-bold uppercase tracking-widest border-2 border-ink shadow-[6px_6px_0px_0px_#000] hover:shadow-[9px_9px_0px_0px_#000] transition-shadow"
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

        <section id="skills" className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
            <SectionHeading title="Skills" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((group) => (
                <Card key={group.title}>
                  <h3 className="font-lexend text-xl md:text-2xl">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2 font-public text-sm md:text-base leading-relaxed">
                    {group.items.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
            <SectionHeading title="Education" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {education.map((item) => (
                <Card key={item.degree}>
                  <h3 className="font-lexend text-xl md:text-2xl">
                    {item.degree}
                  </h3>
                  <p className="font-public font-bold mt-2">{item.institute}</p>
                  <p className="font-public mt-2">{item.score}</p>
                  <p className="font-public text-sm mt-2 uppercase tracking-widest">
                    {item.year}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
            <SectionHeading title="Achievements" />
            <Card className="max-w-4xl">
              <ul className="space-y-3 font-public text-sm md:text-base leading-relaxed">
                {achievements.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
            <SectionHeading title="Contact" />
            <Card className="max-w-3xl">
              <p className="font-public text-base md:text-lg">
                Email:{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="font-bold hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-cream"
                >
                  {contact.email}
                </a>{" "}
                |{" "}
                <a
                  href={`mailto:${contact.emailAlt}`}
                  className="font-bold hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-cream"
                >
                  {contact.emailAlt}
                </a>
              </p>
              <p className="font-public text-base md:text-lg mt-2">
                Phone:{" "}
                <a
                  href={`tel:${contact.phone}`}
                  className="font-bold hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-cream"
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
                    className="inline-flex items-center justify-center px-6 py-3 bg-electric text-white font-public font-bold uppercase tracking-widest border-2 border-ink shadow-[6px_6px_0px_0px_#000] hover:shadow-[9px_9px_0px_0px_#000] transition-shadow"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-cream/40 py-8">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm font-public text-cream/70">
          <span>Built with Next.js, TypeScript, and Tailwind CSS.</span>
          <span>Soft Brutalism system - optimized for performance.</span>
        </div>
      </footer>
    </div>
  );
}
