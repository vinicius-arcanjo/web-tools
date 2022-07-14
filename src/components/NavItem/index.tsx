export type NavItemProps = {
  title: string
  link: string
  isActive?: boolean
  isSubMenu?: boolean
}

const NavItem = ({
  title,
  link,
  isActive,
  isSubMenu = false
}: NavItemProps) => {
  const classLink =
    '-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300'
  const classLinkActive =
    'block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400'
  const classActiveOrNot = isActive ? classLinkActive : classLink

  const subClassLink =
    'group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
  const subClassLinkActive =
    'group flex items-start py-1 text-sky-500 dark:text-sky-400'
  const subClassActiveOrNot = isActive ? subClassLinkActive : subClassLink

  return isSubMenu ? (
    <li className="ml-4">
      <a href={link} className={subClassActiveOrNot}>
        <svg
          width="3"
          height="24"
          viewBox="0 -9 3 24"
          className="mr-2 overflow-visible text-slate-400 group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
        >
          <path
            d="M0 0L3 3L0 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </svg>
        {title}
      </a>
    </li>
  ) : (
    <li>
      <a className={classActiveOrNot} href={link}>
        {title}
      </a>
    </li>
  )
}

export default NavItem
