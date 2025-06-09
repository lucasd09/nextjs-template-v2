import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/app-config";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
