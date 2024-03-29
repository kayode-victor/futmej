import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Futmej",
  description: "From Seed to Success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#f3f5f8] overflow-x-hidden w-full`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
