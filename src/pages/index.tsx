import Head from "next/head";
import Ankit from "@/components/Ankit";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ankit App</title>
        <meta
          name="description"
          content="A simple statically exported Next.js app"
        />
      </Head>
      <Ankit />
    </>
  );
}
