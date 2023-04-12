import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <Component />
      </header>
    </div>
  );
}

export default MyApp;