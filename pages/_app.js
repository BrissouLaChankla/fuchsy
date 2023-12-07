import '../styles/globals.css'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Réelle ou IA ? Retrouvez les images générées par all-images.ai 🤖</title>
        <meta name="description" content="Testez vos compétences dans ce jeu crée par all-image.ai ! Plongez dans un univers où la frontière entre le réel et la fiction s'estompe." />
        <meta property="og:title" content="Ces images sont réelles ou crées par une IA ? 🤖" />
        <meta property="og:site_name" content="All images AI | JEU" />
        <meta property="og:url" content="https://game.all-images.ai" />
        <meta property="og:description" content="Testez vos compétences dans ce jeu crée par all-image.ai et essayez de trouver quelles sont les images générées par des IA et lesquelles sont bien réelles. 🌐" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://game.all-images.ai/share.png" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
