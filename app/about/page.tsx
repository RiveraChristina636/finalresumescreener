import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About AI Job Screener</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our mission is to help job seekers improve their applications and land their dream jobs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  AI Job Screener was created to address a common challenge in today&apos;s job market: the increasing
                  use of Applicant Tracking Systems (ATS) that automatically filter resumes before they reach human
                  recruiters.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">How We Help</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Analyze your resume against specific job descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Provide personalized feedback on how to improve your resume</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Generate likely interview questions to help you prepare</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center pt-6">
              <Button asChild size="lg">
                <Link href="/upload">Try It Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
//  issues with footer updated