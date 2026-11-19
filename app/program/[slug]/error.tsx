"use client";

import ProgramDetailsState from "@/components/program-details/program-details-state/program-details-state";

interface ProgramDetailsErrorProps {
  error: Error & { digest?: string };
  reset?: () => void;
  unstable_retry?: () => void;
}

export default function ProgramDetailsError({
  error,
  reset,
  unstable_retry,
}: ProgramDetailsErrorProps) {
  const retry = unstable_retry ?? reset;
  return (
    <ProgramDetailsState
      title="Something went wrong"
      message={`We could not load this program right now. Please try again.${
        error.digest ? ` (ref: ${error.digest})` : ""
      }`}
      actionLabel="Try again"
      onAction={retry}
    />
  );
}