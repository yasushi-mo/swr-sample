"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CoreConcepts from "./components/coreConcepts";

const queryClient = new QueryClient();

export default function TanStackQuery() {
  return (
    <>
      TanStackQuery
      <QueryClientProvider client={queryClient}>
        <CoreConcepts />
      </QueryClientProvider>
    </>
  );
}
