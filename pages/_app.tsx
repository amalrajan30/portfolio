import '../styles/globals.css'
import "@fortawesome/fontawesome-free/js/all"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
