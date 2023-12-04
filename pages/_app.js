import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Réelle ou IA ? Retrouvez les images générées par all-images.ai 🤖</title>
        <meta name="description" content="Testez vos compétences dans ce jeu crée par all-image.ai ! Plongez dans un univers où la frontière entre le réel et la fiction s'estompe." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
