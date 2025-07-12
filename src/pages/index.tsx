import React from "react";
import Head from "next/head";
// import { ThemeProvider } from "@/context/ThemeContext";
import Portfolio from "@/module/portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>anverma</title>
        <meta name="description" content="Ankit Verma's portfolio" />
        <meta name="author" content="Ankit Verma" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Ankit Verma's Portfolio" />
        <meta
          property="og:description"
          content="Software engineer with 5+ years of experience"
        />
        <meta property="og:image" content="/preview.png" />
        <meta
          property="og:url"
          content="https://your-username.github.io/anverma/"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* <ThemeProvider> */}
      <main>
        <Portfolio />
      </main>
      {/* </ThemeProvider> */}
    </>
  );
}
