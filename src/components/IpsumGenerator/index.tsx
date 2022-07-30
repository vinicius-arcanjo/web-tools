import { useState } from 'react'
// import { renderToString } from 'react-dom/server'
import { LoremIpsum } from 'react-lorem-ipsum'

// import Button from '../Button'
// import Toast from '../Toast'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Input from 'components/Input'
import Output from 'components/Output'

export type IpsumGeneratorProps = {
  name: string
}
const IpsumGenerator = ({ name }: IpsumGeneratorProps) => {
  const [values, setValues] = useState({
    p: 1,
    avgWordsPerSentence: 8,
    avgSentencesPerParagraph: 8,
    startWithLoremIpsum: true,
    random: true
  })

  const handleInput = (field: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  // const [show, setShow] = useState(false)
  // const handleButtonClick = () => {
  //   setShow(true)
  //
  //   const element = renderToString(
  //     <LoremIpsum
  //       p={values.p}
  //       avgWordsPerSentence={values.avgWordsPerSentence}
  //       avgSentencesPerParagraph={values.avgSentencesPerParagraph}
  //       startWithLoremIpsum={values.startWithLoremIpsum}
  //       random={values.random}
  //     />
  //   )
  //   const text = element.replace(/<[^>]+>/g, '')
  //   navigator.clipboard.writeText(text)
  //
  //   setTimeout(() => {
  //     setShow(false)
  //   }, 3000)
  // }

  return (
    <>
      {/*{show && <Toast message={'Copied to clipboard!'} show={show} />}*/}
      <div className="mt-10 w-3/4">
        <Heading tag="h2" size="xl">
          Properties
        </Heading>
        <div className="mt-5">
          <Checkbox
            label="Start with “Lorem ipsum odor amet, ...”"
            name="start"
            isChecked={values.startWithLoremIpsum}
            checked={values.startWithLoremIpsum}
            onCheck={(v) => handleInput('startWithLoremIpsum', v)}
          />
          <Checkbox
            label="Random"
            name="random"
            isChecked={values.random}
            checked={values.random}
            onCheck={(v) => handleInput('random', v)}
          />
          <Input
            label={`Paragraph Count (${values.p})`}
            name="paragraph"
            type="range"
            min={1}
            max={50}
            value={values.p}
            onInputChange={(v) => handleInput('p', v)}
          />
          <Input
            label={`Average Words Per Sentence (${values.avgWordsPerSentence})`}
            name="words"
            type="range"
            min={4}
            max={20}
            value={values.avgWordsPerSentence}
            onInputChange={(v) => handleInput('avgWordsPerSentence', v)}
          />
          <Input
            label={`Average Sentences Per Paragraph (${values.avgSentencesPerParagraph})`}
            name="senteces"
            type="range"
            min={4}
            max={20}
            value={values.avgSentencesPerParagraph}
            onInputChange={(v) => handleInput('avgSentencesPerParagraph', v)}
          />
        </div>
        {/*<div className="mr-2 mt-10 mb-2 w-full text-center">*/}
        {/*  <Button onButtonClick={handleButtonClick}>Copy to Clipboard</Button>*/}
        {/*</div>*/}
      </div>
      <div className="w-full">
        <Output isParagraph>
          <LoremIpsum
            p={values.p}
            avgWordsPerSentence={values.avgWordsPerSentence}
            avgSentencesPerParagraph={values.avgSentencesPerParagraph}
            startWithLoremIpsum={values.startWithLoremIpsum}
            random={values.random}
          />
        </Output>
      </div>
    </>
  )
}

export default IpsumGenerator
