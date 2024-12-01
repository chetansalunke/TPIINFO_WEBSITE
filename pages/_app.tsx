import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavComponent from '../components/NavComponent'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Render the NavComponent globally */}
      <NavComponent />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
