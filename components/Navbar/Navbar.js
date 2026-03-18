import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../Assets/logo.webp";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="py-3 pl-4 pr-1 sm:pr-3 bg-white rounded-none sm:rounded-xl  flex justify-between items-center ">
      <div className="flex items-center gap-8">
        <Image src={logo} alt="logo" className="w-16" />
        <ul className="hidden sm:flex items-center gap-6 ">
          <Link href="#features" className="text-neutral-500 text-sm">
            Features
          </Link>
          <Link href="#testimonial" className="text-neutral-500 text-sm">
            Testimonial
          </Link>
          <Link href="#faq" className="text-neutral-500 text-sm">
            FAQ
          </Link>
          <Link href="#contact" className="text-neutral-500 text-sm">
            Contact
          </Link>
        </ul>
      </div>
      {/* <div className="sm:hidden hover:bg-slate-700/15 rounded-md cursor-pointer p-2"> */}
      <MobileMenu />
      {/* </div> */}
      <div className="hidden sm:inline-block ">
        <Link
          href={"/login"}
          className="bg-brand-500  text-sm font-semibold text-neutral-950 px-4 py-2 rounded-md flex items-center gap-1"
        >
          Sign In <ArrowRight size={18} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
