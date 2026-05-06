import type { Metadata } from "next";
import { Jost, Roboto } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Educator - Online Courses & Education",
  description: "Get class from top instructors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}