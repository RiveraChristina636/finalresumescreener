"use server"

import { put } from "@vercel/blob"

// This is a placeholder implementation
// In a real app, you would connect to your database
export async function uploadResume(formData: FormData) {
  try {
    const file = formData.get("file") as File
    const email = formData.get("email") as string
    const name = formData.get("name") as string
    const jobDescription = formData.get("jobDescription") as string

    if (!file || !email || !jobDescription) {
      return { success: false, error: "Missing required fields" }
    }

    // Upload file to Vercel Blob
    const blob = await put(`resumes/${Date.now()}-${file.name}`, file, {
      access: "public",
    })

    // In a real app, you would save this to your database
    const submissionId = Math.floor(Math.random() * 1000) + 1

    return { success: true, submissionId }
  } catch (error) {
    console.error("Error in uploadResume:", error)
    return { success: false, error: "Failed to process your request" }
  }
}

export async function getSubmissionById(id: string) {
  try {
    // This is mock data for demonstration
    // In a real app, you would fetch this from your database

    const mockSubmission = {
      id: Number.parseInt(id),
      user_id: 1,
      resume_url: "https://example.com/resume.pdf",
      job_description:
        "We are looking for a Full Stack Developer with experience in React, Node.js, and PostgreSQL. The ideal candidate will have 3+ years of experience building web applications and be familiar with modern development practices.",
      created_at: new Date().toISOString(),
      email: "user@example.com",
      name: "John Doe",
    }

    const mockAnalysis = {
      id: 1,
      submission_id: Number.parseInt(id),
      match_score: 78.5,
      feedback:
        "Your resume shows strong technical skills that align well with this position. Consider highlighting your React projects more prominently and quantifying your achievements. Add more details about your experience with PostgreSQL.",
      interview_questions: [
        {
          type: "technical" as const,
          question: "Can you explain your experience with React hooks?",
          why: "The job requires React experience, and hooks are a fundamental concept.",
        },
        {
          type: "technical" as const,
          question: "How have you handled database migrations in PostgreSQL?",
          why: "PostgreSQL experience is mentioned as a requirement.",
        },
        {
          type: "behavioral" as const,
          question: "Tell me about a time when you had to learn a new technology quickly.",
          why: "Adaptability is important in fast-paced development environments.",
        },
      ],
      recommendations:
        "Focus on highlighting your experience with the specific technologies mentioned in the job description. Consider creating a small portfolio project that showcases your skills in React, Node.js, and PostgreSQL.",
      created_at: new Date().toISOString(),
    }

    return {
      submission: mockSubmission,
      analysis: mockAnalysis,
    }
  } catch (error) {
    console.error("Error in getSubmissionById:", error)
    return null
  }
}

export async function getUserSubmissions(email: string) {
  try {
    // This is mock data for demonstration
    // In a real app, you would fetch this from your database
    return [
      {
        id: 1,
        created_at: new Date().toISOString(),
        match_score: 78.5,
      },
      {
        id: 2,
        created_at: new Date(Date.now() - 86400000).toISOString(),
        match_score: 65.0,
      },
    ]
  } catch (error) {
    console.error("Error in getUserSubmissions:", error)
    return []
  }
}
