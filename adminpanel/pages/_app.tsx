import UIKit from "../components/uikit";

// Global scss
import "../styles/uikit.scss";
//import "../styles/global.scss";


//import '../styles/globals.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <UIKit>
  <Component {...pageProps} />
  </UIKit>
  )
}
export default MyApp
