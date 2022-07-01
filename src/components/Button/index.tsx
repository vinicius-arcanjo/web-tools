import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  children: React.ReactNode
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, onButtonClick }: ButtonProps) => {
  const classButton =
    'w-5/12 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800'

  // const copyToClipboard = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault()
  //   const text = e.currentTarget.innerText
  //   navigator.clipboard.writeText(text)
  // }

  return (
    <button onClick={onButtonClick} type="button" className={classButton}>
      {children}
    </button>
  )
}

export default Button
