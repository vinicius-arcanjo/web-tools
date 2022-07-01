import { render, screen } from '@testing-library/react'
import Heading from './index'

describe('<Heading />', () => {
  it('should render a h1 heading by default', () => {
    render(<Heading>Dev Tools</Heading>)
    expect(
      screen.getByRole('heading', { name: /dev tools/i })
    ).toBeInTheDocument()
  })
})
