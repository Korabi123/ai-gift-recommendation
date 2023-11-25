import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-40 text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tighter lg:text-5xl">
          The best AI tool for
        </h1>
        <h1 className="pb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Generating gifts
        </h1>
        <p className="text-muted-foreground">100% Free no strings attached.</p>
        <Link href="/generate">
          <Button className="mt-4 runded-lg" variant="gradient">
            Start now
          </Button>
        </Link>
      </main>
    </>
  )
}
