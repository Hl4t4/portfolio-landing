import type { Metadata } from "next";
import NavbarPage from './components/NavbarPage';
import FooterPage from './components/FooterPage';
import { Inter } from "next/font/google";
import "./globals.css";
import LocaleProvider from "./components/provider";
import { getNavbarContentData, getFooterContentData } from './lib/fetchContent';
import { NavbarRoot } from './interfaces/NavbarRoot';
import { FooterRoot } from './interfaces/FooterRoot';

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
  const navbarData: NavbarRoot = getNavbarContentData('navbar_data.json')
  const footerData: FooterRoot = getFooterContentData('footer_data.json')

  return (
    <LocaleProvider>
      <html lang="en" data-theme="forest">
        <body className={inter.className + " m-0 p-0"}>
          <NavbarPage navbarData={navbarData}></NavbarPage>
          <div>
            {children}
          </div>
          <FooterPage footerData={footerData}></FooterPage>
        </body>
      </html>
    </LocaleProvider>
  );
}

// Add Header and footer here