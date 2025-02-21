"use client"
import React from "react";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL || "https://lovable-dalmatian-727.convex.cloud";
const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  console.warn("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is not set");
}

const convex = new ConvexReactClient(convexUrl);

const ConvexClientProvider = ({ children }:{children:React.ReactNode}) => {
  if (!clerkPublishableKey) {
    return <div>Error: Clerk publishable key is not set</div>;
  }

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
