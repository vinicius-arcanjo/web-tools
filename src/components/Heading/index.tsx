export type HeadingProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
}

const Heading = ({ tag = 'h1', children }: HeadingProps) => {
  const Tag = tag
  const className = 'font-semibold text-slate-900 dark:text-slate-200'

  return <Tag className={className}>{children}</Tag>
}

export default Heading
