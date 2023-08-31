import Link from "next/link";

type Route = {
  label: string;
  path: string;
};

export const ROUTES_AUTO_REVALIDATION: Route[] = [
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
    <>
      <h2 className={`mb-3 text-2xl font-semibold`}>Automatic Revalidation</h2>
      <ul className={`list-style: disc`}>
        {ROUTES_AUTO_REVALIDATION.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>- {route.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
