import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frustration Frenzy",
  description: "A rageroom booking website for people in need.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Dancing+Script&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/ff.ico" />
        </head>
        <body className={inter.className}>
          <div className="overflow-hidden">
            {/* <Navbar /> */}
            {children}
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
