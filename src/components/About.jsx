import useInView from "../hooks/useInView";
import { personal } from "../data/portfolio";

const stats = [
  { value: "6+", label: "Projects Shipped" },
  { value: "2", label: "Hackathons" },
  { value: "100%", label: "Test Coverage on Systems Work" },
  { value: "50k+", label: "Rows Analyzed" },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left — Text */}
          <div>
  <p className="text-[#00D4FF] font-mono text-sm mb-3 tracking-widest uppercase">About Me</p>
  
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
    I build systems that are{" "}
    <span className="text-[#00D4FF]">efficient, reliable,</span> and{" "}
    <span className="text-[#00D4FF]">maintainable.</span>
  </h2>

  <div className="space-y-4 text-[#8899AA] leading-relaxed text-[15px]">
    <p>
      I'm a Computer Science student in Canada focused on backend systems, data engineering, and automation. I enjoy working close to the system — building pipelines, integrating APIs, and designing data workflows that solve real problems.
    </p>

    <p>
      My work sits at the intersection of <span className="text-white">engineering discipline</span> and <span className="text-white">practical impact</span>. From experimenting with storage systems to analyzing real-world datasets, I focus on building solutions that are simple, scalable, and useful.
    </p>

    <p>
      Currently seeking <span className="text-[#00D4FF]">Fall 2026 internships</span> in Software Engineering, Backend, or Data roles. I’m motivated by challenging problems, real codebases, and opportunities to keep learning.
    </p>
  </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white/80 hover:border-[#00D4FF]/40 hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                LinkedIn
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white/80 hover:border-[#00D4FF]/40 hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:border-[#00D4FF]/20 transition-colors duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors duration-300">
                  {s.value}
                </div>
                <div className="text-xs text-[#8899AA] leading-snug">{s.label}</div>
              </div>
            ))}

            {/* Location badge */}
            <div className="col-span-2 p-4 bg-white/[0.03] border border-white/[0.06] rounded-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#00D4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white text-sm">{personal.location}</div>
                <div className="text-[#8899AA] text-xs">Open to remote & hybrid roles across Canada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
