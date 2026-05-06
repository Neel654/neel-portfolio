import { useState } from "react";
import useInView from "../hooks/useInView";
import { personal } from "../data/portfolio";

export default function Contact() {
  const [ref, inView] = useInView();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      label: "GitHub",
      href: personal.github,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      color: "hover:border-white/30",
    },
    {
      label: "LinkedIn",
      href: personal.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      ),
      color: "hover:border-[#0077B5]/50",
    },
  ];

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-[#00D4FF] font-mono text-sm mb-4 tracking-widest uppercase">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Let's Build Something<br />
            <span className="text-[#00D4FF]">Together.</span>
          </h2>
          <p className="text-[#8899AA] text-base leading-relaxed max-w-xl mx-auto mb-12">
            I'm actively looking for Fall 2026 internships in SWE, Backend, or Data Engineering. If you have a role or just want to connect, my inbox is open.
          </p>

          {/* Email card */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 bg-white/[0.03] border border-white/[0.06] rounded-xl mb-10 w-full max-w-md">
            <span className="text-[#C8D6E5] font-mono text-sm px-4 py-2 flex-1 text-center sm:text-left truncate">
              {personal.email}
            </span>
            <button
              onClick={copyEmail}
              className={`flex-shrink-0 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                copied
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-[#00D4FF] text-[#080C10] hover:bg-[#00BBDD]"
              }`}
            >
              {copied ? "✓ Copied!" : "Copy Email"}
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2.5 px-5 py-3 bg-white/[0.03] border border-white/[0.06] ${l.color} text-[#8899AA] hover:text-white rounded-xl transition-all duration-200 text-sm font-medium`}
              >
                {l.icon}
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
