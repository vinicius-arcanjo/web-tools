export type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">{children}</div>
)

export default Container
