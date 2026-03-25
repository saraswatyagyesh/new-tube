import * as ClerkServer from "@clerk/nextjs/server";

const bypass = process.env.NEXT_PUBLIC_DEV_BYPASS_AUTH === "true";
const DEV_USER_ID = "dev_user_123";

export const auth = bypass
  ? async () => ({
      userId: DEV_USER_ID,
      sessionId: "dev_session_123",
      getToken: async () => "dev_token",
      protect: () => {},
    })
  : ClerkServer.auth;

export const currentUser = bypass
  ? async () => ({
      id: DEV_USER_ID,
      fullName: "Developer User",
      imageUrl: "https://github.com/shadcn.png",
    })
  : ClerkServer.currentUser;

// We need to proxy clerkMiddleware correctly
export const clerkMiddleware = ClerkServer.clerkMiddleware;
export const createRouteMatcher = ClerkServer.createRouteMatcher;
export type WebhookEvent = ClerkServer.WebhookEvent;
