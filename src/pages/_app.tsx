import { NextIntlProvider } from "next-intl";
import type { AppProps } from 'next/app'

import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  )
}

export default MyApp
