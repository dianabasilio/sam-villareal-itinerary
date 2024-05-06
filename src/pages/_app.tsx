import "@/app/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="content">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
