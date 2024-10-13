import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/lib/providers/StoreProvider";
import NavBar from "@/components/reusable components/NavBar";
import FullPageLoader from "@/components/resource stats/FullPageLoader";
import Footer from "@/components/reusable components/Footer";

export const metadata: Metadata = {
  title: {
    template: '%s | HiRisk',
    default: 'Home | HiRisk'
  },
  description: 'Created by Ahmed M Abdelnaby.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <html lang="en">
      <head>
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body
        className={`m-0 p-0`}
      >
          <StoreProvider>
              <NavBar />
              <FullPageLoader />
              {children}
              <Footer />
          </StoreProvider>
      </body>
    </html>
  );
}
