import ProgramDetailsState from "@/components/program-details/program-details-state/program-details-state";

export default function ProgramNotFound() {
  return (
    <ProgramDetailsState
      title="Program not found"
      message="The program you are looking for is unavailable or may have moved."
      actionLabel="View all programs"
      actionHref="/program"
    />
  );
}