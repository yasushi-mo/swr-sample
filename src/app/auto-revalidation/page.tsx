import Link from "next/link";
import { FC } from "react";

type Route = {
  label: string;
  path: string;
};

const ROUTES: Route[] = [
  {
    label: "Revalidate on Focus",
    path: "/auto-revalidation/on-focus",
  },
  {
    label: "Revalidate on Interval",
    path: "/auto-revalidation/on-interval",
  },
  {
    label: "Revalidate on Reconnect",
    path: "/auto-revalidation/on-reconnect",
  },
  {
    label: "Revalidate on Mount",
    path: "/auto-revalidation/on-mount",
  },
  {
    label: "Disable Automatic Revalidations",
    path: "/auto-revalidation/disabled",
  },
  {
    label: "Back",
    path: "/",
  },
];

export default function AutomaticRevalidation() {
  return (
    <ul>
      {ROUTES.map((route) => (
        <li key={route.path}>
          <Link href={route.path}>{route.label}</Link>
        </li>
      ))}
    </ul>
  );
}
