import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AnbeShivam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://anbe-shivam-metis.vercel.app">AnbeShivam!</a>
        </h1>

        <p className={styles.description}>
          Get started
        </p>

        <div className={styles.grid}>
          <a href="https://anbe-shivam-metis.vercel.app" target="_blank" className={styles.card}>
            <h3>Visit the DApp &rarr;</h3>
            <p>Find in-depth information about AnbeShivam</p>
          </a>

          <a href="https://anbe-shivam-metis.vercel.app/nfts" className={styles.card}>
            <h3>NFTs &rarr;</h3>
            <p>View your AnbeShivam NFTs</p>
          </a>
        </div>
      </main>
    </div>
  );
}
