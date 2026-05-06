import useInView from "../hooks/useInView";
import { learning } from "../data/portfolio";

export default function Learning() {
  const [ref, inView] = useInView();

  return (
    <section id="learning" className="py-20 px-6 bg-white/[0.01]">
      <div className="max-w-3xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="p-8 bg-white/[0.03] border border-white/[0.06] rounded-2xl relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#00D4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <p className="text-[#00D4FF] font-mono text-xs tracking-widest uppercase">Currently</p>
                <h2 className="text-white font-bold text-lg">What I'm Learning</h2>
              </div>
            </div>

            <ul className="space-y-3 relative z-10">
              {learning.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 text-[#8899AA] text-sm transition-all duration-500 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <span className="text-[#00D4FF] mt-0.5 flex-shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-[#8899AA]/50 font-mono italic relative z-10">
              // always be shipping, always be learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
