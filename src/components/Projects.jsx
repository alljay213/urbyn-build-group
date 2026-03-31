// ── Projects.jsx ───────────────────────────────────────────────────
import { useState } from 'react'
import { projects, projectCategories } from '../data/projects'

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 md:py-32 bg-brand-cream">
      <div className="max-w-site mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="section-label">Our Work</span>
            <h2 className="section-heading">Recent Projects</h2>
            <span className="divider" />
            <p className="text-brand-slate leading-relaxed">
              Every project here was delivered on budget, on schedule, and to a standard
              our clients were proud to show off.
            </p>
          </div>
        </div>

        {/* Category filter pills */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-[12.5px] font-medium rounded-sm border transition-all duration-150 ${
                active === cat
                  ? 'bg-brand-dark text-white border-brand-dark'
                  : 'bg-white text-brand-slate border-brand-border hover:border-brand-dark hover:text-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-brand-slate py-16 text-sm">
            No projects in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="group card overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category badge */}
        <span
          className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-brand-dark
                     text-[10.5px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-sm"
        >
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-[17px] text-brand-dark mb-1.5">{project.title}</h3>
        <p className="text-brand-slate text-[13px] leading-relaxed flex-1">{project.description}</p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-brand-border">
          <span className="text-[11.5px] text-brand-slate">{project.year} · {project.duration}</span>
          <a
            href="#quote"
            className="text-[12px] font-medium text-[#ba4a2b] hover:underline"
          >
            Similar project?
          </a>
        </div>
      </div>
    </article>
  )
}
