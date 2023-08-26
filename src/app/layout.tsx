import { Suspense } from "react";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "@/styles/globals.scss";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Loading from "./loading";
import GoogleAnalytics from "@/components/googleAnalytics";

export const metadata = {
  icons: { icon: "/favicon.ico" },
  title: {
    default: "Trần Bửu Tài | TBT",
    template: "&s | TBT",
  },
  description:
    "Enhance your online presence with Trần Bửu Tài, a skilled Software Engineer based in Vietnam. With a focus on front-end development, cloud technologies, and crafting exceptional websites, I am committed to continuous learning and technological advancement. Join me on my journey of growth and innovation in the tech world.",
  keywords:
    "Trần Bửu Tài, Tom Tran, TBT, Front-end Developer, Software Engineer, Vietnam, front-end development, cloud technologies, websites, technology, growth, innovation",
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
  verification: {
    google: "z_ZYExyHvFREUPcLlizvdD8Krq9rfcMf-wQ2rUphn6Q",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body suppressHydrationWarning={true}>
        <GoogleAnalytics GA_TRACKING_ID={"G-CJLF5JMDP8"} />
        <Header />
        <main className="mt-20">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
        <Footer /> <Analytics />
      </body>
    </html>
  );
}
