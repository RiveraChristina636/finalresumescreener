import { UploadForm } from "@/components/upload-form"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function UploadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container max-w-4xl py-12">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Upload Your Resume</h1>
            <p className="text-muted-foreground">
              Upload your resume and paste the job description to get AI-powered feedback
            </p>
          </div>
          <UploadForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
