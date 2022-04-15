import type { NextPage } from 'next'
/* example with useEffect & useRouter
import { useEffect } from 'react'
import { useRouter } from 'next/router'
*/
import Head from 'next/head'



const Error: NextPage = () => {
 /* start timer for changing 404 route to index
  const router = useRouter();

  useEffect( () => {             // always need to clear timeout
    setTimeout( () => {
      router.push('/dashboard')
    }, 3000);
  }, [router]);*/

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
            <p>Let's go back...</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Error