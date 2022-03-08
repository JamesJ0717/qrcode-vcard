import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact James Johnson</title>
        <meta
          name="description"
          content="Simple landing site for downloading a contact card for me"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Contact Me</h1>

        <div className={styles.qr}>
          <Image
            src="/21959167-9095-4D17-95C4-3885293E59A0_1_102_o.jpeg"
            height={400}
            width={400}
          />
        </div>

        <div className={styles.card}>
          <Link href={"/api/qr"}>Download vCard</Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
