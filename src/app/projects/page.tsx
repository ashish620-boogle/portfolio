import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/constants";

const placeholders = ["/project-1.svg", "/project-2.svg", "/project-3.svg"];

export default function ProjectsPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="A dedicated space for project highlights, screenshots, and links."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title}>
              <img
                src={placeholders[index % placeholders.length]}
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
                ) : (
                  <div className="flex flex-wrap gap-3 mt-6">
                    <span className="btn-ghost">GitHub</span>
                    <span className="btn-ghost">Live Demo</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
