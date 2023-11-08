import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarFixed from "./components/navbarfixed";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JayDav",
  description: "Personal portfolio page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarFixed />
      <main>{children}</main>
      {/* footer here */}
    </div>
  );
}
