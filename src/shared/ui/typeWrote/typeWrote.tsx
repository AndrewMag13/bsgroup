'use client'

import { ReactTyped } from 'react-typed'
import { useTranslations } from 'next-intl'

const TypeWrote = () => {
  const t = useTranslations('home.mainBlock')
  const keys = [
    'sales-driven',
    'engaging',
    'elegant',
    'functional',
    'high-quality',
    'grandiose',
  ]
  const arr = keys.map((key) => {
    return t(`titles.${key}`)
  })
  return (
    <>
      <ReactTyped
        strings={arr}
        typeSpeed={100}
        backDelay={3000}
        backSpeed={50}
        startDelay={100}
        cursorChar="|"
        loop
      />
    </>
  )
}

export default TypeWrote
