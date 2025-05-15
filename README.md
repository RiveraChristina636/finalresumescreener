# AI Job Application Screener

**AI-Powered Job Application Screening** is a full-stack web application that allows users to upload their resume and a job description to receive instant AI-generated feedback, including:

* **Match Analysis**: A compatibility score between the resume and the job listing.
* **Resume Feedback**: Actionable suggestions for improving formatting, keyword usage, and content.
* **Interview Prep**: AI-generated interview questions tailored to the job.
* **Skill Recommendations**: Suggested skills and certifications to boost candidacy.

The app is designed for students, job seekers, and career coaches who want data-driven insights to optimize their applications and beat automated screening systems.

---

## Technologies Used

* **Next.js** (app router) for server-side rendering and API routes
* **Tailwind CSS** for utility-first styling
* **Radix UI** & **Lucide React** for accessible components and icons
* **Prisma** ORM with **Neon** PostgreSQL for database storage
* **OpenAI API** (with ChatGPT) for generating feedback and interview questions
* **Vercel** (v0 CLI) for continuous deployment

**Developer Tools:** VS Code, GitHub Copilot, ChatGPT

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/RiveraChristina636/finalresumescreener.git
   cd finalresumescreener
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the project root with the following entries:

   ```ini
   DATABASE_URL="postgresql://<username>:<password>@<host>:5432/<database>"
   OPENAI_API_KEY="sk-..."
   ```

   * Set `DATABASE_URL` to your Neon (PostgreSQL) connection string.
   * Set `OPENAI_API_KEY` to your OpenAI secret key.

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**

   ```bash
   npm run build
   npm run start
   ```

6. **Deploy to Vercel**

   * Install Vercel CLI: `npm install -g vercel@latest`
   * Run `vercel` and follow the prompts.

---

## Live Demo

🔗 [https://finalresumescreener.vercel.app/](https://finalresumescreener.vercel.app/)

---

## Team Members

* Christina Rivera (solo project)

---

## Development Notes & Lessons Learned

* **Deployment Challenges**: Aligning local Next.js v0 development (v0.dev) styling with Vercel’s production build required troubleshooting Tailwind CSS imports (`globals.css`), PostCSS configuration, and ensuring `@tailwind` directives were processed.
* **Peer Dependency Fixes**: Resolved several NPM dependency conflicts (React types, Radix UI packages, lucide-react) by pinning versions and cleaning the lockfile.
* **AI-Assisted Coding**: Leveraged ChatGPT and GitHub Copilot extensively for:

  * Generating UI component boilerplate
  * Debugging CSS and build errors
  * Crafting README documentation
* **What I Learned**:

  * The importance of correct PostCSS setup (`postcss.config.js`) for Tailwind in production
  * How to integrate Prisma with Neon Postgres on a serverless platform
  * Best practices for structuring a Next.js 14+ app router project

---

*Thank you for trying out AI Job Application Screener! Feedback and contributions are welcome.*


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
