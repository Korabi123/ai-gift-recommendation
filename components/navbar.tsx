"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { NavbarTooltip } from "@/components/navbar-tooltip";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Hamburger } from "@/components/hamburger";

const Navbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="py-4 px-10 md:py-2 md:px-20 border-[0.5px] border-b-slate-200 dark:border-none w-full">

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="tracking-tight font-semibold cursor-pointer">gifty/ai</TooltipTrigger>
              <TooltipContent className="font-semibold">
                <p>Gifty/AI Logo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <NavbarTooltip />
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Link href={isSignedIn ? "/generate" : "sign-up"}>
            <Button variant={isSignedIn ? "default" : "gradient"} className="rounded-full">
              {isSignedIn ? "Generate" : "Get started"}
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="md:hidden flex items-center justify-between">
        <p className="tracking-tight font-semibold cursor-pointer">gifty/ai</p>
        <Hamburger />
      </div>
    </nav>
  );
}
 
export default Navbar;