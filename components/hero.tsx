import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                AI-Powered Job Application Screening
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Upload your resume and job description to get instant AI feedback, interview prep questions, and
                recommendations for improvement.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/upload">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-900 to-indigo-700 p-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
              <div className="relative text-center text-white">
                <div className="mb-4 text-5xl font-bold">85%</div>
                <div className="text-xl">of resumes are rejected before they reach a human reviewer</div>
                <div className="mt-8 text-lg">Beat the system with AI-powered insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
