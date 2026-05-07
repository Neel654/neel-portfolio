import useInView from "../hooks/useInView";
import { experience } from "../data/portfolio";

const typeIcon = {
  experience: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  hackathon: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
};

const typeColor = {
  experience: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  hackathon: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

function ExperienceItem({ item, index }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`relative pl-8 pb-10 last:pb-0 transition-all duration-600 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.06]" />

      {/* Timeline dot */}
      <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#080C10] ${
        index === 0 ? "bg-[#00D4FF]" : "bg-white/20"
      }`} />

      <div className="group">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-mono ${typeColor[item.type]}`}>
            {typeIcon[item.type]}
            {item.type}
          </span>
          <span className="text-xs text-[#8899AA] font-mono">{item.period}</span>
        </div>

        <h3 className="text-lg font-bold text-white mb-0.5">{item.role}</h3>
        <p className="text-[#00D4FF] text-sm mb-3">{item.org}</p>
        <p className="text-[#8899AA] text-sm leading-relaxed mb-3">{item.description}</p>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] text-[#8899AA] rounded-md font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 mb-14 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-[#00D4FF] font-mono text-sm mb-3 tracking-widest uppercase">Timeline</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
        </div>

        <div>
          {experience.map((item, i) => (
            <ExperienceItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
