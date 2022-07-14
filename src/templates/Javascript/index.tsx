import Playground from 'javascript-playgrounds'

import Container from 'components/Container'
import Header from 'components/Header'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

export type JavascriptProps = {
  title: string
  code: string
}

const Javascript = ({ title, code }: JavascriptProps) => {
  return (
    <>
      <Header />
      <Container>
        <Menu />
        <div className="lg:pl-[19.5rem]">
          <div className="mx-auto flex max-w-3xl flex-col items-center pt-10 xl:ml-0 xl:mr-[15.5rem] xl:max-w-none xl:pr-16">
            <Heading tag="h2" size="2xl">
              {title}
            </Heading>
            <Playground
              className="mt-12"
              style={{ width: 800, height: 600 }}
              code={code}
            />
            <Menu isSubMenu={true} />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Javascript
