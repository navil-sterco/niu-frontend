
import { Suspense } from "react";
import type { Metadata } from "next";

import DepartmentView from "@/components/dept-cse/DepartmentView";
import { DEFAULT_DEPARTMENT_SLUG } from "@/data/department";
import { getDepartmentPage } from "@/lib/dept-api";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getDepartmentPage(DEFAULT_DEPARTMENT_SLUG);

  return {
    title: data?.seo.title ?? "Departments",
    description: data?.seo.description ?? "",
  };
}

export default function DepartmentsPage() {
  return (
    <Suspense
      fallback={
        <div className="department-loading" aria-busy="true">
          Loading department...
        </div>
      }
    >
      <DepartmentView slug={DEFAULT_DEPARTMENT_SLUG} />
    </Suspense>
  );
}
