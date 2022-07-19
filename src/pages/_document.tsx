import Document, { Html, Head, Main, NextScript } from 'next/document'
import Analytics from '../components/Analytics'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white text-slate-500 antialiased transition-colors duration-500 dark:bg-slate-900 dark:text-slate-400">
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    )
  }
}
