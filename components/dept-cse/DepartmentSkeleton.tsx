export default function DepartmentSkeleton() {
    return (
      <main aria-busy="true" aria-live="polite">
        <div className="dept_loading" />
        <div className="container">
          <div className="dept_loading_lines">
            <span />
            <span />
            <span />
          </div>
        </div>
      </main>
    );
  }
  