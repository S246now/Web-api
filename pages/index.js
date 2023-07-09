import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>API</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Web Api - Core
        </h1>

        <br />
        <br />

        <Link href='/api/tasks'> Ver API </Link>

        {/* Mostrar los items(data) en una lista */}
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

