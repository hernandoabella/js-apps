import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react"
import { UserProvider } from "@auth0/nextjs-auth0/client";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider attribute="class">
        <UserProvider>
          <Component {...pageProps} />
          <Analytics />
        </UserProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
