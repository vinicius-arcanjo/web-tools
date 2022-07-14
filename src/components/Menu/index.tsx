import { useRouter } from 'next/router'
import {
  MenuDevToolsItens,
  MenuGeneratorItens,
  MenuPlaygroundItens
} from './menu'
import { ArrayHighOrder } from './submenu'

import Heading from 'components/Heading'
import NavItem from 'components/NavItem'

type MenuProps = {
  isSubMenu?: boolean
}

const Menu = ({ isSubMenu = false }: MenuProps) => {
  const router = useRouter()

  // verify if the current route contains the path '/playground'
  const isPlayground = router.pathname.includes('/javascript')

  const classMenu =
    'fixed inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto z-20 hidden w-[19.5rem] overflow-y-auto px-8 pb-10 lg:block'
  const classNav = 'relative lg:text-sm lg:leading-6'
  const classList =
    'space-y-6 border-l border-slate-100 dark:border-slate-800 lg:space-y-2'
  const classSubMenu =
    'fixed top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] z-20 hidden w-[19.5rem] overflow-y-auto py-10 px-8 xl:block'

  return (
    <>
      {isSubMenu ? (
        <div className={classSubMenu}>
          <Heading tag="h5" size="sm">
            On this page
          </Heading>
          <ul className="text-sm leading-6 text-slate-700">
            <li>
              <a
                href="#"
                className="block py-1 font-medium font-medium text-sky-500 dark:text-sky-400"
              >
                Array High Order Functions
              </a>
            </li>

            {ArrayHighOrder.map((item) => (
              <NavItem
                key={item.id}
                title={item.title}
                link={item.link}
                isActive={router.pathname == item.link}
                isSubMenu={true}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className={classMenu}>
          <nav id="nav" className={classNav}>
            <ul className="mt-12">
              <li>
                <Heading tag="h5">Dev Tools</Heading>
                <ul className={classList}>
                  {MenuDevToolsItens.map((item) => (
                    <NavItem
                      key={item.id}
                      title={item.title}
                      link={item.link}
                      isActive={router.pathname == item.link}
                    />
                  ))}
                </ul>
              </li>

              <li className="mt-12 lg:mt-8">
                <Heading tag="h5">Generators</Heading>
                <ul className={classList}>
                  {MenuGeneratorItens.map((item) => (
                    <NavItem
                      key={item.id}
                      title={item.title}
                      link={item.link}
                      isActive={router.pathname == item.link}
                    />
                  ))}
                </ul>
              </li>

              <li className="mt-12 lg:mt-8">
                <Heading tag="h5">Playgrounds</Heading>
                <ul className={classList}>
                  {MenuPlaygroundItens.map((item) => (
                    <NavItem
                      key={item.id}
                      title={item.title}
                      link={item.link}
                      isActive={router.pathname.includes(item.link)}
                    />
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Menu
