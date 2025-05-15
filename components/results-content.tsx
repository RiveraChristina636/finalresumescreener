"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, MessageSquare, Award, Download, Share2 } from "lucide-react"

interface InterviewQuestion {
  type: "technical" | "behavioral" | string
  question: string
  why: string
}

interface AnalysisResult {
  id: number
  submission_id: number
  match_score: number
  feedback: string
  interview_questions: InterviewQuestion[]
  recommendations: string
  created_at: string
}

interface Submission {
  id: number
  user_id: number
  resume_url: string
  job_description: string
  created_at: string
  email: string
  name: string
}

interface ResultsContentProps {
  data: {
    submission: Submission
    analysis: AnalysisResult | null
  }
}

export function ResultsContent({ data }: ResultsContentProps) {
  const { submission, analysis } = data
  const [activeTab, setActiveTab] = useState("match")

  // If analysis is not available yet, show loading state
  if (!analysis) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Analysis in Progress</h2>
        <p className="text-muted-foreground mb-8">
          We're currently analyzing your resume against the job description. This may take a few minutes.
        </p>
        <Button onClick={() => window.location.reload()}>Refresh Results</Button>
      </div>
    )
  }

  const matchScore = analysis.match_score
  const matchColor = matchScore >= 80 ? "text-green-500" : matchScore >= 60 ? "text-yellow-500" : "text-red-500"
  const matchBgColor = matchScore >= 80 ? "bg-green-500" : matchScore >= 60 ? "bg-yellow-500" : "bg-red-500"

  // Mock interview questions if needed
  const mockQuestions = [
    {
      type: "technical" as const,
      question: "Tell me about your experience with React and Next.js.",
      why: "The job requires frontend development experience.",
    },
    {
      type: "technical" as const,
      question: "How do you approach database design?",
      why: "Database knowledge is essential for this role.",
    },
    {
      type: "behavioral" as const,
      question: "Describe a challenging project you worked on and how you overcame obstacles.",
      why: "Problem-solving skills are crucial for this position.",
    },
  ]

  const interviewQuestions =
    analysis.interview_questions && analysis.interview_questions.length > 0
      ? analysis.interview_questions
      : mockQuestions

  const technicalQuestions = interviewQuestions.filter((q) => q.type === "technical")
  const behavioralQuestions = interviewQuestions.filter((q) => q.type === "behavioral")

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Your Resume Analysis</h1>
        <p className="text-muted-foreground">
          Analysis completed on {new Date(analysis.created_at).toLocaleDateString()}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <Card className="md:w-1/3">
          <CardHeader>
            <CardTitle>Match Score</CardTitle>
            <CardDescription>How well your resume matches the job requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-muted stroke-current"
                    strokeWidth="10"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className={`${matchBgColor} stroke-current`}
                    strokeWidth="10"
                    strokeLinecap="round"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                    strokeDasharray={`${matchScore * 2.51} 251.2`}
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">{matchScore}%</span>
                </div>
              </div>
              <div className="text-center">
                {matchScore >= 80 ? (
                  <p className="text-green-500 font-medium">Strong Match</p>
                ) : matchScore >= 60 ? (
                  <p className="text-yellow-500 font-medium">Moderate Match</p>
                ) : (
                  <p className="text-red-500 font-medium">Low Match</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:w-2/3">
          <CardHeader>
            <CardTitle>Detailed Analysis</CardTitle>
            <CardDescription>Review your personalized feedback and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="match" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="match">
                  <FileText className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Resume Feedback</span>
                  <span className="sm:hidden">Feedback</span>
                </TabsTrigger>
                <TabsTrigger value="interview">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Interview Prep</span>
                  <span className="sm:hidden">Interview</span>
                </TabsTrigger>
                <TabsTrigger value="recommendations">
                  <Award className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Recommendations</span>
                  <span className="sm:hidden">Improve</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="match" className="space-y-4">
                <div className="prose max-w-none dark:prose-invert">
                  {analysis.feedback.split("\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="interview" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technical Questions</h3>
                  <div className="space-y-4">
                    {technicalQuestions.map((q, i) => (
                      <Card key={i}>
                        <CardHeader className="py-3">
                          <CardTitle className="text-base">{q.question}</CardTitle>
                        </CardHeader>
                        <CardContent className="py-2">
                          <p className="text-sm text-muted-foreground">{q.why}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Behavioral Questions</h3>
                  <div className="space-y-4">
                    {behavioralQuestions.map((q, i) => (
                      <Card key={i}>
                        <CardHeader className="py-3">
                          <CardTitle className="text-base">{q.question}</CardTitle>
                        </CardHeader>
                        <CardContent className="py-2">
                          <p className="text-sm text-muted-foreground">{q.why}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="recommendations" className="space-y-4">
                <div className="prose max-w-none dark:prose-invert">
                  {analysis.recommendations.split("\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-4 justify-center md:justify-end">
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>
        <Button variant="outline">
          <Share2 className="h-4 w-4 mr-2" />
          Share Results
        </Button>
        <Button asChild>
          <a href="/upload">Analyze Another Resume</a>
        </Button>
      </div>
    </div>
  )
}
