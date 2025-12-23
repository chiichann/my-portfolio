import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Cherilyn Deocampo - Portfolio",
  description:
    "Cherilyn Deocampo's personal portfolio showcasing her front-end development projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased relative bg-[#0E0E0E]">
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}