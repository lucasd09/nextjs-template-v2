import { PropsWithChildren } from "react";

export default function PublicLayout({ children }: PropsWithChildren) {
  return <div className="flex justify-center items-center h-screen">
    {children}
  </div>
}