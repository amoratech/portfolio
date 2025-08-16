
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-[var(--foreground)]">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="mb-6 text-lg">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-[var(--header)] rounded-full shadow-md hover:opacity-80 transition"
      >
        Go Home
      </Link>
    </div>
  );
}