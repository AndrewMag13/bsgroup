import React from 'react'
import './napisat.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  /**
   * How large should the button be?
   */
  /**
   * Button contents
   */
  label: string
  style: object
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = true, label, ...props }: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return (
    <button
      type="button"
      className={['storybook-button', mode, inter.className].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
        }
      `}</style>
    </button>
  )
}
