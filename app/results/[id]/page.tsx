import { Suspense } from "react"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ResultsContent } from "@/components/results-content"
import { getSubmissionById } from "@/lib/actions"

export default async function ResultsPage({ params }: { params: { id: string } }) {
  const data = await getSubmissionById(params.id)

  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-12">
        <Suspense fallback={<div>Loading results...</div>}>
          <ResultsContent data={data} />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
