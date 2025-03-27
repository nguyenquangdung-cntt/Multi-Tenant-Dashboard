"use client";
import { Provider } from "react-redux";
import { store } from "../store/store";
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Multi Tenant Dashboard",
//   description: "A dashboard for managing multiple tenants",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <nav className="p-4 bg-gray-900 text-white">
            <Link href="/dashboard" className="mr-4">
              Dashboard
            </Link>
            <Link href="/" className="mr-4">
              Home
            </Link>
          </nav>
          {children}
        </body>
      </html>
    </Provider>
  );
}
