'use client'
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation"

export const AppHeader = () => {
  const path = usePathname();
  const pageName = path === '/' ? 'Dashboard' : path;

  return <div className="flex gap-4">
    <SidebarTrigger />
    {/* TODO: IMPLEMENT BREADCRUMBS */}
    <h1>{pageName}</h1>
  </div>
}