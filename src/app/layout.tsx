import { Inter, Montserrat, Roboto_Mono } from "next/font/google";

import "@/styles/globals.scss";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata = {
  icons: { icon: "/favicon.ico" },
  title: {
    default: "TBT",
    template: "&s | TBT",
  },
  description: "Generated by create next app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "ChatGPT Next Web",
    statusBarStyle: "default",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
