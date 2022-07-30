import React from 'react'
import Heading from 'components/Heading'

export type OutputProps = {
  children: React.ReactNode
  isParagraph?: boolean
}

const Output = ({ children, isParagraph }: OutputProps) => (
  <div className="mt-14 rounded border-2 border-dashed border-blue-600 p-5">
    {isParagraph ? (
      <div className="text-slate-900 dark:text-slate-200">{children}</div>
    ) : (
      <Heading tag="h3">{children}</Heading>
    )}
  </div>
)

export default Output
