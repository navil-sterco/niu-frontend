export default function TabSkeleton() {
  return (
    <div aria-busy="true" aria-live="polite">
      <div className="happen_skeleton hero" />
      <div className="container">
        <div className="happen_skeleton_grid">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
