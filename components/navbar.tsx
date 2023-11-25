"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { NavbarTooltip } from "./navbar-tooltip";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ModeToggle } from "./ui/theme-toggle";

const Navbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="py-2 px-20 border-[0.5px] border-b-slate-200 dark:border-none w-full">
      <div className="flex items-center justify-between">
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
    </nav>
  );
}
 
export default Navbar;