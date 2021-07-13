import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>USA</title>
      </Head>
      <h1>
        USA Landing page
      </h1>
      <p>We redirect USA customer that don't have no-redirect=true query in the URL to this page.</p>
    </div>
  )
}
