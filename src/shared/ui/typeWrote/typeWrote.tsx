'use client'

import { ReactTyped } from 'react-typed'
import { getIntlKeysTranslated } from '@/shared/functions/getIntlKeys'
import { useTranslations } from 'next-intl'

const TypeWrote = () => {
  const t = useTranslations('home.mainBlock')
  const arr = getIntlKeysTranslated(t, 'titles')
  return (
    <>
      <ReactTyped
        strings={arr}
        typeSpeed={80} // Slower typing speed for better readability
        backDelay={3000} // Shorter delay before starting to delete
        backSpeed={30} // Slower back speed for a smoother effect
        startDelay={500} // Slightly longer start delay for anticipation
        cursorChar="|"
        loop
      />
    </>
  )
}

export default TypeWrote
