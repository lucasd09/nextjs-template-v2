'use client'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getBreadcrumbSections } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AppHeader = () => {
  const path = usePathname();

  const sections = getBreadcrumbSections(path)

  return <div className="flex items-center gap-2 bg-background p-2 rounded-md border">
    <SidebarTrigger />
    <Breadcrumb>
      <BreadcrumbList>
        {sections.map((section, index) => (
          <div key={`${section.name}`} className="inline-flex gap-2 items-center">
            <BreadcrumbItem key={`${section.name}-Item`}>
              <BreadcrumbLink asChild>
                <Link href={section.path}>{section.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {index < sections.length - 1 && <BreadcrumbSeparator key={`${section.name}-separator`} />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  </div>
}