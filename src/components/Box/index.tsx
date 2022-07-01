import Heading from '../Heading'

export type BoxProps = {
  inset?: boolean
  color?: string
  right?: number
  down?: number
  blur?: number
  spread?: number
}

const Box = ({ inset, color, right, down, blur, spread }: BoxProps) => {
  return (
    <>
      <div
        style={{
          boxShadow: `${
            inset ? 'inset' : ''
          } ${right}px ${down}px ${blur}px ${spread}px ${color}`
        }}
        className="mt-12 h-40 w-56 border-2 border-solid border-gray-500 bg-white"
      ></div>
      <div className="mt-14 rounded border-2 border-dashed border-blue-600 p-5">
        <Heading>
          box-shadow:{' '}
          {`${
            inset ? 'inset' : ''
          } ${right}px ${down}px ${blur}px ${spread}px ${color}`}
        </Heading>
      </div>
    </>
  )
}

export default Box
