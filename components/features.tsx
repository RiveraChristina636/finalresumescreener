import { CheckCircle, FileText, MessageSquare, Award } from "lucide-react"

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need to ace your job application
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered platform analyzes your resume against job descriptions to provide actionable insights and
              improve your chances of landing an interview.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-muted p-2">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Match Analysis</h3>
            <p className="text-center text-muted-foreground">
              Get a detailed match score between your resume and the job requirements
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-muted p-2">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Resume Feedback</h3>
            <p className="text-center text-muted-foreground">
              Receive personalized feedback on how to improve your resume
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-muted p-2">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Interview Prep</h3>
            <p className="text-center text-muted-foreground">
              Get AI-generated interview questions based on the job description
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
            <div className="rounded-full bg-muted p-2">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Skill Recommendations</h3>
            <p className="text-center text-muted-foreground">
              Discover skills you should highlight or develop to stand out
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
