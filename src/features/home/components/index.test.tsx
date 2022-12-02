import { render, screen } from '@testing-library/react'
import { Home } from './index'

describe('Home', () => {
  test('テキスト表示', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: 'Next.js + TanStack Query Tips',
    })

    expect(heading).toBeInTheDocument()
  })
})
