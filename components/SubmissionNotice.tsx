'use client';

import { useSearchParams } from 'next/navigation';

export function SubmissionNotice() {
  const searchParams = useSearchParams();
  const isSubmitted = searchParams.get('submitted') === 'true';

  if (!isSubmitted) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-ink/10 bg-white/70 px-3 py-2 text-xs text-ink/70">
      Thanks! Your message was sent.
    </div>
  );
}
