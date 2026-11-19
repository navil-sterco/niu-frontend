import { Suspense } from "react";
import { getHeaderConfig } from "@/lib/header";
import HeaderLogo from "@/components/header/HeaderLogo";
import HeaderShell from "@/components/header/HeaderShell";


export default async function Header() {
  const { config } = await getHeaderConfig();

  return (
    <Suspense
      fallback={
        <header className="inner_header">
          <div className="container-md">
            <HeaderLogo brand={config.brand} />
          </div>
        </header>
      }
    >
      <HeaderShell initialConfig={config} />
    </Suspense>
  );
}
