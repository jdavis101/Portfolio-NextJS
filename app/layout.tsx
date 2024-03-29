import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "JayDav",
  description: "Personal portfolio page for Jaylen Davis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&style=italic&display=swap"
        rel="stylesheet"
      /> */}
      <Header />
      <Navbar />
      <main className="mt-[150px] mx-[300px]">{children}</main>
      {/* footer here */}
    </div>
  );
}
