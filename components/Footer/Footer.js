import { TiktokIcon } from "hugeicons-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../Assets/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-950">
      <div className="custom-container ">
        <div className="flex items-center justify-between py-14">
          <div className="flex flex-col gap-6 max-w-[30%]">
            <Image src={logo} alt="logo" className="w-24 " />
            <p className="text-neutral-200">
              Connect your profiles, get clear insights, and grow with real
              expert guidance — all in one friendly place.
            </p>
            <div className="flex gap-5 text-neutral-200">
              <Link
                href="https://www.facebook.com/cgsmedianetwork"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon size={20} />
              </Link>
              <Link
                href="https://www.tiktok.com/@cgs_media_network"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TiktokIcon size={22} />
              </Link>
              <Link
                href="https://www.instagram.com/cgs_media_network"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={20} />
              </Link>
              <Link href="/">
                <LinkedinIcon size={20} />
              </Link>
            </div>
          </div>
          <div className=" flex gap-16">
            {/* <div className="flex flex-col gap-3 text-neutral-200 text-sm py-2">
              <p className="font-sans text-lg font-semibold text-white">
                Product
              </p>
              <p className="mt-3.5">Features</p>
              <p>How It Works </p>
              <p>Reviews</p>
              <p>Updates</p>
            </div> */}
            <div className="flex flex-col gap-3 text-neutral-200 text-sm py-2">
              <p className="font-sans text-lg font-semibold text-white">
                Company
              </p>
              <p className="mt-3.5">About</p>
              <p>Privacy Policy </p>
              <p>Terms of Service</p>
              <p>Blog</p>
            </div>
            <div className="flex flex-col gap-3 text-neutral-200 text-sm py-2">
              <p className="font-sans text-lg font-semibold text-white">
                Support
              </p>
              {/* <p className="mt-3.5">Getting started</p> */}
              <p>Help center</p>
              <Link href="#faq">FAQs</Link>
              <p>Contact us</p>
            </div>
            <div className="flex flex-col gap-3 text-neutral-200 text-sm py-2">
              <p className="font-sans text-lg font-semibold text-white">
                Contacts Us
              </p>
              <p className="mt-3.5 flex items-center gap-2">
                <Mail size={16} /> contact@cgs.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} /> (+880) 687 - 5892
              </p>
              <p className="flex  gap-2">
                <MapPin size={16} /> 794 Mcallister StSan <br /> Francisco,
                94102
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-700 py-6 flex justify-between items-center">
          <p className="text-neutral-100 text-sm">
            Copyright © {currentYear} CGS Media Network
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-200">
            {/* <p>All Rights Reserved</p>
            <div className="border-l h-4"></div> */}
            <p>Terms and Conditions</p>
            <div className="border-l h-4"></div>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
