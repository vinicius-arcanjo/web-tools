export type NavItemProps = {
  title: string
  link: string
  isActive?: boolean
}

const NavItem = ({ title, link, isActive }: NavItemProps) => {
  const classLink =
    '-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300'
  const classLinkActive =
    'block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400'

  const classActiveOrNot = isActive ? classLinkActive : classLink

  return (
    <li>
      <a className={classActiveOrNot} href={link}>
        {title}
      </a>
    </li>
  )
}

export default NavItem
