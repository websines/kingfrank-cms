"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full p-4">
      <nav className="flex flex-grow flex-row justify-between items-center">
        <div className="p-2">
          <Link href="/">
            <img
              src={"/main_logo_black.png"}
              alt="logo"
              className="h-auto w-[170px]"
            />
          </Link>
        </div>
        <div className="md:flex hidden space-x-12 font-medium flex-row justify-start items-start">
          <Link href="/">
            <p className="cursor-pointer">Home</p>
          </Link>
          <Link href="/about">
            <p className="cursor-pointer">About</p>
          </Link>

          <Link href="/faqs">
            <p className="cursor-pointer">FAQ</p>
          </Link>
          <Link href="/terms">
            <p className="cursor-pointer">Terms</p>
          </Link>
          <Link href="/contact-us">
            <p className="cursor-pointer">Contact Us</p>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-black cursor-pointer focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <IoClose className="w-6 h-6" />
            ) : (
              <IoMenuOutline className="w-6 h-6" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-24 right-0 left-0 bg-white z-10">
            <div className="flex flex-col space-y-4 p-4 font-medium text-black">
              <Link href="/">
                <p className="cursor-pointer">Home</p>
              </Link>
              <Link href="/about">
                <p className="cursor-pointer">About</p>
              </Link>

              <Link href="/faqs">
                <p className="cursor-pointer">FAQ</p>
              </Link>
              <Link href="/terms">
                <p className="cursor-pointer">Terms</p>
              </Link>
              <Link href="/contact-us">
                <p className="cursor-pointer">Contact Us</p>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
