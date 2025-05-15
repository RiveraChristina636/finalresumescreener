import { ArrowRight, Upload, Search, FileCheck } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Three simple steps to improve your job application
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg p-4">
            <div className="rounded-full bg-primary p-3">
              <Upload className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">1. Upload</h3>
            <p className="text-center text-muted-foreground">
              Upload your resume and paste the job description you're applying for
            </p>
            <ArrowRight className="h-6 w-6 text-muted-foreground hidden md:block" />
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg p-4">
            <div className="rounded-full bg-primary p-3">
              <Search className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">2. Analyze</h3>
            <p className="text-center text-muted-foreground">
              Our AI analyzes your resume against the job requirements
            </p>
            <ArrowRight className="h-6 w-6 text-muted-foreground hidden md:block" />
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg p-4">
            <div className="rounded-full bg-primary p-3">
              <FileCheck className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">3. Improve</h3>
            <p className="text-center text-muted-foreground">
              Get actionable feedback, interview questions, and recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
