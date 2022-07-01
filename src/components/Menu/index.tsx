import Heading from 'components/Heading'
import NavItem from 'components/NavItem'

const MenuItens = [
  {
    id: 1,
    title: 'Box Shadow Generator',
    link: '#',
    isActive: true
  },
  {
    id: 2,
    title: 'Coming Soon...',
    link: '#',
    isActive: false
  }
]

const Menu = () => {
  const classMenu =
    'fixed inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto z-20 hidden w-[19.5rem] overflow-y-auto px-8 pb-10 lg:block'
  const classNav = 'relative lg:text-sm lg:leading-6'
  const classList =
    'space-y-6 border-l border-slate-100 dark:border-slate-800 lg:space-y-2'

  return (
    <div className={classMenu}>
      <nav id="nav" className={classNav}>
        <ul className="mt-12">
          <li>
            <Heading tag="h5">Dev Tools</Heading>
            <ul className={classList}>
              {MenuItens.map((item) => (
                <NavItem
                  key={item.id}
                  title={item.title}
                  link={item.link}
                  isActive={item.isActive}
                />
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
