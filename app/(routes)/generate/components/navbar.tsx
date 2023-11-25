"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link"

import { NavbarTooltip } from "@/components/navbar-tooltip";
import { Hamburger } from "./hamburger";

const Navbar = () => {;
  return (
    <nav className="py-4 px-10 md:py-2 md:px-20 border-[0.5px] border-b-slate-200 dark:border-none w-full">

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href='/'>
            <div className="tracking-tight font-semibold text-lg cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Gifty/AI</div>
          </Link>
          <NavbarTooltip />
        </div>
        <div className="flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="md:hidden flex items-center justify-between">
        <p className="tracking-tight font-semibold text-lg cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Gifty/AI</p>
        <Hamburger />
      </div>
    </nav>
  );
}
 
export default Navbar;