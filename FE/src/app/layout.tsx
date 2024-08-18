"use client";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./globals.scss";

// Import React Query dependencies
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <div className="main-container">
            <Sidebar />
            <div className="content-container">
              <Navbar />
              <main className="main-content">
                <section className="content">
                  <Toaster position="top-right" />
                  {children}
                </section>
              </main>
            </div>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
