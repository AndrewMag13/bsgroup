'use client'

import Link from 'next/link'
import Napisat from '@/shared/ui/napisat/napisat'
import Parallax from '@/shared/ui/parallax/parallax'
import TypeWrote from '@/shared/ui/typeWrote/typeWrote'
import { getIntlKeys } from '@/shared/functions/getIntlKeys'
import { motion } from 'framer-motion'
import s from './mainblock.module.scss'
import { useTranslations } from 'next-intl'

const MainBlockPage = () => {
  const t = useTranslations('home.mainBlock')
  const ht = useTranslations('home.header')
  const headerKeys = getIntlKeys(ht, 'links')
  return (
    <>
      <section className={s.main} id="main">
        <Parallax />
        <motion.ul
          className={s.header__links__list}
          style={{
            zIndex: 10,
          }}
          initial={{
            opacity: 0,
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          {headerKeys.map((headerKey) => {
            return (
              <motion.li
                className={s.header__links__element}
                key={headerKey}
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                style={{
                  zIndex: 10,
                }}
              >
                <Link href={`#${ht(`links.${headerKey}.href`)}`}>
                  {ht(`links.${headerKey}.title`)}
                </Link>
              </motion.li>
            )
          })}
        </motion.ul>
        <motion.div
          className={s.text}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          style={{
            zIndex: 10,
          }}
          viewport={{ once: true }}
        >
          <h1 className={s.title}>
            {t('headerFirst')}
            <span className={s.typeWrote}>
              <TypeWrote />
            </span>
            {t('headerSecond')}
          </h1>
          <h3 className={s.smalltext}>{t('smallText')}</h3>
          <Napisat />
        </motion.div>
      </section>
    </>
  )
}

export default MainBlockPage
