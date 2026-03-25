import * as ClerkCore from "@clerk/nextjs";
import React from "react";

const bypass = process.env.NEXT_PUBLIC_DEV_BYPASS_AUTH === "true";
const DEV_USER_ID = "dev_user_123";

// Create a wrapper for the SignedIn component
export function SignedIn({ children }: { children: React.ReactNode }) {
  if (bypass) return <>{children}</>;
  return <ClerkCore.SignedIn>{children}</ClerkCore.SignedIn>;
}

// Create a wrapper for the SignedOut component
export function SignedOut({ children }: { children: React.ReactNode }) {
  if (bypass) return null;
  return <ClerkCore.SignedOut>{children}</ClerkCore.SignedOut>;
}

// Create a wrapper for the UserButton component
export function UserButton() {
  if (bypass) {
    return (
      <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold leading-none">
        DV
      </div>
    );
  }
  return <ClerkCore.UserButton />;
}

// Create a wrapper for useAuth hook
export const useAuth = bypass
  ? () => ({
      userId: DEV_USER_ID,
      sessionId: "dev_session_123",
      getToken: async () => "dev_token",
      isLoaded: true,
      isSignedIn: true,
    })
  : ClerkCore.useAuth;

// Create a wrapper for useUser hook
export const useUser = bypass
  ? () => ({
      user: {
        id: DEV_USER_ID,
        fullName: "Developer User",
        imageUrl: "https://github.com/shadcn.png",
      },
      isLoaded: true,
      isSignedIn: true,
    })
  : ClerkCore.useUser;

// Create a wrapper for useClerk hook
export const useClerk = bypass
  ? () => ({
      openSignIn: () => {},
      signOut: () => {
        alert("Sign out bypassed in dev mode");
      },
    })
  : ClerkCore.useClerk;

// Re-export everything else untouched
export const ClerkProvider = ClerkCore.ClerkProvider;
export const SignInButton = ClerkCore.SignInButton;
export const SignIn = ClerkCore.SignIn;
export const SignUp = ClerkCore.SignUp;
export const ClerkLoading = ClerkCore.ClerkLoading;
export const ClerkLoaded = ClerkCore.ClerkLoaded;
