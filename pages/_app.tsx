import '../styles/globals.css';
import Head from "next/head";
import {AppProps} from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <>
        <Head>
          <title>My-top - нащ лучший топ</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </>
  );
}

export default MyApp;
