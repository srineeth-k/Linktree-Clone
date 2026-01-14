"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const showNavbar = ["/", "/generate"].includes(pathname);

  if (!showNavbar) return null;

  return (
    <nav className="fixed bg-white w-[80vw] top-10 left-0 right-0 mx-auto rounded-full p-3 flex justify-between">
      <div className="logo flex gap-25 items-center">
        <Link href="/">
          <img
            loading="eager"
            src="./bittree_logo.png"
            alt=""
            className="pl-1 h-16 w-auto object-contain"
          />
        </Link>

        <ul className="flex gap-10">
          <Link href="/"><li>Templates</li></Link>
          <Link href="/"><li>Marketplace</li></Link>
          <Link href="/"><li>Discover</li></Link>
          <Link href="/"><li>Pricing</li></Link>
          <Link href="/"><li>Learn</li></Link>
        </ul>
      </div>

      <div className="flex gap-3">
        <button className="login bg-gray-200 rounded-lg p-3 hover:bg-gray-300 font-bold">
          Log in
        </button>
        <button className="signup bg-black text-white rounded-full p-3 font-bold">
          Sign up Free
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
