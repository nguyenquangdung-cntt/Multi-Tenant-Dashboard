"use client";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "..//..//public/assets/logo.png";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <title>CMS DeliFres+</title>
        <body>
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Cột 1: Hình ảnh nằm ở góc trái dưới */}
            <div className="flex justify-start">
              <Image src={Logo} alt="DeliFres+" width={120} height={120} />
            </div>

            {/* Cột 2: Navigation */}
            <nav className="p-4 bg-white text-black font-bold flex justify-end">
              <Link href="/dashboard" className="mr-4">
                Dashboard
              </Link>
              <Link href="/">
                Login
              </Link>
            </nav>
          </div>
          {children}
        </body>
      </html>
    </Provider>
  );
}
