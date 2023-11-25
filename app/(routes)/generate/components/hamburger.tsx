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
import Heading from "@/components/heading";
import { UserButton } from "@clerk/nextjs";

export function Hamburger() {
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
            <div className="mt-6 flex space-x-6 justify-start">
              <UserButton afterSignOutUrl="/" />
              
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}