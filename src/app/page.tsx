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
                              <a href="#projects" className="btn-primary">
                                View Projects
                              </a>
                              <a href="#contact" className="btn-ghost">
                                Contact
                              </a>
                            </div>
                          </div>
                          <div className="relative h-72 md:h-96">
                            <img
                              src="/profile-placeholder.svg"
                              alt="Profile placeholder"
                              className="h-full w-full rounded-3xl border border-line object-cover"
                            />
                          </div>
                        </div>          </div>
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
            <div className="flex items-center justify-between">
              <SectionHeading title="Projects" />
              <a href="/projects" className="btn-ghost hidden md:flex items-center gap-2">
                Browse all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.78125 4L8.21875 4.5625L11.625 8L8.21875 11.4375L8.78125 12L12.7812 8L8.78125 4Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project) => (
                <Card key={project.title} className="flex flex-col">
                  <img
                    src={project.image}
                    alt={`${project.title} placeholder`}
                    className="h-48 w-full rounded-2xl border border-line object-cover"
                  />
                  <div className="mt-5 flex-grow">
                    <h3 className="font-display text-xl md:text-2xl">
                      {project.title}
                    </h3>
                    <a href="#" className="text-sm font-medium text-accent hover:underline mt-2 inline-block">
                      Read more
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-16">
          <div className="max-w-[700px] mx-auto px-4 md:px-6 lg:px-8">
            <SectionHeading title="Contact" />
            <Card>
              <ContactForm />
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Ashish Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
