import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm text-gold">404</p>
      <h1 className="mt-3 font-display text-3xl text-ink">Page not found</h1>
      <p className="mt-3 max-w-sm text-[14.5px] text-ink-soft">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-7 inline-flex items-center rounded-full bg-gradient-to-r from-navy to-violet px-5 py-2.5 text-sm font-medium text-paper shadow-sm"
      >
        Back home
      </Link>
    </div>
  );
}
