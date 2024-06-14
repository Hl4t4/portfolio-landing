import type { Metadata } from "next";
import NavbarPage from './components/NavbarPage';
import FooterPage from './components/FooterPage';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Latapiatt's Portfolio",
  description: "Developer's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <body className={inter.className + " m-0 p-0"}>
        <NavbarPage></NavbarPage>
        <div>
          {children}
        </div>
        <FooterPage></FooterPage>
      </body>
    </html>
  );
}

// Add Header and footer here