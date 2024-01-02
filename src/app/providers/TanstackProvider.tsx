"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function TanstackProvider(prompt: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {prompt.children}
    </QueryClientProvider>
  );
}
