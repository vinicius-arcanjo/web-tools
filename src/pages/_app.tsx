import { NextIntlProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </ThemeProvider>
  )
}

export default MyApp
