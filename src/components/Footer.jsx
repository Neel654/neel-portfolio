import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="font-mono text-sm font-bold text-white/40 hover:text-white/70 transition-colors">
          <span className="text-[#00D4FF]/60">&lt;</span>
          {personal.name}
          <span className="text-[#00D4FF]/60">/&gt;</span>
        </a>
        <p className="text-xs text-[#8899AA]/40 font-mono">
          Designed & built by Neel · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-1 text-xs text-[#8899AA]/40 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-pulse" />
          All systems operational
        </div>
      </div>
    </footer>
  );
}
