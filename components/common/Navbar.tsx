"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "_hello", path: "/" },
    { name: "_about-me", path: "/about" },
    { name: "_projects", path: "/projects" },
    { name: "Vulnerabilities Directory", path: "/vulnerabilities" },
  ];

  return (
    <nav className="w-full flex items-center justify-between border-b border-foreground/50">
      <section className="flex items-center">
        <p className="text-foreground text-base border-r border-foreground/50 px-6 py-2">
          moazzam-arif
        </p>

        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`text-foreground text-base border-r border-foreground/50 px-6 py-2 ${
              pathname === link.path ? "active_link" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </section>

      <section className="flex items-center border-s border-foreground/50 px-6 py-2 gap-3">
        <span className="w-4 h-4 rounded-full bg-[#05DF72]/20 flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-[#05DF72] block"></span>
        </span>
        <p className="text-foreground text-base">_contact-me</p>
      </section>
    </nav>
  );
};

export default Navbar;
