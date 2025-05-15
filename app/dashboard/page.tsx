import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DashboardContent } from "@/components/dashboard-content"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Your Dashboard</h1>
            <p className="text-muted-foreground">View and manage your resume analyses</p>
          </div>

          <Suspense fallback={<div>Loading dashboard...</div>}>
            <DashboardContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
