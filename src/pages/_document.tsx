import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        <meta name="title" content="Dominick Randazzo" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&display=swap" />
          <meta
            name="description"
            content="UCF Computer Science Student/Software Developer"
            />

          <meta name="theme-color" content="111827" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://randazzo.io/" />
          <meta property="og:title" content="Dominick Randazzo" />
          <meta
            property="og:description"
            content="UCF Computer Science Student/Software Developer"
            />
          <meta property="og:image" content="https://randazzo.io/og.png" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
