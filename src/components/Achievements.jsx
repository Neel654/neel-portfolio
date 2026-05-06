import useInView from "../hooks/useInView";
import { achievements } from "../data/portfolio";

function AchievementCard({ item, index }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`group relative p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:border-[#00D4FF]/25 transition-all duration-500 ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Shimmer line top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl" />

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00D4FF]/15 transition-colors duration-200">
          <svg className="w-5 h-5 text-[#00D4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
          </svg>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-white font-semibold text-sm">{item.title}</h3>
            <span className="text-xs text-[#8899AA] font-mono">{item.year}</span>
          </div>
          <p className="text-[#00D4FF] text-xs mt-0.5 font-mono">{item.issuer}</p>
          <p className="text-[#8899AA] text-xs mt-1.5 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [ref, inView] = useInView();

  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 mb-14 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-[#00D4FF] font-mono text-sm mb-3 tracking-widest uppercase">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Achievements & Certs</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
