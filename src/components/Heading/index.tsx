export type HeadingProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  children: React.ReactNode
}

const Heading = ({ tag = 'h1', size, children }: HeadingProps) => {
  const Tag = tag
  const className =
    'font-semibold text-slate-900 dark:text-slate-200' +
    (size ? ` text-${size}` : '')

  return <Tag className={className}>{children}</Tag>
}

export default Heading
