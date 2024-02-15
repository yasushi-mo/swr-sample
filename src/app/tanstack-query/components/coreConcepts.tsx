"use client";

import { fetcher } from "@/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function CoreConcepts() {
  const { data } = useQuery({ queryKey: [] });
  return <div>core concepts</div>;
}
