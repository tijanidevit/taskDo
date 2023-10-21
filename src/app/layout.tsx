import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { ClientWrapper, ReactQueryProvider } from "@/app/_wrappers";
import { TOASTER_PROPS, plusJakartaSans } from "@/utils";
import { Header, Sidebar } from "./_components";

export const metadata: Metadata = {
  title: "Task Do",
  description: "A simple description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className} id="app-body">
        <ReactQueryProvider>
          <Toaster {...TOASTER_PROPS} />
          <ClientWrapper>
            <div className="flex min-h-screen">
              <Sidebar />
              <div className="w-[80%]">
                <Header />
                <div className="bg-gray-200 w-full min-h-screen p-6">
                  {children}
                </div>
              </div>
            </div>
          </ClientWrapper>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
