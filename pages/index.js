import Head from "next/head";
import HomePage from "@pages/HomePage/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Junior Batista</title>
      </Head>
      <HomePage />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
