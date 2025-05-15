# AI Job Application Screener

A full-stack application that helps job seekers improve their applications with AI-powered insights. Upload a resume and job description to get AI-generated feedback, interview prep questions, and recommendations for revision.

## Project Overview

The AI Job Application Screener is designed to help job seekers improve their chances of landing interviews by providing AI-powered analysis of their resumes against specific job descriptions.

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and fill in your environment variables
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app` - Next.js App Router pages
- `/components` - React components
- `/lib` - Utility functions and server actions
- `/db` - Database schema and seed data

## Features to Implement

- Resume upload and storage
- Job description input
- AI analysis of resume against job description
- Feedback generation
- Interview question generation
- Recommendation for resume revisions
- User dashboard for viewing past analyses

## Technologies Used

- Next.js 14 (App Router)
- React
- Tailwind CSS
- Neon PostgreSQL
- OpenAI API
- Vercel Blob Storage

## License

This project is licensed under the MIT License.
\`\`\`

```gitignore file=".gitignore"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
