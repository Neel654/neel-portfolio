import { useState, useEffect } from "react";
import { personal } from "../data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav({ scrollY }) {
  const [open, setOpen] = useState(false);
  const scrolled = scrollY > 40;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080C10]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-lg font-bold tracking-tight text-white group"
        >
          <span className="text-[#00D4FF]">&lt;</span>
          {personal.name}
          <span className="text-[#00D4FF]">/&gt;</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#8899AA] hover:text-white transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 text-sm font-medium text-[#00D4FF] border border-[#00D4FF]/40 rounded-md hover:bg-[#00D4FF]/10 transition-all duration-200"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-60"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-4 h-px bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#080C10] transition-all duration-400 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-light text-white/80 hover:text-white transition-colors"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 px-6 py-3 text-[#00D4FF] border border-[#00D4FF]/40 rounded-md"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
