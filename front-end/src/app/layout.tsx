import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bits Orchestra",
  description: "Middle FE Developer +3y of experience (Next. js+Node.js)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full shadow-lg mb-16 flex justify-around pb-4">
          <Link href="/list">
            <div className="uppercase">list</div>
          </Link>
          <Link href="/">
            <div className="uppercase">main</div>
          </Link>
          <Link href="/reviews">
            <div className="uppercase">reviews</div>
          </Link>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
