import { AppHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

export default function PrivateLayout({ children }: PropsWithChildren) {
  return <SidebarProvider>
    <AppSidebar />
    <div className="flex flex-col gap-1 w-full h-screen bg-sidebar p-4 pl-0">
      <AppHeader />
      <div className="bg-background grow p-4 rounded-md border">
        {children}
      </div>
    </div>
  </SidebarProvider>
}