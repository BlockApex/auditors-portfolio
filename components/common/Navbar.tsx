"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu, X as XIcon } from "lucide-react";
import { useState } from "react";

import { useAuditorStore } from "@/store/useAuditorStore";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: auditor } = useAuditorStore();

  const links = [
    { name: "_hello", path: "/" },
    { name: "_about-me", path: "/about" },
    { name: "_projects", path: "/projects" },
    { name: "Vulnerabilities Directory", path: "/vulnerabilities" },
  ];

  return (
    <nav className="w-full flex items-center justify-between border-b border-foreground/50 relative z-50">
      <section className="flex items-center w-full xl:w-auto justify-between xl:justify-start">
        <div className="text-foreground text-base border-r border-foreground/50 px-6 py-2 min-w-[250px]">
          {auditor?.name ? (
            auditor.name.toLowerCase().replace(/\s+/g, '-')
          ) : (
            <div className="h-4 w-32 bg-white/10 rounded animate-pulse"></div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden px-6 py-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon /> : <Menu />}
        </button>

        {/* Desktop Links */}
        <div className="hidden xl:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-foreground text-base border-r border-foreground/50 px-6 py-2 ${pathname === link.path ? "active_link" : ""
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Desktop Contact Link */}
      <section className="hidden xl:flex items-center border-s border-foreground/50 px-6 py-2 gap-3">
        <span className="w-4 h-4 rounded-full bg-[#05DF72]/20 flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-[#05DF72] block"></span>
        </span>
        <Link href='/contact' className="text-foreground text-base">_contact-me</Link>
      </section>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-dark border-b border-foreground/50 flex flex-col xl:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-foreground text-base border-b border-foreground/50 px-6 py-4 ${pathname === link.path ? "active_link" : ""
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href='/contact'
            onClick={() => setIsMenuOpen(false)}
            className="text-foreground text-base px-6 py-4 flex items-center gap-3"
          >
            <span className="w-4 h-4 rounded-full bg-[#05DF72]/20 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-[#05DF72] block"></span>
            </span>
            _contact-me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
