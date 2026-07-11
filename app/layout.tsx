import ReduxProvider from "@/store/provider";
import { Glory } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Bundle Builder",
  description: "Create and review product bundles",
};

const glory = Glory({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-glory",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={glory.variable}>
      <body className="font-sans">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
