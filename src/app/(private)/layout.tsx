import { AppHeader } from "@/components/layout/app-header";
import { AppSidebar } from "@/components/layout/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

export default function PrivateLayout({ children }: PropsWithChildren) {
  return <SidebarProvider>
    <AppSidebar />
    <div className="w-full bg-sidebar p-4 pl-0">
      <div className="bg-background h-full p-2 rounded-md border">
        <AppHeader />
        {children}
      </div>
    </div>
  </SidebarProvider>
}