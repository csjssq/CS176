import Head from 'next/head'
import styles from '../styles/Home.module.css'

import MyApp from './_app.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catty Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MyApp></MyApp>
      </main>
    </div>
  )
}
