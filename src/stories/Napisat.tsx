import React from 'react'
import './napisat.css'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'

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
    <motion.button
      type="button"
      className={['storybook-button', mode, inter.className].join(' ')}
      {...props}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {label}
      <style jsx>{`
        button {
        }
      `}</style>
    </motion.button>
  )
}
