import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import TemporaryNav from "@components/TemporaryNav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TemporaryNav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
