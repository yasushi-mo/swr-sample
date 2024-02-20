"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CoreConcepts from "./core-concepts/page";
import { Route } from "@/app/type";
import Link from "next/link";

const queryClient = new QueryClient();

export const ROUTE_TAN_STACK_QUERY: Route[] = [
  {
    label: "Core Concepts",
    path: "/tanstack-query/core-concepts",
  },
];

export default function TanStackQuery() {
  return (
    <>
      {/* TanStackQuery */}
      <QueryClientProvider client={queryClient}>
        {/* <ul className={`list-style: disc`}>
          {ROUTE_TAN_STACK_QUERY.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>- {route.label}</Link>
            </li>
          ))}
        </ul> */}
        <CoreConcepts />
      </QueryClientProvider>
    </>
  );
}
