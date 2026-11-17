'use client';

import { useSearchParams } from 'next/navigation';

export function SubmissionNotice() {
  const searchParams = useSearchParams();
  const isSubmitted = searchParams.get('submitted') === 'true';

  if (!isSubmitted) {
    return null;
  }

  return (
    <p className="text-xs text-emerald-700">
      Thanks! Your message was sent.
    </p>
  );
}
