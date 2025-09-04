import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
       <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
    </main>
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
