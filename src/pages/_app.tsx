import { NextIntlProvider } from 'next-intl'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import SEO from '../../next-seo.config'

import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NextIntlProvider messages={pageProps.messages}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </NextIntlProvider>
    </ThemeProvider>
  )
}

export default MyApp
