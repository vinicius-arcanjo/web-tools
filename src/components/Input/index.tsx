import { InputHTMLAttributes, useState } from 'react'

export type InputProps = {
  label: string
  onInputChange?: (value: string) => void
  initialValue?: string
  isColor?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({
  label,
  onInputChange,
  initialValue,
  isColor = false,
  name,
  ...props
}: InputProps) => {
  const classInput =
    'range-lg h-3 w-4/6 cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700'

  const isColorInputOrRange = isColor ? '' : classInput

  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <div className="mb-5 flex items-center justify-between">
      <label
        htmlFor={name}
        className="mr-6 block flex-none text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        onChange={onChange}
        {...props}
        className={isColorInputOrRange}
      />
    </div>
  )
}

export default Input
