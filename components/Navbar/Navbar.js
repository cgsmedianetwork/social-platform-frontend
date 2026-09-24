import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../Assets/logo.webp";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#testimonial", label: "Testimonial" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="-mx-3 sm:mx-0 py-3 pl-4 pr-2 sm:px-4 bg-white rounded-none sm:rounded-xl flex justify-between items-center gap-4">
      <div className="flex items-center gap-6 lg:gap-8">
        <Link href="/" className="shrink-0">
          <Image src={logo} alt="logo" className="w-14 sm:w-16" priority />
        </Link>
        <ul className="hidden sm:flex items-center gap-4 md:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-neutral-500 text-sm hover:text-neutral-950 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <MobileMenu />
      <div className="hidden sm:block shrink-0">
        <Link
          href={"/login"}
          className="bg-brand-500 text-sm font-semibold text-neutral-950 px-4 py-2 rounded-md flex items-center gap-1"
        >
          Sign In <ArrowRight size={18} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
