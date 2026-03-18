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
    <footer id="contact" className="bg-neutral-950">
      <div className="custom-container ">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-14">
          <div className="flex flex-col gap-6 max-w-full sm:max-w-[30%]">
            <Image src={logo} alt="logo" className="w-16 sm:w-24 " />
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
          <div className="grid grid-cols-2 sm:flex  gap-6 sm:gap-16 mt-6 sm:mt-0 ">
            {/* <div className="flex flex-col gap-3 text-neutral-200 text-sm py-2">
              <p className="font-sans text-lg font-semibold text-white">
                Product
              </p>
              <p className="mt-3.5">Features</p>
              <p>How It Works </p>
              <p>Reviews</p>
              <p>Updates</p>
            </div> */}
            <div className="flex flex-col gap-3 text-neutral-200 text-sm py-2  w-full">
              <p className="font-sans text-lg font-semibold text-white">
                Company
              </p>
              <p className="mt-3.5">About</p>
              <p>Privacy Policy </p>
              <p>Terms of Service</p>
              <p>Blog</p>
            </div>
            <div className="flex flex-col gap-3 text-neutral-200 text-sm py-2">
              <p className="font-sans text-lg font-semibold text-white ">
                Support
              </p>
              {/* <p className="mt-3.5">Getting started</p> */}
              <p className="whitespace-nowrap">Help center</p>
              <Link href="#faq" className="whitespace-nowrap">
                FAQs
              </Link>
              <p className="whitespace-nowrap">Contact us</p>
            </div>
            <div className="flex flex-col gap-3 text-neutral-200 text-sm py-2">
              <p className="font-sans text-lg font-semibold text-white">
                Contacts Us
              </p>
              <p className="mt-3.5 flex items-center gap-2 whitespace-nowrap">
                <Mail size={16} /> admin@cgsmnetwork.com
              </p>
              <p className="flex items-center gap-2 whitespace-nowrap">
                <Phone size={16} /> +880 1337-596265
              </p>
              <p className="flex  gap-2">
                <MapPin size={16} /> Road No 4, Dhaka 1216, Bangladesh
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-700 py-6 flex flex-col sm:flex-row justify-between sm:items-center w-full">
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
