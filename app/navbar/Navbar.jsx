"use client";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <header className=" w-full ">
      <nav
        className="flex items-center justify-between p-4 lg:px-6 h-20 border border-t-0 border-l-0 border-r-0 border-b-black  backdrop-blur-md backdrop-filter bg-white-green/80"
        aria-label="Global"
      >
        <div className="flex lb:flex-1">
          <a href="/" className="-m-1.5 p-1.5 text-black text-2xl font-black  ">
            FRUSTRATION FRENZY
          </a>
        </div>
        <div>
          <Link
            href="/"
            className="text-dark-green hover:text-sec-red font-crimson text-xl"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            href="/ragebooking"
            className="text-dark-green hover:text-sec-red font-crimson text-xl "
          >
            Smashroom
          </Link>
        </div>
        <div>
          <Link
            href="/sessions"
            className="text-dark-green hover:text-sec-red font-crimson text-xl "
          >
            Events
          </Link>
        </div>
        <div>
          <Link
            href="/contactUs"
            className="text-dark-green hover:text-sec-red font-crimson text-xl "
          >
            Contacts Us
          </Link>
        </div>
        <div>
          <Link
            href="/aboutUs"
            className="text-dark-green hover:text-sec-red focus:text-sec-red font-crimson text-xl"
          >
            About us
          </Link>
        </div>
        <div>
          <SignedOut>
            <Link href="/sign-in">
              <a>Sign In</a>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
