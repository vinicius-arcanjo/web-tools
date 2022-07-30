import { InputHTMLAttributes, useState } from 'react'

export type CheckboxProps = {
  label: string
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label,
  name,
  onCheck,
  isChecked = false,
  value,
  ...props
}: CheckboxProps) => {
  const classCheck =
    'h-5 w-5 rounded border-gray-300 bg-gray-100 text-bluee-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'

  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked // true => false => true
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <div className="mr-4 mb-5 flex items-center justify-between">
      <label
        htmlFor={name}
        className="mr-6 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        type="checkbox"
        {...props}
        className={classCheck}
      />
    </div>
  )
}

export default Checkbox
