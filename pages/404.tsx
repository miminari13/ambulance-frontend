import type { NextPage } from 'next'
import Head from 'next/head'

const Error: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 Error</title>
        <meta name="description" content="Error page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-layout">
        <div className="wrapper">
          <div className="container text-center">
            <h2 className="title pt-5 mb-2">
              Sorry, here we have a 404 page
            </h2>
            <p>Try later!</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Error