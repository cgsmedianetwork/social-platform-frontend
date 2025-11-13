import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../Assets/logo.webp";

const Navbar = () => {
  return (
    <nav className="py-3 px-4 bg-white rounded-xl flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Image src={logo} alt="logo" className="w-16" />
        <ul className="flex items-center gap-6">
          <Link href="/" className="text-neutral-500 text-sm">
            Features
          </Link>
          <Link href="/" className="text-neutral-500 text-sm">
            Testimonial
          </Link>
          <Link href="/" className="text-neutral-500 text-sm">
            FAQ
          </Link>
          <Link href="/" className="text-neutral-500 text-sm">
            Contact
          </Link>
        </ul>
      </div>
      <div>
        <Link
          href={"/signup"}
          className="bg-brand-500 text-sm font-semibold text-neutral-950 px-4 py-2 rounded-md flex items-center gap-1"
        >
          Sign Up <ArrowRight size={18} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
