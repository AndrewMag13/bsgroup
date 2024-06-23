'use client'
import { NextPage } from 'next'
import { ReactTyped } from 'react-typed'

const TypeWrote: NextPage = () => {
  return (
    <>
      <ReactTyped
        strings={[
          'продающие',
          'интересные',
          'красивые',
          'работающие',
          'качественные',
          'грандиозные',
        ]}
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
