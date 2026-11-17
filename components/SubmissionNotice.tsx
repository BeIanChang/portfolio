'use client';

import { useSearchParams } from 'next/navigation';

export function SubmissionNotice() {
  const searchParams = useSearchParams();
  const isSubmitted = searchParams.get('submitted') === 'true';

  if (!isSubmitted) {
    return null;
  }

  return (
    <p className="font-mono text-xs text-mint">
      Thanks — your message was sent.
    </p>
  );
}
