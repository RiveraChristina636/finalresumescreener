"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Loader2 } from "lucide-react"

export function UploadForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      if (
        selectedFile.type === "application/pdf" ||
        selectedFile.type === "application/msword" ||
        selectedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setFile(selectedFile)
        setError(null)
      } else {
        setFile(null)
        setError("Please upload a PDF or Word document")
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) {
      setError("Please upload a resume")
      return
    }

    if (!jobDescription) {
      setError("Please enter a job description")
      return
    }

    if (!email) {
      setError("Please enter your email")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // In a real implementation, this would upload the file to Vercel Blob
      // and submit the data to your API
      // For now, we'll simulate the process and redirect

      setTimeout(() => {
        // Simulate successful upload and redirect
        const mockSubmissionId = Math.floor(Math.random() * 1000) + 1
        router.push(`/results/${mockSubmissionId}`)
      }, 2000)
    } catch (err) {
      console.error("Error uploading resume:", err)
      setError("Failed to upload. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name">Name (optional)</Label>
              <Input id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="resume">Resume (PDF or Word)</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="grid w-full gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => document.getElementById("resume")?.click()}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Select File
                  </Button>
                  {file && <p className="text-sm text-muted-foreground truncate">Selected: {file.name}</p>}
                </div>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="jobDescription">Job Description</Label>
              <Textarea
                id="jobDescription"
                placeholder="Paste the full job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="min-h-[200px]"
                required
              />
            </div>
          </div>

          {error && <div className="text-sm font-medium text-destructive">{error}</div>}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Resume"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
