import "@/app/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="content">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
