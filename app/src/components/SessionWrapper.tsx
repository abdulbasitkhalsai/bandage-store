// src/components/SessionWrapper.tsx
'use client';  // This marks the component as a Client Component

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const SessionWrapper = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
