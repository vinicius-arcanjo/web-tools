import { useTranslations } from 'next-intl'

import Container from 'components/Container'
import Header from 'components/Header'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import ShadowGenerator from 'components/ShadowGenerator'

const Home = () => {
  const t = useTranslations('Home.BoxShadow')

  return (
    <>
      <Header />
      <Container>
        <Menu />
        <div className="lg:pl-[19.5rem]">
          <div className="mx-auto flex max-w-3xl flex-col items-center pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
            <Heading tag="h2" size="2xl">
              {t('title')}
            </Heading>
            <ShadowGenerator />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
