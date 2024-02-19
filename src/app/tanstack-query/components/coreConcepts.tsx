"use client";

import { useQuery } from "@tanstack/react-query";

export default function CoreConcepts() {
  const { data } = useQuery({ queryKey: [] });
  return <div>core concepts</div>;
}
