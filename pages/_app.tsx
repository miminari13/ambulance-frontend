import 'bootstrap/dist/css/bootstrap.css' // to use bootstrap.css
import '../assets/scss/app.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react' // to use bootstrap.js
/* do not use the component cause its non-repeating view
import Layout from '../components/Layout'
*/



function MirAmbApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined 
    ? require('bootstrap/dist/js/bootstrap') 
    : null
  }, [])

  /*return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )*/
  return <Component {...pageProps} />
}

export default MirAmbApp