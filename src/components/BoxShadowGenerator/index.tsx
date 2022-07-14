import { useState } from 'react'
import Box from 'components/Box'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Input from 'components/Input'
import Toast from 'components/Toast'

const BoxShadowGenerator = () => {
  const [values, setValues] = useState({
    color: '#999999',
    right: 10,
    down: 10,
    blur: 10,
    spread: 10,
    opacity: 100,
    inset: false
  })

  const hexToRgba = (hex: string, opacity: number) => {
    const [r, g, b] = hex.match(/\w{2}/g)!.map((x) => parseInt(x, 16))
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  const rgba = hexToRgba(values.color, values.opacity / 100)

  const handleInput = (field: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const [show, setShow] = useState(false)

  const handleButtonClick = () => {
    setShow(true)

    const text = `box-shadow: ${values.inset ? 'inset' : ''} ${
      values.right
    }px ${values.down}px ${values.blur}px ${values.spread}px ${rgba};`
    navigator.clipboard.writeText(text)

    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  return (
    <>
      {show && <Toast message={'Copied to clipboard!'} show={show} />}
      <Box
        color={rgba}
        right={values.right}
        down={values.down}
        blur={values.blur}
        spread={values.spread}
        inset={values.inset}
      />
      <div className="mt-10 w-3/6">
        <Input
          label="Color"
          name="color"
          type="color"
          isColor={true}
          onInputChange={(v) => handleInput('color', v)}
        />
        <Input
          label="Horizontal"
          name="right"
          type="range"
          min={-100}
          max={100}
          onInputChange={(v) => handleInput('right', v)}
        />
        <Input
          label="Vertical"
          name="down"
          type="range"
          min={-100}
          max={100}
          onInputChange={(v) => handleInput('down', v)}
        />
        <Input
          label="Blur"
          name="blur"
          type="range"
          min={-100}
          max={100}
          onInputChange={(v) => handleInput('blur', v)}
        />
        <Input
          label="Spread"
          name="spread"
          type="range"
          min={-100}
          max={100}
          onInputChange={(v) => handleInput('spread', v)}
        />
        <Input
          label="Opacity"
          name="opacity"
          type="range"
          min={0}
          max={100}
          onInputChange={(v) => handleInput('opacity', v)}
        />
        <Checkbox
          label="Inset"
          name="inset"
          onCheck={(v) => handleInput('inset', v)}
        />
      </div>
      <div className="mr-2 mt-10 mb-2 w-full text-center">
        <Button onButtonClick={handleButtonClick}>Copy to Clipboard</Button>
      </div>
    </>
  )
}

export default BoxShadowGenerator
