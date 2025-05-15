"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, FileText, Plus } from "lucide-react"

interface Submission {
  id: number
  created_at: string
  match_score: number | null
}

export function DashboardContent() {
  const [email, setEmail] = useState("")
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setIsLoading(true)

    try {
      // In a real implementation, this would call your API
      // For now, we'll simulate a response
      setTimeout(() => {
        // Mock data
        const mockSubmissions = [
          { id: 1, created_at: new Date().toISOString(), match_score: 85 },
          { id: 2, created_at: new Date(Date.now() - 86400000).toISOString(), match_score: 72 },
        ]
        setSubmissions(mockSubmissions)
        setSearched(true)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error fetching submissions:", error)
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email to view your submissions"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="max-w-md"
          required
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Search"}
        </Button>
      </form>

      {searched && (
        <div className="space-y-4">
          {submissions.length > 0 ? (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Match Score</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell>{new Date(submission.created_at).toLocaleDateString()}</TableCell>
                      <TableCell>
                        {submission.match_score ? (
                          <span
                            className={
                              submission.match_score >= 80
                                ? "text-green-500"
                                : submission.match_score >= 60
                                  ? "text-yellow-500"
                                  : "text-red-500"
                            }
                          >
                            {submission.match_score}%
                          </span>
                        ) : (
                          "Pending"
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button asChild variant="ghost" size="sm">
                          <Link href={`/results/${submission.id}`}>
                            <FileText className="h-4 w-4 mr-2" />
                            View
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No submissions found</h3>
              <p className="text-muted-foreground mb-6">You haven't uploaded any resumes for analysis yet.</p>
              <Button asChild>
                <Link href="/upload">
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Resume
                </Link>
              </Button>
            </div>
          )}
        </div>
      )}

      {!searched && (
        <div className="text-center py-12 border rounded-lg">
          <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">Search for your submissions</h3>
          <p className="text-muted-foreground">Enter your email address above to view your previous resume analyses.</p>
        </div>
      )}
    </div>
  )
}
