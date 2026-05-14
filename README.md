# Newtube

Newtube is a modern, serverless video sharing platform built with Next.js. It features a complete video transmission pipeline, asynchronous AI metadata generation, robust authentication, and real-time state synchronization using webhooks.

## Framework
* **Next.js 15 (App Router)** with **React 19**
* **Tailwind CSS** & **Radix UI** (`shadcn/ui`) for styling and components
* **tRPC** + **React Query** for end-to-end type-safe API communication

## Dependencies & Third-Party Services
This project relies on specialized managed services to deliver a scalable backend without managing infrastructure:
* **Database**: Neon Serverless PostgreSQL with Drizzle ORM.
* **Authentication**: Clerk (`@clerk/nextjs`).
* **Video Processing**: Mux (`@mux/mux-node`, `@mux/mux-uploader-react`) for video ingestion, encoding, storage, and HLS streaming.
* **File Storage**: UploadThing (`@uploadthing/react`) for user banners and video thumbnails.
* **Background Workflows & AI**: Upstash Workflow (`@upstash/workflow`) and Upstash Redis for asynchronous tasks (e.g., generating titles and thumbnails via OpenAI based on Mux transcripts).
* **Webhook Verification**: Svix for verifying incoming webhooks from Clerk.

## How to Run Locally

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Environment Variables:**
   Make sure you have an `.env` or `.env.local` file populated with the necessary keys for Neon DB, Clerk, Mux, UploadThing, Upstash, and OpenAI.

3. **Start the Development Server & Webhook Tunnel:**
   Because the application relies heavily on webhooks from Clerk and Mux to sync state, you need a local tunnel to receive these events. The project provides a unified script that starts both the Next.js dev server and an `ngrok` tunnel concurrently.
   
   ```bash
   bun run dev:all
   ```
   *Note: This will use the ngrok URL specified in your `package.json`. Make sure your webhook providers (Clerk, Mux) are configured to send events to this ngrok URL during local development.*

## Architecture & Workflows

The system's high-level design and core workflows are 
* **`Video_transmission_pipeline`**: Maps the core video transmission feature: direct upload to Mux, webhook metadata handling, and Upstash AI workflows.
![Video transmission pipeline](/public/backend/Video_transmission_pipeline.png)
* **`Authentication_workflow`**: Details the Clerk authentication and Svix webhook sync process.
![Authentication workflow](/public/backend/Authentication_workflow.png)
* **`Logging_and_async_state_sync`**: Shows the webhook-heavy pattern for syncing remote state changes (Mux, Clerk) with the local database.
![Logging and async state sync](/public/backend/Logging_and_async_state_sync.png)

