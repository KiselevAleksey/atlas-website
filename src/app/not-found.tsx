import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4a6b8f]">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-[#10243d]">Page not found</h1>
      <p className="mt-3 text-sm leading-7 text-[#365273]">
        The page you requested does not exist or has been moved.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/"
          className="rounded-full bg-[#0b6cff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(11,108,255,0.32)]"
        >
          Go to home
        </Link>
        <Link
          href="/catalog"
          className="rounded-full border border-[#bdd4f5] bg-white px-5 py-2.5 text-sm font-semibold text-[#245588] hover:bg-[#eef6ff]"
        >
          Open catalog
        </Link>
      </div>
    </div>
  );
}
