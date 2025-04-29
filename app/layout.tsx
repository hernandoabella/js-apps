import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Squada_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const squada = Squada_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-squada',
});


export const metadata: Metadata = {
  title: "</JS-APPS",
  description: "Learn JavaScript by building real-life projects!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${squada.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
