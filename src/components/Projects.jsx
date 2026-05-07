import { useState } from "react";
import useInView from "../hooks/useInView";
import { projects } from "../data/portfolio";

const typeColors = {
  System: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  Automation: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Data: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "Full-Stack": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  Backend: "text-blue-400 bg-blue-400/10 border-blue-400/20",
};

function ProjectCard({ p, index }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`group relative p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl shadow-[0_0_20px_rgba(0,212,255,0.06)] hover:shadow-[0_0_35px_rgba(0,212,255,0.18)] hover:border-[#00D4FF]/25 transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${p.featured ? "md:col-span-1" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top glow on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`text-xs px-2 py-0.5 rounded-full border font-mono ${
                typeColors[p.type] || "text-[#00D4FF] bg-[#00D4FF]/10 border-[#00D4FF]/20"
              }`}
            >
              {p.type}
            </span>
            {p.featured && (
              <span className="text-xs px-2 py-0.5 rounded-full border text-[#00D4FF] bg-[#00D4FF]/10 border-[#00D4FF]/20 font-mono">
                Featured
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors duration-200">
            {p.title}
          </h3>
          <p className="text-sm text-[#8899AA] mt-0.5">{p.subtitle}</p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0 ml-4">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 text-[#8899AA] hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label={`View ${p.title} on GitHub`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
        </div>
      </div>

      <p className="text-[#8899AA] text-sm leading-relaxed mb-4">{p.description}</p>

      {/* Expandable detail */}
      <div
        className={`overflow-hidden transition-all duration-400 ${
          expanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-4 border-t border-white/[0.06] space-y-3">
          <div>
            <p className="text-xs text-[#8899AA] uppercase tracking-widest font-mono mb-1">
              Problem
            </p>
            <p className="text-sm text-[#AABBCC]">{p.problem}</p>
          </div>
          <div>
            <p className="text-xs text-emerald-400/70 uppercase tracking-widest font-mono mb-1">
              Impact
            </p>
            <p className="text-sm text-emerald-400/90">{p.impact}</p>
          </div>
        </div>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-4">
        {p.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] text-[#8899AA] rounded-md font-mono"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Expand button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-200 ${
          expanded
            ? "text-[#02cf68] border border-[#02cf68]/30 bg-[#02cf68]/10 shadow-[0_0_20px_rgba(2,207,104,0.25)]"
            : "text-white/80 border border-white/10 bg-white/[0.04] hover:border-[#f507e1]/30 hover:text-[#f507e1] hover:shadow-[0_0_20px_rgba(245,7,225,0.18)]"
        }`}
        aria-expanded={expanded}
        aria-label={expanded ? "Hide project details" : "View project details"}
      >
        <span className="text-xs font-medium tracking-wide">
          {expanded ? "Hide details" : "View details"}
        </span>

        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();
  const [selectedFilter, setSelectedFilter] = useState("Featured");

  // Define filter order
  const filters = ["Featured", "Data", "Full-Stack", "Backend", "System", "Automation"];

  // Calculate counts for each filter
  const getCounts = () => {
    const counts = {
      Featured: projects.filter((p) => p.featured).length,
      Data: projects.filter((p) => p.type === "Data").length,
      "Full-Stack": projects.filter((p) => p.type === "Full-Stack").length,
      Backend: projects.filter((p) => p.type === "Backend").length,
      System: projects.filter((p) => p.type === "System").length,
      Automation: projects.filter((p) => p.type === "Automation").length,
    };
    
    return counts;
  };

  const counts = getCounts();

  // Filter logic
  const getVisibleProjects = () => {
    if (selectedFilter === "Featured") {
      return projects.filter((p) => p.featured);
    }
    
    // Filter by specific type
    return projects.filter((p) => p.type === selectedFilter);
  };

  const visible = getVisibleProjects();

  return (
    <section id="projects" className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#00D4FF] font-mono text-sm mb-3 tracking-widest uppercase">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Things I've Built
          </h2>

          {/* Filter chips */}
          <div className="mb-8 flex flex-wrap gap-2 items-center">
            <span className="text-sm text-[#8899AA] font-mono mr-2">Filter:</span>
            {filters.map((filter) => {
              const isActive = selectedFilter === filter;
              const count = counts[filter];
              
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  aria-pressed={isActive}
                  className={`text-sm px-3 py-1.5 rounded-lg border font-mono transition-all duration-200 ${
                    isActive
                      ? "border-[#00D4FF] text-[#00D4FF] bg-[#00D4FF]/10 shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                      : "border-white/10 text-[#8899AA] bg-white/[0.03] hover:border-[#00D4FF]/50 hover:text-[#AABBCC] hover:bg-white/[0.05]"
                  }`}
                >
                  {filter}
                  <span className="ml-1.5 opacity-60">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Results count */}
          <p className="text-sm text-[#8899AA] mb-6 font-mono">
            Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}