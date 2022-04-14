import "bootstrap/dist/css/bootstrap.css"; // to use bootstrap.css
import '../styles/app.scss'
import type { AppProps } from 'next/app'

import { useEffect } from "react"; // to use bootstrap.js

function AMirApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined 
    ? require('bootstrap/dist/js/bootstrap') 
    : null
  }, [])

  return <Component {...pageProps} />
}

export default AMirApp