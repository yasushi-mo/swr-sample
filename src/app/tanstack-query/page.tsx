"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CoreConcepts from "./core-concepts/page";
import { Route } from "@/app/type";

const queryClient = new QueryClient();

export const ROUTE_TAN_STACK_QUERY: Route[] = [
  {
    label: "Core Concepts",
    path: "/tanstack-query/core-concepts",
  },
];

export default function TanStackQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <CoreConcepts />
    </QueryClientProvider>
  );
}
