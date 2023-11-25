import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading from "./heading";
import { ModeToggle } from "./ui/theme-toggle";
import Link from "next/link";
import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";

export function Hamburger() {
  const { isSignedIn } = useAuth();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={25} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription className="mt-10">
            
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="focus-visible:outline-none focus:no-underline">Why choose us?</AccordionTrigger>
                <AccordionContent>
                  <ul className="my-6 ml-6 list-disc [&>li]:mt-10">
                    <li>
                      <Heading title="Personalisation" description="A personalized experience tailored to recipient details." />
                    </li>
                    <li>
                      <Heading title="Time and Effort Savings" description="Gifty/AI simplifies choosing a gift with tailored suggestions." />
                    </li>
                    <li>
                      <Heading title="Inovation and Variety" description="Gifty/AI uses innovative tech for diverse gift ideas." />
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-6 flex space-x-6 justify-center">
              <ModeToggle />
              <Link href={isSignedIn ? "/generate" : "sign-up"}>
                <Button variant={isSignedIn ? "default" : "gradient"} className="rounded-full">
                  {isSignedIn ? "Generate" : "Get started"}
                </Button>
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}