import type { Metadata } from "next";
import "./globals.css";
import StatusBadge from "@/components/StatusBadge";
import NavLink from "@/components/NavLink";

export const metadata: Metadata = {
  title: "Callbus",
  description: "MVP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b">
          <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
            <div className="flex items-center gap-6">
              <div className="font-semibold">Callbus</div>
              <nav className="flex items-center gap-2">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/trips">Trips</NavLink>
                <NavLink href="/bids">Bids</NavLink>
                <NavLink href="/admin">Admin</NavLink>
              </nav>
            </div>
            <StatusBadge />
          </div>
        </header>
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
