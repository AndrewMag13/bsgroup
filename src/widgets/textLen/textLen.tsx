'use client'

import { Fragment } from 'react'
import { getIntlKeys } from '@/shared/functions/getIntlKeys'
import { motion } from 'framer-motion'
import s from './textLen.module.scss'
import { useTranslations } from 'next-intl'

const TextLen = () => {
  const t = useTranslations('home')
  const keys = getIntlKeys(t, 'textLen')
  return (
    <>
      <section className={s.wrapper}>
        <div className={s.text}>
          <motion.ul
            className={s.list}
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
          >
            {keys.map((key) => {
              return (
                <Fragment key={key}>
                  <li className={s.title}>{t(`textLen.${key}`)}</li>
                  <li className={s.dot}>·</li>
                </Fragment>
              )
            })}
          </motion.ul>
          <ul className={`${s.list} ${s.list2}`}>
            {keys.map((key) => {
              return (
                <Fragment key={key}>
                  <li className={s.title}>{t(`textLen.${key}`)}</li>
                  <li className={s.dot}>·</li>
                </Fragment>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export default TextLen
