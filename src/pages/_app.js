import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import * as ga from "../lib/ga";
import siteMetaData from "../../src/data/siteMetaData";

function MyApp({ Component, pageProps }) {
  const { title, description, language } = siteMetaData;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="language" content={language} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
