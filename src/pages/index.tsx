import { GetStaticPropsContext } from 'next'
import Home from 'templates/Home'

export default function Index() {
  return <Home />
}

export function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: {
        ...require(`../lang/${locale}.json`)
      }
    }
  }
}
