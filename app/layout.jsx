import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AosProvider } from "@/components/aos-provider";
import { AuthProvider } from "@/lib/auth-context";
import HeaderSection from "@/components/landing/HeaderSection";
// import FooterSection from "@/components/FooterSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CityExplorer - Discover Amazing Places",
  description:
    "Explore the hidden gems, popular spots, and everything in between with our comprehensive city guide.",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          suppressHydrationWarning
        >
          <AuthProvider>
            <HeaderSection />
            <AosProvider>{children}</AosProvider>
          </AuthProvider>
        </ThemeProvider>
        {/* <FooterSection/> */}
      </body>
    </html>
  );
}
